import { validateHeaderJson } from '../utils/jsonValidator';
import * as fs from 'fs';
import * as path from 'path';

describe('Header JSON Validation', () => {
  const headerPath = path.join(process.cwd(), 'content/data/header.json');
  
  test('header.json should be valid JSON', () => {
    const headerContent = fs.readFileSync(headerPath, 'utf8');
    
    expect(() => {
      JSON.parse(headerContent);
    }).not.toThrow();
  });

  test('header.json should not have trailing commas', () => {
    const headerContent = fs.readFileSync(headerPath, 'utf8');
    
    // Check for trailing commas using regex
    const hasTrailingComma = /,(\s*[}\]])/g.test(headerContent);
    expect(hasTrailingComma).toBe(false);
  });

  test('header.json should not contain comments', () => {
    const headerContent = fs.readFileSync(headerPath, 'utf8');
    
    // Check for comments while excluding URLs
    const hasComments = /(?<!https?:)\/\/[^\n]*|\/\*[\s\S]*?\*\//g.test(headerContent);
    expect(hasComments).toBe(false);
  });
}); 