import React from 'react';
import { DefaultBaseLayout } from '@/components/layouts';
import Head from 'next/head';

const EggPriceSurge = () => {
  // Create a complete site object with the required properties
  const siteConfig = {
    enableAnnotations: false,
    titleSuffix: "Third Bridge Research",
    defaultMetaTags: [
      { property: "author", content: "Third Bridge Research Team" },
      { property: "og:type", content: "article" }
    ],
    defaultSocialImage: "/images/default-social.png"
  };

  // Create a page object with SEO data
  const pageData = {
    title: "Egg Price Analysis: Projected 15% Surge in Q1 2025",
    seo: {
      metaTitle: "Egg Price Analysis: Projected 15% Surge in Q1 2025",
      metaDescription: "Our analysis projects a 15% increase in egg prices during Q1 2025, driven by California's Proposition 12 and Maine's Question 3 animal welfare laws.",
      metaTags: [
        { property: "keywords", content: "egg prices, market analysis, food inflation, california proposition 12" }
      ]
    },
    __metadata: {
      modelName: "CustomPage",
      id: "egg-price-surge-2025"
    }
  };

  return (
    <>
      <Head>
        <title>Egg Price Analysis - Third Bridge Research</title>
        <meta name="description" content="Our analysis projects a 15% increase in egg prices during Q1 2025, driven by California's Proposition 12 and Maine's Question 3 animal welfare laws." />
      </Head>
      <DefaultBaseLayout site={siteConfig} page={pageData}>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Egg Price Analysis: Projected 15% Surge in Q1 2025</h1>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-lg font-medium mb-2">Executive Summary</p>
              <p className="text-gray-800">
                Our analysis projects a 15% increase in egg prices during Q1 2025, primarily driven by the implementation of California's Proposition 12 and Maine's Question 3 animal welfare laws. These regulations, combined with ongoing inflationary pressures and seasonal demand patterns, will create significant upward price pressure in the US egg market.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Report Status</h2>
            <p className="text-lg mb-4">
              This analysis report is currently being updated with the latest market data and regulatory information.
            </p>
            <p className="text-lg mb-8">
              Please check back soon for the complete analysis, which will include detailed price forecasts, regional market impacts, and strategic recommendations for industry stakeholders.
            </p>
            
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-semibold mb-4">Key Points</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Regulatory changes in California and Maine will reduce supply and increase production costs</li>
                <li>Consumer demand is expected to remain strong despite higher prices</li>
                <li>Regional price variations will be more pronounced than in previous years</li>
                <li>Producers with compliant facilities will see margin improvements despite higher costs</li>
              </ul>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Last updated: March 25, 2025 • Report by: Third Bridge Research Team
              </p>
            </div>
          </div>
        </div>
      </DefaultBaseLayout>
    </>
  );
};

export default EggPriceSurge;
