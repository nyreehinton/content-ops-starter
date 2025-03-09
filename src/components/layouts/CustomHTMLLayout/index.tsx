// CustomHTMLLayout.tsx
import * as React from 'react';
import Script from 'next/script';
import DefaultBaseLayout from 'src/components/layouts/DefaultBaseLayout';
import { useEffect, useState } from 'react';

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

  return (
    <DefaultBaseLayout page={page} site={site}>
      {/* Load external libraries using Next/Script */}
      <Script
        src="https://cdn.jsdelivr.net/npm/chart.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://d3js.org/d3.v7.min.js"
        strategy="afterInteractive"
      />
      <div className="custom-html-layout">
        {isClient ? (
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        ) : (
          <div>Loading content...</div>
        )}
      </div>
    </DefaultBaseLayout>
  );
}