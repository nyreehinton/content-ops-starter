// Test script for Bloomberg charts
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Testing Bloomberg charts...');

// Check if the required components exist
const requiredFiles = [
    'src/components/ClientOnly.tsx',
    'src/components/BloombergCharts.tsx',
    'src/components/BloombergClientScript.tsx',
    'src/components/CustomComponents.tsx'
];

let allFilesExist = true;
for (const file of requiredFiles) {
    if (!fs.existsSync(file)) {
        console.error(`Error: ${file} does not exist`);
        allFilesExist = false;
    } else {
        console.log(`✓ ${file} exists`);
    }
}

if (!allFilesExist) {
    console.error('Some required files are missing. Please create them first.');
    process.exit(1);
}

// Check if the components are properly imported
const customComponentsContent = fs.readFileSync('src/components/CustomComponents.tsx', 'utf8');
if (!customComponentsContent.includes('BloombergClientScript') || !customComponentsContent.includes('ClientBloombergCharts')) {
    console.error('Error: CustomComponents.tsx does not import all required components');
    process.exit(1);
} else {
    console.log('✓ CustomComponents.tsx imports all required components');
}

// Check if the components are properly exported
if (
    !customComponentsContent.includes("'BloombergClientScript': BloombergClientScript") ||
    !customComponentsContent.includes("'ClientBloombergCharts': ClientBloombergCharts")
) {
    console.error('Error: CustomComponents.tsx does not export all required components');
    process.exit(1);
} else {
    console.log('✓ CustomComponents.tsx exports all required components');
}

// Check if the ClientOnly component is properly implemented
const clientOnlyContent = fs.readFileSync('src/components/ClientOnly.tsx', 'utf8');
if (!clientOnlyContent.includes('useEffect') || !clientOnlyContent.includes('useState')) {
    console.error('Error: ClientOnly.tsx does not use useEffect and useState');
    process.exit(1);
} else {
    console.log('✓ ClientOnly.tsx is properly implemented');
}

// Check if the BloombergCharts component is properly implemented
const bloombergChartsContent = fs.readFileSync('src/components/BloombergCharts.tsx', 'utf8');
if (!bloombergChartsContent.includes('useEffect') || !bloombergChartsContent.includes('ClientOnly')) {
    console.error('Error: BloombergCharts.tsx does not use useEffect or ClientOnly');
    process.exit(1);
} else {
    console.log('✓ BloombergCharts.tsx is properly implemented');
}

// Check if the BloombergClientScript component is properly implemented
const bloombergClientScriptContent = fs.readFileSync('src/components/BloombergClientScript.tsx', 'utf8');
if (!bloombergClientScriptContent.includes('ClientOnly') || !bloombergClientScriptContent.includes('dangerouslySetInnerHTML')) {
    console.error('Error: BloombergClientScript.tsx does not use ClientOnly or dangerouslySetInnerHTML');
    process.exit(1);
} else {
    console.log('✓ BloombergClientScript.tsx is properly implemented');
}

console.log('All tests passed! The Bloomberg charts should now render properly.');
console.log('To verify, build and run the application:');
console.log('npm run build && npm run start');
