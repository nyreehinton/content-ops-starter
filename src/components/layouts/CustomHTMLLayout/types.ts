/**
 * Type definitions for the CustomHTMLLayout component
 */

/**
 * Props for the CustomHTMLLayout component
 */
export interface CustomHTMLLayoutProps {
  /**
   * Page data including content and metadata
   */
  page: {
    /**
     * Page title
     */
    title: string;
    /**
     * HTML content derived from markdown
     */
    markdown_content?: string;
    /**
     * Page slug for URL
     */
    slug: string;
    /**
     * Short description of the page
     */
    excerpt?: string;
    /**
     * SEO metadata
     */
    seo?: {
      /**
       * Meta title for SEO (if different from page title)
       */
      metaTitle?: string;
      /**
       * Meta description for SEO
       */
      metaDescription?: string;
      /**
       * Social share image URL
       */
      socialImage?: string;
    };
    /**
     * Any additional page data
     */
    [key: string]: any;
  };
  
  /**
   * Site configuration
   */
  site?: {
    /**
     * Suffix to append to page titles
     */
    titleSuffix?: string;
    /**
     * Any additional site configuration
     */
    [key: string]: any;
  };
} 