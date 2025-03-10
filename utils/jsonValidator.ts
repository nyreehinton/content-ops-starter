export function validateHeaderJson(content: string): boolean {
  try {
    // Try to parse the JSON
    JSON.parse(content);
    
    // Check for trailing commas
    if (/,(\s*[}\]])/g.test(content)) {
      return false;
    }
    
    // Check for comments while excluding URLs
    if (/(?<!https?:)\/\/[^\n]*|\/\*[\s\S]*?\*\//g.test(content)) {
      return false;
    }
    
    return true;
  } catch (e) {
    return false;
  }
} 