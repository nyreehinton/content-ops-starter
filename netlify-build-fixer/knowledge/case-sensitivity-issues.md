# Netlify App Builds Locally but Fails on Deploy (Case Sensitivity)

## Understanding Case Sensitivity Issues

### The Root Problem
- Most Netlify builds run on Linux, which is case-sensitive
- Many developers work on macOS or Windows, which are case-insensitive by default
- This creates a mismatch where code works locally but fails on deploy
- Import statements, file paths, and URLs that ignore case locally will fail on Netlify

### Common Symptoms
- Builds that succeed locally but fail on Netlify
- "Module not found" or "Cannot find module" errors
- "Failed to resolve import" errors
- "Cannot resolve file" errors
- 404 errors for assets in the deployed site
- Missing components or styles in the deployed site

### Affected Frameworks
- React, Vue, Angular, and other JavaScript frameworks
- Next.js, Gatsby, and other static site generators
- Any framework that relies on import/require statements
- Any site that references files by path

## Detecting Case Sensitivity Issues

### Build Log Indicators
- Look for errors referencing files that should exist
- Check file paths in error messages for case discrepancies
- Common error patterns:
  - `ERROR #98123: Cannot find module './Component'`
  - `Failed to compile: Module not found: Error: Can't resolve './utils/helper'`
  - `Error: ENOENT: no such file or directory, open '/opt/build/repo/src/components/header.js'`

### Identifying Problematic Patterns
- Import statements with incorrect casing
- File references in CSS, HTML, or JavaScript with wrong case
- URL paths in navigation or routing with case mismatches
- Image or asset references with improper casing
- Component names that don't match file names exactly

## Prevention Strategies

### Development Environment Setup

#### Enable Case Sensitivity Locally
- macOS: Create a case-sensitive disk image for development
```bash
# Create a 10GB case-sensitive volume
hdiutil create -size 10g -fs "Case-sensitive HFS+" -volname "CaseSensitive" CaseSensitive.dmg

# Mount the volume
hdiutil attach CaseSensitive.dmg

# Clone your repo there
git clone https://github.com/yourusername/yourrepo.git /Volumes/CaseSensitive/yourrepo
```

- Windows: Not easily configurable, use linting and CI checks instead

#### Use Docker for Development
- Use Docker containers that match the Netlify environment
- Ensures consistent filesystem behavior
- Example docker-compose.yml:
```yaml
version: '3'
services:
  app:
    image: node:16
    volumes:
      - .:/app
    working_dir: /app
    command: npm start
    ports:
      - "3000:3000"
```

### Coding Practices

#### Consistent Naming Conventions
- Establish clear file naming conventions (e.g., PascalCase for components)
- Document conventions in your project README
- Use tools to enforce naming consistency

#### Import Best Practices
- Always use exact case in import statements
- Import from index files where possible to reduce path complexity
- Use path aliases to simplify imports
- For React components, match component name to file name exactly

#### Path Reference Guidelines
- Use exact case in all path references
- Implement path utilities for consistent references
- Consider generating path constants automatically

## Detection and Enforcement Tools

### Linting Configuration

#### ESLint Rules
- Install eslint-plugin-import
- Configure the import/no-unresolved rule
```json
{
  "rules": {
    "import/no-unresolved": "error"
  }
}
```

#### Custom Lint Rules
- Create custom ESLint rules to enforce file naming conventions
- Example configuration:
```json
{
  "rules": {
    "filenames/match-regex": ["error", "^[A-Z][a-zA-Z0-9]*$", true]
  }
}
```

### Automated Testing

#### Case Sensitivity Checks
- Add pre-commit hooks to verify file references
- Create automated tests for file path correctness
- Example script:
```javascript
// check-case-sensitivity.js
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('src/**/*.{js,jsx,ts,tsx}');
let hasErrors = false;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const importRegex = /import .* from ['"](.+)['"]/g;
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    if (!importPath.startsWith('.')) continue;
    
    const resolvedPath = path.resolve(path.dirname(file), importPath);
    const dirName = path.dirname(resolvedPath);
    const baseName = path.basename(resolvedPath);
    
    if (fs.existsSync(dirName)) {
      const actualFiles = fs.readdirSync(dirName);
      const normalizedBaseName = baseName.toLowerCase();
      
      if (!actualFiles.includes(baseName) && 
          actualFiles.some(f => f.toLowerCase() === normalizedBaseName)) {
        console.error(`Case sensitivity error in ${file}: ${importPath}`);
        hasErrors = true;
      }
    }
  }
});

if (hasErrors) process.exit(1);
```

#### CI Pipeline Integration
- Add case sensitivity checks to CI pipeline
- Fail builds on case sensitivity issues
- Example GitHub Actions workflow:
```yaml
name: Check Case Sensitivity
on: [push, pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm ci
      - run: node scripts/check-case-sensitivity.js
```

## Fixing Case Sensitivity Issues

### Identifying Problems

#### Manual Review
- Review build logs for file not found errors
- Check import statements throughout your codebase
- Verify component names match file names
- Examine asset references in your code

#### Automated Detection
- Use grep or find to identify inconsistencies
```bash
# Find files with lowercase names that might be referenced with uppercase
find src -name "*[a-z]*" -type f -not -path "*/node_modules/*" | sort

# Check for import statements with specific patterns
grep -r "import.*from.*[A-Z]" src --include="*.js"
```

### Correction Strategies

#### Rename Files
- Correct filenames to match import statements
- Use git mv to maintain history:
```bash
git mv src/components/header.js src/components/Header.js
```

#### Update References
- Correct import statements to match actual filenames
- Update path references in HTML, CSS, and JavaScript
- Fix URL paths in routing configurations

#### Refactoring Patterns
- Simplify component structure
- Use index files to abstract paths
- Implement path aliases for cleaner imports

## Solutions for Specific Frameworks

### React Applications
- Match component filenames to component names (PascalCase)
- Use consistent import paths
- Implement index.js files in component directories
- Configure path aliases in jsconfig.json or tsconfig.json

### Next.js
- Follow Next.js file-based routing naming conventions
- Be consistent with page and component filenames
- Implement proper Dynamic Imports
- Use next/image with exact paths

### Gatsby
- Use consistent naming in gatsby-node.js
- Handle paths carefully in createPages
- Implement proper case in GraphQL queries
- Use aliases and path resolution plugins

### Vue.js
- Match component filenames to component names
- Use consistent import paths in Vue files
- Configure path aliases in vue.config.js

## When All Else Fails

### Emergency Fixes
- Force case-insensitivity in webpack (note: not recommended long-term)
```javascript
// webpack.config.js
module.exports = {
  resolve: {
    plugins: [
      new (require('path-case-webpack-plugin'))()
    ]
  }
};
```

### Temporary Workarounds
- Create duplicate files with correct case (only as a temporary measure)
- Use symbolic links for compatibility
- Deploy from a case-sensitive environment

### Seeking Support
- Provide Netlify support with build logs
- Identify specific file paths causing issues
- Detail your development environment
- Share relevant configuration files
