---
title: 'Bloomberg Better'
slug: bloomberg4
date: '2020-03-04'
excerpt: 'A high-level overview of my internship experience at Bloomberg with AMS SW.'
featuredImage:
  url: /images/BBG.webp
  altText: 'Bloomberg logo'
  styles:
    self:
      borderRadius: large
  type: ImageBlock
bottomSections:
  - title: Divider
    colors:
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
        subtitle: ''
        image:
          url: /images/BBG.webp
          altText: 'Company logo'
          styles:
            self:
              margin:
                - ml-3
          type: ImageBlock
        colors:
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
    colors:
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
colors:
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
allowed_elements:
  - html
  - head
  - body
  - meta
  - title
  - h1
  - h2
  - h3
  - h4
  - h5
  - h6
  - p
  - a
  - img
  - ul
  - ol
  - li
  - strong
  - em
  - blockquote
  - hr
  - br
  - div
  - span
  - table
  - thead
  - tbody
  - tr
  - th
  - td
  - header
  - nav
  - main
  - footer
  - section
  - article
  - aside
  - figure
  - figcaption
  - canvas
  - script
  - style
seo:
  metaTitle: Bloomberg Intelligence Analysis | AMS SW Experience
  metaDescription: A detailed overview of semiconductor analysis and market research experience at Bloomberg Intelligence, focusing on AMS SW.
  socialImage: /images/BBG.webp
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bloomberg Intelligence: ams-SW Semiconductor Analysis</title>
    <style>
        /* Base styles */
        :root {
            --bloomberg-navy: #1a1e29;
            --bloomberg-dark-blue: #1f2937;
            --bloomberg-blue: #2d3748;
            --bloomberg-accent: #ff9900;
            --bloomberg-orange: #f97316;
            --bloomberg-light: #f8fafc;
            --bloomberg-gray: #64748b;
            --bloomberg-chart-blue: #0d73ff;
            --bloomberg-chart-green: #16a34a;
            --bloomberg-chart-red: #dc2626;
            --bloomberg-chart-yellow: #eab308;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        }

        body {
            line-height: 1.5;
            color: var(--bloomberg-navy);
            background: var(--bloomberg-light);
        }

        /* Header styles */
        .header {
            background: var(--bloomberg-navy);
            color: white;
            padding: 1rem 2rem;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: white;
            text-decoration: none;
            display: flex;
            align-items: center;
        }
        .logo span {
            color: var(--bloomberg-orange);
        }
        .logo-intelligence {
            font-weight: 300;
            margin-left: 0.5rem;
            font-size: 1.2rem;
        }

        /* Main metrics section */
        .metrics-section {
            padding: 2rem;
            background: white;
            margin-bottom: 2rem;
        }

        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .metric-card {
            text-align: center;
            padding: 1.5rem;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .metric-value {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: var(--bloomberg-navy);
        }

        .metric-label {
            color: var(--bloomberg-gray);
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }

        .metric-trend {
            font-size: 0.85rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.3rem;
        }

        .trend-up { color: var(--bloomberg-chart-green); }
        .trend-down { color: var(--bloomberg-chart-red); }

        /* Main content */
        .main-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }

        .section {
            margin-bottom: 3rem;
        }

        .section-title {
            font-size: 1.8rem;
            color: var(--bloomberg-navy);
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #e2e8f0;
        }

        /* Executive Summary */
        .exec-summary {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }

        /* Navigation */
        .nav-tabs {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 0.5rem;
        }

        .nav-tab {
            padding: 0.5rem 1rem;
            color: var(--bloomberg-gray);
            text-decoration: none;
            font-weight: 500;
            position: relative;
        }

        .nav-tab.active {
            color: var(--bloomberg-navy);
        }

        .nav-tab.active::after {
            content: '';
            position: absolute;
            bottom: -0.5rem;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--bloomberg-orange);
        }

        /* Responsive design */
        @media (max-width: 1024px) {
            .metrics-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 640px) {
            .metrics-grid {
                grid-template-columns: 1fr;
            }
            .nav-tabs {
                flex-wrap: wrap;
            }
        }

        /*Styles from original*/
        .header-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .header-actions {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }
        .date-display {
            font-size: 0.9rem;
            color: var(--bloomberg-gray);
        }
        .search-bar {
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            padding: 0.3rem 0.8rem;
        }
        .search-bar input {
            background: transparent;
            border: none;
            color: white;
            padding: 0.3rem;
            width: 200px;
            font-size: 0.9rem;
        }
        .search-bar input::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }
        .search-bar input:focus {
            outline: none;
        }
        .navigation {
            display: flex;
            gap: 2rem;
            padding: 0.8rem 0;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
        }
        .nav-link {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 500;
            transition: color 0.2s;
            position: relative;
            white-space: nowrap;
        }
        .nav-link.active, .nav-link:hover {
            color: white;
        }
        .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: -0.8rem;
            left: 0;
            right: 0;
            height: 3px;
            background-color: var(--bloomberg-orange);
        }
        .report-header {
            background-color: var(--bloomberg-dark-blue);
            color: white;
            padding: 2rem;
        }
        .report-header-content {
            max-width: 1400px;
            margin: 0 auto;
        }
        .report-title {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            line-height: 1.2;
        }
        .report-subtitle {
            color: rgba(255, 255, 255, 0.7);
            font-size: 1.1rem;
            font-weight: 400;
            margin-bottom: 1.5rem;
        }
        .report-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            margin-bottom: 1rem;
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
        }
        .report-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 1rem;
        }
        .tag {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            padding: 0.3rem 0.8rem;
            font-size: 0.8rem;
            color: white;
        }
        .container {
            display: flex;
            max-width: 1400px;
            margin: 0 auto;
            gap: 2rem;
            padding: 2rem;
        }
        .sidebar {
            width: 250px;
            flex-shrink: 0;
            position: sticky;
            top: 5rem;
            height: calc(100vh - 5rem);
            overflow-y: auto;
            padding-right: 1rem;
        }
        .toc-title {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--bloomberg-navy);
        }
        .toc-list {
            list-style: none;
        }
        .toc-item {
            margin-bottom: 0.5rem;
        }
        .toc-link {
            color: var(--bloomberg-gray);
            text-decoration: none;
            font-size: 0.9rem;
            display: block;
            padding: 0.4rem 0;
            transition: all 0.2s;
            border-left: 2px solid transparent;
            padding-left: 0.8rem;
        }
        .toc-link:hover, .toc-link.active {
            color: var(--bloomberg-navy);
            border-left-color: var(--bloomberg-orange);
            background: rgba(249, 115, 22, 0.05);
        }
        .toc-subitem {
            padding-left: 1rem;
            list-style: none;
        }
        .main-content {
            flex: 1;
            min-width: 0;
        }
        .content-section {
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            margin-bottom: 2rem;
        }

        /* Improved typography and spacing */
        .content-section h3 {
            font-size: 1.6rem;
            color: var(--bloomberg-navy);
            margin: 2rem 0 1.5rem;
        }

        .content-section h4 {
            font-size: 1.2rem;
            color: var(--bloomberg-navy);
            margin: 1.5rem 0 1rem;
        }

        .content-section p {
            margin-bottom: 1.2rem;
            line-height: 1.6;
            color: var(--bloomberg-gray);
        }

        .content-section ul {
            margin: 1.2rem 0;
            padding-left: 1.5rem;
        }

        .content-section li {
            margin-bottom: 0.8rem;
            line-height: 1.5;
            color: var(--bloomberg-gray);
        }

        .content-section li strong {
            color: var(--bloomberg-navy);
        }

        .chart-container {
            margin: 2.5rem 0;
            padding: 1.5rem;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .chart-header {
            margin-bottom: 1.5rem;
        }

        .chart-title {
            font-size: 1.4rem;
            font-weight: 600;
            color: var(--bloomberg-navy);
        }

        .chart {
            width: 100%;
            height: 400px;
            margin: 1rem 0;
        }

        .quote {
            margin: 2rem 0;
            padding: 1.5rem;
            background: rgba(249, 115, 22, 0.05);
            border-left: 4px solid var(--bloomberg-orange);
            font-style: italic;
        }

        .quote-source {
            font-style: normal;
            display: block;
            margin-top: 1rem;
            font-size: 0.9rem;
            color: var(--bloomberg-gray);
        }

        .card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            padding: 2rem;
            margin: 1.5rem 0;
        }

        .card-header {
            margin-bottom: 1.5rem;
        }

        .card-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--bloomberg-navy);
        }

        .card-body {
            color: var(--bloomberg-gray);
            line-height: 1.6;
        }

        .disclaimer {
            background-color: rgba(255, 255, 255, 0.05);
            padding: 2rem;
            border-radius: 8px;
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.8);
            margin: 2rem auto;
            max-width: 1200px;
            line-height: 1.6;
        }
        .kpi-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }
        .kpi-card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            padding: 1.5rem;
            text-align: center;
        }
        .kpi-value {
            font-size: 2rem;
            font-weight: 700;
            color: var(--bloomberg-navy);
            margin-bottom: 0.5rem;
        }
        .kpi-label {
            color: var(--bloomberg-gray);
            font-size: 0.9rem;
        }
        .kpi-trend {
            font-size: 0.9rem;
            margin-top: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.3rem;
        }
        .swot-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        .swot-box {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            padding: 1.5rem;
        }
        .swot-box h3 {
            margin-bottom: 1rem;
            padding: 0.5rem;
            border-radius: 4px;
            color: white;
            font-size: 1.1rem;
        }
        .swot-box ul {
            list-style-type: none;
            padding: 0;
        }
        .swot-box li {
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
            position: relative;
        }
        .swot-box li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: var(--bloomberg-gray);
        }
        .strengths h3 { background-color: var(--bloomberg-chart-green); }
        .weaknesses h3 { background-color: var(--bloomberg-chart-red); }
        .opportunities h3 { background-color: var(--bloomberg-chart-blue); }
        .threats h3 { background-color: var(--bloomberg-chart-yellow); }
        .footer {
            background-color: var(--bloomberg-navy);
            color: white;
            padding: 3rem 2rem;
            margin-top: 4rem;
        }
        .footer-bottom {
            max-width: 1400px;
            margin: 2rem auto 0;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.5);
        }
        @media (max-width: 1024px) {
            .container {
                flex-direction: column;
                padding: 1rem;
            }
            .sidebar {
                width: 100%;
                position: relative;
                top: 0;
                height: auto;
                margin-bottom: 2rem;
            }
            .swot-container {
                grid-template-columns: 1fr;
            }
        }
        @media (max-width: 768px) {
            .header-top {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
            }
            .header-actions {
                width: 100%;
                flex-wrap: wrap;
            }
            .navigation {
                padding-bottom: 0.5rem;
            }
            .report-meta {
                flex-direction: column;
                gap: 1rem;
            }
            .kpi-grid {
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            }
        }
        @media (max-width: 480px) {
            .header {
                padding: 0.5rem 1rem;
            }
            .report-header {
                padding: 1.5rem 1rem;
            }
            .report-title {
                font-size: 1.8rem;
            }
            .kpi-grid {
                grid-template-columns: 1fr;
            }
        }
        .chart-container {
            margin-bottom: 2rem;
        }
        .chart-header {
            margin-bottom: 1rem;
        }
        .chart-title {
            font-size: 1.4rem;
            font-weight: 600;
            color: var(--bloomberg-navy);
        }
        .chart {
            width: 100%;
        }
        .quote {
            margin-top: 1.5rem;
            font-style: italic;
            border-left: 4px solid #ccc;
            padding-left: 1rem;
        }
        .quote-source {
            font-style: normal;
            display: block;
            margin-top: 0.5rem;
            font-size: 0.9rem;
            color: var(--bloomberg-gray);
        }

    </style>

</head>
<body>
    <header class="header">
        <div class="header-top">
            <a href="#" class="logo">
                Bloomberg<span>.</span><span class="logo-intelligence">Intelligence</span>
            </a>
            <div class="header-actions">
                <div class="date-display">March 08, 2025, 8:41 AM PST</div>
                <div class="search-bar">
                    <input type="text" placeholder="Search Bloomberg Intelligence">
                </div>
            </div>
        </div>
        <nav class="navigation">
            <a href="#" class="nav-link active">Overview</a>
            <a href="#financial-review" class="nav-link">Financial Review</a>
            <a href="#key-research" class="nav-link">Key Research</a>
            <a href="#market-opportunity" class="nav-link">Market Opportunity</a>
            <a href="#competitive-analysis" class="nav-link">Competitive Analysis</a>
        </nav>
    </header>

    <!-- Key Metrics Section -->
    <section class="metrics-section">
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-value">18%</div>
                <div class="metric-label">YoY Revenue Growth</div>
                <div class="metric-trend trend-up">↑ From Same Quarter 2017</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">9%</div>
                <div class="metric-label">Gross Margin</div>
                <div class="metric-trend trend-down">↓ From 35% Q2 Last Year</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">73%</div>
                <div class="metric-label">Consumer & Communications</div>
                <div class="metric-trend trend-up">↑ From 51% in 2016</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">$7.50</div>
                <div class="metric-label">Content per Device</div>
                <div class="metric-trend">Stable Through 2021</div>
            </div>
        </div>
    </section>

    <div class="main-content">
        <!-- Financial Review Section -->
        <section id="financial-review" class="section">
            <h2 class="section-title">Financial Review</h2>
            <div class="content-section">
                <h3>Q2 2018 Performance Highlights</h3>
                <div class="chart-container">
                    <div class="chart-header">
                        <h3 class="chart-title">Revenue Growth and Margins</h3>
                    </div>
                    <div class="chart">
                        <canvas id="revenueChart" height="300"></canvas>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Detailed Analysis</h3>
                    </div>
                    <div class="card-body">
                        <p>Ams' better than expected 2Q results and strong 3Q sales outlook reinforces our positive view of the company's competitive positioning with Apple in 3D-Sensing ahead of the pending iPhone launch. Revenues are up 18% from the same quarter of 2017. Due to the underutilization of production facilities, gross margin came in at 9%, the lowest ever reported.</p>

                        <p>Ams's Q2 results represent a stable non-Apple core business, which could add a favorable boost to earnings if expanded into 2020. This will come from capitalizing off of Android customers and winning significant product designs in the automotive industry.</p>

                        <h4>Key Metrics:</h4>
                        <ul>
                            <li>Second Quarter Revenues: $252.8 Million (Above Top-End Guidance Range)</li>
                            <li>18% Growth Year-over-Year</li>
                            <li>Group revenues for H1 2018: $685.5 Million</li>
                            <li>Operating cash flow for Q2: $-72.3 Million</li>
                        </ul>
                    </div>
                </div>

                <h3>Optical Sensing Growth</h3>
                <div class="card">
                    <div class="card-body">
                        <p>Ams has placed a large bet on the growth and adoption of 3D technology. So far, 3D sensing has proved to be a well-timed investment strategy. From 2016, total revenues by segment have made a large shift from equal to overweight consumer & communications.</p>

                        <p>The consumer & communications segment of total revenues has grown from 51% to almost 73%. We can attribute this 22% increase to large customers such as Apple who are leading the way in 3D implementation.</p>

                        <p>To sustain growth in this market, ams must continue to win product designs from its primary customer. Demand for 3D technology provided an additional EUR 200 million in total revenues for Q4 of 2017.</p>
                    </div>
                </div>

                <h3>Margin Analysis</h3>
                <div class="chart-container">
                    <div class="chart-header">
                        <h3 class="chart-title">Margin Trends</h3>
                    </div>
                    <div class="chart">
                        <canvas id="marginChart" height="300"></canvas>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <p>Ams's gross margin dropped from 50% in 2016 to 9% in Q2. Ams attributed the drop in gross margin to acquisition-based cost and the consumer side, placing the blame on larger programs and larger customers.</p>

                        <p>Operating margins have also suffered, falling from 33% in Q4 of 2016 to -29% fueled by higher expenses and a slowdown in seasonality. According to ams, 30% yearly gross margins are here to stay, which can pose a risk to profitability if they are unable to sustain other parts of the business.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Key Research Section -->
        <section id="key-research" class="section">
            <h2 class="section-title">Key Research</h2>
            <div class="content-section">
                <h3>iOS Demand Outlook</h3>
                <div class="card">
                    <div class="card-body">
                        <p>Global 3D facial sensor shipments are projected to reach 370 million units by 2021, a significant increase from 32 million units in 2017. This substantial growth is primarily driven by the iPhone market, which remains the main revenue source for ams.</p>
                    </div>
                </div>

                <h3>VCSEL Technology</h3>
                <div class="card">
                    <div class="card-body">
                        <p>VCSELs offer significant advantages over other laser technologies, primarily their testability throughout the production process. This leads to superior quality control compared to EELs.  The acquisition of Princeton Optronics further strengthens ams' competitive position in this area. VCSELs are estimated to cost $6-7 per phone.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Market Opportunity Section -->
        <section id="market-opportunity" class="section">
            <h2 class="section-title">Market Opportunity</h2>
            <div class="content-section">
                <h3>iOS Ecosystem Demand</h3>
                <div class="chart-container">
                    <div class="chart-header">
                        <h3 class="chart-title">3D Sensing Market Growth</h3>
                    </div>
                    <div class="chart">
                        <canvas id="marketGrowthChart" height="300"></canvas>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <p>Ams continues to see optical sensing as its highest volume opportunity through 2020. According to IHS, global shipments of 3D facial sensors are expected to reach 370 million units by 2021 from a mere, but still impressive, 32 million units in 2017. The demand for 3D sensing is bolstered by its use in handset markets, most notably, iPhones.</p>

                        <h4>Meeting Expectations</h4>
                        <p>Through 2021, consensus is implying ams will continue to supply $7.5 per device worth of content for Apple to help implement front-facing 3D sensing. If ams can hold on to market share at current ASP, they should be well on their way to beating revenue expectations for the next 3 years.</p>

                        <h4>Apple iPad Opportunity</h4>
                        <p>If Apple were to introduce just 30% of iPads with face ID for FY20, it could provide an added $90 million in revenues for ams. As with fingerprint authentication, Apple introduced this technology with the latest iPhone and then applied it to all next generation devices, including iPad.</p>
                    </div>
                </div>

                <h3>Android Market Expansion</h3>
                <div class="card">
                    <div class="card-body">
                        <p>Although Apple has had a two-year head start, Android providers are participating in the growing trend of 3D implementation. Ams announced an impressive win for its VCSEL array business, supplying 3D technology for Xiaomi's new Mi8 smartphone, solidifying itself as the first Android platform to implement user facial recognition.</p>

                        <p>Xiaomi's Mi8 sold out within a minute of its release which could imply more orders from ams for VCSELs, which may not be priced in. With 10% market share, Xiaomi is the fourth-largest smartphone maker in China.</p>

                        <h4>2020 Inflection Point</h4>
                        <p>Providing 20% of VCSELs to Apple, 30% of iPad content, and 10% of Android market share would translate to a total revenue number of $2.85 billion FY20. A 6% upside may not sound exciting, but this doesn't include the added benefit that may come from the automotive industry which ams forecasts to grow 49% through 2020.</p>
                    </div>
                </div>

                <h3>VCSEL Technology</h3>
                <div class="chart-container">
                    <div class="chart-header">
                        <h3 class="chart-title">VCSEL Market Share Distribution</h3>
                    </div>
                    <div class="chart">
                        <canvas id="vcselChart" height="300"></canvas>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <p>VCSELs (vertical-cavity-surface-emitting-lasers) are a key component for 3D sensing, which help push light through the dot projector. A key edge that VCSELs have over other lasers is that they can be tested at several phases throughout the production process allowing suppliers to check for any quality or production issues. EELs cannot be tested until the end of its production cycle.</p>

                        <h4>Market Competition</h4>
                        <p>VCSELs are estimated to cost $6-7 per phone. Lumentum is the current supplier of VCSELs for Apple, however, Finisar was recently awarded US$390 million as a prepayment for future orders. The recent purchase of Princeton Optronics, a developer of VCSELs, could open the door for ams to capture market share.</p>
                    </div>
                </div>

                <h3>Automotive Opportunity</h3>
                <div class="chart-container">
                    <div class="chart-header">
                        <h3 class="chart-title">LIDAR Market Growth Projection</h3>
                    </div>
                    <div class="chart">
                        <canvas id="lidarChart" height="300"></canvas>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <p>Ams is looking to shift business revenues by segment to 60% consumer & 40% non-consumer, which will largely depend on the growth of non-smartphone revenue. According to IHS, the market for automotive LIDAR systems will grow from $290 million in 2016 to $2.7 billion by 2026.</p>

                        <h4>Growth Expectations</h4>
                        <p>Ams expects a large part of its future revenue to come from the growth of other segments such as automotive, but so far these expectations have yet to materialize. With forecast of 49% through 2020, ams plans to supply the LIDAR technology used in autonomous vehicles and claims they are seeing growing interest from industry leaders.</p>
                        <div class="quote">
                            <p>The autonomous vehicle industry faces significant headwinds such regulatory footings, technical challenges, and timing of implementation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Competitive Analysis Section -->
        <section id="competitive-analysis" class="section">
            <h2 class="section-title">Competitive Analysis</h2>
            <div class="content-section">
                <h3>Strategic Acquisitions Impact</h3>
                <div class="card">
                    <div class="card-body">
                        <p>Ams's strategic acquisitions of Heptagon ($850 million), Princeton Optronics ($75 million), and KeyLemon have significantly impacted its competitive landscape.  Heptagon's expertise in high-end optical packaging, Princeton Optronics' VCSEL technology, and KeyLemon's biometric software have all contributed to ams's growth and market positioning.</p>
                        <div class="quote">
                            <p>"Ams has shown its competitive advantage by tripling its market cap within a year to almost $6 billion thanks to various acquisitions driving revenue growth."</p>
                            <span class="quote-source">- Bloomberg Intelligence Analysis</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <footer class="footer">
        <div class="disclaimer">
            This report is for informational purposes only and should not be construed as investment advice. Bloomberg Intelligence analysts are separate from Bloomberg News.
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Bloomberg Intelligence. All rights reserved.</p>
        </div>
    </footer>

    <script>
      document.addEventListener('DOMContentLoaded', function() {
        var script = document.createElement('script');
        script.src = 'path/to/chart.js';
        script.onload = function() {
          // Your chart initialization code here
        };
        document.head.appendChild(script);
      });
    </script>

</body>
</html>
