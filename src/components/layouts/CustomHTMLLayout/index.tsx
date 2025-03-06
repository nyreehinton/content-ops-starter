// CustomHTMLLayout.tsx (example)
import * as React from 'react';
import DefaultBaseLayout from 'src/components/layouts/DefaultBaseLayout';

interface CustomHTMLLayoutProps {
  page: any; // shape depends on your site’s data
  site: any;
}

export default function CustomHTMLLayout({ page, site }: CustomHTMLLayoutProps) {
  // Suppose your raw HTML is stored in `page.markdown_content`
  const htmlContent = page?.markdown_content || 'No HTML content found.';

  return (
    <DefaultBaseLayout page={page} site={site}>
      {/* 
        Everything inside <DefaultBaseLayout> will be sandwiched 
        between the site.header and site.footer automatically.
      */}
      <div className="custom-html-layout">
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </DefaultBaseLayout>
  );
}