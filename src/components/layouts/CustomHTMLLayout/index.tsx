// CustomHTMLLayout.tsx
import * as React from 'react';
import Script from 'next/script';
import DefaultBaseLayout from 'src/components/layouts/DefaultBaseLayout';
import { useEffect, useState } from 'react';
import ChartSection from 'src/components/sections/ChartSection';
import dynamic from 'next/dynamic';

// Import custom components with dynamic loading
const BloombergClientScript = dynamic(() => import('src/components/BloombergClientScript'), { ssr: false });
const ClientBloombergCharts = dynamic(() => import('src/components/BloombergCharts'), { ssr: false });

interface CustomHTMLLayoutProps {
  page: any; // shape depends on your site's data
  site: any;
}

export default function CustomHTMLLayout({ page, site }: CustomHTMLLayoutProps) {
  // Suppose your raw HTML is stored in `page.markdown_content`
  const htmlContent = page?.markdown_content || 'No HTML content found.';
  
  // Use client-side only rendering for the HTML content
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Extract sections from the page data
  const sections = page?.sections || [];

  // Check if this is the Bloomberg page
  const isBloombergPage = page?.slug === 'bloomberg';

  return (
    <DefaultBaseLayout page={page} site={site}>
      {/* Load D3.js for any potential custom visualizations */}
      <Script
        src="https://d3js.org/d3.v7.min.js"
        strategy="afterInteractive"
      />
      
      {/* Load Chart.js only on the client side */}
      {isClient && isBloombergPage && (
        <Script
          src="https://cdn.jsdelivr.net/npm/chart.js@4.4.8/dist/chart.umd.min.js"
          strategy="afterInteractive"
        />
      )}
      
      <div className="custom-html-layout max-w-screen-xl mx-auto px-4">
        {isClient ? (
          <>
            <div className="prose prose-lg max-w-none my-8" dangerouslySetInnerHTML={{ __html: htmlContent }} />
            
            {/* Add Bloomberg-specific components if this is the Bloomberg page */}
            {isBloombergPage && (
              <>
                <ClientBloombergCharts />
                <BloombergClientScript />
              </>
            )}
            
            {/* Render chart sections if they exist */}
            {sections.map((section, index) => {
              // Check if this is a ChartSection
              if (section.type === 'ChartSection') {
                return (
                  <div key={`section-${index}`} className="my-12">
                    <ChartSection
                      title={section.title}
                      subtitle={section.subtitle}
                      charts={section.charts}
                      className="bg-white p-6 rounded-lg shadow-md"
                    />
                  </div>
                );
              }
              return null;
            })}
          </>
        ) : (
          <div>Loading content...</div>
        )}
      </div>
    </DefaultBaseLayout>
  );
}