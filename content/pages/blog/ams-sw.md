---
title: 'AMS SW'
slug: ams-sw
date: '2020-03-04'
excerpt: 'A high-level overview of my internship experience at Bloomberg with AMS SW.'
featuredImage:
  url: /images/BBG.webp
  altText: ''
  styles:
    self:
      borderRadius: large
  type: ImageBlock
bottomSections:
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
  - items:
      - title: About This Report
        tagline: ''
        subtitle: >-
          Third Bridge is a global research firm that connects investors and
          business leaders with vital intelligence, leveraging a network of
          industry specialists and in-depth interviews. By bridging first-hand
          insights and real-world data, Third Bridge helps clients make informed
          strategic decisions—particularly where deep market knowledge or niche
          expertise is essential.
        image:
          url: /images/BBG.webp
          altText: Company logo
          styles:
            self:
              margin:
                - ml-3
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pl-6
              - pb-6
              - pr-6
            textAlign: left
            borderColor: border-neutralAlt
            borderStyle: none
            borderWidth: 0
            borderRadius: none
            flexDirection: row
        type: FeaturedItem
    variant: small-list
    colors: bg-light-fg-dark
    styles:
      self:
        margin:
          - mb-20
        padding:
          - pt-0
          - pl-0
          - pb-0
          - pr-0
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedItemsSection
isFeatured: true
colors: bg-light-fg-dark
styles:
  self:
    padding:
      - pt-5
      - pl-5
      - pb-5
      - pr-5
    textAlign: center
    borderColor: border-light
    borderStyle: none
    borderWidth: 0
    borderRadius: none
    flexDirection: col
type: CustomHTMLLayout
author: content/data/nyree.json
---

<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>AMS SW Primer Dashboard</title>
  
  <!-- Tailwind CSS (CDN) -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Chart.js (CDN) -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <!-- D3.js (CDN) -->
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <!-- Anime.js (CDN) -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>

  <!-- Import fonts and define a dark grayscale color palette -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
    rel="stylesheet"
  />
  <style>
    :root {
      /* You can tweak these values to match exactly the shades in your attached image. */
      --bg-main: #000000;          /* darkest background */
      --bg-card: #121212;          /* slightly lighter card background */
      --bg-card-alt: #1A1A1A;      /* optional alternate background */
      --text-primary: #f5f5f5;     /* near-white text */
      --text-secondary: #aaaaaa;   /* lighter gray text */
      --accent-gray: #444444;      /* accent lines, borders, etc. */
    }

    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-main);
      color: var(--text-primary);
      margin: 0;
      padding: 0;
    }
    .card {
      background-color: var(--bg-card);
      border: 1px solid var(--accent-gray);
      border-radius: 0.5rem;
    }
    .chart-container {
      background-color: var(--bg-card);
      border: 1px solid var(--accent-gray);
      border-radius: 0.5rem;
    }
    .timeline-container {
      background-color: var(--bg-card);
      border: 1px solid var(--accent-gray);
      border-radius: 0.5rem;
    }
    .tooltip-box {
      background: rgba(0,0,0,0.8);
      color: #fff;
    }
    a {
      color: var(--text-secondary);
    }
    .heading-text {
      color: var(--text-primary);
    }

  </style>
</head>

<body class="min-h-screen">

<!-- TOP NAV -->
<nav class="w-full fixed top-0 left-0 z-50 border-b border-gray-700">
  <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    <h1 class="text-2xl font-extrabold heading-text">AMS SW Primer</h1>
  </div>
</nav>

<!-- PDF CONTENT SECTION -->
<header class="pt-24 pb-12 px-4 max-w-5xl mx-auto">
  <!-- Example partial content from the Bloomberg Internship AMS SW Presentation PDF;
       you can paste as much of the text here as you wish. -->
  <article class="space-y-6 leading-relaxed text-base text-gray-300">
    <h2 class="text-3xl font-bold mb-2">Bloomberg Intelligence - AMS SW Primer</h2>
    
    <p><strong>1. Ams Well Positioned to Benefit from 3D Sensor Demand</strong><br/>
    (Bloomberg Intelligence) -- Ams is well positioned to take advantage of the growing demand of 3D technology implemented in Apple as well as benefiting from Android and self-driving cars. Ams's strategic acquisitions have allowed them out-pace rivals in revenue growth, making them a favored semiconductor in optical sensors for quarters to come.
    
    Ams, formally known as austriamicrosystems, designs and manufactures sensor solutions. (08/10/18)</p>

    <p><strong>Financial Review & Earnings</strong><br/>
    Ams' better than expected 2Q results and strong 3Q sales outlook reinforces our positive view of the company's competitive positioning with Apple in 3D-Sensing ahead of the pending iPhone launch. Revenues are up 18% from the same quarter of 2017. Due to the underutilization of production facilities, gross margin came in at 9%, the lowest ever reported.

    Ams's Q2 results represent a stable non-Apple core business, which could add a favorable boost to earnings if expanded into 2020. This will come from capitalizing off of Android customers and winning significant product designs in the automotive industry. </p>

    <p><strong>Financial Trends</strong><br/>
    Ams has placed a large bet on the growth and adoption of 3D technology. From 2016,
    total revenues by segment have made a large shift from equal to overweight consumer
    & communications, jumping from 51% to almost 73%.</p>

    <p><strong>Key Research - Smartphone Opportunity</strong><br/>
    Global shipments of 3D facial sensors are expected to reach 370 million units by 2021,
    from 32 million units in 2017. Demand for 3D sensing is bolstered by its use in handset markets,
    notably iPhones.</p>

    <p><strong>Hardware & VCSEL Technology</strong><br/>
    VCSELs are a key component for 3D sensing, helping push light through the dot projector.
    They can be tested at multiple phases during production, unlike EELs, giving them a quality
    and yield advantage. Ams acquired Princeton Optronics, potentially opening the door
    for capturing more Apple market share.</p>

    <!-- Continue adding more PDF text as needed... -->

  </article>
</header>

<!-- DASHBOARD STARTS HERE -->
<!-- SUMMARY CARDS SECTION -->
<section class="max-w-7xl mx-auto px-4 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
  <!-- Card 1: Total Revenue Growth -->
  <div class="card p-6">
    <h3 class="text-xl font-bold mb-2">Total Revenue Growth</h3>
    <p class="text-sm mb-4 text-gray-400">Year-over-year</p>
    <p class="text-4xl font-extrabold text-green-400" id="revenueGrowthValue">+18%</p>
  </div>
  <!-- Card 2: Market Segment Breakdown -->
  <div class="card p-6">
    <h3 class="text-xl font-bold mb-2">Market Segments</h3>
    <p class="text-sm mb-4 text-gray-400">Consumer vs Automotive</p>
    <div class="flex items-center space-x-2">
      <span class="text-gray-300 font-semibold">Consumer:</span>
      <span class="text-xl" id="consumerSegmentValue">73%</span>
    </div>
    <div class="flex items-center space-x-2">
      <span class="text-gray-300 font-semibold">Automotive:</span>
      <span class="text-xl" id="autoSegmentValue">20%</span>
    </div>
  </div>
  <!-- Card 3: Key Financial Metrics -->
  <div class="card p-6">
    <h3 class="text-xl font-bold mb-2">Key Financial Metrics</h3>
    <ul class="list-disc list-inside text-gray-300">
      <li>Gross Margin: <span id="grossMarginValue">9%</span></li>
      <li>EPS Projection: <span id="epsValue">$8.20</span></li>
      <li>P/E Ratio: <span id="peValue">12.5x</span></li>
    </ul>
  </div>
</section>

<!-- YEAR-OVER-YEAR CHART & MARKET BREAKDOWN -->
<section class="max-w-7xl mx-auto px-4 mb-12">
  <div class="grid md:grid-cols-2 gap-6">
    <!-- YOY Comparison Chart -->
    <div class="chart-container p-4">
      <h3 class="text-lg font-semibold mb-4">Year-Over-Year Revenue</h3>
      <canvas id="yoyChart" class="w-full h-64"></canvas>
    </div>
    <!-- Market Breakdown Chart -->
    <div class="chart-container p-4">
      <h3 class="text-lg font-semibold mb-4">Market Segment Breakdown</h3>
      <canvas id="marketChart" class="w-full h-64"></canvas>
    </div>
  </div>
</section>

<!-- VCSEL TECHNOLOGY EXPLORATION -->
<section class="max-w-7xl mx-auto px-4 mb-12">
  <div class="card p-6">
    <h2 class="text-2xl font-bold mb-4">VCSEL Technology Exploration</h2>
    <p class="text-gray-300 mb-6">Cost per device, adoption timelines, comparative performance, future projections.</p>
    <div class="grid md:grid-cols-3 gap-4">
      <!-- Cost per Device -->
      <div class="border border-gray-600 p-4 rounded">
        <h3 class="text-lg font-semibold mb-1">Cost per Device</h3>
        <p class="text-sm text-gray-400">Estimated $6–$7 per phone</p>
      </div>
      <!-- Adoption Timelines -->
      <div class="border border-gray-600 p-4 rounded">
        <h3 class="text-lg font-semibold mb-1">Adoption Timelines</h3>
        <p class="text-sm text-gray-400">Apple: 2017 onward; Android: 2019–2020</p>
      </div>
      <!-- Performance Metrics -->
      <div class="border border-gray-600 p-4 rounded">
        <h3 class="text-lg font-semibold mb-1">Performance Metrics</h3>
        <p class="text-sm text-gray-400">Multiple test phases improve QC vs EELs.</p>
      </div>
    </div>
  </div>
</section>

<!-- MULTIDIMENSIONAL DATA (3D Sensor Market Growth, Apple vs Android) -->
<section class="max-w-7xl mx-auto px-4 mb-12">
  <div class="card p-6">
    <h2 class="text-2xl font-bold mb-4">3D Sensor Market & Penetration</h2>
    <p class="mb-6 text-gray-300">Explore Apple & Android market share, revenue potential, and geographic distribution.</p>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="chart-container p-2">
        <canvas id="sensorMarketChart" class="w-full h-64"></canvas>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-2">Highlights</h3>
        <ul class="list-disc list-inside text-gray-300">
          <li><strong>Apple Penetration:</strong> ~70% revenue from 3D sensor demand</li>
          <li><strong>Android Growth:</strong> ~10% smartphone share</li>
          <li><strong>Automotive LIDAR:</strong> 49% growth through 2026</li>
          <li><strong>Regions:</strong> N. America (40%), Asia (45%), EU (15%)</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- FINANCIAL METRICS DASHBOARD -->
<section class="max-w-7xl mx-auto px-4 mb-12 grid md:grid-cols-2 gap-6">
  <div class="card p-6">
    <h3 class="text-xl font-bold mb-4">Financial Metrics</h3>
    <ul class="list-disc list-inside text-gray-300">
      <li>Gross Margin: <strong>9%</strong> (Q2, partly due to underutilization)</li>
      <li>Revenue Segmentation: <strong>73% Consumer</strong></li>
      <li>EPS Projection: <strong>$8.20 by FY20</strong></li>
      <li>Valuation (P/E): <strong>12.5x</strong></li>
    </ul>
  </div>
  <div class="card p-6">
    <h3 class="text-xl font-bold mb-4">Scenario Modeling</h3>
    <p class="text-sm text-gray-400 mb-4">Adjust iPad Face ID adoption rate below:</p>
    <div class="flex items-center mb-4">
      <label for="ipadAdoption" class="mr-2 text-sm text-gray-300">iPad Adoption (%):</label>
      <input id="ipadAdoption" type="range" min="0" max="100" value="30" class="flex-1" />
    </div>
    <p class="text-sm text-gray-300">
      Projected Additional Revenue: 
      <span id="ipadAdoptionValue" class="font-bold text-green-400">$90M</span>
    </p>
  </div>
</section>

<!-- ANIMATED TIMELINE (ACQUISITIONS) -->
<section class="max-w-7xl mx-auto px-4 mb-12">
  <div class="timeline-container p-6 relative">
    <h2 class="text-2xl font-bold mb-4">Acquisitions & Technology Timeline</h2>
    <p class="text-gray-400 mb-6">Hover over milestones for details.</p>
    <svg id="timelineSVG" width="100%" height="200"></svg>
    <div class="tooltip-box" id="tooltipBox" style="opacity:0; position:absolute;"></div>
  </div>
</section>

<!-- AUTOMOTIVE LIDAR FORECAST -->
<section class="max-w-7xl mx-auto px-4 mb-20">
  <div class="card p-6">
    <h2 class="text-2xl font-bold mb-4">Automotive LIDAR Market Forecast</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <p class="mb-6 text-gray-300">
          Potential growth from $290M (2016) to $2.7B (2026). Ams targets a sizable share through LIDAR sensors.
        </p>
      </div>
      <div>
        <canvas id="lidarChart" class="w-full h-64"></canvas>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="text-center text-gray-500 py-6 border-t border-gray-700">
  <p>© 2025 AMS Dashboard</p>
</footer>

<script>
  /****************************************
   * CHART.JS EXAMPLES
   ****************************************/
  // YOY Revenue Chart
  const yoyCtx = document.getElementById('yoyChart').getContext('2d');
  new Chart(yoyCtx, {
    type: 'bar',
    data: {
      labels: ['2016', '2017', '2018', '2019', '2020'],
      datasets: [{
        label: 'Revenue (Millions USD)',
        data: [180, 220, 252.8, 350, 450],
        backgroundColor: 'rgba(34, 197, 94, 0.8)', // green
      }]
    },
    options: { responsive: true, scales: { y: { beginAtZero: true } } }
  });

  // Market Breakdown Pie
  const marketCtx = document.getElementById('marketChart').getContext('2d');
  new Chart(marketCtx, {
    type: 'pie',
    data: {
      labels: ['Consumer & Comm.', 'Automotive', 'Other'],
      datasets: [{
        data: [73, 20, 7],
        backgroundColor: [
          'rgba(148, 163, 184, 0.8)',
          'rgba(75, 85, 99, 0.8)',
          'rgba(156, 163, 175, 0.8)'
        ],
        hoverOffset: 4
      }]
    },
    options: { responsive: true }
  });

  // 3D Sensor Market Growth
  const sensorCtx = document.getElementById('sensorMarketChart').getContext('2d');
  new Chart(sensorCtx, {
    type: 'line',
    data: {
      labels: ['2017', '2018', '2019', '2020', '2021'],
      datasets: [{
        label: '3D Sensor Shipments (Millions)',
        data: [32, 120, 220, 300, 370],
        borderColor: 'rgba(147, 51, 234, 1)',
        backgroundColor: 'rgba(147, 51, 234, 0.2)',
        fill: true,
        tension: 0.2
      }]
    },
    options: { responsive: true, scales: { y: { beginAtZero: true } } }
  });

  // Automotive LIDAR Forecast
  const lidarCtx = document.getElementById('lidarChart').getContext('2d');
  new Chart(lidarCtx, {
    type: 'line',
    data: {
      labels: ['2016', '2018', '2020', '2022', '2024', '2026'],
      datasets: [{
        label: 'Automotive LIDAR (Millions USD)',
        data: [290, 500, 900, 1500, 2200, 2700],
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        fill: true,
        tension: 0.2
      }]
    },
    options: { responsive: true }
  });

  /****************************************
   * SCENARIO MODELING
   ****************************************/
  const ipadAdoptionSlider = document.getElementById('ipadAdoption');
  const ipadAdoptionValue = document.getElementById('ipadAdoptionValue');
  ipadAdoptionSlider.addEventListener('input', (e) => {
    // Simple example calculation
    const val = parseInt(e.target.value, 10);
    const addedRevenue = Math.round(val * 3); 
    ipadAdoptionValue.textContent = `$${addedRevenue}M`;
  });

  /****************************************
   * ANIMATED TIMELINE USING D3 + Anime.js
   ****************************************/
  const timelineWidth = document.getElementById('timelineSVG').clientWidth;
  const timelineHeight = 200;
  const timelineData = [
    { year: 2016, event: 'Heptagon Acquisition', info: 'High-end optical packaging' },
    { year: 2017, event: 'Princeton Optronics', info: 'VCSEL technology' },
    { year: 2018, event: 'KeyLemon Acquisition', info: 'Biometric SW integration' }
  ];

  const svg = d3.select('#timelineSVG')
    .attr('width', timelineWidth)
    .attr('height', timelineHeight);

  const xScale = d3.scaleLinear()
    .domain([2016, 2018])
    .range([50, timelineWidth - 50]);

  // Base line
  svg.append('line')
    .attr('x1', xScale(2016))
    .attr('y1', timelineHeight / 2)
    .attr('x2', xScale(2018))
    .attr('y2', timelineHeight / 2)
    .attr('stroke', '#666')
    .attr('stroke-width', 2);

  const tooltipBox = document.getElementById('tooltipBox');

  // Circles
  svg.selectAll('circle')
    .data(timelineData)
    .enter()
    .append('circle')
    .attr('cx', d => xScale(d.year))
    .attr('cy', timelineHeight / 2)
    .attr('r', 10)
    .attr('fill', '#3b82f6')
    .on('mouseover', function(e, d) {
      tooltipBox.style.left = (e.pageX + 10) + 'px';
      tooltipBox.style.top = (e.pageY - 20) + 'px';
      tooltipBox.innerHTML = `<strong>${d.year}:</strong> ${d.event}<br/>${d.info}`;
      tooltipBox.style.opacity = 1;
    })
    .on('mouseout', () => {
      tooltipBox.style.opacity = 0;
    });

  // Basic fade-in animation with Anime.js
  anime({
    targets: '#timelineSVG circle',
    opacity: [0, 1],
    translateY: [-20, 0],
    delay: anime.stagger(200),
    duration: 1000,
    easing: 'easeOutExpo'
  });
</script>
</body>
</html>
