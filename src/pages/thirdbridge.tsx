import React from 'react';
import { DefaultBaseLayout } from '@/components/layouts';
import Head from 'next/head';
import ThirdBridgePage from '@/components/thirdbridge/ThirdBridgePage';

const ThirdBridge = () => {
  // Create a complete site object with the required properties
  const siteConfig = {
    enableAnnotations: false,
    titleSuffix: "Third Bridge Research",
    defaultMetaTags: [
      { property: "author", content: "Third Bridge Research Team" },
      { property: "og:type", content: "website" }
    ],
    defaultSocialImage: "/images/default-social.png"
  };

  // Create a page object with SEO data
  const pageData = {
    title: "Third Bridge Analysis",
    seo: {
      metaTitle: "Third Bridge Market Analysis",
      metaDescription: "Expert market analysis and industry insights from the Third Bridge Research team.",
      metaTags: [
        { property: "keywords", content: "market analysis, industry insights, third bridge" }
      ]
    },
    __metadata: {
      modelName: "CustomPage",
      id: "thirdbridge"
    }
  };

  return (
    <>
      <Head>
        <title>Third Bridge Analysis</title>
        <meta name="description" content="Expert market analysis and industry insights from the Third Bridge Research team." />
      </Head>
      <DefaultBaseLayout site={siteConfig} page={pageData}>
        <ThirdBridgePage />
      </DefaultBaseLayout>
    </>
  );
};

export default ThirdBridge;