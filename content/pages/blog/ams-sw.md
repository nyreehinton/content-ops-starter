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
          altText: Company logo
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
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
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
            display: flex;
            min-height: 100vh;
        }

        /* Side Header Styles */
        .side-header {
            background-color: var(--bloomberg-navy);
            color: white;
            width: 280px;
            position: fixed;
            height: 100vh;
            left: 0;
            top: 0;
            z-index: 1000;
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            overflow-y: auto;
        }

        .logo-container {
            padding: 1.5rem;
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
            margin-left: 0.3rem;
            font-size: 1.2rem;
        }

        .side-header-content {
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .date-display {
            font-size: 0.9rem;
            color: var(--bloomberg-gray);
            padding: 1rem 1.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .navigation {
            display: flex;
            flex-direction: column;
            padding: 1.5rem 0;
        }

        .nav-link {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 500;
            padding: 0.8rem 1.5rem;
            transition: all 0.2s;
            border-left: 3px solid transparent;
        }

        .nav-link.active, .nav-link:hover {
            color: white;
            background-color: rgba(255, 255, 255, 0.05);
            border-left-color: var(--bloomberg-orange);
        }

        .user-profile {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1.5rem;
            margin-top: auto;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
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

        /* Main Content Area */
        .main-wrapper {
            flex: 1;
            margin-left: 280px;
            width: calc(100% - 280px);
        }

        /* Report Header */
        .report-header {
            background-color: var(--bloomberg-dark-blue);
            color: white;
            padding: 2.5rem 2rem;
            margin-bottom: 2rem;
        }

        .report-title {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 1rem;
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
            margin-bottom: 1.5rem;
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
            flex-wrap: wrap;
            gap: 0.75rem;
            margin-top: 1.5rem;
        }

        .tag {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            padding: 0.4rem 1rem;
            font-size: 0.85rem;
            color: white;
            transition: all 0.2s;
        }

        .tag:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        /* Main Layout */
        .container {
            display: flex;
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
            gap: 2rem;
        }

        .sidebar {
            width: 280px;
            background: white;
            padding: 2rem;
            position: sticky;
            top: 0;
            height: calc(100vh - 4rem);
            overflow-y: auto;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .toc-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: var(--bloomberg-navy);
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #e2e8f0;
        }

        .toc-list {
            list-style: none;
        }

        .toc-item {
            margin-bottom: 0.75rem;
        }

        .toc-link {
            color: var(--bloomberg-gray);
            text-decoration: none;
            font-size: 0.95rem;
            display: block;
            padding: 0.5rem 0.8rem;
            transition: all 0.2s;
            border-left: 2px solid transparent;
            border-radius: 4px;
        }

        .toc-link:hover, .toc-link.active {
            color: var(--bloomberg-navy);
            border-left-color: var(--bloomberg-orange);
            background: rgba(249, 115, 22, 0.05);
        }

        .toc-subitem {
            padding-left: 1.2rem;
            list-style: none;
            margin-top: 0.5rem;
        }

        .main-content {
            flex: 1;
            padding: 2rem;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        /* Section Styles */
        .section {
            margin-bottom: 4rem;
        }

        .section:last-child {
            margin-bottom: 0;
        }

        .section-header {
            margin-bottom: 2rem;
        }

        .section-title {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--bloomberg-navy);
            margin-bottom: 1rem;
            padding-bottom: 0.75rem;
            border-bottom: 2px solid #e2e8f0;
        }

        .section-description {
            color: var(--bloomberg-gray);
            font-size: 1.1rem;
            line-height: 1.6;
            max-width: 800px;
        }

        /* Card Styles */
        .card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            padding: 1.5rem;
            margin-bottom: 2rem;
            border: 1px solid #e2e8f0;
        }

        .card:last-child {
            margin-bottom: 0;
        }

        .card-header {
            margin-bottom: 1.25rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #e2e8f0;
        }

        .card-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--bloomberg-navy);
        }

        .card-subtitle {
            color: var(--bloomberg-gray);
            font-size: 0.95rem;
            margin-top: 0.5rem;
        }

        .card-body {
            color: var(--bloomberg-blue);
        }

        .card-body p {
            margin-bottom: 1rem;
        }

        .card-body p:last-child {
            margin-bottom: 0;
        }

        .card-body ul {
            margin: 1rem 0;
            padding-left: 1.5rem;
        }

        .card-body li {
            margin-bottom: 0.5rem;
        }

        .card-body li:last-child {
            margin-bottom: 0;
        }

        /* Grid Layout */
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        /* Chart Containers */
        .chart-container {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            padding: 1.5rem;
            margin-bottom: 2rem;
            border: 1px solid #e2e8f0;
        }

        .chart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #e2e8f0;
        }

        .chart-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--bloomberg-navy);
        }

        .chart-controls {
            display: flex;
            gap: 0.75rem;
        }

        .chart-control {
            background: none;
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            padding: 0.4rem 0.8rem;
            font-size: 0.85rem;
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

        /* Timeline component */
        .timeline {
            position: relative;
            margin: 2rem 0;
            padding-left: 2.5rem;
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
            margin-bottom: 2.5rem;
        }

        .timeline-item:last-child {
            margin-bottom: 0;
        }

        .timeline-dot {
            position: absolute;
            left: -2.5rem;
            top: 0;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: var(--bloomberg-orange);
            z-index: 1;
            border: 3px solid white;
            box-shadow: 0 0 0 2px var(--bloomberg-orange);
        }

        .timeline-content {
            background: white;
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
        }

        .timeline-date {
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--bloomberg-orange);
            margin-bottom: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .timeline-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--bloomberg-navy);
            margin-bottom: 0.75rem;
        }

        .timeline-description {
            color: var(--bloomberg-gray);
            font-size: 0.95rem;
        }

        /* KPI Cards */
        .kpi-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .kpi-card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            padding: 1.5rem;
            text-align: center;
            border: 1px solid #e2e8f0;
        }

        .kpi-value {
            font-size: 2.2rem;
            font-weight: 700;
            color: var(--bloomberg-navy);
            margin-bottom: 0.75rem;
        }

        .kpi-label {
            color: var(--bloomberg-gray);
            font-size: 0.95rem;
            margin-bottom: 0.5rem;
        }

        .kpi-trend {
            font-size: 0.9rem;
            margin-top: 0.75rem;
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
            padding: 4rem 2rem;
            margin-top: 4rem;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 3rem;
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
            font-size: 0.95rem;
        }

        .footer-column a:hover {
            color: white;
        }

        .footer-bottom {
            max-width: 1400px;
            margin: 3rem auto 0;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.85rem;
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
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.7);
            margin-top: 2rem;
            line-height: 1.6;
        }

        /* Interactive slider */
        .slider-container {
            margin: 2rem 0;
        }

        .slider-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
        }

        .slider-label {
            font-size: 0.95rem;
            font-weight: 500;
        }

        .slider-value {
            font-size: 0.95rem;
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
            width: 18px;
            height: 18px;
            background: var(--bloomberg-orange);
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .slider::-moz-range-thumb {
            width: 18px;
            height: 18px;
            background: var(--bloomberg-orange);
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* Result display for interactive elements */
        .result-display {
            background: #f8fafc;
            padding: 1.25rem;
            border-radius: 4px;
            margin-top: 1.5rem;
            font-size: 1.1rem;
            border: 1px solid #e2e8f0;
        }

        .result-value {
            font-weight: 600;
            color: var(--bloomberg-navy);
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
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            background: white;
            border: 1px solid #e2e8f0;
        }

        .swot-box h3 {
            margin-top: 0;
            margin-bottom: 1.25rem;
            color: white;
            font-size: 1.1rem;
            padding: 0.75rem;
            border-radius: 4px;
        }

        .swot-box ul {
            margin: 0;
            padding-left: 1.5rem;
        }

        .swot-box li {
            margin-bottom: 0.75rem;
        }

        .swot-box li:last-child {
            margin-bottom: 0;
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

        /* Media queries for responsive design */
        @media (max-width: 992px) {
            body {
                flex-direction: column;
            }

            .side-header {
                width: 100%;
                height: auto;
                position: relative;
            }

            .main-wrapper {
                margin-left: 0;
                width: 100%;
            }

            .navigation {
                flex-direction: row;
                overflow-x: auto;
                padding: 1rem 0;
            }

            .nav-link {
                padding: 0.75rem 1.25rem;
                border-left: none;
                border-bottom: 3px solid transparent;
                white-space: nowrap;
            }

            .nav-link.active, .nav-link:hover {
                border-left-color: transparent;
                border-bottom-color: var(--bloomberg-orange);
            }

            .container {
                flex-direction: column;
                padding: 1rem;
            }

            .sidebar {
                width: 100%;
                position: relative;
                height: auto;
                margin-bottom: 1.5rem;
            }

            .grid {
                grid-template-columns: 1fr;
            }

            .swot-container {
                grid-template-columns: 1fr;
            }

            .report-meta {
                gap: 1rem;
            }

            .kpi-grid {
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            }
        }

        @media (max-width: 576px) {
            .report-header {
                padding: 1.5rem 1rem;
            }

            .report-title {
                font-size: 1.8rem;
            }

            .container {
                padding: 0.5rem;
            }

            .main-content {
                padding: 1rem;
            }

            .section-title {
                font-size: 1.5rem;
            }

            .card {
                padding: 1rem;
            }

            .timeline {
                padding-left: 2rem;
            }

            .timeline-dot {
                left: -2rem;
            }

            .footer {
                padding: 2rem 1rem;
            }

            .footer-grid {
                gap: 2rem;
            }
        }
    </style>

</head>
<body suppressHydrationWarning={true}>
    <!-- Side Header -->
    <header class="side-header" suppressHydrationWarning={true}>
        <div class="logo-container" suppressHydrationWarning={true}>
            <a href="#" class="logo" suppressHydrationWarning={true}>
                Bloomberg<span suppressHydrationWarning={true}>.</span><span class="logo-intelligence" suppressHydrationWarning={true}>Intelligence</span>
            </a>
        </div>
        <div class="side-header-content" suppressHydrationWarning={true}>
            <div class="date-display" suppressHydrationWarning={true}>Contents</div>
            <nav class="navigation" suppressHydrationWarning={true}>
                <a href="#professional-summary" class="nav-link active" suppressHydrationWarning={true}>Professional Summary</a>
                <a href="#experience" class="nav-link" suppressHydrationWarning={true}>Experience</a>
                <a href="#bloomberg-intelligence" class="nav-link" suppressHydrationWarning={true}>Bloomberg Intelligence</a>
                <a href="#equity-research" class="nav-link" suppressHydrationWarning={true}>Equity Research</a>
                <a href="#skills" class="nav-link" suppressHydrationWarning={true}>Skills & Tools</a>
                <a href="#contact" class="nav-link" suppressHydrationWarning={true}>Contact</a>
            </nav>
            <div class="user-profile" suppressHydrationWarning={true}>
                <div class="user-avatar" suppressHydrationWarning={true}>A</div>
                <span suppressHydrationWarning={true}>Equity Research Data Analyst</span>
            </div>
        </div>
    </header>
<div class="main-wrapper" suppressHydrationWarning={true}>
    <!-- Report Header -->
    <div class="report-header" suppressHydrationWarning={true}>
        <h1 class="report-title" suppressHydrationWarning={true}>Nyree Hinton Bloomberg Experience</h1>
        <p class="report-subtitle" suppressHydrationWarning={true}></p>

        <div class="report-meta" suppressHydrationWarning={true}>
            <div>
                <span>Experience:</span>
                <strong>Bloomberg Intelligence</strong>
            </div>
            <div>
                <span>Specialization:</span>
                <strong>Semiconductor Analysis</strong>
            </div>
            <div>
                <span>Focus:</span>
                <strong>3D Sensing Technology</strong>
            </div>
        </div>

        <div class="report-tags">
            <div class="tag">Bloomberg Intelligence</div>
            <div class="tag">Equity Research</div>
            <div class="tag">Semiconductor</div>
            <div class="tag">Financial Analysis</div>
            <div class="tag">Data Visualization</div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="container">
        <!-- Sidebar with Table of Contents -->
        <aside class="sidebar">
            <h2 class="toc-title">Table of Contents</h2>
            <ul class="toc-list">
                <li class="toc-item">
                    <a href="#professional-summary" class="toc-link active">Professional Summary</a>
                </li>
                <li class="toc-item">
                    <a href="#experience" class="toc-link">Experience Timeline</a>
                </li>
                <li class="toc-item">
                    <a href="#bloomberg-intelligence" class="toc-link">Bloomberg Intelligence Internship</a>
                    <ul class="toc-subitem">
                        <li><a href="#executive-summary" class="toc-link">Executive Summary</a></li>
                        <li><a href="#financial-analysis" class="toc-link">Financial Analysis</a></li>
                        <li><a href="#market-opportunity" class="toc-link">Market Opportunity</a></li>
                        <li><a href="#competitive-analysis" class="toc-link">Competitive Analysis</a></li>
                        <li><a href="#valuation" class="toc-link">Valuation & Investment Thesis</a></li>
                    </ul>
                </li>
                <li class="toc-item">
                    <a href="#equity-research" class="toc-link">Equity Research Achievements</a>
                    <ul class="toc-subitem">
                        <li><a href="#key-projects" class="toc-link">Key Projects</a></li>
                        <li><a href="#technical-skills" class="toc-link">Technical Skills</a></li>
                        <li><a href="#industry-insights" class="toc-link">Industry Insights</a></li>
                    </ul>
                </li>
                <li class="toc-item">
                    <a href="#skills" class="toc-link">Skills & Tools</a>
                </li>
                              <li class="toc-item">
                    <a href="#contact" class="toc-link">Contact Information</a>
                </li>
            </ul>
        </aside>

        <!-- Main Content Area -->
        <main class="main-content">
            <!-- Professional Summary Section -->
            <section id="professional-summary" class="section">
                <div class="section-header">
                    <h2 class="section-title">Professional Summary</h2>
                    <p class="section-description"></p>
                </div>

                <div class="card">
                    <div class="card-body">
                        <p>During my Bloomberg Intelligence internship, I conducted an in-depth analysis of ams-SW, a key Apple semiconductor supplier for facial recognition technology. This project showcased my ability to evaluate complex technologies, analyze financial performance, and assess market opportunities across mobile, IoT, and automotive segments.</p>

                        <p>As an Equity Research Data Analyst, I've expanded my expertise to include advanced data analysis techniques, comprehensive sector coverage, and the development of proprietary analytical models that provide unique market perspectives. My work consistently delivers value through rigorous analysis, clear communication, and strategic insights.</p>

                    <p>DISCLAIMER: This portfolio showcases my professional experience and analytical capabilities. The analyses presented are for illustrative purposes only and do not constitute investment advice or recommendations. All information is based on publicly available data and my professional experience. The views expressed are my own and do not necessarily reflect those of current or previous employers. References to specific securities should not be construed as recommendations to buy, sell or hold those securities.</p>
                    </div>
                </div>
            </section>

            <!-- Experience Timeline Section -->
            <section id="experience" class="section">
                <div class="section-header">
                    <h2 class="section-title">Experience Timeline</h2>
                    <p class="section-description">Professional journey through the financial analysis landscape.</p>
                </div>

                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-date">2019</div>
                            <div class="timeline-title">Equity Research Data Analyst</div>
                            <div class="timeline-description">
                                <p>Joined Bloomberg full-time in January 2019, focusing on semiconductor sector coverage with emphasis on emerging technologies and market trends. Developing proprietary valuation models and publishing in-depth industry analyses.</p>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-date">SUMMER 2018</div>
                            <div class="timeline-title">Bloomberg Intelligence - Internship</div>
                            <div class="timeline-description">
                                <p>Completed a summer internship at Bloomberg Intelligence, conducting in-depth analysis of ams-SW, a key Apple semiconductor supplier for facial recognition technology. Evaluated complex technologies, analyzed financial performance, and assessed market opportunities across mobile, IoT, and automotive segments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Bloomberg Intelligence Internship Section -->
            <section id="bloomberg-intelligence" class="section">
                <div class="section-header">
                    <h2 class="section-title">Bloomberg Intelligence Internship: ams-SW Analysis</h2>
                    <p class="section-description">Comprehensive analysis of ams-SW, a key Apple semiconductor supplier for facial recognition technology.</p>
                </div>

                <!-- Executive Summary Section -->
                <section id="executive-summary" class="section">
                    <h3 class="section-title">Executive Summary</h3>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">ams-SW: Positioned to Benefit from 3D Sensor Growth</h3>
                        </div>
                        <div class="card-body">
                            <p>Ams is well positioned to take advantage of the growing demand for 3D technology implemented in Apple devices while also benefiting from Android adoption and self-driving car applications. The company's strategic acquisitions have allowed it to outpace rivals in revenue growth, making it a favored semiconductor in optical sensors for quarters to come.</p>
                        </div>
                    </div>

                    <div class="kpi-grid">
                        <div class="kpi-card">
                            <div class="kpi-value">18%</div>
                            <div class="kpi-label">YoY Revenue Growth</div>
                            <div class="kpi-trend trend-up">↑ vs Q2 2017</div>
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
                            <div class="kpi-trend">Through 2021</div>
                        </div>
                    </div>
                </section>
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
                        <canvas id="stockPerformanceChart"></canvas>
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

                <!-- Financial Analysis Section -->
                <section id="financial-analysis" class="section">
                    <h3 class="section-title">Financial Analysis</h3>

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
                                <li>Operating cash flow for Q2 was $-72.3 million</li>
                            </ul>

                            <div class="quote">
                                "Ams's Q2 results represent a stable non-Apple core business, which could add a favorable boost to earnings if expanded into 2020. This will come from capitalizing off of Android customers and winning significant product designs in the automotive industry."
                                <span class="quote-source">- Bloomberg Intelligence Analysis</span>
                            </div>
                        </div>
                    </div>

                    <div class="chart-container">
                        <div class="chart-header">
                            <h3 class="chart-title">Revenue Growth by Segment</h3>
                        </div>
                        <div class="chart">
                            <canvas id="revenueSegmentChart"></canvas>
                        </div>
                        <div class="card-body">
                            <p>Consumer & Communications: <strong>73%</strong> (up from 51% in 2016)</p>
                            <p>Automotive, Industrial & Medical: <strong>27%</strong></p>
                        </div>
                    </div>

                    <div class="chart-container">
                        <div class="chart-header">
                            <h3 class="chart-title">Gross & Operating Margin Trends</h3>
                        </div>
                        <div class="chart">
                            <canvas id="marginTrendsChart"></canvas>
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
                            <canvas id="quarterlyRevenueChart"></canvas>
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
                <!-- Market Opportunity Section -->
                <section id="market-opportunity" class="section">
                    <h3 class="section-title">Market Opportunity</h3>

                    <!-- iOS Ecosystem -->
                    <section id="ios-ecosystem" class="section">
                        <h3 class="section-title">iOS Ecosystem</h3>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Apple Relationship Analysis</h3>
                            </div>
                            <div class="card-body">
                                <p>Ams continues to see optical sensing as its highest volume opportunity through 2020. According to IHS, global shipments of 3D facial sensors are expected to reach 370 million units by 2021 from 32 million units in 2017. The demand for 3D sensing is bolstered by its primary implementation in iPhones:</p>
                                <ul>
                                    <li>Estimated content value of $7.50 per iPhone device through 2021</li>
                                    <li>If ams can maintain market share at current ASP, they should exceed revenue expectations for the next 3 years</li>
                                    <li>iPhone implementation remains the primary revenue driver</li>
                                    <li>Q4 2017 saw an additional €200 million in total revenues from 3D technology demand</li>
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
                                        <li>Princeton Optronics acquisition gives ams strong VCSEL capabilities with over 10 years of optimization experience (previously funded by US military)</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="chart-container">
                                <div class="chart-header">
                                    <h3 class="chart-title">TrueDepth Camera Components</h3>
                                </div>
                                <div class="chart">
                                    <div id="truedepthVisualization"></div>
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
                                    <li><strong>Lumentum:</strong> Current primary supplier of VCSELs for Apple's iPhones with 66% year-on-year revenue growth in Q2 2017</li>
                                    <li><strong>Finisar:</strong> Received $390 million prepayment from Apple for future VCSEL orders</li>
                                    <li><strong>Princeton Optronics (ams):</strong> Acquired by ams, provides critical VCSEL technology for 3D sensing applications</li>
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
                                <canvas id="androidAdoptionChart"></canvas>
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

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">FY20 Inflection Point</h3>
                            </div>
                            <div class="card-body">
                                <p>Providing 20% of VCSELs to Apple, 30% of iPad content, and 10% of Android market share would translate to a total revenue of $2.85 billion by FY20.</p>
                                <p>While a 6% upside over consensus estimates may not sound dramatic, this analysis doesn't include the potential benefit from automotive applications, which ams forecasts to grow 49% through 2020.</p>

                                <table class="data-table">
                                    <thead>
                                        <tr>
                                            <th>Component</th>
                                            <th>FY20 Revenue Contribution</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Core Business</td>
                                            <td>$2,406.10M</td>
                                        </tr>
                                        <tr>
                                            <td>VCSEL Revenue (20% Share)</td>
                                            <td>$271.9M</td>
                                        </tr>
                                        <tr>
                                            <td>iPad Revenue</td>
                                            <td>$105.0M</td>
                                        </tr>
                                        <tr>
                                            <td>Android Revenue</td>
                                            <td>$72.0M</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total Revenue</strong></td>
                                            <td><strong>$2,855.0M</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Consensus Estimate</td>
                                            <td>$2,392.2M</td>
                                        </tr>
                                        <tr>
                                            <td>Difference</td>
                                            <td>+$462.8M (+19.3%)</td>
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
                                <canvas id="lidarMarketChart"></canvas>
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

                <!-- Competitive Analysis Section -->
                <section id="competitive-analysis" class="section">
                    <h3 class="section-title">Competitive Analysis</h3>

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
                            <div class="card-header">
                                <h3 class="card-title">KeyLemon</h3>
                            </div>
                            <div class="card-body">
                                <p><strong>Focus:</strong> Developer of biometric software for facial recognition</p>
                                <p><strong>Strategic Impact:</strong> Enhances ams's facial recognition capabilities with specialized software to complement hardware solutions.</p>
                            </div>
                        </div>
                    </div>

                    <div class="chart-container">
                        <div class="chart-header">
                            <h3 class="chart-title">Competitor Revenue Comparison</h3>
                        </div>
                        <div class="chart">
                            <canvas id="competitorRevenueChart"></canvas>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Key Competitor Analysis</h3>
                        </div>
                        <div class="card-body">
                            <p>The 3D sensing market is experiencing intense competition:</p>

                            <h4>Lumentum</h4>
                            <ul>
                                <li>Current primary supplier of VCSELs for Apple's iPhones</li>
                                <li>Experienced 66% year-on-year revenue growth in Q2 2017</li>
                                <li>Expanding capacity to meet 2H 2018 demand</li>
                            </ul>

                            <h4>Finisar</h4>
                            <ul>
                                <li>Received $390 million prepayment from Apple for future VCSEL orders</li>
                                <li>Expanding manufacturing capacity</li>
                                <li>Working through technical challenges for smartphone integration</li>
                            </ul>

                            <div class="quote">
                                "Ams has shown its competitive advantage by tripling its market cap within a year to almost $6 billion thanks to various acquisitions driving revenue growth."
                                <span class="quote-source">- Bloomberg Intelligence Analysis</span>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Valuation Section -->
                <section id="valuation" class="section">
                    <h3 class="section-title">Valuation & Investment Thesis</h3>

                    <div class="chart-container">
                        <div class="chart-header">
                            <h3 class="chart-title">P/E Ratio Historical Trend</h3>
                        </div>
                        <div class="chart">
                            <canvas id="peAnalysisChart"></canvas>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Valuation Analysis</h3>
                        </div>
                        <div class="card-body">
                            <p>Historically, ams has traded at premium multiples, reflecting its growth potential:</p>
                            <ul>
                                <li>Historical P/E ratio around 30x, occasionally reaching as high as 80x</li>
                                <li>Current valuation does not fully account for potential revenue streams from VCSELs, iPad adoption, and Android market penetration</li>
                                <li>Applying a conservative 12.5x P/E on forecasted EPS of $8.20, ams could trade at $102.44 by FY20</li>
                                <li>This represents approximately 30% upside potential from current levels</li>
                                <li>ams continues to command a premium valuation despite pressure on other Apple suppliers</li>
                            </ul>

                            <div class="quote">
                                "Cumulatively, if ams is able to supply VCSELs for Apple devices, capture Android market share, and grow their core business at least 10%, the market could be under-pricing ams by $1.6 billion over the next 4 years."
                                <span class="quote-source">- Bloomberg Intelligence Analysis</span>
                            </div>
                        </div>
                    </div>

                    <div class="grid">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Bull Case</h3>
                            </div>
                            <div class="card-body">
                                <ul>
                                    <li>Maintain 20% of Apple's VCSEL market</li>
                                    <li>50% iPad Face ID adoption by FY21</li>
                                    <li>15% Android market penetration by FY22</li>
                                    <li>Automotive revenue grows at 49% through 2020</li>
                                    <li>Margins recover to 30% average</li>
                                    <li><strong>Price Target:</strong> $125.00 (FY20)</li>
                                </ul>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Base Case</h3>
                            </div>
                            <div class="card-body">
                                <ul>
                                    <li>Capture 20% of Apple's VCSEL market</li>
                                    <li>30% iPad Face ID adoption</li>
                                    <li>10% Android market penetration</li>
                                    <li>Automotive growth meets 35% of targets</li>
                                    <li>Margins stabilize at 30%</li>
                                    <li><strong>Price Target:</strong> $102.44 (FY20)</li>
                                </ul>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Bear Case</h3>
                            </div>
                            <div class="card-body">
                                <ul>
                                    <li>Lose VCSEL market to Lumentum and Finisar</li>
                                    <li>iPad Face ID limited to Pro models only</li>
                                    <li>Android adoption slower than expected</li>
                                    <li>Automotive applications delayed</li>
                                    <li>Margins remain under pressure</li>
                                    <li><strong>Price Target:</strong> $78.20 (FY20)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- BI Internship Impact Section -->
                <section id="bi-impact" class="section">
                    <h3 class="section-title">Bloomberg Intelligence Internship Impact</h3>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Key Deliverables & Achievements</h3>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Developed comprehensive analysis of ams-SW financial performance and growth prospects</li>
                                <li>Created interactive data visualizations to communicate complex semiconductor market dynamics</li>
                                <li>Evaluated strategic acquisitions and their impact on competitive positioning</li>
                                <li>Forecasted market opportunities across iOS, Android, and automotive segments</li>
                                <li>Presented investment thesis to Bloomberg Intelligence team and clients</li>
                                <li>Collaborated with senior analysts on research methodologies and financial modeling</li>
                            </ul>
                        </div>
                    </div>
                <!-- Equity Research Achievements Section -->
                <section id="equity-research" class="section">
                    <div class="section-header">
                        <h2 class="section-title">Equity Research Data Analyst Achievements</h2>
                        <p class="section-description">Significant accomplishments and projects during my tenure as a full-time Equity Research Data Analyst.</p>
                    </div>

                    <!-- Key Projects -->
                    <section id="key-projects" class="section">
                        <h3 class="section-title">Key Projects</h3>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Semiconductor Industry Supply Chain Analysis</h3>
                            </div>
                            <div class="card-body">
                                <p>Led a comprehensive analysis of the semiconductor supply chain with a focus on identifying critical components and potential bottlenecks affecting major technology companies.</p>
                                <ul>
                                    <li>Developed interactive visualization tools to map complex supplier relationships across 200+ companies</li>
                                    <li>Identified critical dependencies in the 3D sensing component supply chain that were not previously factored into market analyses</li>
                                    <li>Forecasted potential supply constraints 6 months ahead of industry consensus, providing valuable insights for institutional clients</li>
                                    <li>Recommendations based on this analysis led to strategic portfolio adjustments that outperformed sector benchmarks by 8.7%</li>
                                </ul>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Emerging Technologies Revenue Impact Model</h3>
                            </div>
                            <div class="card-body">
                                <p>Developed a proprietary model to quantify the revenue impact of emerging technologies on established semiconductor companies.</p>
                                <ul>
                                    <li>Created advanced regression models to forecast adoption rates across different market segments</li>
                                    <li>Implemented machine learning algorithms to identify early adoption patterns from disparate data sources</li>
                                    <li>Developed interactive scenario analysis tools allowing clients to customize assumptions</li>
                                    <li>Model forecasts achieved 87% accuracy for 12-month revenue projections compared to industry standard of 72%</li>
                                </ul>

                                <div class="quote">
                                    "The revenue impact modeling approach developed by the team has transformed how we evaluate technology adoption cycles and their financial implications for our investment decisions."
                                    <span class="quote-source">- Senior Portfolio Manager, Global Asset Management Firm</span>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Automotive Semiconductor Market Analysis</h3>
                            </div>
                            <div class="card-body">
                                <p>Expanded on ams-SW automotive potential with comprehensive analysis of the broader automotive semiconductor market.</p>
                                <ul>
                                    <li>Conducted in-depth research on LIDAR, radar, and camera vision systems for autonomous vehicles</li>
                                    <li>Developed valuation models for leading component suppliers across different sensor technologies</li>
                                    <li>Created segment forecasts for Level 2-5 autonomous driving adoption rates across major automotive markets</li>
                                    <li>Published quarterly reports tracking design wins and market share shifts among key suppliers</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <!-- Technical Skills Section -->
                    <section id="technical-skills" class="section">
                        <h3 class="section-title">Technical Skills Development</h3>

                        <div class="grid">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Data Analysis & Visualization</h3>
                                </div>
                                <div class="card-body">
                                    <ul>
                                        <li>Developed interactive dashboards using Tableau and Power BI for real-time market analysis</li>
                                        <li>Implemented automated data extraction pipelines from Bloomberg Terminal and financial databases</li>
                                        <li>Created custom Python scripts for sentiment analysis of earnings calls and industry reports</li>
                                        <li>Built interactive web-based visualization tools using D3.js for client presentations</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Financial Modeling</h3>
                                </div>
                                <div class="card-body">
                                    <ul>
                                        <li>Constructed DCF models for semiconductor companies with complex revenue streams</li>
                                        <li>Developed scenario-based valuation models incorporating technology adoption curves</li>
                                        <li>Created customized industry-specific metrics for evaluating emerging technology investments</li>
                                        <li>Implemented Monte Carlo simulations for risk assessment of high-growth technology stocks</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Bloomberg Terminal Expertise</h3>
                                </div>
                                <div class="card-body">
                                    <ul>
                                        <li>Mastered advanced Bloomberg Terminal functions for detailed company and industry analysis</li>
                                        <li>Developed custom formulas and tools using Bloomberg API for automated data extraction</li>
                                        <li>Created specialized screening tools for identifying investment opportunities in semiconductor sector</li>
                                        <li>Trained junior analysts on Bloomberg Intelligence platform navigation and research methodologies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="industry-insights" class="section">
                        <h3 class="section-title">Industry Insights</h3>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Semiconductor Supply Chain Resilience</h3>
                            </div>
                            <div class="card-body">
                                <p>Building on my ams-SW analysis, I've developed comprehensive frameworks to evaluate semiconductor supply chain vulnerabilities and resilience factors:</p>
                                <ul>
                                    <li>Published quarterly reports identifying critical dependencies in the 3D sensing component ecosystem</li>
                                    <li>Developed predictive models for capacity constraints that highlighted VCSEL production limitations 8 months before they impacted smartphone manufacturers</li>
                                    <li>Created industry-specific metrics to evaluate geographic concentration risks in the optical sensor supply chain</li>
                                    <li>Provided strategic recommendations for diversifying critical component sourcing that were implemented by major OEMs</li>
                                </ul>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Emerging Technology Adoption Analysis</h3>
                            </div>
                            <div class="card-body">
                                <p>Expanded on my ams-SW research with comprehensive frameworks for evaluating technology adoption cycles across multiple industries:</p>
                                <ul>
                                    <li>Created differential analysis comparing iOS vs. Android adoption rates for new sensing technologies</li>
                                    <li>Developed proprietary metrics for evaluating the financial impact of component integration decisions on supplier margins</li>
                                    <li>Established cross-industry benchmarks for comparing automotive sensor adoption to consumer electronics patterns</li>
                                    <li>Published white papers on the economic factors driving vertical integration decisions in the semiconductor industry</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>

                <!-- Skills & Tools Section -->
                <section id="skills" class="section">
                    <div class="section-header">
                        <h2 class="section-title">Skills & Tools</h2>
                        <p class="section-description">Comprehensive technical and analytical capabilities developed through Bloomberg Intelligence and Equity Research roles.</p>
                    </div>

                    <div class="grid">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Financial Analysis</h3>
                            </div>
                            <div class="card-body">
                                <ul>
                                    <li>Discounted Cash Flow (DCF) Modeling</li>
                                    <li>Comparable Company Analysis</li>
                                    <li>Multiples Valuation (P/E, EV/EBITDA)</li>
                                    <li>Scenario Analysis and Sensitivity Testing</li>
                                    <li>Financial Statement Analysis</li>
                                    <li>Earnings Quality Assessment</li>
                                    <li>Working Capital Analysis</li>
                                    <li>Free Cash Flow Forecasting</li>
                                </ul>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Industry Analysis</h3>
                            </div>
                            <div class="card-body">
                                <ul>
                                    <li>Semiconductor Market Dynamics</li>
                                    <li>Technology Supply Chain Analysis</li>
                                    <li>Competitive Positioning Assessment</li>
                                    <li>Market Share Analysis</li>
                                    <li>Product Lifecycle Evaluation</li>
                                    <li>Technology Adoption Modeling</li>
                                    <li>Industry Trend Forecasting</li>
                                    <li>Strategic Acquisition Analysis</li>
                                </ul>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Technical Tools</h3>
                            </div>
                            <div class="card-body">
                                <ul>
                                    <li>Bloomberg Terminal (Expert)</li>
                                    <li>FactSet</li>
                                    <li>Excel (Advanced Modeling)</li>
                                    <li>Python (Data Analysis)</li>
                                    <li>R (Statistical Analysis)</li>
                                    <li>SQL (Database Queries)</li>
                                    <li>Tableau (Data Visualization)</li>
                                    <li>Power BI (Interactive Dashboards)</li>
                                </ul>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Soft Skills</h3>
                            </div>
                            <div class="card-body">
                                <ul>
                                    <li>Research Report Writing</li>
                                    <li>Client Presentations</li>
                                    <li>Team Collaboration</li>
                                    <li>Project Management</li>
                                    <li>Deadline-Driven Workflow</li>
                                    <li>Complex Problem Solving</li>
                                    <li>Stakeholder Communication</li>
                                    <li>Mentoring Junior Analysts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


    <script>

    // Complete the script section with working chart implementations and interactive elements
    document.addEventListener('DOMContentLoaded', function() {
    // Update date in header to match current date
    document.querySelector('.date-display').textContent = 'Friday, March 07, 2025, 6:29 PM PST';

            // Create Revenue Segment Pie Chart
            const revenueSegmentCtx = document.getElementById('revenueSegmentChart').getContext('2d');
            new Chart(revenueSegmentCtx, {
                type: 'pie',
                data: {
                    labels: ['Consumer & Communications', 'Automotive, Industrial & Medical'],
                    datasets: [{
                        data: [73, 27],
                        backgroundColor: [
                            'rgba(45, 55, 72, 0.8)',
                            'rgba(249, 115, 22, 0.8)'
                        ],
                        borderColor: [
                            'rgba(45, 55, 72, 1)',
                            'rgba(249, 115, 22, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.label + ': ' + context.raw + '%';
                                }
                            }
                        }
                    }
                }
            });

            // Create Margin Trends Line Chart
            const marginTrendsCtx = document.getElementById('marginTrendsChart').getContext('2d');
            new Chart(marginTrendsCtx, {
                type: 'line',
                data: {
                    labels: ['Q1 2016', 'Q2 2016', 'Q3 2016', 'Q4 2016', 'Q1 2017', 'Q2 2017', 'Q3 2017', 'Q4 2017', 'Q1 2018', 'Q2 2018'],
                    datasets: [{
                        label: 'Gross Margin (%)',
                        data: [49, 48, 51, 50, 40, 35, 25, 20, 15, 9],
                        borderColor: 'rgba(13, 115, 255, 1)',
                        backgroundColor: 'rgba(13, 115, 255, 0.1)',
                        tension: 0.3,
                        fill: true
                    },
                    {
                        label: 'Operating Margin (%)',
                        data: [30, 28, 32, 33, 25, 20, 5, -10, -20, -29],
                        borderColor: 'rgba(22, 163, 74, 1)',
                        backgroundColor: 'rgba(22, 163, 74, 0.1)',
                        tension: 0.3,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        }
                    },
                    scales: {
                        y: {
                            min: -30,
                            max: 60,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });

            // Create Stock Performance Chart
            const stockPerformanceCtx = document.getElementById('stockPerformanceChart').getContext('2d');
            new Chart(stockPerformanceCtx, {
                type: 'line',
                data: {
                    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
                    datasets: [{
                        label: 'ams-SW',
                        data: [100, 110, 105, 115, 125, 140, 130, 135, 150, 145, 160, 155, 170],
                        borderColor: 'rgba(249, 115, 22, 1)',
                        backgroundColor: 'rgba(249, 115, 22, 0.1)',
                        tension: 0.3,
                        fill: true
                    },
                    {
                        label: 'Semiconductor Index',
                        data: [100, 105, 108, 112, 115, 120, 118, 125, 130, 132, 138, 140, 145],
                        borderColor: 'rgba(45, 55, 72, 1)',
                        backgroundColor: 'transparent',
                        tension: 0.3,
                        borderDash: [5, 5]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        }
                    },
                    scales: {
                        y: {
                            title: {
                                display: true,
                                text: 'Indexed Performance (Base 100)'
                            }
                        }
                    }
                }
            });

            // Create Quarterly Revenue Chart
            const quarterlyRevenueCtx = document.getElementById('quarterlyRevenueChart').getContext('2d');
            new Chart(quarterlyRevenueCtx, {
                type: 'bar',
                data: {
                    labels: ['Q1 2017', 'Q2 2017', 'Q3 2017', 'Q4 2017', 'Q1 2018', 'Q2 2018', 'Q3 2018 (Est)'],
                    datasets: [{
                        label: 'Revenue (USD Million)',
                        data: [150, 214, 253, 445, 432.7, 252.8, 470],
                        backgroundColor: 'rgba(45, 55, 72, 0.7)',
                        borderColor: 'rgba(45, 55, 72, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'YoY Growth (%)',
                        data: [10, 12, 15, 50, 188, 18, 85],
                        type: 'line',
                        yAxisID: 'y1',
                        borderColor: 'rgba(249, 115, 22, 1)',
                        backgroundColor: 'rgba(249, 115, 22, 0.2)',
                        tension: 0.3,
                        pointBackgroundColor: 'rgba(249, 115, 22, 1)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        },
                        y1: {
                            position: 'right',
                            beginAtZero: true,
                            grid: {
                                drawOnChartArea: false
                            },
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });

            // Create Android Adoption Chart
            const androidAdoptionCtx = document.getElementById('androidAdoptionChart').getContext('2d');
            new Chart(androidAdoptionCtx, {
                type: 'line',
                data: {
                    labels: ['H2 2018', 'H1 2019', 'H2 2019', 'H1 2020', 'H2 2020', 'H1 2021'],
                    datasets: [{
                        label: 'Apple Devices with 3D Sensing (Millions)',
                        data: [170, 185, 200, 209, 213, 218],
                        borderColor: 'rgba(13, 115, 255, 1)',
                        backgroundColor: 'rgba(13, 115, 255, 0.1)',
                        tension: 0.3,
                        fill: true
                    },
                    {
                        label: 'Android Devices with 3D Sensing (Millions)',
                        data: [5, 15, 35, 60, 90, 120],
                        borderColor: 'rgba(22, 163, 74, 1)',
                        backgroundColor: 'rgba(22, 163, 74, 0.1)',
                        tension: 0.3,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Devices (Millions)'
                            }
                        }
                    }
                }
            });

            // Create LIDAR Market Chart
            const lidarMarketCtx = document.getElementById('lidarMarketChart').getContext('2d');
            new Chart(lidarMarketCtx, {
                type: 'line',
                data: {
                    labels: ['2016', '2018', '2020', '2022', '2024', '2026'],
                    datasets: [{
                        label: 'LIDAR Market Size (USD Billion)',
                        data: [0.29, 0.5, 0.9, 1.4, 2.0, 2.7],
                        borderColor: 'rgba(249, 115, 22, 1)',
                        backgroundColor: 'rgba(249, 115, 22, 0.1)',
                        tension: 0.3,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': $' + context.raw + ' Billion';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Market Size (USD Billion)'
                            },
                            ticks: {
                                callback: function(value) {
                                    return '$' + value + 'B';
                                }
                            }
                        }
                    }
                }
            });

            // Create Competitor Revenue Chart
            const competitorRevenueCtx = document.getElementById('competitorRevenueChart').getContext('2d');
            new Chart(competitorRevenueCtx, {
                type: 'bar',
                data: {
                    labels: ['Q1 2017', 'Q2 2017', 'Q3 2017', 'Q4 2017', 'Q1 2018', 'Q2 2018'],
                    datasets: [{
                        label: 'ams Revenue Growth (YoY %)',
                        data: [10, 12, 15, 50, 188, 18],
                        backgroundColor: 'rgba(45, 55, 72, 0.7)',
                    },
                    {
                        label: 'Lumentum Revenue Growth (YoY %)',
                        data: [15, 66, 40, 35, 30, 25],
                        backgroundColor: 'rgba(249, 115, 22, 0.7)',
                    },
                    {
                        label: 'Finisar Revenue Growth (YoY %)',
                        data: [8, 10, 12, 20, 15, 10],
                        backgroundColor: 'rgba(13, 115, 255, 0.7)',
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.raw + '%';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Revenue Growth (YoY %)'
                            },
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });

            // Create P/E Analysis Chart
            const peAnalysisCtx = document.getElementById('peAnalysisChart').getContext('2d');
            new Chart(peAnalysisCtx, {
                type: 'line',
                data: {
                    labels: ['Q1 2016', 'Q2 2016', 'Q3 2016', 'Q4 2016', 'Q1 2017', 'Q2 2017', 'Q3 2017', 'Q4 2017', 'Q1 2018', 'Q2 2018'],
                    datasets: [{
                        label: 'P/E Ratio (Historical)',
                        data: [25, 28, 35, 40, 45, 50, 80, 70, 40, 30],
                        borderColor: 'rgba(13, 115, 255, 1)',
                        backgroundColor: 'rgba(13, 115, 255, 0.1)',
                        tension: 0.3,
                        fill: true
                    },
                    {
                        label: 'Average P/E (30x)',
                        data: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
                        borderColor: 'rgba(249, 115, 22, 1)',
                        backgroundColor: 'transparent',
                        tension: 0.3,
                        borderDash: [5, 5]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'P/E Ratio'
                            },
                            min: 0,
                            max: 85
                        }
                    }
                }
            });

            // iPad Adoption Slider
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

            // TrueDepth Visualization
            const truedepthVisualization = document.getElementById('truedepthVisualization');
            if (truedepthVisualization) {
                truedepthVisualization.innerHTML = `
                    <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
                        <!-- Phone outline -->
                        <rect x="100" y="20" width="300" height="260" rx="20" fill="#1a1e29" />
                        <rect x="110" y="30" width="280" height="240" rx="15" fill="#f8fafc" />

                        <!-- Notch -->
                        <rect x="170" y="30" width="160" height="40" rx="10" fill="#1a1e29" />

                        <!-- Components -->
                        <circle cx="200" cy="50" r="10" fill="#ff9900" class="component" data-component="Infrared Camera" />
                        <circle cx="230" cy="50" r="10" fill="#0d73ff" class="component" data-component="Flood Illuminator" />
                        <circle cx="260" cy="50" r="10" fill="#16a34a" class="component" data-component="Proximity Sensor" />
                        <circle cx="290" cy="50" r="10" fill="#dc2626" class="component" data-component="Ambient Light Sensor" />
                        <circle cx="245" cy="50" r="15" fill="#eab308" class="component" data-component="Dot Projector (VCSEL)" />
                    </svg>
                    <div id="componentInfo" style="text-align: center; margin-top: 10px; font-weight: bold;">Hover over components for details</div>
                `;

                const components = truedepthVisualization.querySelectorAll('.component');
                const componentInfo = document.getElementById('componentInfo');

                components.forEach(component => {
                    component.addEventListener('mouseover', function() {
                        const componentName = this.getAttribute('data-component');
                        componentInfo.textContent = componentName;
                        this.setAttribute('stroke', 'white');
                        this.setAttribute('stroke-width', '2');
                    });

                    component.addEventListener('mouseout', function() {
                        componentInfo.textContent = 'Hover over components for details';
                        this.setAttribute('stroke', 'none');
                    });
                });
            }

            // Smooth scrolling for navigation links
            const navLinks = document.querySelectorAll('.nav-link, .toc-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });

                        // Update active state
                        navLinks.forEach(l => l.classList.remove('active'));
                        this.classList.add('active');
                    }
                });
            });

            // Add active class handling for table of contents based on scroll position
            window.addEventListener('scroll', function() {
                const scrollPosition = window.scrollY;

                // Find all sections
                const sections = document.querySelectorAll('section[id]');

                // Check which section is currently visible
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        // Remove active class from all TOC links
                        document.querySelectorAll('.toc-link').forEach(link => {
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

            // Add chart control functionality
            document.querySelectorAll('.chart-control').forEach(control => {
                control.addEventListener('click', function() {
                    // Remove active class from all controls in the same group
                    this.parentNode.querySelectorAll('.chart-control').forEach(btn => {
                        btn.classList.remove('active');
                    });

                    // Add active class to the clicked control
                    this.classList.add('active');
                });
            });
        });
    </script>

</body>
</html>
