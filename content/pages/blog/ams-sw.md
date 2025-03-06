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
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg-main: #000000;
      --bg-card: #121212;
      --bg-card-alt: #1A1A1A;
      --text-primary: #f5f5f5;
      --text-secondary: #aaaaaa;
      --accent-gray: #444444;
    }
    body.light-mode {
      --bg-main: #ffffff;
      --bg-card: #f0f0f0;
      --bg-card-alt: #e0e0e0;
      --text-primary: #333333;
      --text-secondary: #666666;
      --accent-gray: #cccccc;
    }
    body { font-family: 'Inter', sans-serif; background-color: var(--bg-main); color: var(--text-primary); margin: 0; padding: 0; }
    .card { background-color: var(--bg-card); border: 1px solid var(--accent-gray); border-radius: 0.5rem; }
    .chart-container { background-color: var(--bg-card); border: 1px solid var(--accent-gray); border-radius: 0.5rem; }
    .timeline-container { background-color: var(--bg-card); border: 1px solid var(--accent-gray); border-radius: 0.5rem; }
    .tooltip-box { background: rgba(0,0,0,0.8); color: #fff; }
    a { color: var(--text-secondary); }
    .heading-text { color: var(--text-primary); }
    .modal { display: none; }
    .modal.active { display: flex; }
    details summary { cursor: pointer; font-weight: bold; }
    details[open] summary { color: #3b82f6; }
  </style>
</head>
<body>
  <!-- HEADER SECTION -->
  <header class="pt-24 pb-12 px-4 max-w-5xl mx-auto">
    <article class="space-y-6 leading-relaxed text-base text-gray-300">
      <h2 class="text-3xl font-bold mb-2 heading-text">Bloomberg Intelligence - AMS SW Primer</h2>
      <p><strong>1. Ams Well Positioned to Benefit from 3D Sensor Demand</strong><br/>
        Ams (austriamicrosystems) designs and manufactures sensor solutions, excelling in optical sensors. It’s well-positioned to leverage growing 3D technology demand in Apple devices, Android smartphones, and self-driving cars. Strategic acquisitions have driven revenue growth, outpacing rivals and making Ams a favored semiconductor player for quarters ahead. (08/10/18)</p>
    </article>
  </header>

  <!-- SUMMARY CARDS SECTION -->
  <section class="max-w-7xl mx-auto px-4 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="card p-6">
      <h3 class="text-xl font-bold mb-2">Q2 2018 Revenue</h3>
      <p class="text-sm mb-4 text-gray-400">Year-over-Year</p>
      <p class="text-4xl font-extrabold text-green-400">+18%</p>
      <p class="text-sm text-gray-300 mt-2">$252.8M, above top-end guidance</p>
    </div>
    <div class="card p-6">
      <h3 class="text-xl font-bold mb-2">Consumer Segment</h3>
      <p class="text-sm mb-4 text-gray-400">Shift in Revenue Share</p>
      <div class="flex items-center space-x-2">
        <span class="text-gray-300 font-semibold">2016:</span><span class="text-xl">51%</span>
      </div>
      <div class="flex items-center space-x-2">
        <span class="text-gray-300 font-semibold">2018:</span><span class="text-xl text-green-400">73%</span>
      </div>
    </div>
    <div class="card p-6">
      <h3 class="text-xl font-bold mb-2">Key Metrics</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Gross Margin: <span class="text-red-400">9%</span></li>
        <li>3Q '18 Forecast: <span>$450-490M</span></li>
        <li>Operating Cash Flow: <span>-$72.3M</span></li>
      </ul>
    </div>
  </section>

  <!-- FINANCIAL REVIEW -->
  <section class="max-w-7xl mx-auto px-4 mb-12">
    <div class="card p-6">
      <h2 class="text-2xl font-bold mb-4">Financial Review</h2>
      <details class="mb-4">
        <summary>2. Apple Not As Bad As Thought for Ams' 2Q</summary>
        <p class="text-gray-300 mt-2">Ams’ Q2 2018 results beat expectations with $252.8M in revenue (+18% YoY) and a strong Q3 sales outlook ($450-490M, up 78-94% sequentially). Despite a 9% gross margin (lowest ever, due to underutilized Singapore facilities), its Apple 3D-sensing position remains solid. Non-Apple business stability could boost earnings if expanded into 2020 via Android and automotive wins. (08/10/18)</p>
        <ul class="list-disc list-inside text-gray-300 mt-2">
          <li>IFRS Gross Margin: 9% vs. 35% Q2 '17</li>
          <li>H1 2018 Revenue: $685.5M</li>
          <li>Q2 Operating Cash Flow: -$72.3M</li>
        </ul>
      </details>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="chart-container p-4 flex flex-col items-center">
          <h3 class="text-lg font-semibold mb-4">Revenue Trend</h3>
          <canvas id="yoyChart" class="w-full h-64"></canvas>
          <button class="mt-2 border px-3 py-1 rounded download-btn" data-canvas-id="yoyChart">Download Chart</button>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Highlights</h3>
          <ul class="list-disc list-inside text-gray-300">
            <li>Revenue up 18% YoY despite margin drop</li>
            <li>Strong 3Q outlook tied to iPhone launch</li>
            <li>Underutilization hit profitability</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- FINANCIAL TRENDS -->
  <section class="max-w-7xl mx-auto px-4 mb-12">
    <div class="card p-6">
      <h2 class="text-2xl font-bold mb-4">Financial Trends</h2>
      <details class="mb-4">
        <summary>3. Optical Sensing Growth</summary>
        <p class="text-gray-300 mt-2">Ams’ bet on 3D sensing has paid off, with Consumer & Communications revenue rising from 51% (2016) to 73% (2018), driven by Apple’s 3D adoption. Q4 2017 saw an extra €200M from 3D tech demand. Sustaining growth requires continued Apple design wins. (08/10/18)</p>
      </details>
      <details class="mb-4">
        <summary>4. Margins Are Suffering At The Expense of Growth</summary>
        <p class="text-gray-300 mt-2">Gross margins fell from 50% (2016) to 9% (Q2 '18) due to acquisition costs and consumer focus. Operating margins dropped from 33% (Q4 '16) to -29%, with Ams projecting 30% yearly gross margins long-term, risking profitability if other segments falter. (08/10/18)</p>
      </details>
      <div class="chart-container p-4 flex flex-col items-center">
        <h3 class="text-lg font-semibold mb-4">Market Segments (2018)</h3>
        <canvas id="marketChart" class="w-full h-64"></canvas>
        <button class="mt-2 border px-3 py-1 rounded download-btn" data-canvas-id="marketChart">Download Chart</button>
      </div>
    </div>
  </section>

  <!-- SMARTPHONE OPPORTUNITY -->
  <section class="max-w-7xl mx-auto px-4 mb-12">
    <div class="card p-6">
      <h2 class="text-2xl font-bold mb-4">Smartphone Opportunity</h2>
      <details class="mb-4">
        <summary>5. iPhone Ramp-Up Should Play Favorably to Ams’ 3Q</summary>
        <p class="text-gray-300 mt-2">Ams expects strong 2H 2018 revenues ($450-490M in Q3, up 46-59% YoY) from optical sensing, despite Q2 margin woes. Apple’s 3D sensor demand drives this, though competition may grow by 2020. (08/10/18)</p>
      </details>
      <details class="mb-4">
        <summary>6. iOS Demand</summary>
        <p class="text-gray-300 mt-2">Optical sensing is Ams’ top opportunity through 2020. IHS forecasts 3D facial sensor shipments rising from 32M (2017) to 370M (2021), led by iPhones. (08/10/18)</p>
      </details>
      <details class="mb-4">
        <summary>7. Meeting Expectations Should Be A Breeze</summary>
        <p class="text-gray-300 mt-2">Consensus expects Ams to supply $7.5/device for Apple’s 3D sensing through 2021. Holding market share at current ASP could exceed revenue forecasts for 3 years. (08/10/18)</p>
      </details>
      <details class="mb-4">
        <summary>8. Winning Apple’s Good Grace Could Make Things Interesting</summary>
        <p class="text-gray-300 mt-2">If Apple adds Face ID to 30% of iPads in FY20, Ams could gain $90M in revenue, following the fingerprint-to-all-devices precedent. (08/10/18)</p>
      </details>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="chart-container p-4 flex flex-col items-center">
          <h3 class="text-lg font-semibold mb-4">3D Sensor Shipments</h3>
          <canvas id="sensorMarketChart" class="w-full h-64"></canvas>
          <button class="mt-2 border px-3 py-1 rounded download-btn" data-canvas-id="sensorMarketChart">Download Chart</button>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Key Insights</h3>
          <ul class="list-disc list-inside text-gray-300">
            <li>370M units by 2021 (IHS)</li>
            <li>$7.5/device for Apple</li>
            <li>$90M potential from iPads</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- HARDWARE -->
  <section class="max-w-7xl mx-auto px-4 mb-12">
    <div class="card p-6">
      <h2 class="text-2xl font-bold mb-4">Hardware: VCSELs</h2>
      <details class="mb-4">
        <summary>9. VCSELs Primed for Boom</summary>
        <p class="text-gray-300 mt-2">VCSELs (vertical-cavity surface-emitting lasers) are key to 3D sensing, offering testing advantages over EELs. (08/10/18)</p>
      </details>
      <details class="mb-4">
        <summary>10. Enough to Go Around</summary>
        <p class="text-gray-300 mt-2">VCSELs cost $6.7/phone. Lumentum leads Apple supply, but Ams’ Princeton Optronics buy could yield 20% share ($110M FY20). Finisar got $390M from Apple for future orders. (08/10/18)</p>
      </details>
      <details class="mb-4">
        <summary>11. The Androids Are Coming</summary>
        <p class="text-gray-300 mt-2">Android lags Apple by two years but is catching up. Ams supplies VCSELs for Xiaomi’s Mi8 (sold out in 1 minute), the first Android with facial recognition. Xiaomi holds 10% of China’s market. (08/10/18)</p>
      </details>
      <details class="mb-4">
        <summary>12. Using FY20 as an Inflection Point</summary>
        <p class="text-gray-300 mt-2">20% Apple VCSELs, 30% iPad content, and 10% Android share could yield $2.85B in FY20 revenue, a 6% upside excluding automotive growth (49% through 2020). (08/10/18)</p>
      </details>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="border border-gray-600 p-4 rounded">
          <h3 class="text-lg font-semibold mb-1">Cost</h3>
          <p class="text-sm text-gray-400">$6.7/phone</p>
        </div>
        <div class="border border-gray-600 p-4 rounded">
          <h3 class="text-lg font-semibold mb-1">Apple Potential</h3>
          <p class="text-sm text-gray-400">$110M (20% share)</p>
        </div>
        <div class="border border-gray-600 p-4 rounded">
          <h3 class="text-lg font-semibold mb-1">Android Win</h3>
          <p class="text-sm text-gray-400">Xiaomi Mi8</p>
        </div>
      </div>
    </div>
  </section>

  <!-- COMPETITIVE STRATEGY -->
  <section class="max-w-7xl mx-auto px-4 mb-12">
    <div class="card p-6">
      <h2 class="text-2xl font-bold mb-4">Competitive Strategy</h2>
      <details class="mb-4">
        <summary>15. 3 For 3</summary>
        <p class="text-gray-300 mt-2">Ams’ acquisitions—Heptagon ($850M, optical packaging), Princeton Optronics ($75M, VCSELs), and KeyLemon (biometrics)—bolster its 3D sensing edge. (08/10/18)</p>
      </details>
      <details class="mb-4">
        <summary>16. Smooth Transition</summary>
        <p class="text-gray-300 mt-2">Heptagon and Princeton Optronics enable end-to-end solutions, though underutilization drags margins. KeyLemon’s biometric software impact is TBD. (08/10/18)</p>
      </details>
      <details class="mb-4">
        <summary>17. Gearing Up</summary>
        <p class="text-gray-300 mt-2">Ams, Lumentum, and Finisar are expanding capacity for 2H 2018. Ams’ market cap tripled to $6B in a year, driven by acquisitions. Lumentum’s revenue jumped 66% in Q2 '17, and Finisar got $390M from Apple. (08/10/18)</p>
      </details>
      <div class="timeline-container p-6 relative">
        <h3 class="text-lg font-semibold mb-4">Acquisitions Timeline</h3>
        <svg id="timelineSVG" width="100%" height="200"></svg>
        <div class="tooltip-box" id="tooltipBox" style="opacity:0; position:absolute;"></div>
      </div>
    </div>
  </section>

  <!-- VALUATION -->
  <section class="max-w-7xl mx-auto px-4 mb-12">
    <div class="card p-6">
      <h2 class="text-2xl font-bold mb-4">Valuation</h2>
      <details class="mb-4">
        <summary>18. Is This Premium Really A Discount?</summary>
        <p class="text-gray-300 mt-2">If Ams supplies VCSELs for Apple, captures Android share, and grows its core business 10%, it could be undervalued by $1.6B over 4 years. (08/10/18)</p>
      </details>
      <details class="mb-4">
        <summary>19. P/E</summary>
        <p class="text-gray-300 mt-2">Ams historically traded at 30x-80x P/E. At 12.5x on $8.20 EPS, it could hit $102.44 by FY20 (30% upside), a premium amid falling Apple supplier valuations. (08/10/18)</p>
      </details>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="card p-6">
          <h3 class="text-lg font-semibold mb-2">Scenario Modeling</h3>
          <p class="text-sm text-gray-400 mb-4">Adjust iPad Face ID adoption:</p>
          <div class="flex items-center mb-4">
            <label for="ipadAdoption" class="mr-2 text-sm text-gray-300">iPad (%):</label>
            <input id="ipadAdoption" type="range" min="0" max="100" value="30" class="flex-1" />
          </div>
          <p class="text-sm text-gray-300">Added Revenue: <span id="ipadAdoptionValue" class="font-bold text-green-400">$90M</span></p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Valuation Metrics</h3>
          <ul class="list-disc list-inside text-gray-300">
            <li>P/E: 12.5x FY20</li>
            <li>Target Price: $102.44</li>
            <li>Upside Potential: $1.6B</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- AUTOMOTIVE FORECAST -->
  <section class="max-w-7xl mx-auto px-4 mb-20">
    <div class="card p-6">
      <h2 class="text-2xl font-bold mb-4">Automotive LIDAR Forecast</h2>
      <p class="text-gray-300 mb-6">Ams forecasts 49% automotive growth through 2020, with LIDAR potential rising from $290M (2016) to $2.7B (2026).</p>
      <div class="chart-container p-4 flex flex-col items-center">
        <canvas id="lidarChart" class="w-full h-64"></canvas>
        <button class="mt-2 border px-3 py-1 rounded download-btn" data-canvas-id="lidarChart">Download Chart</button>
      </div>
    </div>
  </section>

  <!-- TIMELINE MODAL -->
  <div id="timelineModal" class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white text-black p-6 rounded relative max-w-md w-full">
      <button id="closeModal" class="absolute top-2 right-2 text-lg">×</button>
      <div id="modalContent"></div>
    </div>
  </div>

  <script>
    // CHART.JS CONFIGURATIONS
    const yoyCtx = document.getElementById('yoyChart').getContext('2d');
    const yoyChart = new Chart(yoyCtx, {
      type: 'bar',
      data: {
        labels: ['2016', '2017', 'Q2 2018', 'Q3 2018 (Est)'],
        datasets: [{
          label: 'Revenue (Millions USD)',
          data: [180, 220, 252.8, 470],
          backgroundColor: 'rgba(34, 197, 94, 0.8)'
        }]
      },
      options: { responsive: true, scales: { y: { beginAtZero: true } } }
    });

    const marketCtx = document.getElementById('marketChart').getContext('2d');
    const marketChart = new Chart(marketCtx, {
      type: 'pie',
      data: {
        labels: ['Consumer & Comm.', 'Automotive', 'Other'],
        datasets: [{
          data: [73, 20, 7],
          backgroundColor: ['rgba(148, 163, 184, 0.8)', 'rgba(75, 85, 99, 0.8)', 'rgba(156, 163, 175, 0.8)'],
          hoverOffset: 4
        }]
      },
      options: { responsive: true }
    });

    const sensorCtx = document.getElementById('sensorMarketChart').getContext('2d');
    const sensorChart = new Chart(sensorCtx, {
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

    const lidarCtx = document.getElementById('lidarChart').getContext('2d');
    const lidarChart = new Chart(lidarCtx, {
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

    // SCENARIO MODELING
    const ipadAdoptionSlider = document.getElementById('ipadAdoption');
    const ipadAdoptionValue = document.getElementById('ipadAdoptionValue');
    ipadAdoptionSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      const addedRevenue = Math.round(val * 3);
      ipadAdoptionValue.textContent = `$${addedRevenue}M`;
    });

    // DOWNLOAD CHARTS
    document.querySelectorAll('.download-btn').forEach(button => {
      button.addEventListener('click', () => {
        const canvasId = button.getAttribute('data-canvas-id');
        const canvas = document.getElementById(canvasId);
        const url = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = url;
        a.download = canvasId + '.png';
        a.click();
      });
    });

    // TIMELINE
    const timelineWidth = document.getElementById('timelineSVG').clientWidth;
    const timelineHeight = 200;
    const timelineData = [
      { year: 2016, event: 'Heptagon Acquisition', info: '$850M - High-end optical packaging' },
      { year: 2017, event: 'Princeton Optronics', info: '$75M - VCSEL technology' },
      { year: 2018, event: 'KeyLemon Acquisition', info: 'Biometric software integration' }
    ];

    const svg = d3.select('#timelineSVG').attr('width', timelineWidth).attr('height', timelineHeight);
    const xScale = d3.scaleLinear().domain([2016, 2018]).range([50, timelineWidth - 50]);
    svg.append('line')
      .attr('x1', xScale(2016)).attr('y1', timelineHeight / 2)
      .attr('x2', xScale(2018)).attr('y2', timelineHeight / 2)
      .attr('stroke', '#666').attr('stroke-width', 2);

    const tooltipBox = document.getElementById('tooltipBox');
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
      .on('mouseout', () => { tooltipBox.style.opacity = 0; })
      .on('click', function(e, d) {
        document.getElementById('modalContent').innerHTML = `<h3 class="text-xl font-bold mb-2">${d.event} (${d.year})</h3><p>${d.info}</p>`;
        document.getElementById('timelineModal').classList.add('active');
      });

    anime({
      targets: '#timelineSVG circle',
      opacity: [0, 1],
      translateY: [-20, 0],
      delay: anime.stagger(200),
      duration: 1000,
      easing: 'easeOutExpo'
    });

    // MODAL HANDLING
    document.getElementById('closeModal').addEventListener('click', () => {
      document.getElementById('timelineModal').classList.remove('active');
    });
    document.getElementById('timelineModal').addEventListener('click', (e) => {
      if (e.target.id === 'timelineModal') {
        document.getElementById('timelineModal').classList.remove('active');
      }
    });
  </script>
</body>
</html>
