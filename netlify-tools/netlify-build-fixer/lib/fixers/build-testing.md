# Testing Your Netlify Builds

## Why Test Builds Before Deployment?

### Benefits of Local Build Testing
- Catch errors before they reach production
- Faster feedback loop than waiting for Netlify builds
- Identify environment-specific issues early
- Reduce the number of failed deploys
- Save build minutes in your Netlify quota
- Test build optimizations locally first

### Common Build Issues Caught by Testing
- Missing dependencies
- Environment variable problems
- Incorrect build commands
- Path and filesystem issues
- Memory or performance problems
- Framework-specific configuration errors
- Case sensitivity issues (especially macOS vs. Linux)

## Local Build Testing Methods

### Basic Local Build Testing

#### Using Your Standard Build Command
- Run the same build command locally as specified in Netlify
```bash
# If your netlify.toml has:
# [build]
#   command = "npm run build"

npm run build
```
- Verify the build output in your configured publish directory
- Check for any errors or warnings

#### Environment Variable Testing
- Set required environment variables locally
- Create a `.env.local` file for testing
```bash
# .env.local
API_KEY=test_key
BASE_URL=http://localhost:3000
```
- Source the environment variables before building
```bash
source .env.local && npm run build
```

### Using Netlify CLI

#### Installation and Setup
- Install the Netlify CLI
```bash
npm install -g netlify-cli
```
- Link to your Netlify site
```bash
netlify link
```

#### Running Local Builds
- Execute a local build with Netlify configuration
```bash
netlify build
```
- This uses your netlify.toml configuration
- Simulates the Netlify build environment
- Shows build output similar to Netlify's logs

#### Testing Build Environment Variables
- Use Netlify CLI with environment variables
```bash
netlify build --context production
```
- Test different deploy contexts
```bash
netlify build --context deploy-preview
netlify build --context branch-deploy
```

### Using Docker for Build Testing

#### Creating a Build Environment Container
- Create a Dockerfile that mimics Netlify's environment
```dockerfile
FROM node:16

WORKDIR /app

# Install global dependencies similar to Netlify
RUN npm install -g netlify-cli

# Copy project files
COPY . .

# Install dependencies
RUN npm ci

# Set production environment
ENV NODE_ENV=production

# Command to execute the build
CMD ["netlify", "build"]
```

#### Running the Build Container
```bash
docker build -t netlify-build-test .
docker run --rm netlify-build-test
```

#### Testing with Environment Variables
```bash
docker run --rm -e "API_KEY=test_key" netlify-build-test
```

## Advanced Testing Strategies

### Testing for Environment Differences

#### Case Sensitivity Testing
- Test imports and file references with exact case
- Especially important for macOS/Windows developers deploying to Linux
- Create a script to verify file references
```javascript
// case-check.js
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
    if (importPath.startsWith('.')) {
      const resolvedPath = path.resolve(path.dirname(file), importPath);
      const dir = path.dirname(resolvedPath);
      const base = path.basename(resolvedPath);
      
      if (!fs.existsSync(resolvedPath) && !fs.existsSync(`${resolvedPath}.js`) && !fs.existsSync(`${resolvedPath}.jsx`)) {
        console.error(`Error: Import not found in ${file}: ${importPath}`);
        hasErrors = true;
      }
    }
  }
});

process.exit(hasErrors ? 1 : 0);
```

#### Path Delimiter Testing
- Test with both forward and backward slashes
- Use path.join() and path.resolve() for path handling
- Avoid hardcoded path delimiters

#### File Permission Testing
- Verify executable permissions for scripts
```bash
find ./scripts -type f -name "*.sh" -exec test -x {} \; -or -print
```
- Fix permissions before committing
```bash
chmod +x ./scripts/*.sh
```

### Performance Testing

#### Build Time Monitoring
- Measure build duration locally
```bash
time npm run build
```
- Compare with Netlify build times
- Identify slow build steps
```bash
# Add timing to npm scripts
{
  "scripts": {
    "build": "cross-env TIMING=1 next build"
  }
}
```

#### Memory Profiling
- Monitor memory usage during builds
```bash
node --max-old-space-size=3072 ./node_modules/.bin/next build
```
- Use profiling tools
```bash
node --inspect ./node_modules/.bin/next build
```
- Create a memory usage reporting script
```javascript
// memory-check.js
const { execSync } = require('child_process');

console.log('Memory usage:');
console.log(execSync('ps -p process.pid -o %mem').toString());
```

### End-to-End Build Testing

#### Complete Build Pipeline Testing
- Test the entire build and deploy process
```bash
npm ci && npm run build && npm run test:output
```
- Verify build artifacts
```bash
# Script to check build output
const fs = require('fs');
const path = require('path');

const publishDir = 'dist';
const requiredFiles = [
  'index.html',
  'assets/main.js',
  'assets/main.css'
];

let missing = false;
for (const file of requiredFiles) {
  const filePath = path.join(publishDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`Error: Required build output missing: ${filePath}`);
    missing = true;
  }
}

process.exit(missing ? 1 : 0);
```

#### Post-Build Validation
- Test the built site functionality
```bash
npx serve -s build -l 5000 & 
npx wait-on http://localhost:5000 && 
npx cypress run --config baseUrl=http://localhost:5000
```
- Validate built HTML
```bash
npx html-validate ./dist/**/*.html
```

## Framework-Specific Testing

### React Applications
- Test production builds
```bash
npm run build
npx serve -s build
```
- Verify environment variables are correctly applied
- Check bundle sizes with source-map-explorer
```bash
npx source-map-explorer build/static/js/main.*.js
```

### Next.js
- Test with production configuration
```bash
next build && next export
```
- Verify static generation output
- Test dynamic routes and API endpoints
- Analyze bundle sizes
```bash
ANALYZE=true next build
```

### Gatsby
- Test production builds
```bash
gatsby build
gatsby serve
```
- Verify image processing
- Check for GraphQL errors
- Monitor build performance
```bash
gatsby build --log-pages
```

### Vue/Nuxt Applications
- Build with production settings
```bash
# Vue CLI
vue-cli-service build --modern

# Nuxt.js
nuxt build && nuxt generate
```
- Verify static assets
- Test with Vue devtools disabled

## Continuous Integration (CI) Build Testing

### GitHub Actions Configuration
```yaml
name: Test Netlify Build

on:
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Verify build output
        run: node scripts/verify-build.js
```

### CircleCI Configuration
```yaml
version: 2.1
jobs:
  build:
    docker:
      - image: cimg/node:16.13
    steps:
      - checkout
      - restore_cache:
          keys:
            - dependencies-{{ checksum "package-lock.json" }}
      - run: npm ci
      - save_cache:
          key: dependencies-{{ checksum "package-lock.json" }}
          paths:
            - ./node_modules
      - run: npm run build
      - run: node scripts/verify-build.js
```

### Testing Branch Deploys
- Test branch-specific configurations
- Verify deploy contexts work correctly
```bash
netlify build --context branch-deploy
```
- Test branch-specific environment variables
```
netlify env:set FEATURE_FLAG true --scope branch=feature-branch
```

## Best Practices for Testable Builds

### Build Process Architecture
- Separate build into distinct phases
- Use build flags for conditional features
- Include validation steps
- Implement proper error handling

### Documentation
- Document build requirements
- List environment variables needed
- Specify Node.js version requirements
- Include troubleshooting steps

### Common Testing Patterns
- Implement pre-commit hooks for validation
- Add test scripts for build verification
- Use CI/CD for automated build testing
- Create a build checklist for team members

## Troubleshooting Tools

### Analyzing Build Outputs
- Compare local and Netlify build outputs
```bash
diff -r local-build/ netlify-build/
```
- Verify file sizes and contents
- Check for environment-specific differences

### Logging and Debugging
- Enable verbose logging
```bash
netlify build --debug
```
- Add custom logging to build scripts
```javascript
console.log('DEBUG:', { 
  env: process.env.NODE_ENV,
  config: JSON.stringify(config) 
});
```
- Use diagnostic tools
```bash
netlify status
netlify diagnostic
```

### Testing in Isolation
- Test individual build steps separately
- Isolate problematic build components
- Create minimal reproduction cases
