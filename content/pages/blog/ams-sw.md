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
allowed_elements:
  - meta
  - head
  - html
  - body
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
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bloomberg Intelligence: ams-SW Semiconductor Analysis</title>
    <style>
        /* Bloomberg Color Theme */
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
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        body {
            background-color: var(--bloomberg-light);
            color: var(--bloomberg-navy);
            line-height: 1.6;
        }

        /* Header Styles */
        .header {
            background-color: var(--bloomberg-navy);
            color: white;
            padding: 0.5rem 2rem;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .header-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
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

        .search-icon {
            color: rgba(255, 255, 255, 0.5);
            margin-right: 0.5rem;
        }

        .user-profile {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
        }

        .user-avatar {
            width: 30px;
            height: 30px;
            background: var(--bloomberg-accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 0.9rem;
        }

        .navigation {
            display: flex;
            gap: 2rem;
            padding: 0.8rem 0;
        }

        .nav-link {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 500;
            transition: color 0.2s;
            position: relative;
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

        /* Report Header */
        .report-header {
            background-color: var(--bloomberg-dark-blue);
            color: white;
            padding: 2rem;
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
            gap: 2rem;
            margin-bottom: 1rem;
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
        }

        .report-meta div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .report-tags {
            display: flex;
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

        /* Main Layout */
        .container {
            display: flex;
            max-width: 1400px;
            margin: 0 auto;
            padding: 0;
        }

        .sidebar {
            width: 250px;
            background: white;
            padding: 2rem 1rem;
            position: sticky;
            top: 5rem;
            height: calc(100vh - 5rem);
            overflow-y: auto;
            border-right: 1px solid #e2e8f0;
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
            padding: 2rem;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        }

        /* Section Styles */
        .section {
            margin-bottom: 3rem;
        }

        .section-header {
            margin-bottom: 1.5rem;
            position: relative;
        }

        .section-title {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--bloomberg-navy);
            margin-bottom: 0.5rem;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 0.5rem;
        }

        .section-description {
            color: var(--bloomberg-gray);
            font-size: 1.1rem;
            line-height: 1.5;
            max-width: 800px;
        }

        /* Card Styles */
        .card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            padding: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .card-header {
            margin-bottom: 1rem;
        }

        .card-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--bloomberg-navy);
        }

        .card-subtitle {
            color: var(--bloomberg-gray);
            font-size: 0.9rem;
            margin-top: 0.2rem;
        }

        .card-body {
            color: var(--bloomberg-blue);
        }

        /* Grid Layout */
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
        }

        /* Chart Containers */
        .chart-container {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            padding: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .chart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .chart-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--bloomberg-navy);
        }

        .chart-controls {
            display: flex;
            gap: 1rem;
        }

        .chart-control {
            background: none;
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            padding: 0.3rem 0.6rem;
            font-size: 0.8rem;
            cursor: pointer;
            transition: all 0.2s;
        }

        .chart-control:hover, .chart-control.active {
            background: var(--bloomberg-navy);
            color: white;
            border-color: var(--bloomberg-navy);
        }

        .chart {
            height: 300px;
            position: relative;
        }

        .chart-placeholder {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f8fafc;
            border-radius: 4px;
        }

        /* KPI Cards */
        .kpi-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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

        .trend-up {
            color: var(--bloomberg-chart-green);
        }

        .trend-down {
            color: var(--bloomberg-chart-red);
        }

        /* Tables */
        .table-container {
            overflow-x: auto;
            margin-bottom: 2rem;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
        }

        th, td {
            padding: 0.8rem 1rem;
            text-align: left;
            border-bottom: 1px solid #e2e8f0;
        }

        th {
            background-color: #f8fafc;
            font-weight: 600;
            color: var(--bloomberg-navy);
        }

        tr:hover {
            background-color: #f8fafc;
        }

        /* Interactive Components */
        .interactive-container {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            padding: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .interactive-header {
            margin-bottom: 1rem;
        }

        .interactive-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--bloomberg-navy);
        }

        .interactive-description {
            color: var(--bloomberg-gray);
            font-size: 0.9rem;
            margin-top: 0.2rem;
        }

        .slider-container {
            margin: 2rem 0;
        }

        .slider-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }

        .slider-label {
            font-size: 0.9rem;
            font-weight: 500;
        }

        .slider-value {
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--bloomberg-navy);
        }

        .slider {
            width: 100%;
            height: 5px;
            -webkit-appearance: none;
            appearance: none;
            background: #e2e8f0;
            border-radius: 5px;
            outline: none;
        }

        .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 15px;
            height: 15px;
            background: var(--bloomberg-orange);
            border-radius: 50%;
            cursor: pointer;
        }

        .slider::-moz-range-thumb {
            width: 15px;
            height: 15px;
            background: var(--bloomberg-orange);
            border-radius: 50%;
            cursor: pointer;
        }

        /* Result display for interactive elements */
        .result-display {
            background: #f8fafc;
            padding: 1rem;
            border-radius: 4px;
            margin-top: 1rem;
            font-size: 1.1rem;
        }

        .result-value {
            font-weight: 600;
            color: var(--bloomberg-navy);
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
            .container {
                flex-direction: column;
            }

            .sidebar {
                width: 100%;
                position: relative;
                top: 0;
                height: auto;
                border-right: none;
                border-bottom: 1px solid #e2e8f0;
            }

            .grid {
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
                justify-content: space-between;
            }

            .navigation {
                overflow-x: auto;
                padding-bottom: 1rem;
                width: 100%;
            }

            .report-meta {
                flex-direction: column;
                gap: 0.5rem;
            }

            .grid {
                grid-template-columns: 1fr;
            }

            .kpi-grid {
                grid-template-columns: 1fr 1fr;
            }

            .chart-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
            }
        }

        /* Timeline component */
        .timeline {
            position: relative;
            margin: 2rem 0;
            padding-left: 2rem;
        }

        .timeline:before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 8px;
            width: 2px;
            background: #e2e8f0;
        }

        .timeline-item {
            position: relative;
            margin-bottom: 2rem;
        }

        .timeline-dot {
            position: absolute;
            left: -2.2rem;
            top: 0;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: var(--bloomberg-orange);
            z-index: 1;
        }

        .timeline-content {
            background: white;
            border-radius: 8px;
            padding: 1rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .timeline-date {
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--bloomberg-orange);
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .timeline-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--bloomberg-navy);
            margin-bottom: 0.5rem;
        }

        .timeline-description {
            color: var(--bloomberg-gray);
            font-size: 0.9rem;
        }

        /* SWOT Analysis */
        .swot-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .swot-box {
            padding: 1.5rem;
            border-
            padding: 1.5rem;
            border-radius: 8px;
        }

        .swot-box h3 {
            margin-top: 0;
            margin-bottom: 1rem;
            color: white;
            font-size: 1.1rem;
            padding: 0.5rem;
            border-radius: 4px;
        }

        .swot-box ul {
            margin: 0;
            padding-left: 1.5rem;
        }

        .swot-box li {
            margin-bottom: 0.5rem;
        }

        .strengths h3 {
            background-color: var(--bloomberg-chart-green);
        }

        .weaknesses h3 {
            background-color: var(--bloomberg-chart-red);
        }

        .opportunities h3 {
            background-color: var(--bloomberg-chart-blue);
        }

        .threats h3 {
            background-color: var(--bloomberg-chart-yellow);
        }

        /* Quote styles */
        .quote {
            background-color: rgba(249, 115, 22, 0.05);
            border-left: 4px solid var(--bloomberg-orange);
            padding: 1.5rem;
            margin: 1.5rem 0;
            font-style: italic;
            color: var(--bloomberg-navy);
        }

        .quote-source {
            display: block;
            margin-top: 1rem;
            font-style: normal;
            font-weight: 600;
            font-size: 0.9rem;
            color: var(--bloomberg-gray);
        }

        /* Footer styles */
        .footer {
            background-color: var(--bloomberg-navy);
            color: white;
            padding: 3rem 2rem;
            margin-top: 4rem;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 2rem;
            max-width: 1400px;
            margin: 0 auto;
        }

        .footer-column h3 {
            color: var(--bloomberg-orange);
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            font-weight: 600;
        }

        .footer-column ul {
            list-style: none;
            padding: 0;
        }

        .footer-column li {
            margin-bottom: 1rem;
        }

        .footer-column a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            transition: color 0.2s;
            font-size: 0.9rem;
        }

        .footer-column a:hover {
            color: white;
        }

        .footer-bottom {
            max-width: 1400px;
            margin: 2rem auto 0;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.5);
        }

        .footer-bottom a {
            color: rgba(255, 255, 255, 0.5);
            text-decoration: none;
            transition: color 0.2s;
        }

        .footer-bottom a:hover {
            color: white;
        }

        .disclaimer {
            background-color: rgba(255, 255, 255, 0.05);
            padding: 1.5rem;
            border-radius: 4px;
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.7);
            margin-top: 2rem;
            line-height: 1.5;
        }
    </style>

</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="header-top">
            <a href="#" class="logo">
                Bloomberg<span>.</span><span class="logo-intelligence">Intelligence</span>
            </a>
            <div class="header-actions">
                <div class="date-display">Friday, March 07, 2025, 8:41 AM PST</div>
                <div class="search-bar">
                    <div class="search-icon">&#128269;</div>
                    <input type="text" placeholder="Search Bloomberg Intelligence">
                </div>
                <div class="user-profile">
                    <div class="user-avatar">A</div>
                    <span>Nyree Hinton</span>
                </div>
            </div>
        </div>
        <nav class="navigation">
            <a href="#" class="nav-link active">Dashboard</a>
            <a href="#" class="nav-link">Research</a>
            <a href="#" class="nav-link">Companies</a>
            <a href="#" class="nav-link">Industries</a>
            <a href="#" class="nav-link">Data</a>
            <a href="#" class="nav-link">Events</a>
            <a href="#" class="nav-link">Settings</a>
        </nav>
    </header>

    <!-- Report Header -->
    <div class="report-header">
        <h1 class="report-title">ams-SW: Positioned to Benefit from 3D Sensor Growth</h1>
        <p class="report-subtitle">Comprehensive analysis of Apple's semiconductor supplier for facial recognition technology</p>

        <div class="report-meta">
            <div>
                <span>Analyst:</span>
                <strong>BI Intern</strong>
            </div>
            <div>
                <span>Published:</span>
                <strong>March 7, 2025</strong>
            </div>
            <div>
                <span>Sector:</span>
                <strong>Semiconductors</strong>
            </div>
            <div>
                <span>Region:</span>
                <strong>Global</strong>
            </div>
        </div>

        <div class="report-tags">
            <div class="tag">Apple Supplier</div>
            <div class="tag">3D Sensing</div>
            <div class="tag">Facial Recognition</div>
            <div class="tag">VCSEL</div>
            <div class="tag">TrueDepth</div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="container">
        <!-- Sidebar with Table of Contents -->
        <aside class="sidebar">
            <h2 class="toc-title">Table of Contents</h2>
            <ul class="toc-list">
                <li class="toc-item">
                    <a href="#executive-summary" class="toc-link active">Executive Summary</a>
                </li>
                <li class="toc-item">
                    <a href="#company-overview" class="toc-link">Company Overview</a>
                </li>
                <li class="toc-item">
                    <a href="#financial-analysis" class="toc-link">Financial Analysis</a>
                    <ul class="toc-subitem">
                        <li><a href="#revenue-trends" class="toc-link">Revenue Trends</a></li>
                        <li><a href="#margin-analysis" class="toc-link">Margin Analysis</a></li>
                        <li><a href="#earnings-forecast" class="toc-link">Earnings Forecast</a></li>
                    </ul>
                </li>
                <li class="toc-item">
                    <a href="#market-opportunity" class="toc-link">Market Opportunity</a>
                    <ul class="toc-subitem">
                        <li><a href="#ios-ecosystem" class="toc-link">iOS Ecosystem</a></li>
                        <li><a href="#vcsel-technology" class="toc-link">VCSEL Technology</a></li>
                        <li><a href="#android-market" class="toc-link">Android Market</a></li>
                        <li><a href="#automotive-opportunity" class="toc-link">Automotive Opportunity</a></li>
                    </ul>
                </li>
                <li class="toc-item">
                    <a href="#competitive-analysis" class="toc-link">Competitive Analysis</a>
                    <ul class="toc-subitem">
                        <li><a href="#strategic-acquisitions" class="toc-link">Strategic Acquisitions</a></li>
                        <li><a href="#competitor-comparison" class="toc-link">Competitor Comparison</a></li>
                        <li><a href="#swot-analysis" class="toc-link">SWOT Analysis</a></li>
                    </ul>
                </li>
                <li class="toc-item">
                    <a href="#valuation" class="toc-link">Valuation & Investment Thesis</a>
                </li>
                <li class="toc-item">
                    <a href="#conclusion" class="toc-link">Conclusion & Outlook</a>
                </li>
            </ul>
        </aside>

        <!-- Main Content Area -->
        <main class="main-content">
            <!-- Executive Summary -->
            <section id="executive-summary" class="section">
                <div class="section-header">
                    <h2 class="section-title">Executive Summary</h2>
                    <p class="section-description">ams is well positioned to take advantage of the growing demand for 3D technology implemented in Apple devices while also benefiting from Android adoption and self-driving car applications.</p>
                </div>

                <div class="kpi-grid">
                    <div class="kpi-card">
                        <div class="kpi-value">18%</div>
                        <div class="kpi-label">YoY Revenue Growth</div>
                        <div class="kpi-trend trend-up">↑ 3.5% vs Prior Quarter</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-value">9%</div>
                        <div class="kpi-label">Gross Margin (Q2)</div>
                        <div class="kpi-trend trend-down">↓ from 35% in Q2 last year</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-value">73%</div>
                        <div class="kpi-label">Consumer & Communications</div>
                        <div class="kpi-trend trend-up">↑ from 51% in 2016</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-value">$7.50</div>
                        <div class="kpi-label">Est. Content per iPhone</div>
                        <div class="kpi-trend">Stable ASP through 2021</div>
                    </div>
                </div>

                <div class="chart-container">
                    <div class="chart-header">
                        <h3 class="chart-title">ams-SW Stock Performance vs Semiconductor Index</h3>
                        <div class="chart-controls">
                            <button class="chart-control active">1Y</button>
                            <button class="chart-control">YTD</button>
                            <button class="chart-control">3M</button>
                            <button class="chart-control">1M</button>
                        </div>
                    </div>
                    <div class="chart">
                        <div class="chart-placeholder">
                            <img src="https://via.placeholder.com/800x300?text=Interactive+Stock+Performance+Chart" alt="Stock Performance Chart">
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Key Investment Highlights</h3>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li><strong>Prime Position:</strong> ams's strategic acquisitions have allowed it to outpace rivals in revenue growth, making it a favored semiconductor in optical sensors.</li>
                            <li><strong>Apple Relationship:</strong> Positioned to continue supplying $7.50 per device worth of content for Apple's 3D sensing technology through 2021.</li>
                            <li><strong>Growth Catalysts:</strong> Expansion opportunities in Android adoption (starting 2019-2020) and automotive LIDAR applications (projected market growth from $290M in 2016 to $2.7B by 2026).</li>
                            <li><strong>Technology Edge:</strong> VCSEL technology advantages over EELs, with testing capabilities throughout production process.</li>
                            <li><strong>Valuation Upside:</strong> With a historically higher P/E multiple of 30x, ams could reach $102.44 by FY20, representing 30% growth potential.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Company Overview -->
            <section id="company-overview" class="section">
                <div class="section-header">
                    <h2 class="section-title">Company Overview</h2>
                    <p class="section-description">ams, formerly known as austriamicrosystems, is a leading global designer and manufacturer of advanced sensor solutions.</p>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Company Background</h3>
                    </div>
                    <div class="card-body">
                        <p>ams AG (formerly austriamicrosystems) is a global leader in the design and manufacture of high-performance sensor solutions. The company focuses on solutions for optical, imaging, and audio sensing that enhance the user experience in consumer applications, improve safety in automotive, and address evolving industrial needs.</p>
                        <p>Headquartered in Premstätten, Austria, ams has established itself as a significant player in the semiconductor industry with a particular focus on optical sensing technologies. The company's 3D sensing solutions have gained significant traction following their integration into Apple's iPhone X for facial recognition capabilities.</p>
                    </div>
                </div>

                <div class="grid">
                    <div class="chart-container">
                        <div class="chart-header">
                            <h3 class="chart-title">Revenue Breakdown by Segment</h3>
                        </div>
                        <div class="chart">
                            <div class="chart-placeholder">
                                <img src="https://via.placeholder.com/400x300?text=Revenue+Segment+Pie+Chart" alt="Revenue Breakdown Chart">
                            </div>
                        </div>
                        <div class="card-body">
                            <p>Consumer & Communications: <strong>73%</strong></p>
                            <p>Automotive, Industrial & Medical: <strong>27%</strong></p>
                        </div>
                    </div>

                    <div class="chart-container">
                        <div class="chart-header">
                            <h3 class="chart-title">Geographic Distribution</h3>
                        </div>
                        <div class="chart">
                            <div class="chart-placeholder">
                                <img src="https://via.placeholder.com/400x300?text=Geographic+Distribution+Chart" alt="Geographic Distribution Chart">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Core Business Segments</h3>
                    </div>
                    <div class="card-body">
                        <h4>Consumer & Communications (73%)</h4>
                        <ul>
                            <li>3D Sensing Solutions for mobile devices</li>
                            <li>Optical Sensing technologies</li>
                            <li>Imaging sensors</li>
                            <li>Audio sensing components</li>
                        </ul>

                        <h4>Automotive, Industrial & Medical (27%)</h4>
                        <ul>
                            <li>LIDAR systems for autonomous vehicles</li>
                            <li>Advanced Driver Assistance Systems (ADAS)</li>
                            <li>Industrial automation sensors</li>
                            <li>Medical imaging technologies</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Financial Analysis -->
            <section id="financial-analysis" class="section">
                <div class="section-header">
                    <h2 class="section-title">Financial Analysis</h2>
                    <p class="section-description">Analysis of ams's financial performance highlights strong revenue growth despite margin challenges.</p>
                </div>

                <!-- Revenue Trends -->
                <section id="revenue-trends" class="section">
                    <h3 class="section-title">Revenue Trends</h3>

                    <div class="chart-container">
                        <div class="chart-header">
                            <h3 class="chart-title">Quarterly Revenue Performance</h3>
                            <div class="chart-controls">
                                <button class="chart-control active">Quarterly</button>
                                <button class="chart-control">Annual</button>
                                <button class="chart-control">YoY Growth</button>
                            </div>
                        </div>
                        <div class="chart">
                            <div class="chart-placeholder">
                                <img src="/images/true-depth-components.jpg" alt="Quarterly Revenue Chart">
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Q2 2018 Revenue Highlights</h3>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Q2 revenues reached $252.8 million, exceeding the top-end of guidance range</li>
                                <li>18% year-over-year growth compared to Q2 2017</li>
                                <li>Consumer & Communications segment now accounts for 73% of total revenues, up from 51% in 2016</li>
                                <li>First half 2018 revenues totaled $685.5 million</li>
                            </ul>

                            <div class="quote">
                                "ams's Q2 results represent a stable non-Apple core business, which could add a favorable boost to earnings if expanded into 2020. This will come from capitalizing off of Android customers and winning significant product designs in the automotive industry."
                                <span class="quote-source">- Bloomberg Intelligence Analysis</span>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Margin Analysis -->
                <section id="margin-analysis" class="section">
                    <h3 class="section-title">Margin Analysis</h3>

                    <div class="chart-container">
                        <div class="chart-header">
                            <h3 class="chart-title">Gross & Operating Margin Trends</h3>
                        </div>
                        <div class="chart">
                            <div class="chart-placeholder">
                                <img src="https://via.placeholder.com/800x400?text=Margin+Trends+Chart" alt="Margin
                    <div class="chart">
                            <div class="chart-placeholder">
                                <img src="https://via.placeholder.com/800x400?text=Margin+Trends+Chart" alt="Margin Trends Chart">
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Margin Performance</h3>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Gross margin significantly declined from 50% in 2016 to just 9% in Q2 2018</li>
                                <li>Operating margins fell from 33% in Q4 2016 to -29% in recent quarters</li>
                                <li>Margin deterioration attributed to acquisition-based costs and underutilization of manufacturing capacity in Singapore</li>
                                <li>Management guidance suggests 30% yearly gross margins as the new norm</li>
                                <li>Margin pressure remains a key risk to profitability if other business segments cannot compensate</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- Earnings Forecast -->
                <section id="earnings-forecast" class="section">
                    <h3 class="section-title">Earnings Forecast</h3>

                    <div class="chart-container">
                        <div class="chart-header">
                            <h3 class="chart-title">Quarterly Earnings Forecast Through 2020</h3>
                            <div class="chart-controls">
                                <button class="chart-control active">Quarterly</button>
                                <button class="chart-control">Annual</button>
                                <button class="chart-control">Consensus</button>
                            </div>
                        </div>
                        <div class="chart">
                            <div class="chart-placeholder">
                                <img src="/images/revenue-estimates.jpg" alt="Earnings Forecast Chart">
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">H2 2018 Outlook</h3>
                        </div>
                        <div class="card-body">
                            <p>Despite a weaker Q2, ams has indicated a strong H2 2018 ramp-up driven by optical sensing products:</p>
                            <ul>
                                <li>Q3 2018 revenues expected to reach $450-490 million</li>
                                <li>This represents 78-94% sequential growth and 46-59% year-on-year growth</li>
                                <li>iPhone production cycle is expected to provide significant boost to earnings</li>
                                <li>Consensus estimates imply ams will maintain a significant share of Apple's 3D sensing needs through 2020</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>

            <!-- Market Opportunity -->
            <section id="market-opportunity" class="section">
                <div class="section-header">
                    <h2 class="section-title">Market Opportunity</h2>
                    <p class="section-description">Analysis of ams's growth potential across iOS devices, Android adoption, and automotive applications.</p>
                </div>

                <!-- iOS Ecosystem -->
                <section id="ios-ecosystem" class="section">
                    <h3 class="section-title">iOS Ecosystem</h3>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Apple Relationship Analysis</h3>
                        </div>
                        <div class="card-body">
                            <p>Ams has established itself as a key supplier for Apple's 3D sensing technology, with significant revenue opportunities:</p>
                            <ul>
                                <li>Estimated content value of $7.50 per iPhone device through 2021</li>
                                <li>Global shipments of 3D facial sensors projected to reach 370 million units by 2021 (from 32 million in 2017)</li>
                                <li>Potential to maintain or increase market share at current ASP</li>
                                <li>iPhone implementation remains the primary revenue driver</li>
                            </ul>
                        </div>
                    </div>

                    <div class="interactive-container">
                        <div class="interactive-header">
                            <h3 class="interactive-title">iPad Face ID Adoption Calculator</h3>
                            <p class="interactive-description">Adjust the slider to see potential revenue impact from iPad Face ID adoption.</p>
                        </div>

                        <div class="slider-container">
                            <div class="slider-header">
                                <div class="slider-label">iPad Face ID Adoption Rate (FY20)</div>
                                <div class="slider-value">30%</div>
                            </div>
                            <input type="range" min="0" max="100" value="30" class="slider" id="ipadAdoptionSlider">
                        </div>

                        <div class="result-display">
                            Projected Additional Revenue: <span class="result-value">$90 Million</span>
                        </div>

                        <p class="interactive-description">Note: As with fingerprint authentication, Apple typically introduces new technology with iPhones before applying it to all next-generation devices including iPads.</p>
                    </div>
                </section>

                <!-- VCSEL Technology -->
                <section id="vcsel-technology" class="section">
                    <h3 class="section-title">VCSEL Technology</h3>

                    <div class="grid">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">VCSEL Technology Overview</h3>
                            </div>
                            <div class="card-body">
                                <p>Vertical-Cavity Surface-Emitting Lasers (VCSELs) are a key component for 3D sensing, helping push light through dot projectors for facial recognition systems. Key advantages include:</p>
                                <ul>
                                    <li>Can be tested at multiple phases throughout production process</li>
                                    <li>Allows for quality control checks throughout manufacturing</li>
                                    <li>More reliable than Edge-Emitting Lasers (EELs), which can only be tested after complete production</li>
                                    <li>Estimated cost of $6-7 per smartphone</li>
                                    <li>Princeton Optronics acquisition gives ams strong VCSEL capabilities</li>
                                </ul>
                            </div>
                        </div>

                        <div class="chart-container">
                            <div class="chart-header">
                                <h3 class="chart-title">TrueDepth Camera Components</h3>
                            </div>
                            <div class="chart">
                                <div class="chart-placeholder">
                                    <img src="https://via.placeholder.com/400x300?text=TrueDepth+Camera+Diagram" alt="TrueDepth Components">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">VCSEL Supplier Landscape</h3>
                        </div>
                        <div class="card-body">
                            <p>The VCSEL market is experiencing significant competition with several key players:</p>
                            <ul>
                                <li><strong>Lumentum:</strong> Current primary supplier of VCSELs for Apple's iPhones</li>
                                <li><strong>Finisar:</strong> Received $390 million prepayment from Apple for future orders</li>
                                <li><strong>Princeton Optronics (ams):</strong> Acquired by ams, has developed optimized VCSELs for over 10 years (formerly funded by US military)</li>
                                <li><strong>Philips Photonics:</strong> Working to overcome technical challenges for smartphone integration</li>
                            </ul>
                            <p>If ams can capture 20% of VCSEL market share from Apple, it would generate an additional $110 million in revenues by FY20.</p>
                        </div>
                    </div>
                </section>

                <!-- Android Market -->
                <section id="android-market" class="section">
                    <h3 class="section-title">Android Market Potential</h3>

                    <div class="chart-container">
                        <div class="chart-header">
                            <h3 class="chart-title">Android Adoption Timeline</h3>
                        </div>
                        <div class="chart">
                            <div class="chart-placeholder">
                                <img src="https://via.placeholder.com/800x300?text=Android+Adoption+Timeline+(2019-2020)" alt="Android Adoption Timeline">
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Xiaomi Mi8 Case Study</h3>
                        </div>
                        <div class="card-body">
                            <p>While Apple has had a two-year head start, Android providers are now adopting 3D implementation:</p>
                            <ul>
                                <li>Xiaomi's Mi8 is the first Android platform to implement facial recognition using ams technology</li>
                                <li>Initial Mi8 release sold out within minutes, suggesting strong demand</li>
                                <li>Xiaomi holds approximately 10% market share in China (fourth-largest smartphone maker)</li>
                                <li>This early win positions ams well for broader Android adoption in 2019-2020</li>
                            </ul>

                            <div class="quote">
                                "Although Apple has had a two-year head start, Android providers are participating in the growing trend of 3D implementation. Ams's win with Xiaomi solidifies it as a key player in this expanding market."
                                <span class="quote-source">- Bloomberg Intelligence Analysis</span>
                            </div>
                        </div>
                    </div>

                    <div class="interactive-container">
                        <div class="interactive-header">
                            <h3 class="interactive-title">Revenue Potential Calculator</h3>
                            <p class="interactive-description">Combined impact of VCSEL supply, iPad adoption, and Android market penetration</p>
                        </div>

                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Revenue Source</th>
                                        <th>FY19</th>
                                        <th>FY20</th>
                                        <th>FY21</th>
                                        <th>FY22</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Core Business</td>
                                        <td>$2,040.5M</td>
                                        <td>$2,406.1M</td>
                                        <td>$2,514.3M</td>
                                        <td>$2,640.9M</td>
                                    </tr>
                                    <tr>
                                        <td>VCSEL Revenue (20% Share)</td>
                                        <td>$221.0M</td>
                                        <td>$271.9M</td>
                                        <td>$276.9M</td>
                                        <td>$283.7M</td>
                                    </tr>
                                    <tr>
                                        <td>iPad Revenue</td>
                                        <td>$90.0M</td>
                                        <td>$105.0M</td>
                                        <td>$180.0M</td>
                                        <td>$195.0M</td>
                                    </tr>
                                    <tr>
                                        <td>Android Revenue</td>
                                        <td>$45.0M</td>
                                        <td>$72.0M</td>
                                        <td>$90.0M</td>
                                        <td>$108.0M</td>
                                    </tr>
                                    <tr class="result-row">
                                        <td><strong>Total Revenue</strong></td>
                                        <td><strong>$2,396.5M</strong></td>
                                        <td><strong>$2,855.0M</strong></td>
                                        <td><strong>$3,061.2M</strong></td>
                                        <td><strong>$3,227.6M</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Consensus Estimates</td>
                                        <td>$2,012.8M</td>
                                        <td>$2,392.2M</td>
                                        <td>$2,898.8M</td>
                                        <td>$3,188.5M</td>
                                    </tr>
                                    <tr>
                                        <td>Difference</td>
                                        <td>+$383.7M</td>
                                        <td>+$462.8M</td>
                                        <td>+$162.5M</td>
                                        <td>+$39.2M</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <!-- Automotive Opportunity -->
                <section id="automotive-opportunity" class="section">
                    <h3 class="section-title">Automotive Opportunity</h3>

                    <div class="chart-container">
                        <div class="chart-header">
                            <h3 class="chart-title">Automotive LIDAR Market Growth</h3>
                        </div>
                        <div class="chart">
                            <div class="chart-placeholder">
                                <img src="https://via.placeholder.com/800x300?text=LIDAR+Market+Growth+($290M+to+$2.7B)" alt="LIDAR Market Growth">
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Self-Driving Car Technology Integration</h3>
                        </div>
                        <div class="card-body">
                            <p>Ams is targeting a shift in business revenue to 60% consumer and 40% non-consumer segments, with automotive applications representing a significant opportunity:</p>
                            <ul>
                                <li>The market for automotive LIDAR systems projected to grow from $290 million in 2016 to $2.7 billion by 2026</li>
                                <li>Ams expects 49% growth through 2020 in its automotive segment</li>
                                <li>Company plans to supply LIDAR technology used in autonomous vehicles</li>
                                <li>Reports growing interest from industry leaders in automotive applications</li>
                            </ul>

                            <p>However, the autonomous vehicle industry faces significant challenges:</p>
                            <ul>
                                <li>Regulatory uncertainties and evolving standards</li>
                                <li>Technical challenges in sensor integration and reliability</li>
                                <li>Uncertain timing of widespread implementation</li>
                                <li>Intense competition from other sensor technology providers</li>
                            </ul>
                        </div>
                    </div>

                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <div class="timeline-date">2016</div>
                                <div class="timeline-title">LIDAR Market Valued at $290M</div>
                                <div class="timeline-description">Initial phase of automotive LIDAR implementation, primarily in high-end prototypes and research vehicles.</div>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <div class="timeline-date">2020</div>
                                <div class="timeline-title">ams Projects 49% Growth in Automotive</div>
                                <div class="timeline-description">Expected expansion of LIDAR technology in production vehicles and advanced driver assistance systems.</div>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <div class="timeline-date">2023</div>
                                <div class="timeline-title">Mainstream Adoption Expected</div>
                                <div class="timeline-description">LIDAR systems anticipated to become standard in mid-range vehicles as costs decrease and technology matures.</div>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <div class="timeline-date">2026</div>
                                <div class="timeline-title">Market Projected to Reach $2.7B</div>
                                <div class="timeline-description">Full industry adoption with LIDAR becoming essential for Level 3+ autonomous driving capabilities.</div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <!-- Competitive Analysis -->
            <section id="competitive-analysis" class="section">
                <div class="section-header">
                    <h2 class="section-title">Competitive Analysis</h2>
                    <p class="section-description">Evaluation of ams's strategic acquisitions, competitor landscape, and market positioning.</p>
                </div>

                <!-- Strategic Acquisitions -->
                <section id="strategic-acquisitions" class="section">
                    <h3 class="section-title">Strategic Acquisitions</h3>

                    <div class="grid">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Heptagon</h3>
                            </div>
                            <div class="card-body">
                                <p><strong>Acquisition Value:</strong> $850 million</p>
                                <p><strong>Focus:</strong> High-end supplier of optical packaging</p>
                                <p><strong>Strategic Impact:</strong> Enhanced ams's ability to provide complete optical sensing solutions, though underutilization of facilities has placed drag on margins.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Princeton Optronics</h3>
                            </div>
                            <div class="card-body">
                                <p><strong>Acquisition Value:</strong> $75 million</p>
                                <p><strong>Focus:</strong> Developer of high-performance VCSELs</p>
                                <p><strong>Strategic Impact:</strong> Provides critical VCSEL technology for 3D sensing applications, opening opportunities to capture Apple market share from competitors.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-
                    <div class="chart">
                            <div class="chart-placeholder">
                                <img src="https://via.placeholder.com/800x400?text=Margin+Trends+Chart" alt="Margin Trends Chart">
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Margin Performance</h3>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Gross margin significantly declined from 50% in 2016 to just 9% in Q2 2018</li>
                                <li>Operating margins fell from 33% in Q4 2016 to -29% in recent quarters</li>
                                <li>Margin deterioration attributed to acquisition-based costs and underutilization of manufacturing capacity in Singapore</li>
                                <li>Management guidance suggests 30% yearly gross margins as the new norm</li>
                                <li>Margin pressure remains a key risk to profitability if other business segments cannot compensate</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- Earnings Forecast -->
                <section id="earnings-forecast" class="section">
                    <h3 class="section-title">Earnings Forecast</h3>

                    <div class="chart-container">
                        <div class="chart-header">
                            <h3 class="chart-title">Quarterly Earnings Forecast Through 2020</h3>
                            <div class="chart-controls">
                                <button class="chart-control active">Quarterly</button>
                                <button class="chart-control">Annual</button>
                                <button class="chart-control">Consensus</button>
                            </div>
                        </div>
                        <div class="chart">
                            <div class="chart-placeholder">
                                <img src="https://via.placeholder.com/800x400?text=Earnings+Forecast+Chart" alt="Earnings Forecast Chart">
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">H2 2018 Outlook</h3>
                        </div>
                        <div class="card-body">
                            <p>Despite a weaker Q2, ams has indicated a strong H2 2018 ramp-up driven by optical sensing products:</p>
                            <ul>
                                <li>Q3 2018 revenues expected to reach $450-490 million</li>
                                <li>This represents 78-94% sequential growth and 46-59% year-on-year growth</li>
                                <li>iPhone production cycle is expected to provide significant boost to earnings</li>
                                <li>Consensus estimates imply ams will maintain a significant share of Apple's 3D sensing needs through 2020</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>

            <!-- Market Opportunity -->
            <section id="market-opportunity" class="section">
                <div class="section-header">
                    <h2 class="section-title">Market Opportunity</h2>
                    <p class="section-description">Analysis of ams's growth potential across iOS devices, Android adoption, and automotive applications.</p>
                </div>

                <!-- iOS Ecosystem -->
                <section id="ios-ecosystem" class="section">
                    <h3 class="section-title">iOS Ecosystem</h3>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Apple Relationship Analysis</h3>
                        </div>
                        <div class="card-body">
                            <p>Ams has established itself as a key supplier for Apple's 3D sensing technology, with significant revenue opportunities:</p>
                            <ul>
                                <li>Estimated content value of $7.50 per iPhone device through 2021</li>
                                <li>Global shipments of 3D facial sensors projected to reach 370 million units by 2021 (from 32 million in 2017)</li>
                                <li>Potential to maintain or increase market share at current ASP</li>
                                <li>iPhone implementation remains the primary revenue driver</li>
                            </ul>
                        </div>
                    </div>

                    <div class="interactive-container">
                        <div class="interactive-header">
                            <h3 class="interactive-title">iPad Face ID Adoption Calculator</h3>
                            <p class="interactive-description">Adjust the slider to see potential revenue impact from iPad Face ID adoption.</p>
                        </div>

                        <div class="slider-container">
                            <div class="slider-header">
                                <div class="slider-label">iPad Face ID Adoption Rate (FY20)</div>
                                <div class="slider-value">30%</div>
                            </div>
                            <input type="range" min="0" max="100" value="30" class="slider" id="ipadAdoptionSlider">
                        </div>

                        <div class="result-display">
                            Projected Additional Revenue: <span class="result-value">$90 Million</span>
                        </div>

                        <p class="interactive-description">Note: As with fingerprint authentication, Apple typically introduces new technology with iPhones before applying it to all next-generation devices including iPads.</p>
                    </div>
                </section>

                <!-- VCSEL Technology -->
                <section id="vcsel-technology" class="section">
                    <h3 class="section-title">VCSEL Technology</h3>

                    <div class="grid">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">VCSEL Technology Overview</h3>
                            </div>
                            <div class="card-body">
                                <p>Vertical-Cavity Surface-Emitting Lasers (VCSELs) are a key component for 3D sensing, helping push light through dot projectors for facial recognition systems. Key advantages include:</p>
                                <ul>
                                    <li>Can be tested at multiple phases throughout production process</li>
                                    <li>Allows for quality control checks throughout manufacturing</li>
                                    <li>More reliable than Edge-Emitting Lasers (EELs), which can only be tested after complete production</li>
                                    <li>Estimated cost of $6-7 per smartphone</li>
                                    <li>Princeton Optronics acquisition gives ams strong VCSEL capabilities</li>
                                </ul>
                            </div>
                        </div>

                        <div class="chart-container">
                            <div class="chart-header">
                                <h3 class="chart-title">TrueDepth Camera Components</h3>
                            </div>
                            <div class="chart">
                                <div class="chart-placeholder">
                                    <img src="https://via.placeholder.com/400x300?text=TrueDepth+Camera+Diagram" alt="TrueDepth Components">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">VCSEL Supplier Landscape</h3>
                        </div>
                        <div class="card-body">
                            <p>The VCSEL market is experiencing significant competition with several key players:</p>
                            <ul>
                                <li><strong>Lumentum:</strong> Current primary supplier of VCSELs for Apple's iPhones</li>
                                <li><strong>Finisar:</strong> Received $390 million prepayment from Apple for future orders</li>
                                <li><strong>Princeton Optronics (ams):</strong> Acquired by ams, has developed optimized VCSELs for over 10 years (formerly funded by US military)</li>
                                <li><strong>Philips Photonics:</strong> Working to overcome technical challenges for smartphone integration</li>
                            </ul>
                            <p>If ams can capture 20% of VCSEL market share from Apple, it would generate an additional $110 million in revenues by FY20.</p>
                        </div>
                    </div>
                </section>

                <!-- Android Market -->
                <section id="android-market" class="section">
                    <h3 class="section-title">Android Market Potential</h3>

                    <div class="chart-container">
                        <div class="chart-header">
                            <h3 class="chart-title">Android Adoption Timeline</h3>
                        </div>
                        <div class="chart">
                            <div class="chart-placeholder">
                                <img src="https://via.placeholder.com/800x300?text=Android+Adoption+Timeline+(2019-2020)" alt="Android Adoption Timeline">
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Xiaomi Mi8 Case Study</h3>
                        </div>
                        <div class="card-body">
                            <p>While Apple has had a two-year head start, Android providers are now adopting 3D implementation:</p>
                            <ul>
                                <li>Xiaomi's Mi8 is the first Android platform to implement facial recognition using ams technology</li>
                                <li>Initial Mi8 release sold out within minutes, suggesting strong demand</li>
                                <li>Xiaomi holds approximately 10% market share in China (fourth-largest smartphone maker)</li>
                                <li>This early win positions ams well for broader Android adoption in 2019-2020</li>
                            </ul>

                            <div class="quote">
                                "Although Apple has had a two-year head start, Android providers are participating in the growing trend of 3D implementation. Ams's win with Xiaomi solidifies it as a key player in this expanding market."
                                <span class="quote-source">- Bloomberg Intelligence Analysis</span>
                            </div>
                        </div>
                    </div>

                    <div class="interactive-container">
                        <div class="interactive-header">
                            <h3 class="interactive-title">Revenue Potential Calculator</h3>
                            <p class="interactive-description">Combined impact of VCSEL supply, iPad adoption, and Android market penetration</p>
                        </div>

                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Revenue Source</th>
                                        <th>FY19</th>
                                        <th>FY20</th>
                                        <th>FY21</th>
                                        <th>FY22</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Core Business</td>
                                        <td>$2,040.5M</td>
                                        <td>$2,406.1M</td>
                                        <td>$2,514.3M</td>
                                        <td>$2,640.9M</td>
                                    </tr>
                                    <tr>
                                        <td>VCSEL Revenue (20% Share)</td>
                                        <td>$221.0M</td>
                                        <td>$271.9M</td>
                                        <td>$276.9M</td>
                                        <td>$283.7M</td>
                                    </tr>
                                    <tr>
                                        <td>iPad Revenue</td>
                                        <td>$90.0M</td>
                                        <td>$105.0M</td>
                                        <td>$180.0M</td>
                                        <td>$195.0M</td>
                                    </tr>
                                    <tr>
                                        <td>Android Revenue</td>
                                        <td>$45.0M</td>
                                        <td>$72.0M</td>
                                        <td>$90.0M</td>
                                        <td>$108.0M</td>
                                    </tr>
                                    <tr class="result-row">
                                        <td><strong>Total Revenue</strong></td>
                                        <td><strong>$2,396.5M</strong></td>
                                        <td><strong>$2,855.0M</strong></td>
                                        <td><strong>$3,061.2M</strong></td>
                                        <td><strong>$3,227.6M</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Consensus Estimates</td>
                                        <td>$2,012.8M</td>
                                        <td>$2,392.2M</td>
                                        <td>$2,898.8M</td>
                                        <td>$3,188.5M</td>
                                    </tr>
                                    <tr>
                                        <td>Difference</td>
                                        <td>+$383.7M</td>
                                        <td>+$462.8M</td>
                                        <td>+$162.5M</td>
                                        <td>+$39.2M</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <!-- Automotive Opportunity -->
                <section id="automotive-opportunity" class="section">
                    <h3 class="section-title">Automotive Opportunity</h3>

                    <div class="chart-container">
                        <div class="chart-header">
                            <h3 class="chart-title">Automotive LIDAR Market Growth</h3>
                        </div>
                        <div class="chart">
                            <div class="chart-placeholder">
                                <img src="https://via.placeholder.com/800x300?text=LIDAR+Market+Growth+($290M+to+$2.7B)" alt="LIDAR Market Growth">
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Self-Driving Car Technology Integration</h3>
                        </div>
                        <div class="card-body">
                            <p>Ams is targeting a shift in business revenue to 60% consumer and 40% non-consumer segments, with automotive applications representing a significant opportunity:</p>
                            <ul>
                                <li>The market for automotive LIDAR systems projected to grow from $290 million in 2016 to $2.7 billion by 2026</li>
                                <li>Ams expects 49% growth through 2020 in its automotive segment</li>
                                <li>Company plans to supply LIDAR technology used in autonomous vehicles</li>
                                <li>Reports growing interest from industry leaders in automotive applications</li>
                            </ul>

                            <p>However, the autonomous vehicle industry faces significant challenges:</p>
                            <ul>
                                <li>Regulatory uncertainties and evolving standards</li>
                                <li>Technical challenges in sensor integration and reliability</li>
                                <li>Uncertain timing of widespread implementation</li>
                                <li>Intense competition from other sensor technology providers</li>
                            </ul>
                        </div>
                    </div>

                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <div class="timeline-date">2016</div>
                                <div class="timeline-title">LIDAR Market Valued at $290M</div>
                                <div class="timeline-description">Initial phase of automotive LIDAR implementation, primarily in high-end prototypes and research vehicles.</div>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <div class="timeline-date">2020</div>
                                <div class="timeline-title">ams Projects 49% Growth in Automotive</div>
                                <div class="timeline-description">Expected expansion of LIDAR technology in production vehicles and advanced driver assistance systems.</div>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <div class="timeline-date">2023</div>
                                <div class="timeline-title">Mainstream Adoption Expected</div>
                                <div class="timeline-description">LIDAR systems anticipated to become standard in mid-range vehicles as costs decrease and technology matures.</div>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <div class="timeline-date">2026</div>
                                <div class="timeline-title">Market Projected to Reach $2.7B</div>
                                <div class="timeline-description">Full industry adoption with LIDAR becoming essential for Level 3+ autonomous driving capabilities.</div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <!-- Competitive Analysis -->
            <section id="competitive-analysis" class="section">
                <div class="section-header">
                    <h2 class="section-title">Competitive Analysis</h2>
                    <p class="section-description">Evaluation of ams's strategic acquisitions, competitor landscape, and market positioning.</p>
                </div>

                <!-- Strategic Acquisitions -->
                <section id="strategic-acquisitions" class="section">
                    <h3 class="section-title">Strategic Acquisitions</h3>

                    <div class="grid">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Heptagon</h3>
                            </div>
                            <div class="card-body">
                                <p><strong>Acquisition Value:</strong> $850 million</p>
                                <p><strong>Focus:</strong> High-end supplier of optical packaging</p>
                                <p><strong>Strategic Impact:</strong> Enhanced ams's ability to provide complete optical sensing solutions, though underutilization of facilities has placed drag on margins.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Princeton Optronics</h3>
                            </div>
                            <div class="card-body">
                                <p><strong>Acquisition Value:</strong> $75 million</p>
                                <p><strong>Focus:</strong> Developer of high-performance VCSELs</p>
                                <p><strong>Strategic Impact:</strong> Provides critical VCSEL technology for 3D sensing applications, opening opportunities to capture Apple market share from competitors.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-
                    <li><a href="#">Disclaimer</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>
            </div>
        </div>

        <div class="disclaimer">
            <p>DISCLAIMER: This document has been prepared by Bloomberg Intelligence for informational purposes only. This document is not investment advice or a recommendation to buy, sell, or hold any security and should not be construed as such. Reference to specific securities should not be construed as recommendations to buy, sell or hold that security. Forward-looking statements are inherently unreliable and actual events or results may differ materially from those projected. Bloomberg Intelligence makes no guarantee as to the accuracy or completeness of this information which is derived from sources believed to be reliable.</p>
        </div>

        <div class="footer-bottom">
            <div>&copy; 2025 Bloomberg Finance L.P. All rights reserved.</div>
            <div>
                <a href="#">Terms of Service</a> |
                <a href="#">Privacy Policy</a> |
                <a href="#">Cookie Policy</a>
            </div>
        </div>
    </footer>

    <script>
        // Basic interactive functionality for demonstration purposes
        document.addEventListener('DOMContentLoaded', function() {
            // Update date in header
            document.querySelector('.date-display').textContent = 'Friday, March 07, 2025, 8:47 AM PST';

            // iPad Adoption Slider Functionality
            const ipadAdoptionSlider = document.getElementById('ipadAdoptionSlider');
            const sliderValue = document.querySelector('.slider-value');
            const resultValue = document.querySelector('.result-value');

            if (ipadAdoptionSlider) {
                ipadAdoptionSlider.addEventListener('input', function() {
                    sliderValue.textContent = this.value + '%';
                    const revenue = Math.round(this.value * 3);
                    resultValue.textContent = '$' + revenue + ' Million';
                });
            }

            // Chart controls
            const chartControls = document.querySelectorAll('.chart-control');
            chartControls.forEach(control => {
                control.addEventListener('click', function() {
                    // Remove active class from all controls in the same group
                    this.parentNode.querySelectorAll('.chart-control').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    // Add active class to clicked control
                    this.classList.add('active');
                });
            });

            // Smooth scroll for TOC links
            const tocLinks = document.querySelectorAll('.toc-link');
            tocLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });

                    // Update active state in TOC
                    tocLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // Update active TOC item on scroll
            window.addEventListener('scroll', function() {
                const scrollPosition = window.scrollY;

                // Find all sections
                const sections = document.querySelectorAll('section[id]');

                // Check which section is currently visible
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 120;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        // Remove active class from all TOC links
                        tocLinks.forEach(link => {
                            link.classList.remove('active');
                        });

                        // Add active class to corresponding TOC link
                        const correspondingLink = document.querySelector(`.toc-link[href="#${section.id}"]`);
                        if (correspondingLink) {
                            correspondingLink.classList.add('active');
                        }
                    }
                });
            });
        });
    </script>

</body>
</html>
