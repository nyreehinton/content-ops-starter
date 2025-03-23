# Model Context Protocol for HTML-TSX Paired Web Development

This protocol standardizes how AI models interact with your content-ops-starter repository, specifically optimizing for your preferred approach of serving full HTML pages with corresponding TSX components.

> **Note**: This protocol works in conjunction with the [content-ops-starter MCP](./mcp-document.md) and [Replit Integration MCP](<./Model Context Protocol (MCP) for Replit Integration.md>). When developing HTML-TSX paired components, refer to all relevant protocols.

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

For an "Egg Price Surge" analysis page:

```md
---
title: The Egg Price Crisis of 2025
slug: egg-price-surge-2025
---

<div class="bg-blue-50 border-l-4 border-blue-500 p-3 mb-6 rounded-lg">
  <h2 class="text-2xl font-bold mb-2">The Egg Industry's Perfect Storm</h2>
  <p class="text-base leading-relaxed">
    The egg industry faces unprecedented challenges in 2025...
  </p>
</div>
```

```tsx
// /src/pages/egg-price-surge-2025/index.tsx
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/ThirdBridge.module.css';
import { mainArticle } from '@/data/analysisData';
import { getSafeArticle } from '@/components/thirdbridge/utils/dataHelpers';

export default function EggPriceSurgePage() {
  const article = getSafeArticle(mainArticle);

  return (
    <>
      <Head>
        <title>{article.title} | ThirdBridge Analysis</title>
        <meta name="description" content={article.description} />
      </Head>
      <div className={styles.eggPriceAnalysisPage}>{/* Content sections */}</div>
    </>
  );
}
```
