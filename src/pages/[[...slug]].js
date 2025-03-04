import React from 'react';
import { allContent } from '../utils/local-content';
import { getComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { resolveStaticPaths } from '../utils/static-paths-resolvers';

function Page(props) {
    const { page, site } = props;

    if (!page || !page.__metadata) {
        console.error("🚨 Error: Missing page or metadata", props);
        return <div>Error loading the page. Please try again later.</div>;
    }

    const { modelName } = page.__metadata;

    if (!modelName) {
        console.error(`🚨 Error: Page has no type, page '${props.path}'`, page);
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
    const data = allContent();

    console.log("🔍 Debug: allContent() output:", JSON.stringify(data, null, 2));

    if (!data || !Array.isArray(data)) {
        console.error("🚨 Error: allContent() returned an invalid value.");
        return { paths: [], fallback: false };
    }

    const paths = resolveStaticPaths(data);

    if (!paths || !Array.isArray(paths)) {
        console.error("🚨 Error: resolveStaticPaths() returned an invalid value.");
        return { paths: [], fallback: false };
    }

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    console.log("🔍 Debug: Fetching static props for:", params);

    const data = allContent();
    const urlPath = '/' + (params.slug || []).join('/');

    if (!data) {
        console.error("🚨 Error: allContent() returned undefined");
        return { notFound: true };
    }

    const props = await resolveStaticProps(urlPath, data);

    if (!props || !props.page) {
        console.error("🚨 Error: resolveStaticProps returned invalid data", props);
        return { notFound: true };
    }

    return { props };
}

export default Page;
