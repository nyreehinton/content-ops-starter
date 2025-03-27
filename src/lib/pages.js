import { getPages, getSite } from 'src/lib/contentapi';

// Update getStaticProps to properly handle the homepage and other pages
export async function getStaticProps(context) {
    const slug = context.params ? .slug || '/';

    try {
        // Load the page - use a direct import for the homepage
        let page;

        if (slug === '/') {
            // Special handling for homepage
            try {
                page = await
                import ('content/pages/index.md');
                page = page.default;
                console.log('Loaded homepage content:', !!page ? .markdown_content);
            } catch (err) {
                console.error('Error loading homepage content:', err);
                // Fallback to null, will show the fallback in the component
                page = null;
            }
        } else {
            // Handle other pages with slug
            try {
                // Find page by slug in our content directory
                const allPages = getPages();
                page = allPages.find(p => p.slug === slug) || null;

                if (!page) {
                    console.warn(`Page not found for slug: ${slug}`);
                }
            } catch (err) {
                console.error(`Error loading page with slug: ${slug}`, err);
                page = null;
            }
        }

        // Load site config
        const site = getSite();

        // If we couldn't find the page, return 404
        if (!page) {
            return {
                notFound: true
            };
        }

        return {
            props: {
                page,
                site
            },
            // Revalidate every 60 seconds
            revalidate: 60
        };
    } catch (error) {
        console.error('Error in getStaticProps:', error);
        return {
            notFound: true
        };
    }
}