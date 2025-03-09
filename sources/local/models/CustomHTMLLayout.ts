import { Model } from '@stackbit/types';

export const CustomHTMLLayout: Model = {
    name: 'CustomHTMLLayout',
    type: 'page',
    label: 'Custom HTML Layout',
    urlPath: '/{slug}',
    filePath: 'content/pages/{slug}.md',
    fieldGroups: [
        {
            name: 'seo',
            label: 'SEO',
            icon: 'page'
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true
        },
        {
            type: 'string',
            name: 'slug',
            label: 'Slug',
            description: 'The URL path of this page relative to site root. For example, the site root page would be "/", and post page would be "posts/new-post/"',
            required: true
        },
        {
            type: 'date',
            name: 'date',
            label: 'Date',
            required: false
        },
        {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
            description: 'The excerpt of the page displayed in meta data',
            required: false
        },
        {
            type: 'boolean',
            name: 'isFeatured',
            label: 'Is Featured',
            required: false
        },
        {
            type: 'reference',
            name: 'author',
            label: 'Author',
            models: ['Person'],
            required: false
        },
        {
            type: 'list',
            name: 'allowed_elements',
            label: 'Allowed HTML Elements',
            items: {
                type: 'string'
            },
            required: false
        },
        {
            type: 'markdown',
            name: 'markdown_content',
            label: 'Content',
            description: 'Page content in markdown format',
            required: false
        },
        {
            type: 'model',
            name: 'seo',
            label: 'SEO',
            models: ['Seo'],
            group: 'seo'
        }
    ]
}; 