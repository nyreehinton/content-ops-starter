import type { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { allContent } from 'src/utils/local-content';
import { DefaultBaseLayout } from 'src/components/layouts';
import { getComponent } from 'src/components/components-registry';
import CustomHTMLLayout from 'src/components/layouts/CustomHTMLLayout';
import fs from 'fs';
import path from 'path';

// Define proper types for content objects
interface PageContent {
  title: string;
  slug: string;
  type: string;
  markdown_content?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    socialImage?: string;
  };
  __metadata?: {
    modelName: string;
    urlPath: string;
    slug: string;
  };
}

interface ContentData {
  props: {
    page?: PageContent;
    site?: any;
  };
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
  try {
    const data = allContent() as ContentData;
    
    // Try to get homepage content from content collection
    let homePage = data?.props?.page;
    let useHardcodedFallback = false;
    
    // Verify page data is valid and has content
    if (!homePage || !homePage.markdown_content || homePage.markdown_content.trim() === '') {
      console.log('Homepage data missing or invalid, using hardcoded fallback...');
      useHardcodedFallback = true;
    }

    // If no valid content found, use hardcoded fallback
    if (useHardcodedFallback) {
      homePage = {
        title: 'Home | Nyree Hinton | Financial Analyst & Product Manager',
        slug: '/',
        type: 'CustomHTMLLayout',
        markdown_content: `
          <div class="max-w-4xl mx-auto px-4 py-16">
            <h1 class="text-4xl font-bold mb-6">Nyree Hinton</h1>
            <h2 class="text-2xl font-medium mb-8">Financial Analyst & Product Manager</h2>
            
            <p class="text-lg mb-6">
              Welcome to my portfolio site. I have expertise in ETF data product management, 
              financial analysis, and market research across multiple companies.
            </p>
            
            <div class="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 class="text-xl font-semibold mb-4">Professional Highlights:</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Managed analytics infrastructure for ETF operations</li>
                <li>Led data governance initiatives across multiple platforms</li>
                <li>Integrated data from third-party vendors</li>
                <li>Implemented automated reporting solutions</li>
                <li>Conducted in-depth market research and analysis</li>
              </ul>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <a href="/capital" class="block p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                <h3 class="text-xl font-semibold mb-2">Capital Group</h3>
                <p>ETF Analytics and Data Management</p>
              </a>
              <a href="/thirdbridge" class="block p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                <h3 class="text-xl font-semibold mb-2">Third Bridge</h3>
                <p>Research and Market Analysis</p>
              </a>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <a href="/bloomberg" class="block p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                <h3 class="text-xl font-semibold mb-2">Bloomberg</h3>
                <p>Financial Data Visualization</p>
              </a>
              <a href="/tesla" class="block p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                <h3 class="text-xl font-semibold mb-2">Tesla Analysis</h3>
                <p>Energy Efficiency Research</p>
              </a>
            </div>
            
            <div class="mt-12 text-center">
              <a href="https://www.linkedin.com/in/nyree-hinton" class="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                Contact me on LinkedIn
              </a>
            </div>
          </div>
        `,
        seo: {
          metaTitle: 'Nyree Hinton | Financial Analyst & Product Manager Portfolio',
          metaDescription: 'Portfolio showcasing ETF data product management experience at Capital Group, featuring ETF fundamentals, strategy, and data management achievements.',
          socialImage: '/images/Capital_Group_Companies.jpg'
        },
        __metadata: {
          modelName: 'CustomHTMLLayout',
          urlPath: '/',
          slug: '/'
        }
      };
    }
    
    // Ensure site data is present
    const site = data?.props?.site || {
      title: 'Nyree Hinton Portfolio',
    };
    
    // Create final props object
    const props = {
      page: homePage,
      site
    };
    
    console.log('Homepage getStaticProps completed successfully');
    
    return {
      props,
      revalidate: 60 // Revalidate content every 60 seconds for ISR
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    
    // Return a minimal fallback page in case of error
    return {
      props: {
        page: {
          title: 'Home | Nyree Hinton',
          slug: '/',
          type: 'CustomHTMLLayout',
          markdown_content: `
            <div class="max-w-4xl mx-auto px-4 py-16">
              <h1 class="text-4xl font-bold mb-6">Nyree Hinton</h1>
              <h2 class="text-2xl font-medium mb-8">Financial Analyst & Product Manager</h2>
              <p class="text-lg mb-6">Welcome to my portfolio site. Please check back soon for complete content.</p>
              <div class="mt-8">
                <a href="https://www.linkedin.com/in/nyree-hinton" class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          `,
        },
        site: {
          title: 'Nyree Hinton Portfolio',
        }
      },
      revalidate: 30
    };
  }
}

export default function IndexPage(props: any) {
  const { page, site } = props;
  
  // Always use CustomHTMLLayout for the homepage
  return <CustomHTMLLayout page={page} site={site} />;
} 