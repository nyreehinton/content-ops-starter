import * as fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import frontmatter from 'front-matter';
import { allModels } from '../../sources/local/models';
import { Config } from '../../sources/local/models/Config';
import { getPageUrl } from './page-utils';

const pagesDir = 'content/pages';
const dataDir = 'content/data';

const allReferenceFields = {};
Object.entries(allModels).forEach(([modelName, model]) => {
    model.fields.forEach((field) => {
        if (field.type === 'reference' || (field.type === 'list' && field.items?.type === 'reference')) {
            allReferenceFields[modelName + ':' + field.name] = true;
        }
    });
});

function isRefField(modelName, fieldName) {
    return !!allReferenceFields[modelName + ':' + fieldName];
}

const supportedFileTypes = ['md', 'json'];
function contentFilesInPath(dir) {
    const globPattern = `${dir}/**/*.{${supportedFileTypes.join(',')}}`;
    return globSync(globPattern);
}

function readContent(file) {
    const rawContent = fs.readFileSync(file, 'utf8');
    let content = null;

    switch (path.extname(file).substring(1)) {
        case 'md':
            const parsedMd = frontmatter(rawContent);
            const attributes = parsedMd.attributes && typeof parsedMd.attributes === 'object' ? parsedMd.attributes : {};
            content = {
                ...attributes,
                markdown_content: parsedMd.body
            };
            break;
        case 'json':
            content = JSON.parse(rawContent);
            break;
        default:
            throw new Error(`Unhandled file type: ${file}`);
    }

    // ✅ Ensure metadata always exists
    if (!content.__metadata) {
        content.__metadata = {};
    }

    // ✅ Ensure modelName always exists, fallback to "default-model"
    content.__metadata.modelName = content.__metadata.modelName || content.type || 'default-model';

    // ✅ Ensure slug and urlPath are set correctly
    content.__metadata.slug = content.slug || path.basename(file, path.extname(file));
    content.__metadata.urlPath = getPageUrl(content);

    // ✅ Ensure metadata ID is assigned
    content.__metadata.id = file;

    // ✅ Debug Log - This will show all content objects before returning
    console.log(`🛠 Processed file: ${file}`, JSON.stringify(content, null, 2));

    return content;
}

function resolveReferences(content, fileToContent) {
    if (!content || !content.type) return;

    if (!content.__metadata) content.__metadata = { modelName: content.type };

    for (const fieldName in content) {
        let fieldValue = content[fieldName];
        if (!fieldValue) continue;

        const isRef = isRefField(content.type, fieldName);
        if (Array.isArray(fieldValue)) {
            if (fieldValue.length === 0) continue;
            if (isRef && typeof fieldValue[0] === 'string') {
                fieldValue = fieldValue.map((filename) => fileToContent[filename] || null).filter(Boolean);
                content[fieldName] = fieldValue;
            }
            if (typeof fieldValue[0] === 'object') {
                fieldValue.forEach((o) => resolveReferences(o, fileToContent));
            }
        } else {
            if (isRef && typeof fieldValue === 'string') {
                fieldValue = fileToContent[fieldValue] || null;
                content[fieldName] = fieldValue;
            }
            if (typeof fieldValue === 'object') {
                resolveReferences(fieldValue, fileToContent);
            }
        }
    }
}

export function allContent() {
    const [data, pages] = [dataDir, pagesDir].map((dir) => {
        return contentFilesInPath(dir).map((file) => readContent(file));
    });

    console.log('🔍 Raw pages before processing:', JSON.stringify(pages, null, 2));

    const objects = [...pages, ...data];

    // ✅ Validate processed content
    const fileToContent = Object.fromEntries(
        objects
            .filter(e => e?.__metadata?.id && e?.__metadata?.modelName)
            .map((e) => [e.__metadata.id, e])
    );

    // ✅ Log invalid entries for debugging
    objects.forEach((e) => {
        if (!e.__metadata?.id || !e.__metadata?.modelName) {
            console.warn("⚠️ Skipping invalid content entry", e);
        }
    });

    objects.forEach((e) => resolveReferences(e, fileToContent));

    // ✅ Ensure all pages have a valid `urlPath`
    pages.forEach((page) => {
        if (!page.__metadata.urlPath) {
            page.__metadata.urlPath = getPageUrl(page) || `/${page.slug || 'default'}`;
        }
    });

    const siteConfig = data.find((e) => e.__metadata.modelName === Config.name);
    console.log('✅ Final data structure:', { objects, pages, props: { site: siteConfig } });

    return { objects, pages, props: { site: siteConfig } };
}
