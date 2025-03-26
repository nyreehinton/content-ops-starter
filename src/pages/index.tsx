import { GetStaticProps } from 'next';
import { getContent } from '../utils/content';
import { getComponent } from '../utils/components-registry';
import { getBaseLayoutComponent } from '../utils/base-layout';
import React from 'react';

export default function Home(props) {
  const { page, site } = props;
  
  // Handle case where no page was found
  if (!page) {
    return <div>Home page content not found.</div>;
  }
  
  // If the page is a CustomHTMLLayout type, use that layout
  if (page.type === 'CustomHTMLLayout') {
    const LayoutComponent = getComponent('CustomHTMLLayout');
    return <LayoutComponent page={page} site={site} />;
  }
  
  // Otherwise use normal base layout and sections approach
  const BaseLayout = getBaseLayoutComponent(page?.baseLayout, site?.baseLayout);
  const components = page?.sections || [];

  return (
    <BaseLayout page={page} site={site}>
      {components.length > 0 && components.map((component, index) => {
        const Component = getComponent(component.type);
        if (!Component) {
          console.warn(`No component found for type: ${component.type}`);
          return null;
        }
        return <Component key={index} {...component} />;
      })}
    </BaseLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Load site and page content
  const data = await getContent();
  const { site, pages } = data;
  
  // Find the home page (page with slug '/' or 'index' or 'home')
  const homePage = pages.find(page => 
    page.__metadata?.urlPath === '/' || 
    page.slug === 'index' || 
    page.slug === 'home' || 
    page.slug === '/'
  );

  if (!homePage) {
    console.error('No home page found. Check content slugs.');
  }

  // Debug output
  console.log('Home page type:', homePage?.type);
  console.log('Home page slug:', homePage?.slug);
  
  return {
    props: {
      page: homePage || null,
      site: site || {}
    },
    revalidate: 60 // Revalidate the data every 60 seconds
  };
}; 