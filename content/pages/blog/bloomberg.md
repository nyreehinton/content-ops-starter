---
title: 'Bloomberg'
slug: bloomberg
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

    <!-- Custom styles -->
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

        /* Hide site header and its containers */
        header[data-sb-object-id="header"],
        div[data-sb-object-id="header"],
        [data-sb-field-path="header"],
        nav[data-sb-field-path="header"],
        .sb-component-header {
            display: none !important;
            height: 0 !important;
            min-height: 0 !important;
            overflow: hidden !important;
            position: absolute !important;
            visibility: hidden !important;
        }

        /* Adjust main content to account for hidden header */
        main[data-sb-object-id="main"],
        div[data-sb-object-id="main"],
        .sb-component-main {
            padding-top: 0 !important;
            margin-top: 0 !important;
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

        /* Add styles for nested navigation */
        .nav-sublinks {
            margin-left: 1.5rem;
            display: flex;
            flex-direction: column;
        }

        .nav-sublink {
            color: rgba(255, 255, 255, 0.6);
            text-decoration: none;
            font-size: 0.9rem;
            padding: 0.5rem 1.5rem;
            transition: all 0.2s;
            border-left: 2px solid transparent;
        }

        .nav-sublink.active, .nav-sublink:hover {
            color: white;
            background-color: rgba(255, 255, 255, 0.03);
            border-left-color: var(--bloomberg-orange);
        }

        /* Remove the old sidebar styles */
        .sidebar {
            display: none;
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
            position: relative;
            height: 400px;
            width: 100%;
            margin: 2rem 0;
        }

        .chart-error-message {
            position: fixed;
            top: 1rem;
            right: 1rem;
            z-index: 1000;
            max-width: 400px;
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
            margin: 0;
        }

        .chart-controls {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .chart-control {
            padding: 0.5rem 1rem;
            border: 1px solid var(--bloomberg-navy);
            border-radius: 0.25rem;
            background: none;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .chart-control.active {
            background: var(--bloomberg-navy);
            color: white;
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
            padding: 1.5rem;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
        }

        .slider-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .slider {
            width: 100%;
            height: 5px;
            -webkit-appearance: none;
            appearance: none;
            background: #e2e8f0;
            border-radius: 5px;
            outline: none;
            opacity: 0.7;
            transition: opacity 0.2s;
        }

        .slider:hover {
            opacity: 1;
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
            transition: transform 0.2s ease;
        }

        .slider::-webkit-slider-thumb:hover {
            transform: scale(1.1);
        }

        .slider::-moz-range-thumb {
            width: 18px;
            height: 18px;
            background: var(--bloomberg-orange);
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease;
        }

        .slider::-moz-range-thumb:hover {
            transform: scale(1.1);
        }

        /* Result display for interactive elements */
        .result-display {
            margin-top: 1.5rem;
            padding: 1rem;
            background: #f8fafc;
            border-radius: 4px;
            text-align: center;
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

        /* Analytics Section Styles */
        .analytics-section {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin: 2rem 0;
        }

        @media (max-width: 992px) {
            .analytics-section {
                grid-template-columns: 1fr;
            }
        }

        .chart-container {
            background: white;
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
            margin: 1.5rem 0;
            min-height: 400px;
            width: 100%;
            position: relative;
        }

        .chart-container canvas {
            width: 100% !important;
            height: 100% !important;
            min-height: 300px;
        }

        .chart {
            position: relative;
            height: 300px;
            width: 100%;
        }

        /* Ensure chart containers are visible */
        .chart-container {
            display: block;
            visibility: visible;
            opacity: 1;
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
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--bloomberg-navy);
            margin: 0;
        }

        .chart-controls {
            display: flex;
            gap: 0.5rem;
        }

        .chart-control {
            padding: 0.4rem 0.8rem;
            font-size: 0.85rem;
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            background: none;
            color: var(--bloomberg-gray);
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .chart-control:hover,
        .chart-control.active {
            background: var(--bloomberg-navy);
            color: white;
            border-color: var(--bloomberg-navy);
        }

        /* Update tab content styles */
        .bloomberg-tab-content {
            display: none;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }

        .bloomberg-tab-content.active {
            display: block;
            opacity: 1;
        }

        /* Remove any conflicting styles */
        .section {
            display: block;
        }
    </style>

    <script>
        // Function to handle tab switching
        function switchTab(tabId) {
            console.log('Switching to tab:', tabId);
            // Get all tab contents and buttons
            const allContents = document.querySelectorAll('.bloomberg-tab-content');
            const allButtons = document.querySelectorAll('.bloomberg-tab-button');

            // First hide all contents and deactivate all buttons
            allContents.forEach(content => {
                content.style.display = 'none';
                content.classList.remove('active');
                content.style.opacity = '0';
            });

            allButtons.forEach(button => {
                button.classList.remove('active');
            });

            // Show the selected content and activate the button
            const selectedContent = document.getElementById(tabId);
            const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);

            if (selectedContent && selectedButton) {
                console.log('Found tab content and button');
                selectedContent.style.display = 'block';
                // Force a reflow
                selectedContent.offsetHeight;
                selectedContent.style.opacity = '1';
                selectedContent.classList.add('active');
                selectedButton.classList.add('active');
            } else {
                console.log('Tab content or button not found');
                // Fallback to first tab if the requested tab doesn't exist
                const firstButton = document.querySelector('.bloomberg-tab-button');
                if (firstButton) {
                    const firstTabId = firstButton.getAttribute('data-tab');
                    if (firstTabId !== tabId) {
                        switchTab(firstTabId);
                    }
                }
            }
        }

        // Function to initialize tabs
        function initializeTabs() {
            console.log('Initializing tabs');
            const tabButtons = document.querySelectorAll('.bloomberg-tab-button');
            console.log('Found tab buttons:', tabButtons.length);

            // Add click event listeners to all tab buttons
            tabButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const tabId = this.getAttribute('data-tab');
                    switchTab(tabId);
                });
            });

            // Set initial active tab
            const activeTab = document.querySelector('.bloomberg-tab-content.active');
            if (!activeTab) {
                const firstButton = tabButtons[0];
                if (firstButton) {
                    const firstTabId = firstButton.getAttribute('data-tab');
                    switchTab(firstTabId);
                }
            }
        }

        // Initialize tabs when DOM is ready
        function tryInitialize() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initializeTabs);
            } else {
                initializeTabs();
            }
        }

        // Try to initialize immediately
        tryInitialize();

        // Fallback: try again after a short delay
        setTimeout(tryInitialize, 500);
    </script>

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
            <div class="date-display" suppressHydrationWarning={true}>Table of Contents</div>
            <nav class="navigation" suppressHydrationWarning={true}>
                <a href="#professional-summary" class="nav-link">Professional Summary</a>
                
                <a href="#experience" class="nav-link">Experience Timeline</a>
                
                <a href="#bloomberg-intelligence" class="nav-link">Bloomberg Intelligence Internship</a>
                <div class="nav-sublinks">
                    <a href="#executive-summary" class="nav-sublink">Executive Summary</a>
                    <a href="#financial-analysis" class="nav-sublink">Financial Analysis</a>
                    <a href="#market-opportunity" class="nav-sublink">Market Opportunity</a>
                    <a href="#competitive-analysis" class="nav-sublink">Competitive Analysis</a>
                    <a href="#valuation" class="nav-sublink">Valuation & Investment Thesis</a>
                </div>
                
                <a href="#equity-research" class="nav-link">Equity Research Achievements</a>
                <div class="nav-sublinks">
                    <a href="#key-projects" class="nav-sublink">Key Projects</a>
                    <a href="#technical-skills" class="nav-sublink">Technical Skills</a>
                    <a href="#industry-insights" class="nav-sublink">Industry Insights</a>
                </div>
                
                <a href="#skills" class="nav-link">Skills & Tools</a>
                <a href="#contact" class="nav-link">Contact Information</a>
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
            <!-- Bloomberg Tabs -->
            <div class="bloomberg-tabs">
                <button class="bloomberg-tab-button" data-tab="professional-summary">Professional Summary</button>
                <button class="bloomberg-tab-button" data-tab="bloomberg-intelligence">Bloomberg Intelligence Primer</button>
                <button class="bloomberg-tab-button" data-tab="technical-skills">Technical Skills</button>
            </div>

            <div class="bloomberg-tab-content active" id="professional-summary">
                <!-- Professional Summary Content -->
                <section class="section">
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

                    <!-- Experience Timeline Section -->
                    <section id="experience" class="section">
                        <div class="section-header">
                            <h2 class="section-title">Experience Timeline</h2>
                            <p class="section-description">Professional journey through the financial analysis landscape.</p>
                        </div>

                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Bloomberg Intelligence Internship</h3>
                                    <p class="timeline-date">Summer 2018</p>
                                    <div class="timeline-description">
                                        <p>Conducted in-depth analysis of ams-SW, a key Apple semiconductor supplier for facial recognition technology. Evaluated complex technologies, analyzed financial performance, and assessed market opportunities across mobile, IoT, and automotive segments.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="timeline-item">
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Equity Research Data Analyst</h3>
                                    <p class="timeline-date">2018 - Present</p>
                                    <div class="timeline-description">
                                        <p>Expanded expertise to include advanced data analysis techniques, comprehensive sector coverage, and the development of proprietary analytical models that provide unique market perspectives. Consistently delivered value through rigorous analysis, clear communication, and strategic insights.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

            <div class="bloomberg-tab-content" id="bloomberg-intelligence">
                <!-- Bloomberg Intelligence Primer Content -->
                <section class="section">
                    <div class="section-header">
                        <h2 class="section-title">Bloomberg Intelligence Internship: ams-SW Analysis</h2>
                        <p class="section-description">Comprehensive analysis of ams-SW, a key Apple semiconductor supplier for facial recognition technology.</p>
                    </div>

                    <!-- Executive Summary Section -->
                    <section id="executive-summary" class="subsection">
                        <h3 class="section-title">Executive Summary</h3>
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">ams-SW: Positioned to Benefit from 3D Sensor Growth</h3>
                            </div>
                            <div class="card-body">
                                <p>Ams is well positioned to take advantage of the growing demand for 3D technology implemented in Apple devices while also benefiting from Android adoption and self-driving car applications. The company's strategic acquisitions have allowed it to outpace rivals in revenue growth, making it a favored semiconductor in optical sensors for quarters to come.</p>
                            </div>
                        </div>
                    </section>

                    <!-- Financial Analysis Section -->
                    <section id="financial-analysis" class="subsection">
                        <h3 class="section-title">Financial Analysis</h3>
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Financial Performance Overview</h3>
                            </div>
                            <div class="card-body">
                                <p>Key financial metrics demonstrate strong growth trajectory:</p>
                                <ul>
                                    <li>Revenue Growth: 18% YoY increase</li>
                                    <li>Gross Margin: 9% in Q2 (down from 35% previous year)</li>
                                    <li>Consumer & Communications Segment: 73% of revenue</li>
                                    <li>R&D Investment: Significant increase in 3D sensing technology</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <!-- Market Opportunity Section -->
                    <section id="market-opportunity" class="subsection">
                        <h3 class="section-title">Market Opportunity</h3>
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Growth Drivers & Market Expansion</h3>
                            </div>
                            <div class="card-body">
                                <p>Primary market opportunities include:</p>
                                <ul>
                                    <li>Mobile 3D Sensing: Estimated $7.50 content per iPhone</li>
                                    <li>Android Adoption: Expanding market share in Asian markets</li>
                                    <li>Automotive Applications: Growing demand in ADAS systems</li>
                                    <li>IoT Integration: Emerging opportunities in smart devices</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <!-- Competitive Analysis Section -->
                    <section id="competitive-analysis" class="subsection">
                        <h3 class="section-title">Competitive Analysis</h3>
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Competitive Position & Market Share</h3>
                            </div>
                            <div class="card-body">
                                <div class="swot-container">
                                    <div class="swot-box strengths">
                                        <h3>Strengths</h3>
                                        <ul>
                                            <li>Market leader in 3D sensing technology</li>
                                            <li>Strong relationship with Apple</li>
                                            <li>Advanced R&D capabilities</li>
                                        </ul>
                                    </div>
                                    <div class="swot-box weaknesses">
                                        <h3>Weaknesses</h3>
                                        <ul>
                                            <li>High customer concentration</li>
                                            <li>Margin pressure</li>
                                            <li>Integration challenges</li>
                                        </ul>
                                    </div>
                                    <div class="swot-box opportunities">
                                        <h3>Opportunities</h3>
                                        <ul>
                                            <li>Android market expansion</li>
                                            <li>Automotive sector growth</li>
                                            <li>IoT applications</li>
                                        </ul>
                                    </div>
                                    <div class="swot-box threats">
                                        <h3>Threats</h3>
                                        <ul>
                                            <li>Increasing competition</li>
                                            <li>Technology shifts</li>
                                            <li>Supply chain risks</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Valuation Section -->
                    <section id="valuation" class="subsection">
                        <h3 class="section-title">Valuation & Investment Thesis</h3>
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Investment Analysis</h3>
                            </div>
                            <div class="card-body">
                                <p>Key investment considerations:</p>
                                <ul>
                                    <li>Market Position: Leading provider in growing 3D sensing market</li>
                                    <li>Growth Potential: Multiple expansion opportunities across sectors</li>
                                    <li>Technology Leadership: Strong IP portfolio and R&D pipeline</li>
                                    <li>Risk Factors: Customer concentration and margin pressure</li>
                                </ul>
                                <div class="quote">
                                    <p>"ams-SW's strategic positioning in the 3D sensing market, combined with its expansion into automotive and IoT applications, presents a compelling growth story despite near-term margin pressures."</p>
                                    <span class="quote-source">- Bloomberg Intelligence Analysis</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

            <div class="bloomberg-tab-content" id="technical-skills">
                <!-- Technical Skills Development Content -->
                <section class="section">
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
                                    <li>Bloomberg Terminal</li>
                                    <li>Excel Financial Modeling</li>
                                    <li>SQL Database Queries</li>
                                    <li>Python Data Analysis</li>
                                    <li>Tableau Visualization</li>
                                    <li>R Statistical Analysis</li>
                                    <li>Financial Data APIs</li>
                                    <li>Machine Learning Applications</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Additional skills content can be added here -->
                    <div class="section-footer">
                        <p class="note">These skills represent my technical toolkit developed through both academic training and professional experience at Bloomberg and beyond.</p>
                    </div>
                </section>

                <!-- Contact Information Section -->
                <section id="contact" class="section">
                    <div class="section-header">
                        <h2 class="section-title">Contact Information</h2>
                    </div>
                    <div class="contact-container">
                        <div class="contact-info">
                            <div class="contact-item">
                                <i class="contact-icon email-icon"></i>
                                <span class="contact-text">nyree.hinton@example.com</span>
                            </div>
                            <div class="contact-item">
                                <i class="contact-icon linkedin-icon"></i>
                                <span class="contact-text">linkedin.com/in/nyreehinton</span>
                            </div>
                            <div class="contact-item">
                                <i class="contact-icon website-icon"></i>
                                <span class="contact-text">nyreehinton.com</span>
                            </div>
                        </div>
                        <div class="contact-form-container">
                            <h3>Send a Message</h3>
                            <form class="contact-form">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" required>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" required>
                                </div>
                                <div class="form-group">
                                    <label for="message">Message</label>
                                    <textarea id="message" name="message" rows="4" required></textarea>
                                </div>
                                <button type="submit" class="submit-button">Send Message</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

            <style>
                /* Bloomberg Tabs Styling */
                .bloomberg-tabs {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    padding: 1rem;
                    background: white;
                    border-bottom: 2px solid #e2e8f0;
                    position: sticky;
                    top: 0;
                    z-index: 100;
                    width: 100%;
                }

                .bloomberg-tab-button {
                    padding: 0.75rem 1.5rem;
                    border: none;
                    background: none;
                    color: #64748b;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.2s ease-in-out;
                    position: relative;
                    min-width: 120px;
                    text-align: center;
                }

                .bloomberg-tab-button:hover {
                    color: #1a1e29;
                }

                .bloomberg-tab-button.active {
                    color: #f97316;
                }

                .bloomberg-tab-button.active::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #f97316;
                }

                .bloomberg-tab-content {
                    display: none;
                    opacity: 0;
                    transition: opacity 0.3s ease-in-out;
                    width: 100%;
                }

                .bloomberg-tab-content.active {
                    display: block;
                    opacity: 1;
                }

                @media (max-width: 768px) {
                    .bloomberg-tabs {
                        flex-direction: column;
                        align-items: stretch;
                        padding: 10px;
                    }

                    .bloomberg-tab-button {
                        margin: 5px 0;
                        text-align: center;
                        width: 100%;
                    }
                }
            </style>
        </main>
    </div>

</div>

</body>
</html>
