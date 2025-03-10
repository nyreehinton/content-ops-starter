---
title: 'My Thirdbridge Master Dashboard'
slug: thirdbridge
date: '2021-09-14'
excerpt:
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

  <!-- Tailwind CSS (Remove if already loaded in your base template) -->
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

  <!-- Chart.js (Remove if already loaded) -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

  <!-- Hero / Overview Section -->
  <section id="overview" class="py-8 text-center">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-serif font-bold text-darkNavy mb-4">
        A Consolidated Portfolio of C-Suite Conversations, Sector Research, and Strategic Reviews
      </h1>
      <p class="mb-8 max-w-2xl mx-auto leading-relaxed">
This portfolio encapsulates the series of rigorous interviews and detailed market analyses I performed during my engagement with Thirdbridge. It represents a curated collection of market research and strategic evaluations, reflecting the depth and precision of the insights I generated across various sectors.
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
        <h3 class="text-xl font-serif font-bold text-accent mb-4">Industries</h3>
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
    </div>

  </section>

  <!-- Bar Chart: Industry Breakdown -->
  <section id="industry-breakdown" class="py-8 text-center">
    <div class="container mx-auto px-4">
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

        <div class="bg-white rounded shadow p-4" data-tags="hanesbrands margin 2021-10-28">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Hanesbrands Margin<br />
            <span class="text-sm text-gray-500">(2021-10-28)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Hanesbrands – Margin Expansion Opportunities Across
          </p>
          <a href="/interviews/hanesbrands-margin" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="levi strauss 2021-10-27">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Levi Strauss<br />
            <span class="text-sm text-gray-500">(2021-10-27)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Levi Strauss & Co – Reliance on Third-party Retailers &
          </p>
          <a href="/interviews/levi-strauss" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="home depot 2021-10-27">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Home Depot<br />
            <span class="text-sm text-gray-500">(2021-10-27)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Home Depot – US Home Improvement Regional Demand
          </p>
          <a href="/interviews/home-depot" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="crocs record 2021-10-27">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Crocs Record<br />
            <span class="text-sm text-gray-500">(2021-10-27)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Crocs – Record Demand for Casual Footwear & Customer
          </p>
          <a href="/interviews/crocs-record" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="beachbody health 2021-10-26">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Beachbody Health<br />
            <span class="text-sm text-gray-500">(2021-10-26)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Beachbody – Health & Wellness Subscription Model &
          </p>
          <a href="/interviews/beachbody-health" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="pepsico snack 2021-10-26">
          <h3 class="text-lg font-semibold mb-2">
            Interview: PepsiCo Snack<br />
            <span class="text-sm text-gray-500">(2021-10-26)</span>
          </h3>
          <p class="text-sm text-gray-600">
            PepsiCo – Snack Business Resiliency as Consumers
          </p>
          <a href="/interviews/pepsico-snack" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="brill inc 2021-10-22">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Brill Inc<br />
            <span class="text-sm text-gray-500">(2021-10-22)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Brill Inc Acquired by Rise Baking Co – Speciality Bakery &
          </p>
          <a href="/interviews/brill-inc" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="edtech sector 2021-10-22">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Edtech Sector<br />
            <span class="text-sm text-gray-500">(2021-10-22)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Edtech Sector – Product Positioning Around Learning-at-
          </p>
          <a href="/interviews/edtech-sector" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="tapestry inc 2021-10-21">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Tapestry Inc<br />
            <span class="text-sm text-gray-500">(2021-10-21)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Tapestry Inc – Consumer Demand Heading into Holiday
          </p>
          <a href="/interviews/tapestry-inc" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="lowes pricing 2021-10-21">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Lowes Pricing<br />
            <span class="text-sm text-gray-500">(2021-10-21)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Lowe's – Pricing Opportunities as Demand Levels Off – 21
          </p>
          <a href="/interviews/lowes-pricing" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="keurig dr 2021-10-20">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Keurig Dr<br />
            <span class="text-sm text-gray-500">(2021-10-20)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Keurig Dr Pepper Inc – K-Cup Strength & Beverage
          </p>
          <a href="/interviews/keurig-dr" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="monster beverage 2021-10-20">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Monster Beverage<br />
            <span class="text-sm text-gray-500">(2021-10-20)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Monster Beverage Corp – Supply Shortages Eating Share
          </p>
          <a href="/interviews/monster-beverage" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="appharvest post-spac 2021-10-15">
          <h3 class="text-lg font-semibold mb-2">
            Interview: AppHarvest Post-SPAC<br />
            <span class="text-sm text-gray-500">(2021-10-15)</span>
          </h3>
          <p class="text-sm text-gray-600">
            AppHarvest Post-SPAC Update – Tomato Production
          </p>
          <a href="/interviews/appharvest-post" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="2u product 2021-10-15">
          <h3 class="text-lg font-semibold mb-2">
            Interview: 2U Product<br />
            <span class="text-sm text-gray-500">(2021-10-15)</span>
          </h3>
          <p class="text-sm text-gray-600">
            2U– Product Differentiation & International Expansion – 15
          </p>
          <a href="/interviews/2u-product" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="dairy sector 2021-10-14">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Dairy Sector<br />
            <span class="text-sm text-gray-500">(2021-10-14)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Dairy Sector – 2022 Price Increase Outlook & Category
          </p>
          <a href="/interviews/dairy-sector" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="general mills 2021-10-14">
          <h3 class="text-lg font-semibold mb-2">
            Interview: General Mills<br />
            <span class="text-sm text-gray-500">(2021-10-14)</span>
          </h3>
          <p class="text-sm text-gray-600">
            General Mills Inc – Management Reinvesting in Legacy
          </p>
          <a href="/interviews/general-mills" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="kontoor brands 2021-10-13">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Kontoor Brands<br />
            <span class="text-sm text-gray-500">(2021-10-13)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Kontoor Brands – Wrangler & Lee Driving Wholesale
          </p>
          <a href="/interviews/kontoor-brands" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="us savoury 2021-09-30">
          <h3 class="text-lg font-semibold mb-2">
            Interview: US Savoury<br />
            <span class="text-sm text-gray-500">(2021-09-30)</span>
          </h3>
          <p class="text-sm text-gray-600">
            US Savoury & Sweet Snacking Sector – H2 2021 Update
          </p>
          <a href="/interviews/us-savoury" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="q4 2021 2021-09-30">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Q4 2021<br />
            <span class="text-sm text-gray-500">(2021-09-30)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Q4 2021 US Bakery Update – Channel Opportunities &
          </p>
          <a href="/interviews/q4-2021" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="deckers outdoor 2021-09-30">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Deckers Outdoor<br />
            <span class="text-sm text-gray-500">(2021-09-30)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Deckers Outdoor Corp – Potential Growth Beyond
          </p>
          <a href="/interviews/deckers-outdoor" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="speciality row 2021-09-29">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Speciality Row<br />
            <span class="text-sm text-gray-500">(2021-09-29)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Speciality & Row Crop Gene-editing – Innovation & Key
          </p>
          <a href="/interviews/speciality-row" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="us luxury 2021-09-29">
          <h3 class="text-lg font-semibold mb-2">
            Interview: US Luxury<br />
            <span class="text-sm text-gray-500">(2021-09-29)</span>
          </h3>
          <p class="text-sm text-gray-600">
            US Luxury Fashion – Domestic Performance & the Pivot
          </p>
          <a href="/interviews/us-luxury" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="on holding 2021-09-29">
          <h3 class="text-lg font-semibold mb-2">
            Interview: On Holding<br />
            <span class="text-sm text-gray-500">(2021-09-29)</span>
          </h3>
          <p class="text-sm text-gray-600">
            On Holding – Recent $7.3bn IPO & Global Competitive
          </p>
          <a href="/interviews/on-holding" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="pepsico hard 2021-09-29">
          <h3 class="text-lg font-semibold mb-2">
            Interview: PepsiCo Hard<br />
            <span class="text-sm text-gray-500">(2021-09-29)</span>
          </h3>
          <p class="text-sm text-gray-600">
            PepsiCo – Hard Mtn Dew Enters Alcohol Segment, Exits
          </p>
          <a href="/interviews/pepsico-hard" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="us meal 2021-09-28">
          <h3 class="text-lg font-semibold mb-2">
            Interview: US Meal<br />
            <span class="text-sm text-gray-500">(2021-09-28)</span>
          </h3>
          <p class="text-sm text-gray-600">
            US Meal Kits – Sector Overview & Competitive Landscape
          </p>
          <a href="/interviews/us-meal" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="us agricultural 2021-09-27">
          <h3 class="text-lg font-semibold mb-2">
            Interview: US Agricultural<br />
            <span class="text-sm text-gray-500">(2021-09-27)</span>
          </h3>
          <p class="text-sm text-gray-600">
            US Agricultural Farming – Regulatory Environment & Key
          </p>
          <a href="/interviews/us-agricultural" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="us energy 2021-09-23">
          <h3 class="text-lg font-semibold mb-2">
            Interview: US Energy<br />
            <span class="text-sm text-gray-500">(2021-09-23)</span>
          </h3>
          <p class="text-sm text-gray-600">
            US Energy Drinks Sector – Competitive Dynamics &
          </p>
          <a href="/interviews/us-energy" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="b2b marketplaces 2021-09-22">
          <h3 class="text-lg font-semibold mb-2">
            Interview: B2B Marketplaces<br />
            <span class="text-sm text-gray-500">(2021-09-22)</span>
          </h3>
          <p class="text-sm text-gray-600">
            eB2B Marketplaces & Net-zero Carbon in Agriculture –
          </p>
          <a href="/interviews/b2b-marketplaces" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="hormel foods 2021-09-21">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Hormel Foods<br />
            <span class="text-sm text-gray-500">(2021-09-21)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Hormel Foods – Continued Foodservice Strength &
          </p>
          <a href="/interviews/hormel-foods" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="nordstrom 6 2021-09-16">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Nordstrom 6<br />
            <span class="text-sm text-gray-500">(2021-09-16)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Nordstrom – 6% Decline in Shares Post-Q3 2021 Results
          </p>
          <a href="/interviews/nordstrom-6" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="nike resilient 2021-09-16">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Nike Resilient<br />
            <span class="text-sm text-gray-500">(2021-09-16)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Nike – Resilient Digital Strategy & 2022 Fiscal Outlook –
          </p>
          <a href="/interviews/nike-resilient" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="alternative meats 2021-09-14">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Alternative Meats<br />
            <span class="text-sm text-gray-500">(2021-09-14)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Alternative Meats – Normalising Production Costs &
          </p>
          <a href="/interviews/alternative-meats" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="iconix brand 2021-09-09">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Iconix Brand<br />
            <span class="text-sm text-gray-500">(2021-09-09)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Iconix Brand Group – Completed Go-private Transaction &
          </p>
          <a href="/interviews/iconix-brand" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="age of 2021-09-07">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Age of<br />
            <span class="text-sm text-gray-500">(2021-09-07)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Age of Learning Inc – Well-positioned for the Digital
          </p>
          <a href="/interviews/age-of" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="service corp 2021-09-07">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Service Corp<br />
            <span class="text-sm text-gray-500">(2021-09-07)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Service Corp International – Funeral Home Services
          </p>
          <a href="/interviews/service-corp" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="irobot consumer 2021-09-02">
          <h3 class="text-lg font-semibold mb-2">
            Interview: iRobot Consumer<br />
            <span class="text-sm text-gray-500">(2021-09-02)</span>
          </h3>
          <p class="text-sm text-gray-600">
            iRobot – Consumer Robotics Trends & International
          </p>
          <a href="/interviews/irobot-consumer" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="athleisure intimate 2021-09-01">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Athleisure Intimate<br />
            <span class="text-sm text-gray-500">(2021-09-01)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Athleisure & Intimate Apparel – Category Leaders &
          </p>
          <a href="/interviews/athleisure-intimate" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="guild education 2021-08-31">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Guild Education<br />
            <span class="text-sm text-gray-500">(2021-08-31)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Guild Education – New Partnerships with Target &
          </p>
          <a href="/interviews/guild-education" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="adm a 2021-08-31">
          <h3 class="text-lg font-semibold mb-2">
            Interview: ADM A<br />
            <span class="text-sm text-gray-500">(2021-08-31)</span>
          </h3>
          <p class="text-sm text-gray-600">
            ADM – A Massive Bet on Nutrition – 31 August 2021
          </p>
          <a href="/interviews/adm-a" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="vertical farming 2021-08-27">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Vertical Farming<br />
            <span class="text-sm text-gray-500">(2021-08-27)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Vertical Farming – Agtech Start-ups Innovating Across
          </p>
          <a href="/interviews/vertical-farming" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="hain celestial 2021-08-27">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Hain Celestial<br />
            <span class="text-sm text-gray-500">(2021-08-27)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Hain Celestial Group – Volume Trends’ Impact on Margins
          </p>
          <a href="/interviews/hain-celestial" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="us performance 2021-08-26">
          <h3 class="text-lg font-semibold mb-2">
            Interview: US Performance<br />
            <span class="text-sm text-gray-500">(2021-08-26)</span>
          </h3>
          <p class="text-sm text-gray-600">
            US Performance Apparel – Emerging Upstarts Gaining
          </p>
          <a href="/interviews/us-performance" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="coursera bolstering 2021-08-25">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Coursera Bolstering<br />
            <span class="text-sm text-gray-500">(2021-08-25)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Coursera – Bolstering Consumer & Enterprise &
          </p>
          <a href="/interviews/coursera-bolstering" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="us egg 2021-08-25">
          <h3 class="text-lg font-semibold mb-2">
            Interview: US Egg<br />
            <span class="text-sm text-gray-500">(2021-08-25)</span>
          </h3>
          <p class="text-sm text-gray-600">
            US Egg Sector Update – Inflation, Alternatives & Category
          </p>
          <a href="/interviews/us-egg" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="gildan activewear 2021-08-25">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Gildan Activewear<br />
            <span class="text-sm text-gray-500">(2021-08-25)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Gildan Activewear Inc – Restructuring Update & Supply
          </p>
          <a href="/interviews/gildan-activewear" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="herman miller 2021-08-24">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Herman Miller<br />
            <span class="text-sm text-gray-500">(2021-08-24)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Herman Miller – Refreshed Design Portfolio Post-Knoll
          </p>
          <a href="/interviews/herman-miller" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="skims channel 2021-08-24">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Skims Channel<br />
            <span class="text-sm text-gray-500">(2021-08-24)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Skims – Channel Footprint & Retail Strategy – 24 August
          </p>
          <a href="/interviews/skims-channel" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="canada goose 2021-08-20">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Canada Goose<br />
            <span class="text-sm text-gray-500">(2021-08-20)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Canada Goose – Shifting Away from Third-party Retailers
          </p>
          <a href="/interviews/canada-goose" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="ingredion a 2021-08-20">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Ingredion A<br />
            <span class="text-sm text-gray-500">(2021-08-20)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Ingredion – A Hyper Focus on Speciality Ingredients – 20
          </p>
          <a href="/interviews/ingredion-a" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="purple innovation 2021-08-18">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Purple Innovation<br />
            <span class="text-sm text-gray-500">(2021-08-18)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Purple Innovation Inc – Competitive Positioning Across
          </p>
          <a href="/interviews/purple-innovation" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="natures fynd 2021-08-18">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Natures Fynd<br />
            <span class="text-sm text-gray-500">(2021-08-18)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Nature’s Fynd – Alternative Protein Through Fungi & USD
          </p>
          <a href="/interviews/natures-fynd" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="tupperware brands 2021-08-17">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Tupperware Brands<br />
            <span class="text-sm text-gray-500">(2021-08-17)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Tupperware Brands Corp – Global E-commerce Trends in
          </p>
          <a href="/interviews/tupperware-brands" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="kendra scott 2021-08-06">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Kendra Scott<br />
            <span class="text-sm text-gray-500">(2021-08-06)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Kendra Scott – Purchasing & Pricing Trends in Fine
          </p>
          <a href="/interviews/kendra-scott" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="hni corp 2021-08-05">
          <h3 class="text-lg font-semibold mb-2">
            Interview: HNI Corp<br />
            <span class="text-sm text-gray-500">(2021-08-05)</span>
          </h3>
          <p class="text-sm text-gray-600">
            HNI Corp – Repositioning Across Residential Buildings
          </p>
          <a href="/interviews/hni-corp" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="rent-a-center competitive 2021-08-05">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Rent-A-Center Competitive<br />
            <span class="text-sm text-gray-500">(2021-08-05)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Rent-A-Center – Competitive Positioning & Demand Amid
          </p>
          <a href="/interviews/rent-a" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="lovesac home 2021-08-04">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Lovesac Home<br />
            <span class="text-sm text-gray-500">(2021-08-04)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Lovesac – Home Furnishings Strength & Favorable Value
          </p>
          <a href="/interviews/lovesac-home" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="chobani ipo 2021-08-04">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Chobani IPO<br />
            <span class="text-sm text-gray-500">(2021-08-04)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Chobani IPO – Channel Position & Category Opportunities
          </p>
          <a href="/interviews/chobani-ipo" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="reynolds consumer 2021-07-30">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Reynolds Consumer<br />
            <span class="text-sm text-gray-500">(2021-07-30)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Reynolds Consumer Products – Brand Strength &
          </p>
          <a href="/interviews/reynolds-consumer" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="aarons inc 2021-07-29">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Aarons Inc<br />
            <span class="text-sm text-gray-500">(2021-07-29)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Aaron's Inc – Lease-to-own Market Update & Spinoff
          </p>
          <a href="/interviews/aarons-inc" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="fanatics inc 2021-07-29">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Fanatics Inc<br />
            <span class="text-sm text-gray-500">(2021-07-29)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Fanatics Inc – Sports Merchandising Dynamics &
          </p>
          <a href="/interviews/fanatics-inc" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="pabst blue 2021-07-28">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Pabst Blue<br />
            <span class="text-sm text-gray-500">(2021-07-28)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Pabst Blue Ribbon – Q3 2021 Update & On- & Off-
          </p>
          <a href="/interviews/pabst-blue" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="steve madden 2021-07-28">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Steve Madden<br />
            <span class="text-sm text-gray-500">(2021-07-28)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Steve Madden – Branded & Private Label Operating
          </p>
          <a href="/interviews/steve-madden" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="kellogg q3 2021-07-27">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Kellogg Q3<br />
            <span class="text-sm text-gray-500">(2021-07-27)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Kellogg Q3 2021 Update – Domestic Challenges &
          </p>
          <a href="/interviews/kellogg-q3" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="eat just 2021-07-26">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Eat Just<br />
            <span class="text-sm text-gray-500">(2021-07-26)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Eat Just – Plant-based Eggs & Lab-grown Innovations –
          </p>
          <a href="/interviews/eat-just" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="indigo ag 2021-07-23">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Indigo Ag<br />
            <span class="text-sm text-gray-500">(2021-07-23)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Indigo Ag Inc – Strategic Update & Competitive
          </p>
          <a href="/interviews/indigo-ag" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="multi-level marketing 2021-07-22">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Multi-level Marketing<br />
            <span class="text-sm text-gray-500">(2021-07-22)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Multi-level Marketing in Personal Care Products – New
          </p>
          <a href="/interviews/multi-level" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="caseys convenience 2021-07-21">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Caseys Convenience<br />
            <span class="text-sm text-gray-500">(2021-07-21)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Casey’s – Convenience Store Outlook & Q3 2021 Update
          </p>
          <a href="/interviews/caseys-convenience" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="spring education 2021-07-16">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Spring Education<br />
            <span class="text-sm text-gray-500">(2021-07-16)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Spring Education Group – Regional Drivers in For-profit
          </p>
          <a href="/interviews/spring-education" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="whirlpool corp 2021-07-15">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Whirlpool Corp<br />
            <span class="text-sm text-gray-500">(2021-07-15)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Whirlpool Corp – Consumer Demand For Household
          </p>
          <a href="/interviews/whirlpool-corp" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="us plant-based 2021-07-14">
          <h3 class="text-lg font-semibold mb-2">
            Interview: US Plant-based<br />
            <span class="text-sm text-gray-500">(2021-07-14)</span>
          </h3>
          <p class="text-sm text-gray-600">
            US Plant-based Meats – Competitive Landscape &
          </p>
          <a href="/interviews/us-plant" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="pvh corp 2021-07-14">
          <h3 class="text-lg font-semibold mb-2">
            Interview: PVH Corp<br />
            <span class="text-sm text-gray-500">(2021-07-14)</span>
          </h3>
          <p class="text-sm text-gray-600">
            PVH Corp – Portfolio Update & Brand Positioning – 14
          </p>
          <a href="/interviews/pvh-corp" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="gap retail 2021-07-13">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Gap Retail<br />
            <span class="text-sm text-gray-500">(2021-07-13)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Gap – Retail Market Positioning & Digital Replatforming –
          </p>
          <a href="/interviews/gap-retail" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="confectionery market 2021-07-07">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Confectionery Market<br />
            <span class="text-sm text-gray-500">(2021-07-07)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Confectionery Market Update – Product Innovation &
          </p>
          <a href="/interviews/confectionery-market" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="for-profit education 2021-06-30">
          <h3 class="text-lg font-semibold mb-2">
            Interview: For-profit Education<br />
            <span class="text-sm text-gray-500">(2021-06-30)</span>
          </h3>
          <p class="text-sm text-gray-600">
            For-profit Education Sector – Q3 2021 Update & Outlook –
          </p>
          <a href="/interviews/for-profit" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="vf corp 2021-06-30">
          <h3 class="text-lg font-semibold mb-2">
            Interview: VF Corp<br />
            <span class="text-sm text-gray-500">(2021-06-30)</span>
          </h3>
          <p class="text-sm text-gray-600">
            VF Corp – Consumer Shift to Lifestyle Brands – 30 June
          </p>
          <a href="/interviews/vf-corp" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="north american 2021-06-29">
          <h3 class="text-lg font-semibold mb-2">
            Interview: North American<br />
            <span class="text-sm text-gray-500">(2021-06-29)</span>
          </h3>
          <p class="text-sm text-gray-600">
            North American Athletic Footwear Update – 29 June 2021
          </p>
          <a href="/interviews/north-american" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="northeast foods 2021-06-29">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Northeast Foods<br />
            <span class="text-sm text-gray-500">(2021-06-29)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Northeast Foods – Fresh Bakery Trends in Foodservice –
          </p>
          <a href="/interviews/northeast-foods" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="steelcase office 2021-06-28">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Steelcase Office<br />
            <span class="text-sm text-gray-500">(2021-06-28)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Steelcase – Office Furniture Recovery Prospects amid
          </p>
          <a href="/interviews/steelcase-office" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="wolverine world 2021-06-25">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Wolverine World<br />
            <span class="text-sm text-gray-500">(2021-06-25)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Wolverine World Wide Inc – Brand Positioning Amid Retail
          </p>
          <a href="/interviews/wolverine-world" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="simmons foods 2021-06-25">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Simmons Foods<br />
            <span class="text-sm text-gray-500">(2021-06-25)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Simmons Foods – Strategic Update & Private Label Pet
          </p>
          <a href="/interviews/simmons-foods" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="chegg robust 2021-06-24">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Chegg Robust<br />
            <span class="text-sm text-gray-500">(2021-06-24)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Chegg – Robust Demand For Direct-to-student Learning –
          </p>
          <a href="/interviews/chegg-robust" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="heartland food 2021-06-22">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Heartland Food<br />
            <span class="text-sm text-gray-500">(2021-06-22)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Heartland Food Products Group – Sweetener Trends &
          </p>
          <a href="/interviews/heartland-food" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="usana health 2021-06-18">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Usana Health<br />
            <span class="text-sm text-gray-500">(2021-06-18)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Usana Health Sciences – Multi-level Marketing Operating
          </p>
          <a href="/interviews/usana-health" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="natures sunshine 2021-06-18">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Natures Sunshine<br />
            <span class="text-sm text-gray-500">(2021-06-18)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Nature’s Sunshine Products – Nutritional Product Trends –
          </p>
          <a href="/interviews/natures-sunshine" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="andersons strategic 2021-06-17">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Andersons Strategic<br />
            <span class="text-sm text-gray-500">(2021-06-17)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Andersons – Strategic Update Amid Strong Commodities
          </p>
          <a href="/interviews/andersons-strategic" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="north america 2021-06-17">
          <h3 class="text-lg font-semibold mb-2">
            Interview: North America<br />
            <span class="text-sm text-gray-500">(2021-06-17)</span>
          </h3>
          <p class="text-sm text-gray-600">
            North America Condiments & Sauces – H2 2021 Update –
          </p>
          <a href="/interviews/north-america" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="cs wholesale 2021-06-16">
          <h3 class="text-lg font-semibold mb-2">
            Interview: CS Wholesale<br />
            <span class="text-sm text-gray-500">(2021-06-16)</span>
          </h3>
          <p class="text-sm text-gray-600">
            C&S Wholesale Grocers – Strategic Update Amid Slowing
          </p>
          <a href="/interviews/cs-wholesale" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="albertsons supermarket 2021-06-16">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Albertsons Supermarket<br />
            <span class="text-sm text-gray-500">(2021-06-16)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Albertsons – Supermarket Outlook – 16 June 2021
          </p>
          <a href="/interviews/albertsons-supermarket" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="us poultry 2021-06-11">
          <h3 class="text-lg font-semibold mb-2">
            Interview: US Poultry<br />
            <span class="text-sm text-gray-500">(2021-06-11)</span>
          </h3>
          <p class="text-sm text-gray-600">
            US Poultry Producers – Consumer Trends & Operating
          </p>
          <a href="/interviews/us-poultry" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="sysco to 2021-06-10">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Sysco to<br />
            <span class="text-sm text-gray-500">(2021-06-10)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Sysco to Acquire Greco & Sons – Foodservice Distributor
          </p>
          <a href="/interviews/sysco-to" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="farmers business 2021-06-10">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Farmers Business<br />
            <span class="text-sm text-gray-500">(2021-06-10)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Farmers Business Network – Technology Adoption in US
          </p>
          <a href="/interviews/farmers-business" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="coca-cola north 2021-06-03">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Coca-Cola North<br />
            <span class="text-sm text-gray-500">(2021-06-03)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Coca-Cola North America Energy Drink Failures – Hard
          </p>
          <a href="/interviews/coca-cola" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="us sweet 2021-06-01">
          <h3 class="text-lg font-semibold mb-2">
            Interview: US Sweet<br />
            <span class="text-sm text-gray-500">(2021-06-01)</span>
          </h3>
          <p class="text-sm text-gray-600">
            US Sweet Snacking Update – Indulgence Here to Stay – 1
          </p>
          <a href="/interviews/us-sweet" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="vital farms 2021-06-01">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Vital Farms<br />
            <span class="text-sm text-gray-500">(2021-06-01)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Vital Farms – Pasture-raised Egg Demand – 1 June 2021
          </p>
          <a href="/interviews/vital-farms" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="general mills 2021-05-27">
          <h3 class="text-lg font-semibold mb-2">
            Interview: General Mills<br />
            <span class="text-sm text-gray-500">(2021-05-27)</span>
          </h3>
          <p class="text-sm text-gray-600">
            General Mills to Acquire Tyson’s Pet Treat Business for
          </p>
          <a href="/interviews/general-mills" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="quanex building 2021-05-27">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Quanex Building<br />
            <span class="text-sm text-gray-500">(2021-05-27)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Quanex Building Products – Strategic Update Amid
          </p>
          <a href="/interviews/quanex-building" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="us ice 2021-05-27">
          <h3 class="text-lg font-semibold mb-2">
            Interview: US Ice<br />
            <span class="text-sm text-gray-500">(2021-05-27)</span>
          </h3>
          <p class="text-sm text-gray-600">
            US Ice Cream Sector Update – Competitive Dynamics &
          </p>
          <a href="/interviews/us-ice" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="beef cattle 2021-05-26">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Beef Cattle<br />
            <span class="text-sm text-gray-500">(2021-05-26)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Beef Cattle Production – Capacity, Feed Supply &
          </p>
          <a href="/interviews/beef-cattle" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="pabst blue 2021-05-26">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Pabst Blue<br />
            <span class="text-sm text-gray-500">(2021-05-26)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Pabst Blue Ribbon – US Brewing & On-premise Recovery
          </p>
          <a href="/interviews/pabst-blue" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="energizer holdings 2021-05-24">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Energizer Holdings<br />
            <span class="text-sm text-gray-500">(2021-05-24)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Energizer Holdings – Strategic Update Amid Elevated
          </p>
          <a href="/interviews/energizer-holdings" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="landec curation 2021-05-17">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Landec Curation<br />
            <span class="text-sm text-gray-500">(2021-05-17)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Landec – Curation Foods Missteps & Profitability Outlook
          </p>
          <a href="/interviews/landec-curation" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="capri holdings 2021-05-17">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Capri Holdings<br />
            <span class="text-sm text-gray-500">(2021-05-17)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Capri Holdings – Michael Kors Domestic Challenges &
          </p>
          <a href="/interviews/capri-holdings" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="scotts miracle-gro 2021-05-14">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Scotts Miracle-Gro<br />
            <span class="text-sm text-gray-500">(2021-05-14)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Scotts Miracle-Gro – 2021 Strategic Update – 14 May
          </p>
          <a href="/interviews/scotts-miracle" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="rite aid 2021-05-13">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Rite Aid<br />
            <span class="text-sm text-gray-500">(2021-05-13)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Rite Aid – Fundamental Rethink of Pharmacy – 13 May
          </p>
          <a href="/interviews/rite-aid" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="cal-maine foods 2021-05-13">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Cal-Maine Foods<br />
            <span class="text-sm text-gray-500">(2021-05-13)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Cal-Maine Foods – Egg Demand Outlook – 13 May 2021
          </p>
          <a href="/interviews/cal-maine" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="spectrum brands 2021-05-12">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Spectrum Brands<br />
            <span class="text-sm text-gray-500">(2021-05-12)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Spectrum Brands – Retailer Strategy & Household
          </p>
          <a href="/interviews/spectrum-brands" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="tapestry inc 2021-05-12">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Tapestry Inc<br />
            <span class="text-sm text-gray-500">(2021-05-12)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Tapestry Inc – Modern Luxury Update – 12 May 2021
          </p>
          <a href="/interviews/tapestry-inc" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="canada goose 2021-05-10">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Canada Goose<br />
            <span class="text-sm text-gray-500">(2021-05-10)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Canada Goose – Strategic Update & D2C Growth in China
          </p>
          <a href="/interviews/canada-goose" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="cabinetworks competitive 2021-05-06">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Cabinetworks Competitive<br />
            <span class="text-sm text-gray-500">(2021-05-06)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Cabinetworks – Competitive Positioning Amid Potential
          </p>
          <a href="/interviews/cabinetworks-competitive" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="herman miller 2021-05-05">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Herman Miller<br />
            <span class="text-sm text-gray-500">(2021-05-05)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Herman Miller & Knoll USD 1.8bn Tie-up – Deal Synergies
          </p>
          <a href="/interviews/herman-miller" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="keurig dr 2021-05-04">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Keurig Dr<br />
            <span class="text-sm text-gray-500">(2021-05-04)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Keurig Dr Pepper – Strategic Update & Global Distribution
          </p>
          <a href="/interviews/keurig-dr" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="us foods 2021-05-04">
          <h3 class="text-lg font-semibold mb-2">
            Interview: US Foods<br />
            <span class="text-sm text-gray-500">(2021-05-04)</span>
          </h3>
          <p class="text-sm text-gray-600">
            US Foods Inc – Positioning for Market Share Gains
          </p>
          <a href="/interviews/us-foods" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="hormel foods 2021-04-29">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Hormel Foods<br />
            <span class="text-sm text-gray-500">(2021-04-29)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Hormel Foods – 2021 Strategic Update – 29 April 2021
          </p>
          <a href="/interviews/hormel-foods" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="ralph lauren 2021-04-29">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Ralph Lauren<br />
            <span class="text-sm text-gray-500">(2021-04-29)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Ralph Lauren – Restructuring & Expansion Amid Growth
          </p>
          <a href="/interviews/ralph-lauren" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="central garden 2021-04-28">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Central Garden<br />
            <span class="text-sm text-gray-500">(2021-04-28)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Central Garden & Pet Co – Strategic Update & Pet
          </p>
          <a href="/interviews/central-garden" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="us fresh 2021-04-27">
          <h3 class="text-lg font-semibold mb-2">
            Interview: US Fresh<br />
            <span class="text-sm text-gray-500">(2021-04-27)</span>
          </h3>
          <p class="text-sm text-gray-600">
            US Fresh & Frozen Bakery Sector – Competitive
          </p>
          <a href="/interviews/us-fresh" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="columbia sportswear 2021-04-27">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Columbia Sportswear<br />
            <span class="text-sm text-gray-500">(2021-04-27)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Columbia Sportswear – D2C Playbook & Strategic Shake-
          </p>
          <a href="/interviews/columbia-sportswear" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="seaboard strategic 2021-04-22">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Seaboard Strategic<br />
            <span class="text-sm text-gray-500">(2021-04-22)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Seaboard – Strategic Update, Operational Challenges &
          </p>
          <a href="/interviews/seaboard-strategic" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="appharvest goes 2021-04-22">
          <h3 class="text-lg font-semibold mb-2">
            Interview: AppHarvest Goes<br />
            <span class="text-sm text-gray-500">(2021-04-22)</span>
          </h3>
          <p class="text-sm text-gray-600">
            AppHarvest Goes Public in USD 1bn SPAC Listing –
          </p>
          <a href="/interviews/appharvest-goes" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="gildan activewear 2021-04-21">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Gildan Activewear<br />
            <span class="text-sm text-gray-500">(2021-04-21)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Gildan Activewear – Branded Turnaround Strategy – 21
          </p>
          <a href="/interviews/gildan-activewear" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="plant-based ingredients 2021-04-21">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Plant-based Ingredients<br />
            <span class="text-sm text-gray-500">(2021-04-21)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Plant-based Ingredients Sector – Drivers Behind
          </p>
          <a href="/interviews/plant-based" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="movado group 2021-04-19">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Movado Group<br />
            <span class="text-sm text-gray-500">(2021-04-19)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Movado Group – A Younger Consumer with Appetite for
          </p>
          <a href="/interviews/movado-group" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="hanesbrands championing 2021-04-15">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Hanesbrands Championing<br />
            <span class="text-sm text-gray-500">(2021-04-15)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Hanesbrands – Championing Growth & Past PPE
          </p>
          <a href="/interviews/hanesbrands-championing" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="meat alternatives 2021-04-15">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Meat Alternatives<br />
            <span class="text-sm text-gray-500">(2021-04-15)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Meat Alternatives Sector – R&D Innovation & Pricing
          </p>
          <a href="/interviews/meat-alternatives" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="kroger – 2021-04-14">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Kroger –<br />
            <span class="text-sm text-gray-500">(2021-04-14)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Kroger – Post-coronavirus Retail Sales Outlook – 14 April
          </p>
          <a href="/interviews/kroger" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="adm (archer 2021-04-13">
          <h3 class="text-lg font-semibold mb-2">
            Interview: ADM (Archer<br />
            <span class="text-sm text-gray-500">(2021-04-13)</span>
          </h3>
          <p class="text-sm text-gray-600">
            ADM (Archer Daniels Midland) – Pivot to High-margin
          </p>
          <a href="/interviews/adm-archer" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="nike – 2021-04-09">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Nike –<br />
            <span class="text-sm text-gray-500">(2021-04-09)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Nike – North America Recovery & China Momentum – 9
          </p>
          <a href="/interviews/nike" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="healthy snacking 2021-04-09">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Healthy Snacking<br />
            <span class="text-sm text-gray-500">(2021-04-09)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Healthy Snacking – US Consumer Trends & Outlook – 9
          </p>
          <a href="/interviews/healthy-snacking" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="pilgrim’s pride 2021-03-31">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Pilgrim’s Pride<br />
            <span class="text-sm text-gray-500">(2021-03-31)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Pilgrim’s Pride – North American Strategic Update – 31
          </p>
          <a href="/interviews/pilgrims-pride" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="tyson foods 2021-03-30">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Tyson Foods<br />
            <span class="text-sm text-gray-500">(2021-03-30)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Tyson Foods – Strategic Update & Traditional Protein
          </p>
          <a href="/interviews/tyson-foods" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="us non-alcoholic 2021-03-26">
          <h3 class="text-lg font-semibold mb-2">
            Interview: US Non-alcoholic<br />
            <span class="text-sm text-gray-500">(2021-03-26)</span>
          </h3>
          <p class="text-sm text-gray-600">
            US Non-alcoholic Beverages – Innovation & Sustainability
          </p>
          <a href="/interviews/us-non" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="kraft heinz 2021-03-25">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Kraft Heinz<br />
            <span class="text-sm text-gray-500">(2021-03-25)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Kraft Heinz Strategic Update – Balancing Margin &
          </p>
          <a href="/interviews/kraft-heinz" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="utz – 2021-03-24">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Utz –<br />
            <span class="text-sm text-gray-500">(2021-03-24)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Utz – Strategic Update & M&A Value Creation
          </p>
          <a href="/interviews/utz" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="us pet 2021-03-19">
          <h3 class="text-lg font-semibold mb-2">
            Interview: US Pet<br />
            <span class="text-sm text-gray-500">(2021-03-19)</span>
          </h3>
          <p class="text-sm text-gray-600">
            US Pet Food Sector – Demand Outlook & Innovation
          </p>
          <a href="/interviews/us-pet" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="fresh del 2021-03-17">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Fresh Del<br />
            <span class="text-sm text-gray-500">(2021-03-17)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Fresh Del Monte Produce Inc – US Strategic Update Amid
          </p>
          <a href="/interviews/fresh-del" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="flowers foods 2021-03-11">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Flowers Foods<br />
            <span class="text-sm text-gray-500">(2021-03-11)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Flowers Foods Inc – Strategic Update & Competitive
          </p>
          <a href="/interviews/flowers-foods" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="us frozen 2021-03-10">
          <h3 class="text-lg font-semibold mb-2">
            Interview: US Frozen<br />
            <span class="text-sm text-gray-500">(2021-03-10)</span>
          </h3>
          <p class="text-sm text-gray-600">
            US Frozen Aisle Industry – H1 2021 Update – 10 March
          </p>
          <a href="/interviews/us-frozen" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="hain celestial 2021-03-04">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Hain Celestial<br />
            <span class="text-sm text-gray-500">(2021-03-04)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Hain Celestial – Continued Domestic Tailwinds & Mid-term
          </p>
          <a href="/interviews/hain-celestial" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="ingredion – 2021-03-03">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Ingredion –<br />
            <span class="text-sm text-gray-500">(2021-03-03)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Ingredion – Strategic Update & Mid-term Outlook – 3
          </p>
          <a href="/interviews/ingredion" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="simply good 2021-02-26">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Simply Good<br />
            <span class="text-sm text-gray-500">(2021-02-26)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Simply Good Foods – Strategic Update & Mid-term
          </p>
          <a href="/interviews/simply-good" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="j&j snack 2021-02-25">
          <h3 class="text-lg font-semibold mb-2">
            Interview: J&J Snack<br />
            <span class="text-sm text-gray-500">(2021-02-25)</span>
          </h3>
          <p class="text-sm text-gray-600">
            J&J Snack Foods – Strategic Update & Mid-term Outlook
          </p>
          <a href="/interviews/jj-snack" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="treehouse foods 2021-02-22">
          <h3 class="text-lg font-semibold mb-2">
            Interview: TreeHouse Foods<br />
            <span class="text-sm text-gray-500">(2021-02-22)</span>
          </h3>
          <p class="text-sm text-gray-600">
            TreeHouse Foods – Strategic Update & Mid-term Outlook
          </p>
          <a href="/interviews/treehouse-foods" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="kellogg – 2021-02-19">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Kellogg –<br />
            <span class="text-sm text-gray-500">(2021-02-19)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Kellogg – US Cereal & Snacking Business Strategic
          </p>
          <a href="/interviews/kellogg" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="hostess brands 2021-02-18">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Hostess Brands<br />
            <span class="text-sm text-gray-500">(2021-02-18)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Hostess Brands – Strategic Update & Mid-term Outlook –
          </p>
          <a href="/interviews/hostess-brands" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="general mills 2021-02-12">
          <h3 class="text-lg font-semibold mb-2">
            Interview: General Mills<br />
            <span class="text-sm text-gray-500">(2021-02-12)</span>
          </h3>
          <p class="text-sm text-gray-600">
            General Mills – US Snacks & Cereals – Strategic Update
          </p>
          <a href="/interviews/general-mills" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="the jm 2021-02-05">
          <h3 class="text-lg font-semibold mb-2">
            Interview: The JM<br />
            <span class="text-sm text-gray-500">(2021-02-05)</span>
          </h3>
          <p class="text-sm text-gray-600">
            The JM Smucker Co – US Coffee & Consumer Retail
          </p>
          <a href="/interviews/the-jm" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

        <div class="bg-white rounded shadow p-4" data-tags="lamb weston None">
          <h3 class="text-lg font-semibold mb-2">
            Interview: Lamb Weston<br />
            <span class="text-sm text-gray-500">(None)</span>
          </h3>
          <p class="text-sm text-gray-600">
            Lamb Weston – North American Recovery & Strategic
          </p>
          <a href="/interviews/lamb-weston" class="inline-block mt-3 bg-accent text-white py-1 px-3 rounded hover:bg-highlight transition-colors">
            View Details
          </a>
        </div>

    </div>

    </div>

  </section>

  <!-- Bar Chart: Industry Breakdown -->
  <section id="industry-breakdown" class="py-8 text-center">
    <div class="container mx-auto px-4">
      <div class="bg-white p-4 rounded shadow">
        <h3 class="text-xl font-serif font-bold text-accent mb-4"> </h3>
        <canvas id="barChart" width="400" height="300"></canvas>
      </div>
    </div>
  </section>

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
