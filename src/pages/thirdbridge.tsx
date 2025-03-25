import React from 'react';
import { DefaultBaseLayout } from '@/components/layouts';
import Head from 'next/head';
// import ThirdBridgePage from '@/components/thirdbridge/ThirdBridgePage';

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
        {/* <ThirdBridgePage /> */}
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Third Bridge Analysis</h1>
          <p className="text-lg mb-4">
            This page is currently under maintenance while we update our data models.
          </p>
          <p className="text-lg mb-4">
            Our team is working to bring you the latest market analysis and insights soon.
          </p>
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Updated egg price analysis for Q1 2025</li>
              <li>Regional price comparison data</li>
              <li>Industry structure evaluation</li>
              <li>Regulatory impact assessment</li>
            </ul>
          </div>
        </div>
      </DefaultBaseLayout>
    </>
  );
};

export default ThirdBridge;