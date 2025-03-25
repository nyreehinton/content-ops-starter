import React from 'react';
import { allContent } from '../utils/local-content';
import { getComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { resolveStaticPaths } from '../utils/static-paths-resolvers';

function Page(props) {
    // If no page data was found, return null (this will trigger a 404)
    if (!props.page) return null;

    const { page, site } = props;
    const { modelName } = page.__metadata;
    if (!modelName) {
        throw new Error(`page has no type, page '${props.path}'`);
    }
    const PageLayout = getComponent(modelName);
    if (!PageLayout) {
        throw new Error(`no page layout matching the page model: ${modelName}`);
    }
    return <PageLayout page = { page }
    site = { site }
    />;
}

export function getStaticPaths() {
    const data = allContent();
    const paths = resolveStaticPaths(data);
    // Filter out paths that match actual pages in src/pages
    const filteredPaths = paths.filter(path => {
        const slug = path.params.slug || [];
        // Add paths you want to exclude here
        const excludePaths = ['capital', 'bloomberg', 'tesla', 'thirdbridge'];
        return !excludePaths.includes(slug[0]);
    });
    return { paths: filteredPaths, fallback: false };
}

export async function getStaticProps({ params }) {
    const slug = params ? .slug || [];
    // Add paths you want to exclude here
    const excludePaths = ['capital', 'bloomberg', 'tesla', 'thirdbridge'];

    // If the path matches an actual page, return null props
    if (excludePaths.includes(slug[0])) {
        return { props: {} };
    }

    const data = allContent();
    const urlPath = '/' + (params.slug || []).join('/');
    const props = await resolveStaticProps(urlPath, data);
    return { props };
}

export default Page;