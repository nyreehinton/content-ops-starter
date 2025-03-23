# Model Context Protocol (MCP) for content-ops-starter Repository

## Overview

The content-ops-starter repository is a Next.js-based website template developed by Netlify, designed for content operations with a flexible content model and visual editing capabilities. This MCP establishes guidelines for working with this codebase to maintain consistency, ensure proper content handling, and streamline development workflows.

## Data Ingestion Protocol

### Content Sources and Formats

- **Accepted Content Types**:
  - HTML (`.html`) as the primary content format for full page documents
  - TypeScript/TSX (`.tsx`) for component implementation corresponding to HTML templates
  - JSON (`.json`) for configuration and data files
  - Markdown (`.md`) for supplementary content when needed
- **Metadata Requirements**:
  - HTML content pages must include:
    - Title in `<title>` tags
    - Proper meta tags for SEO
    - Structured data where appropriate
  - Each HTML page should have a corresponding TSX implementation
- **Validation Rules**:
  - HTML templates must follow accessibility standards
  - TSX components must match HTML structure for consistent rendering
  - Components must maintain separation of concerns (presentation vs. logic)
  - Cross-browser compatibility requirements

### Version Control Integration

- **Model Access to Git History**:
  - Content models should track previous versions of content through git history
  - Changes in frontmatter should preserve existing values unless explicitly changed
- **Processing Content Diffs**:
  - Visual Editor changes should generate clean, minimal diffs
  - Automated processes should minimize whitespace changes
- **Commit Message Standards**:
  - Content changes: `content: [brief description]`
  - Component changes: `component: [component name] - [description]`
  - Configuration changes: `config: [description]`
  - Bug fixes: `fix: [description]`

## Context Management Framework

### Content Relationship Mapping

- **Content Linking Protocol**:
  - Internal links use relative paths: `/blog/post-slug`
  - Reference to other content should use consistent paths
  - Content references must maintain integrity across builds
- **Hierarchical Content Structure**:
  - Content categories follow directory structure in `/content/pages/`
  - Blog posts reside in `/content/pages/blog/`
  - Data files reside in `/content/data/`
- **Cross-referencing Specifications**:
  - Referenced content (like featured posts) must use complete paths
  - Components should validate existence of referenced content
  - Content updates should maintain cross-references

### Temporal Context Handling

- **Time-sensitive Content**:
  - Content with date attributes should be processed according to publication date
  - Draft content should be clearly marked with `draft: true` in frontmatter
- **Content Lifecycle States**:
  - Draft: Initial content creation stage
  - Review: Content ready for editorial review
  - Published: Live content
  - Archived: Previously published, now inactive content
- **Version Awareness**:
  - Model interactions should respect content version history
  - Content edits should maintain version history metadata
  - API responses should include version information

## Processing Guidelines

### Content Transformation Rules

- **Content Normalization**:
  - Markdown content should be normalized to consistent formatting
  - HTML content should be sanitized before storage
  - Image paths should be standardized to `/images/[filename]`
- **Structure Preservation**:
  - Component structure should be preserved during transformations
  - Section ordering should be maintained unless explicitly changed
  - Custom HTML attributes should be preserved
- **Content Integrity**:
  - Metadata validation during build process
  - Automated linting for markdown content
  - Image and asset reference validation

### Model Output Specifications

- **Response Formats**:
  - Content operations should return standardized JSON responses
  - Error messages should include specific error codes and descriptions
  - Content previews should reflect the final rendered output
- **Error Handling**:
  - Content validation errors should provide clear guidance on fixes
  - Component errors should be isolated and not affect entire page
  - Build errors should halt deployment until resolved
- **Quality Thresholds**:
  - Minimum content length requirements for SEO optimization
  - Image optimization requirements (file size, dimensions)
  - Accessibility compliance (alt text, ARIA attributes)

## Integration Interfaces

### API Interaction Standards

- **Authentication Protocol**:
  - API access requires OAuth-based authentication
  - Content operations require specific permission scopes
  - Visual Editor sessions maintain state through secure tokens
- **Resource Management**:
  - Rate limiting applied to content operations (max 100 requests/minute)
  - Asset uploads limited to 10MB per file
  - Build operations limited to once per minute
- **Webhook Specifications**:
  - Build completion triggers notification webhook
  - Content updates can trigger external system notifications
  - Validation errors can trigger notification workflows

> **Note**: For integrating Replit-based applications into this project, refer to the [Replit Integration MCP](<./Model%20Context%20Protocol%20(MCP)%20for%20Replit%20Integration.md>) for specific guidelines on component structure, styling isolation, and build process compatibility.

### Feedback Loop Mechanisms

- **Human Feedback Capture**:
  - Visual Editor provides commenting interface for content feedback
  - Content validation issues logged to feedback system
  - User-generated feedback on published content captured
- **Correction Incorporation**:
  - Editorial corrections tracked through git history
  - Content improvement suggestions linked to original content
  - Auto-correction for common formatting issues
- **Performance Monitoring**:
  - Build time monitoring for optimization
  - Page load performance tracking
  - Content revision history analytics

## Component Framework

### HTML-TSX Pairing Pattern

- For each HTML template, create a corresponding TSX component
- HTML should reflect final rendered structure
- TSX should implement interactivity and dynamic content
- Follow a predictable naming convention:
  ```
  /pages/example.html
  /src/components/example/Example.tsx
  ```

### Component Registry

- All components must be registered in `/src/components/components-registry.ts`
- Components should follow a hierarchical organization:
  - Atoms: Basic UI elements (Button, Input, Card)
  - Blocks: Compound components (Header, Footer, Sidebar)
  - Sections: Page sections (Hero, Features, Testimonials)
  - Pages: Full page components that implement HTML templates

### Styling Guidelines

- Tailwind CSS is used for component styling
- HTML should include Tailwind classes for basic styling
- TSX components should enhance styling for interactive states
- Component styles can use the `styles` prop with standardized structure:
  ```
  styles: {
    self: {
      padding: ['pt-12', 'pl-12', 'pb-12', 'pr-12'],
      borderRadius: 'medium'
    }
  }
  ```

## HTML-TSX Implementation Protocol

### HTML Template Structure

- HTML templates should be semantically structured with appropriate landmarks
- Each template should include necessary meta tags and SEO elements
- Templates should use data attributes to mark dynamic content regions
- Critical CSS should be inlined in the head for performance
- Example structure:
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Page Title</title>
      <meta name="description" content="Page description" />
      <!-- Critical CSS -->
      <style>
        /* Critical styles */
      </style>
    </head>
    <body>
      <header data-component="Header">
        <!-- Header content -->
      </header>
      <main>
        <section data-component="HeroSection">
          <!-- Section content with data attributes -->
        </section>
        <!-- Additional sections -->
      </main>
      <footer data-component="Footer">
        <!-- Footer content -->
      </footer>
    </body>
  </html>
  ```

### TSX Component Implementation

- Each major HTML section should have a corresponding TSX component
- Components should use TypeScript interfaces for props
- Follow a consistent pattern for hydrating HTML elements
- Example component structure:

  ```tsx
  import React from 'react';

  interface HeroSectionProps {
    title: string;
    subtitle: string;
    ctaLink: string;
    ctaText: string;
    backgroundImage: string;
  }

  export const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaLink, ctaText, backgroundImage }) => {
    return (
      <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <a href={ctaLink} className="btn btn-primary">
            {ctaText}
          </a>
        </div>
      </section>
    );
  };
  ```

### Data Flow Between HTML and TSX

- Use data attributes in HTML to store component props
- TSX components should hydrate based on these data attributes
- Server-side rendering should populate initial HTML
- Client-side hydration should enhance without replacing
- Example hydration pattern:

  ```tsx
  import React from 'react';
  import { HeroSection } from '../components/HeroSection';

  export function hydratePage() {
    // Find all sections marked for hydration
    document.querySelectorAll('[data-component="HeroSection"]').forEach((element) => {
      // Extract props from data attributes
      const props = {
        title: element.getAttribute('data-title'),
        subtitle: element.getAttribute('data-subtitle'),
        ctaLink: element.getAttribute('data-cta-link'),
        ctaText: element.getAttribute('data-cta-text'),
        backgroundImage: element.getAttribute('data-background')
      };

      // Hydrate the component
      hydrate(<HeroSection {...props} />, element);
    });
  }
  ```

## Build and Deployment

### HTML-to-TSX Workflow

- HTML templates are served as static files for improved SEO and initial loading
- TSX components provide hydration for interactivity
- Build process transforms HTML templates and TSX components into optimized pages
- Development workflow supports hot reloading of both HTML and TSX

### Next.js Configuration

- Build process configured in `next.config.js`
- Static HTML generation for core pages
- TSX components for dynamic elements and interactivity
- Support for HTML imports within TSX components

### Netlify Integration

- Deploy to Netlify using the provided configuration
- Serve HTML directly when possible for performance
- TSX components handle client-side interactivity
- Automated builds triggered on content changes

### Performance Optimization

- Image optimization through Next.js Image component
- Code splitting for improved page load
- Resource minification in production builds

## Security Protocol

### Content Sanitization

- All user-generated content must be sanitized before storage/rendering
- HTML content must be processed through DOMPurify or equivalent
- Markdown content must be rendered with secure parsers that prevent XSS

### Access Control

- Role-based access control for content operations
- Granular permissions for different content types
- Audit logging for all content modifications

### Sensitive Data Handling

- No credentials or API keys in content files
- Environment variables for configuration secrets
- Regular security scanning of content repositories

## Content Workflow Automation

### CI/CD Integration

- Automated content validation in CI pipeline
- Content linting before merge to main branch
- Preview environments for content changes

### Content Testing Framework

- Automated tests for content rendering
- Visual regression testing for UI components
- A11y testing for accessibility compliance

### Scheduled Operations

- Automated content audits (weekly)
- Stale content identification (monthly)
- SEO performance monitoring (bi-weekly)

## Content Analytics & Insights

### Content Performance Metrics

- Page view tracking by content type
- User engagement metrics for different sections
- Conversion rate analysis for CTA components

### Content Health Monitoring

- Broken link detection
- Missing asset identification
- SEO score tracking over time

### Reporting Mechanisms

- Automated content performance reports
- Content quality dashboards
- Editorial calendar integration

## Content Localization Framework

### Translation Workflow

- Content tagging for translation requirements
- Translation memory integration
- Change detection for incremental translations

### Multilingual Content Structure

- Locale-specific content directories
- Language fallback mechanisms
- RTL support for appropriate languages

### Cultural Adaptation Guidelines

- Region-specific content recommendations
- Date/time/currency formatting standards
- Image and color guidance for different markets

## Emergency Response Protocol

### Content Rollback Procedures

- Immediate content reversion process
- Point-in-time recovery options
- Automated backup schedule (daily)

### Incident Response

- Content-related incident categorization
- Escalation pathways for critical issues
- Resolution documentation requirements

### Business Continuity

- Content availability during system failures
- Alternative publishing pathways
- Disaster recovery procedures for content systems

## Tools & Technology Stack

### Development Environment

- **Code Editor**: VS Code with recommended extensions:
  - ESLint for code quality
  - Prettier for code formatting
  - Tailwind CSS IntelliSense
  - Markdown All in One
  - GitLens for version history
- **Local Development**: Node.js (version specified in `.nvmrc`)
- **Package Management**: npm with defined dependency policies

### Content Creation Tools

- **HTML Editors**:
  - VS Code with HTML/CSS/JS extensions
  - HTML Prettier for consistent formatting
  - HTML validator extensions
- **TSX Development**:
  - TypeScript-enabled editors with React support
  - React Developer Tools for browser debugging
  - Type checking and linting tools
- **Design-to-Code Tools**:
  - Figma-to-HTML/TSX conversion utilities
  - Component documentation generators
  - Design token management systems
- **Content Validation**:
  - HTML validators (W3C)
  - TypeScript type checking
  - Jest and React Testing Library for component testing
  - Accessibility checkers (axe, pa11y)

### CI/CD & Deployment

- **Build System**:
  - GitHub Actions for automation
  - Netlify Build plugins
  - Jest for testing
- **Deployment Platform**:
  - Netlify for hosting and CDN
  - Netlify Edge Functions for dynamic features
  - Automated preview deployments
- **Monitoring**:
  - Netlify Analytics for usage metrics
  - Lighthouse CI for performance tracking
  - Error tracking with Sentry

### Content Operations

- **Version Control**:
  - Git with branching strategy (main, staging, feature branches)
  - GitHub for repository management
  - Pull request templates for content changes
- **Collaboration**:
  - Pull request reviews with required approvals
  - Shared Style Guide documentation
  - Component library documentation
- **Quality Assurance**:
  - Automated tests for components
  - Visual regression testing with Percy
  - Content linting in pre-commit hooks

### Analytics & Optimization

- **Performance**:
  - Lighthouse for performance metrics
  - Web Vitals monitoring
  - Bundle analyzer for code optimization
- **User Behavior**:
  - Google Analytics or Plausible Analytics
  - Heatmap tools (Hotjar, Clarity)
  - A/B testing framework
- **SEO Tools**:
  - SEO audit tools integration
  - Structured data testing
  - XML sitemap generation

### Integration Ecosystem

- **CMS Options**:
  - Netlify CMS (Git-based)
  - Contentful (API-based, optional)
  - Custom headless CMS via API
- **Third-party Services**:
  - Algolia for search functionality
  - Zapier for workflow automation
  - Cloudinary for advanced image management
- **External Data Sources**:
  - REST API consumption guidelines
  - GraphQL integration patterns
  - Data transformation utilities
