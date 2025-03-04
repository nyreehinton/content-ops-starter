import React from 'react';
import { allContent } from '../utils/local-content';
import { getComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { resolveStaticPaths } from '../utils/static-paths-resolvers';

function Page(props) {
    const { page, site } = props;

    // Ensure `page` and `__metadata` exist
    if (!page || !page.__metadata) {
        console.error("Error: page or __metadata is missing", props);
        return <div>Error loading the page. Please try again later.</div>;
    }

    const { modelName } = page.__metadata;

    // Ensure `modelName` exists before using it
    if (!modelName) {
        console.error(`Error: Page has no type, page '${props.path}'`);
        return <div>Invalid page type.</div>;
    }

    const PageLayout = getComponent(modelName);

    if (!PageLayout) {
        console.error(`Error: No layout for model '${modelName}'`);
        return <div>Invalid page layout.</div>;
    }

    return <PageLayout page={page} site={site} />;
}

export async function getStaticProps({ params }) {
    console.log("Fetching static props for:", params);

    const data = allContent();
    const urlPath = '/' + (params.slug || []).join('/');

    // Ensure data is valid
    if (!data) {
        console.error("Error: allContent() returned undefined");
        return { notFound: true };
    }

    const props = await resolveStaticProps(urlPath, data);

    // Ensure props are valid
    if (!props || !props.page) {
        console.error("Error: resolveStaticProps returned invalid data", props);
        return { notFound: true };
    }

    return { props };
}

export async function getStaticProps({ params }) {
    const data = allContent();
    const urlPath = '/' + (params.slug || []).join('/');
    const props = await resolveStaticProps(urlPath, data);
    return { props };
}

export default Page;
