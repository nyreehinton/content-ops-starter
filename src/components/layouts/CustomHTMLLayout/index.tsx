// CustomHTMLLayout.tsx
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import DefaultBaseLayout from 'src/components/layouts/DefaultBaseLayout';
import dynamic from 'next/dynamic';
import { CustomHTMLLayoutProps } from './types';
import styles from './CustomHTMLLayout.module.css';

// Dynamic imports for Bloomberg components
const BloombergClientScript = dynamic(() => import('src/components/BloombergClientScript'), { ssr: false });
const ClientBloombergCharts = dynamic(() => import('src/components/BloombergCharts'), { ssr: false });

// Flag to check if we're running in a browser environment
const isBrowser = typeof window !== 'undefined';

/**
 * CustomHTMLLayout - Component for rendering HTML content from markdown
 * 
 * This component takes HTML content from page.markdown_content and injects it 
 * into the DOM. It includes robust error handling, loading states, and fallbacks.
 */
const CustomHTMLLayout: React.FC<CustomHTMLLayoutProps> = ({ page, site }) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isBloomberg = page?.slug?.includes('bloomberg') || false;
  const isHomePage = page?.slug === '/' || !page?.slug;
  
  // Extract content safely with fallbacks
  const htmlContent = page?.markdown_content || '';
  
  // Debug log function
  const logDebug = (message: string, data?: any) => {
    console.log(`[CustomHTMLLayout] ${message}`, data || '');
  };

  // Set client-side flag when component mounts
  useEffect(() => {
    setIsClient(true);
    setIsLoading(true);
    logDebug('Component mounted');
  }, []);

  useEffect(() => {
    // Safety check for SSR
    if (!isBrowser) return;
    
    logDebug(`Loading content for page: ${page?.slug}, has content: ${!!htmlContent}`);
    
    if (htmlContent && contentRef.current) {
      try {
        // Force render the HTML content
        contentRef.current.innerHTML = htmlContent;
        setContentLoaded(true);
        setIsLoading(false);
        setError(null);
        logDebug('Content injected successfully');
        
        // Initialize mobile menu if it exists
        if (isBrowser) {
          setTimeout(() => {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (mobileMenuButton && mobileMenu) {
              mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                logDebug('Mobile menu toggled');
              });
              
              // Close mobile menu when clicking on links
              const mobileLinks = mobileMenu.querySelectorAll('a');
              mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                  mobileMenu.classList.add('hidden');
                });
              });
            }
            
            // Handle smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                  window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              });
            });
          }, 300);
        }
      } catch (err) {
        console.error('Error injecting content:', err);
        setError('Error rendering content. Please try refreshing the page.');
        setIsLoading(false);
      }
    } else if (contentRef.current) {
      // Handle empty content case
      if (isHomePage) {
        // Show fallback for homepage
        contentRef.current.innerHTML = `
          <div class="min-h-screen flex flex-col items-center justify-center p-4 text-center">
            <h1 class="text-3xl font-bold mb-4">Welcome to Nyree Hinton's Portfolio</h1>
            <p class="text-xl mb-6">Financial Analyst & Product Manager</p>
            <p class="max-w-2xl mb-8">
              Experienced in data analysis, financial modeling, and product development.
              Specializing in transforming complex data into actionable insights.
            </p>
            <a 
              href="https://www.linkedin.com/in/nyree-hinton" 
              class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        `;
        setContentLoaded(true);
        setIsLoading(false);
        setError(null);
        logDebug('Fallback content injected for homepage');
      } else {
        setError('Content not found. Please check back later.');
        setIsLoading(false);
      }
    }
  }, [htmlContent, page?.slug, isHomePage]);

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Page Not Found</h1>
          <p className="mb-6">The requested page could not be found or loaded properly.</p>
          <button 
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }
  
  // Prepare SEO metadata
  const metaTitle = page.seo?.metaTitle || page.title;
  const metaDescription = page.seo?.metaDescription || page.excerpt || '';
  const siteTitle = site?.titleSuffix ? `${metaTitle} ${site.titleSuffix}` : metaTitle;
  
  return (
    <DefaultBaseLayout page={page} site={site}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={metaDescription} />
        {page.seo?.socialImage && (
          <meta property="og:image" content={page.seo.socialImage} />
        )}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {isLoading && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      {error && (
        <div className="text-center p-8 max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Content Not Found</h2>
          <p className="mb-4">{error}</p>
          <a href="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Return Home
          </a>
        </div>
      )}
      
      <div 
        ref={contentRef} 
        className={`${isLoading ? 'hidden' : 'block'} custom-html-content`}
      />

      {isBloomberg && isClient && (
        <>
          <BloombergClientScript />
          <ClientBloombergCharts />
          <div id="bloomberg-charts"></div>
        </>
      )}
    </DefaultBaseLayout>
  );
};

export default CustomHTMLLayout;