import { allContent } from './local-content';

/**
 * Gets all content data for the site
 * @returns Object with site configuration and pages
 */
export async function getContent() {
  const content = allContent();
  
  return {
    site: content.props.site,
    pages: content.pages
  };
} 