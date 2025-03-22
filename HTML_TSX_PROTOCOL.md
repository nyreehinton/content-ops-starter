# Model Context Protocol for HTML-TSX Paired Web Development

This protocol standardizes how AI models interact with your content-ops-starter repository, specifically optimizing for your preferred approach of serving full HTML pages with corresponding TSX components.

## File Structure Protocol

**HTML-TSX Pairing Convention**

- Each web page requires both an HTML file and a corresponding TSX component
- Naming convention: `pageName.html` and `pageName.tsx` must share identical base names
- Directory structure should maintain parallel hierarchies for HTML and TSX files

**Component Relationship Mapping**

- HTML files should include data attributes that link to TSX component IDs
- TSX components must reference the same IDs used in HTML markup
- Metadata in HTML head must align with props in TSX components

## Content Generation Rules

**HTML Output Specifications**

- Complete HTML documents with proper DOCTYPE and semantic structure
- Server-rendered content must be fully accessible without JavaScript
- Critical CSS should be inlined within HTML `` tags
- Define placeholder attributes for dynamic content insertion

**TSX Implementation Guidelines**

- Components should be designed for hydration of existing HTML
- Clear separation between server-rendered and client-interactive elements
- Props should mirror data attributes in the HTML counterpart
- TypeScript interfaces must be defined for all component props

## Synchronization Protocol

**Change Management**

- Any update to HTML requires corresponding updates to TSX components
- Content structure changes must be reflected in both file types
- Models should generate paired diffs when suggesting content changes

**Consistency Validation**

- Regular integrity checks between HTML output and TSX rendering
- Automated testing for hydration mismatch prevention
- Performance budgets for both initial HTML and post-hydration states

## Model Interaction Guidelines

**Content Operation Commands**

- `generate-page`: Creates matched HTML-TSX pair from content brief
- `update-content`: Modifies content while maintaining HTML-TSX consistency
- `enhance-interaction`: Adds client-side features while preserving core functionality

**Context Requirements**

- Models must be provided with both HTML and TSX when making changes
- Design system documentation should be referenced for component patterns
- Performance requirements must be specified for optimization decisions

## Implementation Example

For a new "About Us" page:

```html
About Our Company Our Mission We strive to create exceptional digital experiences...
```

```tsx
// about.tsx
import React from 'react';

interface AboutPageProps {
  lastUpdated: string;
}

export default function AboutPage({ lastUpdated }: AboutPageProps) {
  return (


        Our Mission
        We strive to create exceptional digital experiences...

      {/* Additional content sections */}
      Last updated: {lastUpdated}

  );
}
```
