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
            content = {
                ...parsedMd.attributes,
                markdown_content: parsedMd.body
            };
            break;
        case 'json':
            content = JSON.parse(rawContent);
            break;
        default:
            throw new Error(`Unhandled file type: ${file}`);
    }

    content.__metadata = {
        id: file,
        modelName: content.type || 'PostLayout', // Default to PostLayout if type is missing
        urlPath: getPageUrl({ slug: content.slug || path.basename(file, path.extname(file)) })
    };
    console.log(`Read content from ${file}:`, content); // Add logging
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
                fieldValue = fieldValue.map((filename) => fileToContent[filename]);
                content[fieldName] = fieldValue;
            }
            if (typeof fieldValue[0] === 'object') {
                fieldValue.forEach((o) => resolveReferences(o, fileToContent));
            }
        } else {
            if (isRef && typeof fieldValue === 'string') {
                fieldValue = fileToContent[fieldValue];
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
    console.log('Raw pages:', pages); // Add logging
    const objects = [...pages, ...data];
    const fileToContent = Object.fromEntries(objects.map((e) => [e.__metadata.id, e]));

    objects.forEach((e) => resolveReferences(e, fileToContent));

    pages.forEach((page) => {
        page.__metadata.urlPath = getPageUrl(page) || `/${page.slug || 'default'}`;
    });

    const siteConfig = data.find((e) => e.__metadata.modelName === Config.name);
    console.log('Final data structure:', { objects, pages, props: { site: siteConfig } }); // Add logging
    return { objects, pages, props: { site: siteConfig } };
}