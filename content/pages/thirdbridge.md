---
title: 'My Thirdbridge Master Dashboard'
slug: 'thirdbridge'
sections:
  - title:
      text: 'Showcasing My Thirdbridge Work'
      color: text-white
      styles:
        self:
          textAlign: center
          fontWeight: 600
      type: TitleBlock
    subtitle: 'An Exclusive Archive of Insightful C-Suite Interviews & Market Analyses'
    text: |
      Welcome to my consolidated Thirdbridge portfolio page—your gateway to a diverse library 
      of executive interviews, sector deep-dives, and strategic insights spanning consumer 
      goods, retail, agriculture, and more. Explore the sections below to discover data-driven 
      knowledge, growth perspectives, and a curated selection of my best work in partnership 
      with Thirdbridge.
    actions: []
    colors: bg-black-fg-white
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        alignItems: flex-start
        flexDirection: col
        justifyContent: center
      text:
        textAlign: left
      subtitle:
        textAlign: center
    type: GenericSection
    media:
      type: ImageBlock
      url: /images/thirdbridge-hero.png
      altText: 'Hero Image for Thirdbridge Work'
      elementId: ''
      styles:
        self:
          borderRadius: medium
  - type: DividerSection
    title: Divider
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-2
          - pl-2
          - pb-2
          - pr-2
  - title:
      text: 'Highlight: Data Sources'
      color: text-black
      styles:
        self:
          textAlign: center
      type: TitleBlock
    people:
      # Example reference to data JSON or other sources relevant to your Thirdbridge content
      - content/data/nyree.json
    variant: four-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-12
          - pl-12
          - pb-12
          - pr-12
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedPeopleSection
  - type: DividerSection
    title: Divider
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-2
          - pl-2
          - pb-2
          - pr-2
  - title:
      text: 'Curated Insights & Interviews'
      color: text-[#5397BD]
      styles:
        self:
          textAlign: center
      type: TitleBlock
    # A short descriptive text block could go here if your theme supports it
    # e.g., "subtitle: or text: 'Below is a sampling of my key Thirdbridge interviews...' "
    posts:
      - content/pages/blog/the-central-hypothesis.md
      - content/pages/blog/technical-analysis.md
      - content/pages/blog/fundamental-market-misdiagnoses.md
    showThumbnail: true
    showExcerpt: true
    showDate: false
    showAuthor: false
    actions: []
    elementId: ''
    variant: big-list
    colors: bg-light-fg-dark
    hoverEffect: thin-underline
    styles:
      self:
        padding:
          - pt-12
          - pl-12
          - pb-12
          - pr-12
        justifyContent: center
    type: FeaturedPostsSection
type: CustomHTMLLayout
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Showcasing My Thirdbridge Work</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['Merriweather', 'serif'],
            sans: ['Inter', 'sans-serif'],
          },
          colors: {
            neutralBg: '#F5F5F5',
            accent: '#A67B5B',
            darkNavy: '#2F3E46',
            highlight: '#557A95',
          }
        }
      }
    }
  </script>
  
  <!-- Google Fonts -->
  <link 
    rel="stylesheet" 
    href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Inter:wght@300;400;700&display=swap"
  />

  <!-- Chart.js -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

  <style>
    /* Minimal custom CSS */
    .hidden { 
      display: none;
    }
  </style>
</head>
<body class="bg-neutralBg text-gray-900">
  <!-- Top Navigation Bar -->
  <nav class="flex justify-between items-center bg-darkNavy text-white py-4 px-6">
    <div class="font-bold text-lg font-serif">
      Showcasing My Thirdbridge Work
    </div>
    <div class="space-x-4">
      <a href="#overview" class="hover:underline">Overview</a>
      <a href="#all-interviews" class="hover:underline">All Interviews</a>
      <a href="#emerging-trends" class="hover:underline">Emerging Trends</a>
    </div>
  </nav>

  <!-- Hero / Overview Section -->
  <section id="overview" class="py-8 text-center">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-serif font-bold text-darkNavy mb-4">
        An Exclusive Archive of Insightful C-Suite Interviews &amp; Market Analyses
      </h1>
      <p class="mb-8 max-w-2xl mx-auto leading-relaxed">
        Welcome to my consolidated Thirdbridge portfolio page—your gateway to a diverse 
        library of executive interviews, sector deep-dives, and strategic insights spanning 
        consumer goods, retail, agriculture, and more. Explore the sections below to discover 
        data-driven knowledge, growth perspectives, and a curated selection of my best work 
        in partnership with Thirdbridge.
      </p>
      
      <!-- Three Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="bg-white p-4 rounded shadow">
          <h2 class="text-gray-600 text-sm">Total Interviews</h2>
          <p class="text-3xl font-bold">120</p>
        </div>
        <div class="bg-white p-4 rounded shadow">
          <h2 class="text-gray-600 text-sm">Industries Covered</h2>
          <p class="text-3xl font-bold">8</p>
        </div>
        <div class="bg-white p-4 rounded shadow">
          <h2 class="text-gray-600 text-sm">Key Findings</h2>
          <p class="text-lg">32 Actionable Insights</p>
        </div>
      </div>

      <!-- Industries Section -->
      <div class="bg-white rounded shadow p-4 mb-6">
        <h3 class="text-xl font-serif font-bold text-accent mb-4">
          Industries
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          <!-- Industry Card 1 -->
          <div class="border border-gray-200 p-4 rounded">
            <h4 class="text-lg font-bold mb-2 text-darkNavy">Food &amp; Beverage</h4>
            <p class="text-sm text-gray-600">
              From snacking trends to plant-based proteins, see how consumer
              demand shapes this sector.
            </p>
          </div>
          <!-- Industry Card 2 -->
          <div class="border border-gray-200 p-4 rounded">
            <h4 class="text-lg font-bold mb-2 text-darkNavy">Retail &amp; Apparel</h4>
            <p class="text-sm text-gray-600">
              Latest insights on omnichannel strategies, e-commerce growth,
              and brand repositioning.
            </p>
          </div>
          <!-- Industry Card 3 -->
          <div class="border border-gray-200 p-4 rounded">
            <h4 class="text-lg font-bold mb-2 text-darkNavy">Agriculture &amp; Agtech</h4>
            <p class="text-sm text-gray-600">
              Innovations in modern farming, supply chain challenges,
              and sustainability developments.
            </p>
          </div>
          <!-- Add more cards as needed -->
        </div>
      </div>

      <!-- Bar Chart: Industry Breakdown -->
      <div class="bg-white p-4 rounded shadow">
        <h3 class="text-xl font-serif font-bold text-accent mb-4">Industry Breakdown</h3>
        <canvas id="barChart" width="400" height="300"></canvas>
      </div>
    </div>

  </section>

  <!-- All Interviews Section -->
  <section id="all-interviews" class="py-8 text-center">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-serif font-bold text-darkNavy mb-4">
        All Interviews
      </h2>
      <p class="max-w-2xl mx-auto mb-6 leading-relaxed">
        Search or browse through the entire collection of Thirdbridge interviews, 
        spanning multiple industries and focus areas.
      </p>

      <!-- Filter / Search Input -->
      <div class="max-w-xl mx-auto mb-4">
        <input
          type="text"
          placeholder="Search interviews..."
          class="w-full p-2 border border-gray-300 rounded"
          oninput="filterInterviews(event)"
        />
      </div>

      <!-- Interview Cards Grid -->
      <div id="interviewGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
        <!-- Example Card 1 -->
        <div class="bg-white rounded shadow p-4" data-tags="retail pharmacy rite-aid may-2021">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Rite Aid<br />
            <span class="text-sm text-gray-500">
              (13 May 2021, Retail &amp; Pharmacy)
            </span>
          </h3>
          <p class="text-sm text-gray-600">
            Explore new strategies in pharmacy services, fundamental rethinking
            amid shifting consumer demands and evolving regulations.
          </p>
          <a
            href="#"
            class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors"
          >
            View Details
          </a>
        </div>

        <!-- Example Card 2 -->
        <div class="bg-white rounded shadow p-4" data-tags="footwear nordstrom retail q3-2021">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Nordstrom<br />
            <span class="text-sm text-gray-500">
              (16 Sep 2021, Retail &amp; Apparel)
            </span>
          </h3>
          <p class="text-sm text-gray-600">
            Delve into strategic pivots, e-commerce growth, and market adaptation
            in the post-pandemic retail landscape.
          </p>
          <a
            href="#"
            class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors"
          >
            View Details
          </a>
        </div>

        <!-- Add more interview cards as needed -->
      </div>
    </div>

  </section>

  <!-- New "Emerging Trends" Section (replaces scenario modeling) -->
  <section id="emerging-trends" class="py-8 text-center">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-serif font-bold text-darkNavy mb-4">
        Emerging Trends
      </h2>
      <p class="max-w-2xl mx-auto mb-6 leading-relaxed">
        This line chart highlights growth trajectories and shifting consumer behaviors 
        over time, giving you a dynamic view of how these interview topics evolve.
      </p>
      
      <div class="bg-white p-4 rounded shadow">
        <canvas id="emergingLineChart" width="400" height="300"></canvas>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-darkNavy text-white text-center py-4 mt-8">
    <p class="text-sm">
      &copy; 2025 Thirdbridge Portfolio. All Rights Reserved.
    </p>
  </footer>

  <!-- Scripts -->
  <script>
    // 1) Filter logic for the interview list
    function filterInterviews(event) {
      const query = event.target.value.toLowerCase();
      const cards = document.querySelectorAll('#interviewGrid > div');
      cards.forEach(card => {
        const tags = card.getAttribute('data-tags') || '';
        card.style.display = tags.includes(query) ? '' : 'none';
      });
    }

    // 2) Bar Chart: Industry Breakdown
    const barCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Food & Bev', 'Retail & Apparel', 'Agriculture', 'Edtech', 'Other'],
        datasets: [{
          label: 'Interview Count',
          data: [30, 25, 20, 10, 15],
          backgroundColor: [
            '#A67B5B',
            '#557A95',
            '#2F3E46',
            '#A67B5B',
            '#557A95'
          ]
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

    // 3) Line Chart: Emerging Trends
    const lineCtx = document.getElementById('emergingLineChart').getContext('2d');
    new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2'],
        datasets: [{
          label: 'Trend Indicator',
          data: [10, 25, 40, 30, 45, 60],
          fill: false,
          borderColor: '#A67B5B',
          tension: 0.2
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  </script>
</body>
</html>
