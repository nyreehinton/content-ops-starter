import { defineStackbitConfig, DocumentStringLikeFieldNonLocalized, SiteMapEntry, DocumentWithSource, SiteMapDocumentEntry, ContentSourceInterface } from '@stackbit/types';
import { EncoderDelegate, loadContent, addMetadata, saveContent } from '@stackbit/cms-git';
import { allModels } from 'sources/local/models';

// Define a simplified content source for local development
const gitContentSource = {
    type: 'git',
    rootPath: __dirname,
    contentDirs: ['content'],
    models: Object.values(allModels),
    assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/'
    }
} as unknown as ContentSourceInterface<any, any, any, any, any>;

export const config = defineStackbitConfig({
    stackbitVersion: '~0.7.0',
    ssgName: 'nextjs',
    nodeVersion: '18',
    styleObjectModelName: 'ThemeStyle',
    contentSources: [gitContentSource],
    presetSource: {
        type: 'files',
        presetDirs: ['sources/local/presets']
    },
    siteMap: ({ documents, models }): SiteMapEntry[] => {
        const pageModels = models.filter((model) => model.type === 'page').map((model) => model.name);
        const entries = documents
            .filter((document) => pageModels.includes(document.modelName))
            .map((document): SiteMapDocumentEntry | null => {
                let slug = (document.fields.slug as DocumentStringLikeFieldNonLocalized)?.value;
                if (!slug) return null;
                /* Remove the leading slash in order to generate correct urlPath
                regardless of whether the slug is '/', 'slug' or '/slug' */
                slug = slug.replace(/^\/+/, '');
                switch (document.modelName) {
                    case 'PostFeedLayout':
                        return {
                            urlPath: '/blog',
                            document: document
                        };
                    case 'PostLayout':
                        return {
                            urlPath: `/blog/${slug}`,
                            document: document
                        };
                    default:
                        return {
                            urlPath: `/${slug}`,
                            document: document
                        };
                }
            });
        return entries.filter((entry): entry is SiteMapDocumentEntry => entry !== null);
    }
});

export default config;