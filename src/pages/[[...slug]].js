import React from 'react';
import { getSiteData } from '../utils/local-content';
import { getComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { resolveStaticPaths } from '../utils/static-paths-resolvers'; // Correct import

function Page(props) {
    const { page, site } = props;

    if (!page || !page.__metadata) {
        console.error("🚨 Error: Missing page or metadata", props);
        return <div>Error loading the page. Please try again later.</div>;
    }

    const { modelName } = page.__metadata;

    if (!modelName) {
        console.error(`🚨 Error: Page has no type`, page);
        return <div>Invalid page type.</div>;
    }

    const PageLayout = getComponent(modelName);

    if (!PageLayout) {
        console.error(`🚨 Error: No layout for model '${modelName}'`);
        return <div>Invalid page layout.</div>;
    }

    return <PageLayout page={page} site={site} />;
}

export function getStaticPaths() {
    const data = getSiteData();
    console.log("🔍 Debug: getSiteData() pages output:", JSON.stringify(data.pages, null, 2));

    if (!data || !data.pages || !Array.isArray(data.pages)) {
        console.error("🚨 Error: getSiteData() returned an invalid value.");
        return { paths: [], fallback: false };
    }

    const pathStrings = resolveStaticPaths(data);
    if (!pathStrings || !Array.isArray(pathStrings)) {
        console.error("🚨 Error: resolveStaticPaths() returned an invalid value:", pathStrings);
        return { paths: [], fallback: false };
    }

    const paths = pathStrings.map(path => ({
        params: { slug: path === '/' ? [] : path.slice(1).split('/').filter(Boolean) }
    }));
    console.log("🔍 Debug: Resolved paths:", JSON.stringify(paths, null, 2));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    console.log("🔍 Fetching static props for:", params);
    const data = getSiteData();
    const urlPath = '/' + (params.slug || []).join('/');

    if (!data || !data.pages.length) {
        console.error("🚨 Error: getSiteData() returned invalid or empty data");
        return { notFound: true };
    }

    try {
        const props = await resolveStaticProps(urlPath, data);
        if (!props || !props.page) {
            console.error(`🚨 Error: No page found for ${urlPath}`, props);
            return { notFound: true };
        }
        return { props };
    } catch (error) {
        console.error(`🚨 Error resolving props for ${urlPath}:`, error);
        return { notFound: true };
    }
}

export default Page;