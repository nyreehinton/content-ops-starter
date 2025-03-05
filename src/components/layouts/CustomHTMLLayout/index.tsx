import React from 'react';

interface CustomHTMLLayoutProps {
  page: any;    // shape depends on how your content is stored
  site: any;
}

export default function CustomHTMLLayout({ page, site }: CustomHTMLLayoutProps) {
  // Suppose your raw HTML is in `page.markdown_content`
  return (
    <div className="custom-html-layout">
      <h1> </h1>
      <div
        dangerouslySetInnerHTML={{ __html: page.markdown_content || 'No HTML content found.' }}
      />
      <footer>  </footer>
    </div>
  );
}