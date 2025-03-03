import React from 'react';
import { allContent } from '../utils/local-content'; // Adjusted path
import { getComponent } from '../components/components-registry'; // Adjusted path
import { resolveStaticProps } from '../utils/static-props-resolvers'; // Adjusted path
import { resolveStaticPaths } from '../utils/static-paths-resolvers'; // Adjusted path

function Page(props) {
  const { page, site } = props;
  const { modelName } = page._metadata || {};

  if (!modelName) {
    throw new Error(`Page has no type, page "${props.path || 'unknown'}"`);
  }

  const PageLayout = getComponent(modelName);
  if (!PageLayout) {
    throw new Error(`No page layout matching the page model: ${modelName}`);
  }

  return <PageLayout page={page} site={site} />;
}

export function getStaticPaths() {
  const data = allContent();
  console.log('getStaticPaths data:', data); // Add logging
  const paths = resolveStaticPaths(data || []);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = allContent();
  console.log('getStaticProps data:', data); // Add logging
  const uriPath = '/' + (params.slug || ['apple-suppliers']).join('/'); // Default to 'apple-suppliers'
  const props = await resolveStaticProps(uriPath, data || []);
  console.log('getStaticProps props:', props); // Add logging
  return { props };
}

export default Page;