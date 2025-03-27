#!/bin/bash

# This script directly uploads the original index content
# without relying on complex build processes

echo "=============================================="
echo "RESTORING ORIGINAL WEBSITE CONTENT"
echo "=============================================="

# Create public directory
mkdir -p public

# Create index.html with your original content
cat > public/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nyree Hinton | Financial Analyst & Product Manager</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css">
</head>
<body>
  <div class="container mx-auto px-4 py-8">
    <section class="mb-12 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Nyree Hinton</h1>
      <h2 class="text-2xl md:text-3xl text-gray-700 mb-4">Financial Analyst & Product Manager</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">Turning complex data into strategic business insights</p>
    </section>
    
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-center mb-8">Areas of Expertise</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3">Financial Analysis</h3>
          <p class="text-gray-600">Comprehensive analysis of financial data to drive business decisions</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3">Product Management</h3>
          <p class="text-gray-600">End-to-end product development with a focus on user needs</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3">Data Visualization</h3>
          <p class="text-gray-600">Creating clear, compelling data stories using Tableau and other tools</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3">Market Research</h3>
          <p class="text-gray-600">In-depth analysis of market trends and competitive landscapes</p>
        </div>
      </div>
    </section>
    
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-center mb-8">Featured Work</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3">Tesla Odometer Inflation Research</h3>
          <p class="text-gray-600 mb-4">Analysis of reported odometer discrepancies in the used Tesla market</p>
          <a href="/tesla" class="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">View Analysis</a>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3">Bloomberg Financial Analysis</h3>
          <p class="text-gray-600 mb-4">Comprehensive financial performance review and market positioning study</p>
          <a href="/bloomberg" class="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">View Analysis</a>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3">Capital One Market Research</h3>
          <p class="text-gray-600 mb-4">Strategic evaluation of product offerings and competitive landscape</p>
          <a href="/capital" class="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">View Analysis</a>
        </div>
      </div>
    </section>
    
    <section class="text-center">
      <h2 class="text-3xl font-bold mb-6">Get in Touch</h2>
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Interested in working together? Reach out through LinkedIn or by email.</p>
      <div class="flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/nyreehinton/" target="_blank" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">LinkedIn</a>
        <a href="mailto:contact@nyreehinton.com" class="inline-block px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">Email</a>
      </div>
    </section>
  </div>
</body>
</html>
EOF

echo "Created index.html with your original content"

# Deploy using netlify CLI
echo "Deploying to Netlify..."
npx netlify deploy --dir=public --prod

echo "=============================================="
echo "RESTORE COMPLETED"
echo "=============================================="
echo "Your original site should now be visible at https://nyreehinton.com" 