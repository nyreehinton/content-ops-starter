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
  <!-- START: Your custom HEAD snippet -->
  <style type="text/css" id="alertifyCSS">
    .alertify-logs>*{padding:12px 24px;color:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.2);border-radius:1px}
    .alertify-logs>*,.alertify-logs>.default{background:rgba(0,0,0,.8)}
    .alertify-logs>.error{background:rgba(244,67,54,.8)}
    .alertify-logs>.success{background:rgba(76,175,80,.9)}
    .alertify{position:fixed;background-color:rgba(0,0,0,.3);left:0;right:0;top:0;bottom:0;width:100%;height:100%;z-index:2}
    .alertify.hide{opacity:0;pointer-events:none}
    .alertify,.alertify.show{box-sizing:border-box;transition:all .33s cubic-bezier(.25,.8,.25,1)}
    .alertify,.alertify *{box-sizing:border-box}
    .alertify .dialog{padding:12px}
    .alertify .alert,.alertify .dialog{width:100%;margin:0 auto;position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}
    .alertify .alert>*,.alertify .dialog>*{width:400px;max-width:95%;margin:0 auto;text-align:center;padding:12px;background:#fff;box-shadow:0 2px 4px -1px rgba(0,0,0,.14),0 4px 5px 0 rgba(0,0,0,.098),0 1px 10px 0 rgba(0,0,0,.084)}
    .alertify .alert .msg,.alertify .dialog .msg{padding:12px;margin-bottom:12px;margin:0;text-align:left}
    .alertify .alert input:not(.form-control),.alertify .dialog input:not(.form-control){margin-bottom:15px;width:100%;font-size:100%;padding:12px}
    .alertify .alert input:not(.form-control):focus,.alertify .dialog input:not(.form-control):focus{outline-offset:-2px}
    .alertify .alert nav,.alertify .dialog nav{text-align:right}
    .alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button),.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button){background:transparent;box-sizing:border-box;color:rgba(0,0,0,.87);position:relative;outline:0;border:0;display:inline-block;-webkit-align-items:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center;padding:0 6px;margin:6px 8px;line-height:36px;min-height:36px;white-space:nowrap;min-width:88px;text-align:center;text-transform:uppercase;font-size:14px;text-decoration:none;cursor:pointer;border:1px solid transparent;border-radius:2px}
    .alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover{background-color:rgba(0,0,0,.05)}
    .alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus{border:1px solid rgba(0,0,0,.1)}
    .alertify .alert nav button.btn,.alertify .dialog nav button.btn{margin:6px 4px}
    .alertify-logs{position:fixed;z-index:1}
    .alertify-logs.bottom,.alertify-logs:not(.top){bottom:16px}
    .alertify-logs.left,.alertify-logs:not(.right){left:16px}
    .alertify-logs.left>*,.alertify-logs:not(.right)>*{float:left;-webkit-transform:translateZ(0);transform:translateZ(0);height:auto}
    .alertify-logs.left>.show,.alertify-logs:not(.right)>.show{left:0}
    .alertify-logs.left>*,.alertify-logs.left>.hide,.alertify-logs:not(.right)>*,.alertify-logs:not(.right)>.hide{left:-110%}
    .alertify-logs.right{right:16px}
    .alertify-logs.right>*{float:right;-webkit-transform:translateZ(0);transform:translateZ(0)}
    .alertify-logs.right>.show{right:0;opacity:1}
    .alertify-logs.right>*,.alertify-logs.right>.hide{right:-110%;opacity:0}
    .alertify-logs.top{top:0}
    .alertify-logs>*{box-sizing:border-box;transition:all .4s cubic-bezier(.25,.8,.25,1);position:relative;clear:both;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000;perspective:1000;max-height:0;margin:0;padding:0;overflow:hidden;opacity:0;pointer-events:none}
    .alertify-logs>.show{margin-top:12px;opacity:1;max-height:1000px;padding:12px;pointer-events:auto}
  </style>
  <meta charset="utf-8" data-next-head="">
  <!-- Next.js, site-specific scripts/CSS -->
  <link rel="preload" href="/_next/static/css/ccbd1e00d33c84ef.css" as="style">
  <link rel="stylesheet" href="/_next/static/css/ccbd1e00d33c84ef.css" data-n-g="">
  <noscript data-n-css=""></noscript>
  <script defer nomodule src="/_next/static/chunks/polyfills-42372ed130431b0a.js"></script>
  <script defer src="/_next/static/chunks/197.56fce4aef500f742.js"></script>
  <script defer src="/_next/static/chunks/598.46c27bf83dab81eb.js"></script>
  <script defer src="/_next/static/chunks/609.4a21a7de6c3bb41b.js"></script>
  <script defer src="/_next/static/chunks/194.257c31aef159c2ee.js"></script>
  <script src="/_next/static/chunks/webpack-fcc001b897bbcf2b.js" defer></script>
  <script src="/_next/static/chunks/framework-7034403a4f3cb695.js" defer></script>
  <script src="/_next/static/chunks/main-8d3b1b9624d5cdd5.js" defer></script>
  <script src="/_next/static/chunks/pages/_app-4eed043c078eb4b8.js" defer></script>
  <script src="/_next/static/chunks/pages/%5B%5B...slug%5D%5D-f8891ee9aebc9f16.js" defer></script>
  <script src="/_next/static/ukdcv-JOkxmguqMx4K5Gq/_buildManifest.js" defer></script>
  <script src="/_next/static/ukdcv-JOkxmguqMx4K5Gq/_ssgManifest.js" defer></script>
  <link rel="stylesheet" type="text/css" href="/_next/static/css/99e837af73da8dbf.css">
  <title>Home - Showcasing My Thirdbridge Work - Nyree Hinton</title>
  <meta name="description" content="Explore Nyree Hinton’s professional portfolio. Discover his background in data analytics, product management, and cross-functional collaboration." data-next-head="">
  <meta property="og:title" content="Home - Nyree Hinton - Nyree Hinton" data-next-head="">
  <meta property="og:image" content="/images/Bloomberg Princeton.JPG" data-next-head="">
  <meta name="viewport" content="width=device-width, initial-scale=1" data-next-head="">
  <!-- END: Your custom HEAD snippet -->


  <!-- Tailwind Setup (moved here so it loads with your snippet) -->
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

  <!-- Google Fonts (in case Next doesn't handle them automatically) -->
  <link 
    rel="stylesheet" 
    href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Inter:wght@300;400;700&display=swap"
  />
</head>

<body class="bg-neutralBg text-gray-900">

  <!-- White Header (similar to nyreehinton.com) -->
  <header class="bg-white border-b border-gray-200">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo / Brand text (optional) -->
      <div class="text-xl font-bold">
        Nyree Hinton
      </div>
      <!-- Nav Links -->
      <nav class="space-x-6 hidden md:flex">
        <a href="https://nyreehinton.com" class="text-gray-700 hover:text-gray-900">Home</a>
        <a href="https://nyreehinton.com/Experience" class="text-gray-700 hover:text-gray-900">Work Experience</a>
        <a href="#" class="text-gray-700 hover:text-gray-900">Projects</a>
        <a href="#" class="text-gray-700 hover:text-gray-900">Exclusive Tesla Report</a>
      </nav>
      <!-- Right Buttons (if you want GitHub / LinkedIn, etc.) -->
      <div class="space-x-2 flex">
        <a 
          href="https://github.com/nyreehinton" 
          target="_blank" 
          class="border border-gray-700 text-gray-700 px-4 py-1 rounded hover:bg-gray-100 transition-colors"
        >
          Github
        </a>
        <a 
          href="https://www.linkedin.com/in/nyreehinton" 
          target="_blank" 
          class="bg-gray-800 text-white px-4 py-1 rounded hover:bg-gray-900 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </header>

  <!-- Chart.js -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

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

  <!-- "Emerging Trends" Section -->
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

  <!-- Footer: using container for alignment -->
  <footer class="bg-darkNavy text-white">
    <div class="container mx-auto px-4 py-4 text-center">
      <!-- If your Stackbit site references a real Footer model or footer component, you can replace this block. -->
      <!-- e.g.: <Footer {...footer} /> or <FooterLinksGroup ... /> depending on your site’s structure -->
      <p class="text-sm">
        &copy; 2025 Thirdbridge Portfolio. All Rights Reserved.
      </p>
    </div>
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
