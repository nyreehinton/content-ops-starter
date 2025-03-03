import React from 'react';
import { allContent } from '../utils/local-content';
import { getComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { resolveStaticPaths } from '../utils/static-paths-resolvers';

function Page(props) {
  const { page, site } = props;
  const { modelName } = page.__metadata || {};

    if (!modelName) {
    console.error('No modelName in page metadata:', page);
    throw new Error(`Page has no type, page "${props.path || 'unknown'}"`);
  }

  const PageLayout = getComponent(modelName);
  if (!PageLayout) {
    console.error('No layout found for modelName:', modelName);
    throw new Error(`No page layout matching the page model: ${modelName}`);
  }

  return <PageLayout page={page} site={site} />;
}

export function getStaticPaths() {
  const data = allContent();
  console.log('getStaticPaths data:', data);
  const paths = resolveStaticPaths(data.pages || []);
  console.log('getStaticPaths paths:', paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = allContent();
  console.log('getStaticProps data:', data);
  const uriPath = '/' + (params.slug || ['apple-suppliers']).join('/');
  console.log('getStaticProps uriPath:', uriPath);
  const props = await resolveStaticProps(uriPath, data);
  console.log('getStaticProps props:', props);

  if (!props.page || typeof props.page !== 'object') {
    console.error('Invalid page data for uriPath:', uriPath, 'props:', props);
    return { notFound: true };
  }

  return { props };
}

export default Page;