---
title: Managaing A Data Product
slug: capital-group
date: '2025-03-26'
excerpt: 'Portfolio showcasing ETF data product management experience at Capital Group, featuring ETF fundamentals, strategy, and data management achievements.'
isFeatured: true
colors:
styles:
  self:
    flexDirection: col
type: CustomHTMLLayout
author: content/data/nyree.json
allowed_elements:
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
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ETF Product Management | Capital Group Experience</title>
    <meta name="description" content="Portfolio showcasing ETF data product management experience at Capital Group, featuring ETF fundamentals, strategy, and data management achievements.">
    <style>
        :root {
            --primary-color: #002d4b; /* Capital Group dark blue */
            --secondary-color: #ffffff;
            --accent-color: #0078a4; /* Teal/blue for interactive elements */
            --text-color: #333333;
            --light-gray: #f5f5f5;
            --medium-gray: #e0e0e0;
            --dark-gray: #666666;
            --success-color: #28a745;
            --warning-color: #ffc107;
            --danger-color: #dc3545;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--secondary-color);
        }

        /* Typography */
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Segoe UI', Arial, sans-serif;
            margin-bottom: 1rem;
            color: var(--primary-color);
            font-weight: 600;
        }

        h1 {
            font-size: 2.5rem;
            margin-top: 0;
        }

        h2 {
            font-size: 2rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--medium-gray);
        }

        h3 {
            font-size: 1.5rem;
            margin-top: 1.5rem;
        }

        p {
            margin-bottom: 1.2rem;
            font-size: 1rem;
        }

        /* Layout */
        .container {
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
        }

        section {
            margin: 3rem 0;
            padding: 2rem;
            background-color: var(--secondary-color);
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .hero {
            background-color: var(--primary-color);
            color: var(--secondary-color);
            padding: 4rem 2rem;
            margin-bottom: 3rem;
            position: relative;
            overflow: hidden;
            text-align: center;
        }

        .hero h1 {
            color: white;
            font-size: 3rem;
            margin-bottom: 1rem;
            position: relative;
            z-index: 2;
        }

        .hero p {
            font-size: 1.25rem;
            max-width: 800px;
            margin: 0 auto 2rem;
            position: relative;
            z-index: 2;
        }

        .hero::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path fill="rgba(255,255,255,0.05)" d="M0,0 L100,0 L100,100 L0,100 Z"></path></svg>');
            opacity: 0.1;
            z-index: 1;
        }

        /* Card layouts */
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .card {
            background-color: var(--secondary-color);
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }

        .card-header {
            background-color: var(--primary-color);
            color: var(--secondary-color);
            padding: 1rem;
        }

        .card-body {
            padding: 1.5rem;
        }

        /* Tables */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 2rem;
            font-size: 0.9rem;
        }

        th {
            background-color: var(--primary-color);
            color: var(--secondary-color);
            padding: 12px 15px;
            text-align: left;
            font-weight: 600;
        }

        td {
            padding: 10px 15px;
            border-bottom: 1px solid var(--medium-gray);
        }

        tr:nth-child(even) {
            background-color: var(--light-gray);
        }

        tr:hover {
            background-color: var(--medium-gray);
        }

        /* Charts and data visualization */
        .chart-container {
            margin: 2rem 0;
            height: 400px;
            position: relative;
            border: 1px solid var(--medium-gray);
            border-radius: 5px;
            padding: 1rem;
            background-color: var(--light-gray);
        }

        .chart-legend {
            display: flex;
            flex-wrap: wrap;
            margin-top: 1rem;
            justify-content: center;
        }

        .legend-item {
            display: flex;
            align-items: center;
            margin-right: 20px;
            margin-bottom: 10px;
        }

        .legend-color {
            width: 16px;
            height: 16px;
            margin-right: 8px;
            border-radius: 4px;
        }

        /* Two column layout */
        .two-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        /* Tabs */
        .tabs {
            margin: 2rem 0;
        }

        .tab-nav {
            display: flex;
            list-style: none;
            border-bottom: 2px solid var(--medium-gray);
        }

        .tab-nav li {
            padding: 0.5rem 1rem;
            cursor: pointer;
            border: 1px solid transparent;
            border-bottom: none;
            border-radius: 5px 5px 0 0;
            margin-right: 5px;
            background-color: var(--light-gray);
        }

        .tab-nav li.active {
            background-color: var(--primary-color);
            color: var(--secondary-color);
            border-color: var(--medium-gray);
        }

        .tab-content {
            padding: 1.5rem;
            border: 1px solid var(--medium-gray);
            border-top: none;
            border-radius: 0 0 5px 5px;
        }

        .tab-pane {
            display: none;
        }

        .tab-pane.active {
            display: block;
        }

        /* Progress bars */
        .progress-container {
            margin: 1.5rem 0;
        }

        .progress-label {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }

        .progress-bar {
            height: 20px;
            background-color: var(--medium-gray);
            border-radius: 10px;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            background-color: var(--accent-color);
            border-radius: 10px;
            transition: width 0.5s ease;
        }

        /* Responsive design */
        @media (max-width: 992px) {
            .two-column {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 2rem;
            }

            h2 {
                font-size: 1.75rem;
            }

            h3 {
                font-size: 1.25rem;
            }

            .hero {
                padding: 3rem 1.5rem;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            section {
                padding: 1.5rem;
            }

            .chart-container {
                height: 300px;
            }

            .card-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Buttons */
        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: var(--accent-color);
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-weight: 600;
            transition: background-color 0.3s ease;
            cursor: pointer;
            border: none;
            text-align: center;
        }

        .btn:hover {
            background-color: #005d81;
        }

        .btn-primary {
            background-color: var(--primary-color);
        }

        .btn-primary:hover {
            background-color: #001d31;
        }

        .btn-outline {
            background-color: transparent;
            border: 2px solid var(--primary-color);
            color: var(--primary-color);
        }

        .btn-outline:hover {
            background-color: var(--primary-color);
            color: white;
        }

        /* Navigation */
        .navbar {
            background-color: var(--primary-color);
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            max-width: 1400px;
            margin: 0 auto;
        }

        .nav-logo {
            color: white;
            font-size: 1.5rem;
            font-weight: 700;
            text-decoration: none;
        }

        .nav-links {
            display: flex;
            list-style: none;
        }

        .nav-links li {
            margin-left: 1.5rem;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .nav-links a:hover {
            color: var(--accent-color);
        }

        /* Accessible features */
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
        }

        /* For keyboard navigation */
        a:focus, button:focus, input:focus, select:focus, textarea:focus {
            outline: 3px solid var(--accent-color);
            outline-offset: 2px;
        }

        /* Animations */
        .animate-fade-in {
            animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .animate-slide-up {
            animation: slideUp 0.5s ease;
        }

        @keyframes slideUp {
            from {
                transform: translateY(20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        /* Data visualization specific styles */
        .bar-chart, .pie-chart, .line-chart {
            height: 100%;
            width: 100%;
        }

        /* Timeline */
        .timeline {
            position: relative;
            max-width: 1200px;
            margin: 3rem auto;
        }

        .timeline::after {
            content: '';
            position: absolute;
            width: 6px;
            background-color: var(--primary-color);
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -3px;
        }

        .timeline-container {
            padding: 10px 40px;
            position: relative;
            background-color: inherit;
            width: 50%;
        }

        .timeline-container.left {
            left: 0;
        }

        .timeline-container.right {
            left: 50%;
        }

        .timeline-container::after {
            content: '';
            position: absolute;
            width: 25px;
            height: 25px;
            right: -13px;
            background-color: var(--secondary-color);
            border: 4px solid var(--primary-color);
            top: 15px;
            border-radius: 50%;
            z-index: 1;
        }

        .timeline-container.right::after {
            left: -13px;
        }

        .timeline-content {
            padding: 20px 30px;
            background-color: var(--secondary-color);
            position: relative;
            border-radius: 6px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        /* Interactive elements */
        .collapse-trigger {
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            background-color: var(--light-gray);
            border: none;
            width: 100%;
            text-align: left;
            font-weight: 600;
        }

        .collapse-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }

        .collapse-content.active {
            max-height: 1000px;
        }

        /* Tooltip */
        .tooltip {
            position: relative;
            display: inline-block;
            border-bottom: 1px dotted var(--dark-gray);
        }

        .tooltip .tooltip-text {
            visibility: hidden;
            width: 200px;
            background-color: var(--primary-color);
            color: var(--secondary-color);
            text-align: center;
            padding: 5px;
            border-radius: 6px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            margin-left: -100px;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .tooltip:hover .tooltip-text {
            visibility: visible;
            opacity: 1;
        }
    </style>

</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="#" class="nav-logo">Nyree Hinton | Capital Group</a>
            <ul class="nav-links">
                <li><a href="#etf-fundamentals">ETF Fundamentals</a></li>
                <li><a href="#capital-group-strategy">CG Strategy</a></li>
                <li><a href="#data-management">Data Management</a></li>
                <li><a href="#technical-infrastructure">Technical Infrastructure</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <div class="hero">
        <div class="container">
            <h1>Managing A Data Product</h1>
            <p>A comprehensive overview of Exchange-Traded Funds, Capital Group's strategy, and the data infrastructure supporting $31+ billion in ETF sales.</p>
            <a href="#etf-fundamentals" class="btn">Explore ETF Fundamentals</a>
        </div>
    </div>

    <!-- ETF Fundamentals Section -->
    <section id="etf-fundamentals" class="container">
        <h2>ETF Fundamentals</h2>
        <p>Exchange-traded funds (ETFs) represent a transformative shift in investment vehicles, combining the intraday liquidity of stocks with the diversified exposure of mutual funds. Unlike mutual funds, which settle at end-of-day net asset values (NAVs), ETFs require real-time price discovery mechanisms to maintain parity between market prices and underlying assets.</p>

        <div class="tabs">
            <ul class="tab-nav">
                <li class="active" data-tab="primary-market">Primary Market</li>
                <li data-tab="secondary-market">Secondary Market</li>
                <li data-tab="arbitrage">Arbitrage Mechanism</li>
                <li data-tab="etf-vs-mutual">ETFs vs. Mutual Funds</li>
            </ul>

            <div class="tab-content">
                <div id="primary-market" class="tab-pane active">
                    <h3>Primary Market Process</h3>
                    <div class="two-column">
                        <div>
                            <h4>Creation Process</h4>
                            <p>Authorized Participants (APs), often large financial institutions, work directly with the ETF issuer to create new ETF shares.</p>
                            <p>APs deliver a "creation basket," which consists of the securities underlying the ETF (or equivalent cash). In return, they receive an equivalent number of ETF shares at the net asset value (NAV).</p>

                            <h4>Redemption Process</h4>
                            <p>APs redeem ETF shares by returning them to the issuer. In exchange, they receive the underlying securities or cash at the NAV.</p>
                            <p>This mechanism ensures the ETF's supply matches market demand.</p>
                        </div>
                        <div class="chart-container">
                            <!-- SVG representation of primary market -->
                            <svg viewBox="0 0 800 400" class="primary-market-diagram">
                                <!-- Remove incomplete rect element -->
                                <rect x="50" y="50" width="300" height="150" fill="#e6f7ff" stroke="#002d4b" stroke-width="2" rx="10" ry="10"/>
                                <rect x="450" y="50" width="300" height="150" fill="#e6f7ff" stroke="#002d4b" stroke-width="2" rx="10" ry="10"/>
                                <rect x="250" y="250" width="300" height="100" fill="#002d4b" stroke="#002d4b" stroke-width="2" rx="10" ry="10"/>

                                <text x="200" y="100" text-anchor="middle" font-weight="bold">Authorized Participant</text>
                                <text x="200" y="130" text-anchor="middle">Delivers creation basket</text>
                                <text x="200" y="160" text-anchor="middle">of securities or cash</text>

                                <text x="600" y="100" text-anchor="middle" font-weight="bold">ETF Issuer</text>
                                <text x="600" y="130" text-anchor="middle">Creates and issues</text>
                                <text x="600" y="160" text-anchor="middle">ETF shares at NAV</text>

                                <text x="400" y="300" text-anchor="middle" font-weight="bold" fill="white">ETF Creation Units</text>

                                <!-- Arrows -->
                                <path d="M350 125 L450 125" stroke="#002d4b" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
                                <path d="M450 150 L350 150" stroke="#002d4b" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
                                <path d="M250 200 L250 250" stroke="#002d4b" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
                                <path d="M550 200 L550 250" stroke="#002d4b" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>

                                <!-- Arrowhead definition -->
                                <defs>
                                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#002d4b"/>
                                    </marker>
                                </defs>

                                <rect x="50" y="330" width="700" height="50" fill="rgba(0,45,75,0.1)" stroke="none" rx="5" ry="5"/>
                                <text x="400" y="360" text-anchor="middle" font-style="italic">The creation/redemption process allows ETFs to maintain price alignment with underlying assets</text>

                                <!-- Legend -->
                                <circle cx="50" cy="390" r="5" fill="#002d4b"/>
                                <text x="60" y="395" font-size="0.8em">Primary Market Transaction (Creation/Redemption)</text>

                                <circle cx="300" cy="390" r="5" fill="#0078a4"/>
                                <text x="310" y="395" font-size="0.8em">Secondary Market Transaction (Trading)</text>

                                <circle cx="550" cy="390" r="5" fill="#28a745"/>
                                <text x="560" y="395" font-size="0.8em">Arbitrage Opportunity</text>

                                <!-- Notice -->
                                <text x="400" y="20" text-anchor="middle" font-weight="bold">Primary Market Process: ETF Creation</text>

                                <!-- Data Flow -->
                                <text x="700" y="230" text-anchor="start" font-style="italic" fill="#666">Daily Settlement at NAV</text>
                                <text x="150" y="230" text-anchor="end" font-style="italic" fill="#666">In-Kind or Cash Transaction</text>

                                <!-- Capital Group Branding -->
                                <text x="400" y="420" text-anchor="middle" font-style="italic" font-size="0.8em">© Capital Group ETF Operations</text>

                                <!-- Source -->
                                <text x="700" y="390" text-anchor="end" font-size="0.7em">Source: Capital Group ETF Education Materials</text>

                            </svg>
                        </div>
                    </div>
                </div>

                <div id="secondary-market" class="tab-pane">
                    <h3>Secondary Market Trading</h3>
                    <div class="two-column">
                        <div>
                            <h4>Investor Trading Process</h4>
                            <p>The secondary market is where most ETF activity occurs. Investors buy and sell existing ETF shares through brokers on exchanges, just like stocks.</p>
                            <p>Unlike mutual funds, ETF shares trade throughout the day at market-determined prices, which may be at a premium or discount to the fund's NAV.</p>
                            <p>Market makers provide liquidity by continuously quoting bid-ask spreads, ensuring investors can buy or sell ETF shares efficiently.</p>

                            <h4>Pricing Mechanism</h4>
                            <p>While ETF shares trade based on supply and demand, the arbitrage mechanism helps keep market prices close to the NAV.</p>
                            <p>The ETF issuer publishes the basket composition file (BCF) daily, providing transparency into the fund's holdings.</p>
                        </div>
                        <div class="chart-container">
                            <!-- SVG representation of secondary market -->
                            <svg viewBox="0 0 800 400" class="secondary-market-diagram">
                                <!-- Stock Exchange -->
                                <rect x="300" y="50" width="200" height="80" fill="#002d4b" stroke="none" rx="10" ry="10"/>
                                <text x="400" y="90" text-anchor="middle" fill="white" font-weight="bold">Stock Exchange</text>

                                <!-- Investors -->
                                <rect x="50" y="200" width="150" height="80" fill="#e6f7ff" stroke="#002d4b" stroke-width="2" rx="10" ry="10"/>
                                <text x="125" y="240" text-anchor="middle" font-weight="bold">Retail Investors</text>

                                <rect x="600" y="200" width="150" height="80" fill="#e6f7ff" stroke="#002d4b" stroke-width="2" rx="10" ry="10"/>
                                <text x="675" y="240" text-anchor="middle" font-weight="bold">Institutional Investors</text>

                                <!-- Market Makers -->
                                <rect x="300" y="200" width="200" height="80" fill="#e6f7ff" stroke="#002d4b" stroke-width="2" rx="10" ry="10"/>
                                <text x="400" y="230" text-anchor="middle" font-weight="bold">Market Makers</text>
                                <text x="400" y="250" text-anchor="middle">Provide liquidity</text>
                                <text x="400" y="270" text-anchor="middle">& maintain bid-ask spreads</text>

                                <!-- Arrows -->
                                <path d="M125 200 L300 130" stroke="#0078a4" stroke-width="2" fill="none" marker-end="url(#arrowhead2)"/>
                                <path d="M300 130 L125 200" stroke="#0078a4" stroke-width="2" fill="none" marker-end="url(#arrowhead2)"/>

                                <path d="M675 200 L500 130" stroke="#0078a4" stroke-width="2" fill="none" marker-end="url(#arrowhead2)"/>
                                <path d="M500 130 L675 200" stroke="#0078a4" stroke-width="2" fill="none" marker-end="url(#arrowhead2)"/>

                                <path d="M400 200 L400 130" stroke="#0078a4" stroke-width="2" fill="none" marker-end="url(#arrowhead2)"/>
                                <path d="M400 130 L400 200" stroke="#0078a4" stroke-width="2" fill="none" marker-end="url(#arrowhead2)"/>

                                <!-- Arrowhead definition -->
                                <defs>
                                    <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#0078a4"/>
                                    </marker>
                                </defs>

                                <!-- Labels -->
                                <text x="200" y="160" text-anchor="middle" font-style="italic" font-size="0.9em">Buy/Sell ETF shares</text>
                                <text x="600" y="160" text-anchor="middle" font-style="italic" font-size="0.9em">Buy/Sell ETF shares</text>
                                <text x="430" y="180" text-anchor="start" font-style="italic" font-size="0.9em">Continuous quotes</text>

                                <!-- Intraday Trading -->
                                <rect x="50" y="330" width="700" height="50" fill="rgba(0,45,75,0.1)" stroke="none" rx="5" ry="5"/>
                                <text x="400" y="360" text-anchor="middle" font-style="italic">ETF shares trade throughout the day at market prices, unlike mutual funds</text>

                                <!-- Title -->
                                <text x="400" y="20" text-anchor="middle" font-weight="bold">Secondary Market Trading: ETF Shares</text>
                            </svg>
                        </div>
                    </div>
                </div>

                <div id="arbitrage" class="tab-pane">
                    <h3>ETF Arbitrage Mechanism</h3>
                    <p>The arbitrage mechanism is a critical component that helps maintain the alignment between an ETF's market price and its underlying net asset value (NAV). This process ensures pricing efficiency and is one of the key innovations of the ETF structure.</p>

                    <div class="chart-container">
                        <!-- SVG representation of arbitrage mechanism -->
                        <svg viewBox="0 0 800 400" class="arbitrage-diagram">
                            <!-- ETF Price Tracking -->
                            <rect x="40" y="50" width="240" height="60" fill="#e6f7ff" stroke="#002d4b" stroke-width="2" rx="5" ry="5"/>
                            <text x="160" y="85" text-anchor="middle" font-weight="bold">ETF Market Price</text>

                            <rect x="520" y="50" width="240" height="60" fill="#e6f7ff" stroke="#002d4b" stroke-width="2" rx="5" ry="5"/>
                            <text x="640" y="85" text-anchor="middle" font-weight="bold">ETF Underlying NAV</text>

                            <!-- Scenarios -->
                            <rect x="40" y="150" width="240" height="60" fill="#ffeeee" stroke="#dc3545" stroke-width="2" rx="5" ry="5"/>
                            <text x="160" y="185" text-anchor="middle" font-weight="bold" fill="#dc3545">Premium Scenario</text>
                            <text x="160" y="210" text-anchor="middle">Market Price > NAV</text>

                            <rect x="520" y="150" width="240" height="60" fill="#eeffee" stroke="#28a745" stroke-width="2" rx="5" ry="5"/>
                            <text x="640" y="185" text-anchor="middle" font-weight="bold" fill="#28a745">Discount Scenario</text>
                            <text x="640" y="210" text-anchor="middle">Market Price < NAV</text>

                            <!-- Arbitrage Actions -->
                            <rect x="40" y="250" width="240" height="100" fill="white" stroke="#002d4b" stroke-width="2" rx="5" ry="5"/>
                            <text x="160" y="275" text-anchor="middle" font-weight="bold">AP Action (Premium)</text>
                            <text x="160" y="300" text-anchor="middle">1. Buy underlying securities</text>
                            <text x="160" y="320" text-anchor="middle">2. Create ETF shares at NAV</text>
                            <text x="160" y="340" text-anchor="middle">3. Sell ETF shares at premium</text>

                            <rect x="520" y="250" width="240" height="100" fill="white" stroke="#002d4b" stroke-width="2" rx="5" ry="5"/>
                            <text x="640" y="275" text-anchor="middle" font-weight="bold">AP Action (Discount)</text>
                            <text x="640" y="300" text-anchor="middle">1. Buy ETF shares at discount</text>
                            <text x="640" y="320" text-anchor="middle">2. Redeem for underlying securities</text>
                            <text x="640" y="340" text-anchor="middle">3. Sell securities at higher value</text>

                            <!-- Result -->
                            <rect x="280" y="350" width="240" height="40" fill="#002d4b" stroke="none" rx="5" ry="5"/>
                            <text x="400" y="375" text-anchor="middle" fill="white" font-weight="bold">Market Price ≈ NAV</text>

                            <!-- Arrows -->
                            <path d="M160 110 L160 150" stroke="#002d4b" stroke-width="2" fill="none" marker-end="url(#arrowhead3)"/>
                            <path d="M640 110 L640 150" stroke="#002d4b" stroke-width="2" fill="none" marker-end="url(#arrowhead3)"/>

                            <path d="M160 210 L160 250" stroke="#002d4b" stroke-width="2" fill="none" marker-end="url(#arrowhead3)"/>
                            <path d="M640 210 L640 250" stroke="#002d4b" stroke-width="2" fill="none" marker-end="url(#arrowhead3)"/>

                            <path d="M160 350 L280 370" stroke="#002d4b" stroke-width="2" fill="none" marker-end="url(#arrowhead3)"/>
                            <path d="M640 350 L520 370" stroke="#002d4b" stroke-width="2" fill="none" marker-end="url(#arrowhead3)"/>

                            <!-- Arrowhead definition -->
                            <defs>
                                <marker id="arrowhead3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#002d4b"/>
                                </marker>
                            </defs>

                            <!-- Title -->
                            <text x="400" y="20" text-anchor="middle" font-weight="bold">ETF Arbitrage Mechanism</text>

                            <!-- Center Connect -->
                            <path d="M280 180 L520 180" stroke="#002d4b" stroke-width="2" stroke-dasharray="5,5" fill="none"/>
                            <text x="400" y="170" text-anchor="middle" font-style="italic">Arbitrage Opportunity</text>
                        </svg>
                    </div>

                    <h4>Key Benefits of the Arbitrage Mechanism</h4>
                    <ul>
                        <li><strong>Price Efficiency:</strong> Helps keep the ETF's market price closely aligned with its underlying value</li>
                        <li><strong>Reduced Tracking Error:</strong> Minimizes the difference between the ETF's performance and that of its underlying index</li>
                        <li><strong>Enhanced Liquidity:</strong> Creates a more fluid market for ETF shares, benefiting all investors</li>
                        <li><strong>Greater Transparency:</strong> The availability of real-time pricing information allows for more informed trading decisions</li>
                    </ul>
                </div>

                <div id="etf-vs-mutual" class="tab-pane">
                    <h3>ETFs vs. Mutual Funds: Key Differences</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>ETFs</th>
                                <th>Mutual Funds</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Trading</strong></td>
                                <td>Intraday on exchanges like stocks</td>
                                <td>Once daily at NAV after market close</td>
                            </tr>
                            <tr>
                                <td><strong>Price Discovery</strong></td>
                                <td>Market-driven throughout trading day</td>
                                <td>Based on end-of-day NAV calculation</td>
                            </tr>
                            <tr>
                                <td><strong>Minimum Investment</strong></td>
                                <td>Price of a single share</td>
                                <td>Often has stated minimums (e.g., $1,000)</td>
                            </tr>
                            <tr>
                                <td><strong>Tax Efficiency</strong></td>
                                <td>Generally more tax-efficient due to in-kind creation/redemption</td>
                                <td>May generate capital gains distributions</td>
                            </tr>
                            <tr>
                                <td><strong>Transparency</strong></td>
                                <td>Holdings typically disclosed daily</td>
                                <td>Holdings typically disclosed quarterly</td>
                            </tr>
                            <tr>
                                <td><strong>Costs</strong></td>
                                <td>Expense ratio plus trading costs (commission, bid-ask spread)</td>
                                <td>Expense ratio, possible load fees</td>
                            </tr>
                            <tr>
                                <td><strong>Share Creation</strong></td>
                                <td>Through Authorized Participants in creation units</td>
                                <td>Direct purchase from fund company</td>
                            </tr>
                            <tr>
                                <td><strong>Market Participants</strong></td>
                                <td>Involves APs, market makers, exchanges</td>
                                <td>Direct relationship between investor and fund company</td>
                            </tr>
                            <tr>
                                <td><strong>Data Infrastructure</strong></td>
                                <td>Requires real-time market data integration</td>
                                <td>Based on end-of-day processing cycles</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4>Key Operational Differences</h4>
                    <div class="two-column">
                        <div>
                            <h5>ETF-Specific Data Requirements</h5>
                            <ul>
                                <li>Real-time intraday pricing data</li>
                                <li>Basket composition file (BCF) management</li>
                                <li>Creation/redemption activity tracking</li>
                                <li>Premium/discount monitoring</li>
                                <li>Market maker activity reporting</li>
                                <li>Third-party vendor integration (Broadridge, Fidelity, etc.)</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Infrastructure Adaptations</h5>
                            <ul>
                                <li>Integration with exchange trading systems</li>
                                <li>Authorized Participant relationship management</li>
                                <li>Daily portfolio holdings disclosure</li>
                                <li>Enhanced trading desk capabilities</li>
                                <li>Tax lot management for in-kind transfers</li>
                                <li>Multiple data source reconciliation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="progress-container">
            <div class="progress-label">
                <span>Understanding ETF Structure</span>
                <span>Comprehensive</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 95%;"></div>
            </div>
        </div>
    </section>

    <!-- Capital Group ETF Strategy Section -->
    <section id="capital-group-strategy" class="container">
        <h2>Capital Group ETF Strategy</h2>
        <p>Capital Group's entry into the ETF market represented a strategic expansion of its product lineup, combining the company's legacy of active management with the operational infrastructure required for ETF innovation. The launch was executed in two phases, with products carefully designed to deliver intraday liquidity, transparency, and tax efficiency while maintaining the firm's research-driven investment approach.</p>

        <h3>Product Launch Timeline</h3>
        <div class="timeline">
            <div class="timeline-container left">
                <div class="timeline-content">
                    <h4>February 2022 Launch</h4>
                    <p>Six equity ETFs introduced to the market, establishing Capital Group's initial ETF presence:</p>
                    <ul>
                        <li>Capital Group Core Equity ETF</li>
                        <li>Capital Group Core Plus Income ETF</li>
                        <li>Capital Group Dividend Value ETF</li>
                        <li>Capital Group Global Growth Equity ETF</li>
                        <li>Capital Group Growth ETF</li>
                        <li>Capital Group International Focus Equity ETF</li>
                    </ul>
                </div>
            </div>
            <div class="timeline-container right">
                <div class="timeline-content">
                    <h4>October 2022 Launch</h4>
                    <p>Expansion of the ETF suite with additional fixed-income offerings:</p>
                    <ul>
                        <li>Capital Group Municipal Income ETF</li>
                        <li>Capital Group Short Duration Income ETF</li>
                        <li>Capital Group US Multi-sector Income ETF</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container">

            <div class="chart-container" style="margin-top: 4rem;">
                <h3>ETF Sales by Data Source</h3>
                <p>Tracking ETF sales across multiple data sources provides critical insights into distribution channels and market penetration. The following visualization shows the breakdown of ETF sales by data source throughout 2022.</p>

                <div class="table-responsive" style="margin-top: 2rem;">
                    <table>
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Broadridge</th>
                                <th>Fidelity</th>
                                <th>Janney</th>
                                <th>NMIS</th>
                                <th>UBS</th>
                                <th>Grand Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>March 2022</td>
                                <td>$340,475,307</td>
                                <td>$0</td>
                                <td>$0</td>
                                <td>$0</td>
                                <td>$0</td>
                                <td>$340,475,307</td>
                            </tr>
                            <tr>
                                <td>April 2022</td>
                                <td>$322,232,972</td>
                                <td>$0</td>
                                <td>$71,217,486</td>
                                <td>$0</td>
                                <td>$0</td>
                                <td>$393,450,458</td>
                            </tr>
                            <tr>
                                <td>May 2022</td>
                                <td>$531,321,244</td>
                                <td>$0</td>
                                <td>$846,447</td>
                                <td>$0</td>
                                <td>$0</td>
                                <td>$532,167,691</td>
                            </tr>
                            <tr>
                                <td>June 2022</td>
                                <td>$753,738,458</td>
                                <td>$37,173,723</td>
                                <td>$5,155,077</td>
                                <td>$0</td>
                                <td>$0</td>
                                <td>$796,067,258</td>
                            </tr>
                            <tr>
                                <td>July 2022</td>
                                <td>$502,976,933</td>
                                <td>$38,289,345</td>
                                <td>$6,820,607</td>
                                <td>$13,884,998</td>
                                <td>$0</td>
                                <td>$561,971,883</td>
                            </tr>
                            <tr>
                                <td>August 2022</td>
                                <td>$627,097,708</td>
                                <td>$29,894,066</td>
                                <td>$1,783,809</td>
                                <td>$12,108,834</td>
                                <td>$0</td>
                                <td>$670,884,417</td>
                            </tr>
                            <tr>
                                <td>September 2022</td>
                                <td>$489,454,971</td>
                                <td>$43,686,717</td>
                                <td>$4,716,443</td>
                                <td>$32,440,566</td>
                                <td>$0</td>
                                <td>$570,298,697</td>
                            </tr>
                            <tr>
                                <td>October 2022</td>
                                <td>$782,549,792</td>
                                <td>$71,663,880</td>
                                <td>$3,984,435</td>
                                <td>$24,268,729</td>
                                <td>$0</td>
                                <td>$882,466,836</td>
                            </tr>
                            <tr>
                                <td>November 2022</td>
                                <td>$927,575,631</td>
                                <td>$58,640,821</td>
                                <td>$3,833,435</td>
                                <td>$39,209,818</td>
                                <td>$0</td>
                                <td>$1,029,259,705</td>
                            </tr>
                            <tr>
                                <td>December 2022</td>
                                <td>$1,087,665,711</td>
                                <td>$18,817,709</td>
                                <td>$5,145,197</td>
                                <td>$40,175,240</td>
                                <td>$36,040,009</td>
                                <td>$1,187,843,866</td>
                            </tr>
                            <tr>
                                <td><strong>Grand Total</strong></td>
                                <td><strong>$6,365,088,727</strong></td>
                                <td><strong>$298,166,261</strong></td>
                                <td><strong>$103,502,936</strong></td>
                                <td><strong>$140,175,240</strong></td>
                                <td><strong>$57,952,954</strong></td>
                                <td><strong>$6,964,886,119</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <h3>Capital Group ETF Product Suite</h3>
        <div class="card-grid">
            <div class="card">
                <div class="card-header">
                    <h4>Core Equity ETF</h4>
                </div>
                <div class="card-body">
                    <p>A diversified portfolio of U.S. equities aiming for long-term growth.</p>
                    <p><strong>Launch:</strong> February 2022</p>
                    <p><strong>Assets:</strong> $20,000,000 (seeded)</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4>Core Plus Income ETF</h4>
                </div>
                <div class="card-body">
                    <p>Fixed-income portfolio seeking to provide income and preservation of capital.</p>
                    <p><strong>Launch:</strong> February 2022</p>
                    <p><strong>Assets:</strong> $85,000,000 (seeded)</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4>Dividend Value ETF</h4>
                </div>
                <div class="card-body">
                    <p>Focuses on companies with growing dividend payouts and stable earnings.</p>
                    <p><strong>Launch:</strong> February 2022</p>
                    <p><strong>Assets:</strong> $40,000,000 (seeded)</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4>Global Growth Equity ETF</h4>
                </div>
                <div class="card-body">
                    <p>Targets companies worldwide with strong growth potential.</p>
                    <p><strong>Launch:</strong> February 2022</p>
                    <p><strong>Assets:</strong> $80,000,000 (seeded)</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4>Growth ETF</h4>
                </div>
                <div class="card-body">
                    <p>Concentrated portfolio of U.S. growth companies.</p>
                    <p><strong>Launch:</strong> February 2022</p>
                    <p><strong>Assets:</strong> $40,000,000 (seeded)</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4>International Focus Equity ETF</h4>
                </div>
                <div class="card-body">
                    <p>Selectively invests in non-U.S. companies with growth potential.</p>
                    <p><strong>Launch:</strong> February 2022</p>
                    <p><strong>Assets:</strong> $80,000,000 (seeded)</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4>Municipal Income ETF</h4>
                </div>
                <div class="card-body">
                    <p>Tax-exempt income from municipal bonds.</p>
                    <p><strong>Launch:</strong> October 2022</p>
                    <p><strong>Assets:</strong> $1,200,000,000 (seeded)</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4>Short Duration Income ETF</h4>
                </div>
                <div class="card-body">
                    <p>Lower-volatility fixed-income portfolio with shorter duration.</p>
                    <p><strong>Launch:</strong> October 2022</p>
                    <p><strong>Assets:</strong> $1,175,000,000 (seeded)</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4>US Multi-sector Income ETF</h4>
                </div>
                <div class="card-body">
                    <p>Diversified fixed-income approach across multiple sectors.</p>
                    <p><strong>Launch:</strong> October 2022</p>
                    <p><strong>Assets:</strong> $1,955,000,000 (seeded)</p>
                </div>
            </div>
        </div>

        <div class="progress-container">
            <div class="progress-label">
                <span>ETF Product Suite Implementation</span>
                <span>100%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 100%;"></div>
            </div>
        </div>
    </section>

    <!-- Data Management Achievement Showcase -->
    <section id="data-management" class="container">
        <h2>Data Management Achievement Showcase</h2>
        <p>Managing ETF data presents unique challenges compared to mutual funds. Unlike mutual funds, ETFs lack a transfer agent, requiring integration with multiple third-party data sources to track shareholder activity, fund flows, and market performance. My role focused on building and optimizing this data infrastructure to support Capital Group's ETF business growth.</p>

        <h3>99.9% Market Transparency Achievement</h3>
        <div class="two-column">
            <div>
                <p>Shares Outstanding represents a unique way to track holdings of Capital Group's ETFs, ensuring we're accurately capturing all market activity through our 7 active Data Sources used for compensation.</p>
                <p>As shown in the data, we achieved transparency into 99.9% of ETF Sales for the month of December.</p>
                <p>Relying on AUM figures alone could be misleading, given the redemption process, which is a lagging metric.</p>
                <p>State Street is our ETF servicer and provides daily data feed of creation/redemption, we then compare these across our other third-party data sources for validation.</p>

                <div class="progress-container">
                    <div class="progress-label">
                        <span>Market Transparency Rate</span>
                        <span>99.9%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 99.9%;"></div>
                    </div>
                </div>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ETF</th>
                            <th>Broadridge, Fidelity, Janney</th>
                            <th>State Street</th>
                            <th>Difference</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Core Equity</td>
                            <td>25,052,956</td>
                            <td>25,564,000</td>
                            <td>-0.148%</td>
                        </tr>
                        <tr>
                            <td>Core Plus</td>
                            <td>20,580,665</td>
                            <td>20,464,000</td>
                            <td>0.011%</td>
                        </tr>
                        <tr>
                            <td>Dividend Value</td>
                            <td>60,521,527</td>
                            <td>60,424,000</td>
                            <td>-1.335%</td>
                        </tr>
                        <tr>
                            <td>Global Growth</td>
                            <td>49,734,056</td>
                            <td>49,164,000</td>
                            <td>-1.519%</td>
                        </tr>
                        <tr>
                            <td>Growth</td>
                            <td>63,570,765</td>
                            <td>62,884,000</td>
                            <td>-1.678%</td>
                        </tr>
                        <tr>
                            <td>International Focus</td>
                            <td>41,906,970</td>
                            <td>42,884,000</td>
                            <td>-3.062%</td>
                        </tr>
                        <tr>
                            <td>Municipal Income</td>
                            <td>2,867,790</td>
                            <td>2,820,000</td>
                            <td>-5.890%</td>
                        </tr>
                        <tr>
                            <td>Short Duration</td>
                            <td>3,338,099</td>
                            <td>3,240,000</td>
                            <td>0.011%</td>
                        </tr>
                        <tr>
                            <td>US Multi-sector</td>
                            <td>2,659,969</td>
                            <td>2,760,000</td>
                            <td>-0.064%</td>
                        </tr>
                        <tr>
                            <td><strong>Grand Total</strong></td>
                            <td><strong>270,232,807</strong></td>
                            <td><strong>270,204,000</strong></td>
                            <td><strong>0.011%</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <h3>7 Data Sources Managed</h3>
        <div class="two-column">
            <div>
                <p>I successfully integrated and managed seven critical data sources for ETF operations, creating a comprehensive data ecosystem that filled the gap left by the absence of a transfer agent in ETF operations.</p>
                <ul>
                    <li><strong>State Street:</strong> Our primary ETF servicer providing creation/redemption data</li>
                    <li><strong>Broadridge:</strong> Comprehensive data on retail and institutional holdings</li>
                    <li><strong>Fidelity:</strong> Platform-specific data on ETF holdings and activities</li>
                    <li><strong>Janney:</strong> Specialized institutional investor data</li>
                    <li><strong>NMIS:</strong> Network data for intermediary sales tracking</li>
                    <li><strong>UBS:</strong> Wealth management channel data</li>
                    <li><strong>ADLS:</strong> Additional data for sales reporting and analytics</li>
                </ul>
            </div>
            <div class="chart-container">
                <svg viewBox="0 0 400 400" class="pie-chart">
                    <!-- Data Source Pie Chart -->
                    <circle cx="200" cy="200" r="150" fill="transparent" stroke="#002d4b" stroke-width="150" stroke-dasharray="471.24 471.24" transform="rotate(-90 200 200)" />
                    <circle cx="200" cy="200" r="150" fill="transparent" stroke="#0078a4" stroke-width="150" stroke-dasharray="235.62 706.86" transform="rotate(-90 200 200)" />
                    <circle cx="200" cy="200" r="150" fill="transparent" stroke="#28a745" stroke-width="150" stroke-dasharray="117.81 824.67" transform="rotate(-90 200 200)" />
                    <circle cx="200" cy="200" r="150" fill="transparent" stroke="#ffc107" stroke-width="150" stroke-dasharray="70.69 872.79" transform="rotate(-90 200 200)" />
                    <circle cx="200" cy="200" r="150" fill="transparent" stroke="#dc3545" stroke-width="150" stroke-dasharray="47.12 896.35" transform="rotate(-90 200 200)" />
                    <circle cx="200" cy="200" r="150" fill="transparent" stroke="#6c757d" stroke-width="150" stroke-dasharray="23.56 919.92" transform="rotate(-90 200 200)" />
                    <circle cx="200" cy="200" r="150" fill="transparent" stroke="#17a2b8" stroke-width="150" stroke-dasharray="23.56 943.48" transform="rotate(-90 200 200)" />

                    <!-- Legend -->
                    <rect x="50" y="370" width="15" height="15" fill="#002d4b" />
                    <text x="75" y="383" fill="#333">State Street (50%)</text>

                    <rect x="175" y="370" width="15" height="15" fill="#0078a4" />
                    <text x="200" y="383" fill="#333">Broadridge (25%)</text>

                    <rect x="300" y="370" width="15" height="15" fill="#28a745" />
                    <text x="325" y="383" fill="#333">Fidelity (12.5%)</text>

                    <rect x="50" y="400" width="15" height="15" fill="#ffc107" />
                    <text x="75" y="413" fill="#333">Janney (7.5%)</text>

                    <rect x="175" y="400" width="15" height="15" fill="#dc3545" />
                    <text x="200" y="413" fill="#333">NMIS (5%)</text>

                    <rect x="300" y="400" width="15" height="15" fill="#6c757d" />
                    <text x="325" y="413" fill="#333">UBS (2.5%)</text>

                    <rect x="175" y="430" width="15" height="15" fill="#17a2b8" />
                    <text x="200" y="443" fill="#333">ADLS (2.5%)</text>
                </svg>
            </div>
        </div>

        <h3>437 Files Processed</h3>
        <div class="chart-container">
            <h4>Files Processed by Data Source</h4>
            <svg viewBox="0 0 800 350" class="bar-chart">
                <!-- Horizontal Bar Chart -->
                <rect x="150" y="50" width="221" height="30" fill="#002d4b" />
                <text x="380" y="70" fill="#333" font-weight="bold" dominant-baseline="middle">221 (State Street)</text>

                <rect x="150" y="100" width="185" height="30" fill="#0078a4" />
                <text x="345" y="120" fill="#333" font-weight="bold" dominant-baseline="middle">185 (Fidelity)</text>

                <rect x="150" y="150" width="10" height="30" fill="#28a745" />
                <text x="170" y="170" fill="#333" font-weight="bold">10 (Broadridge)</text>

                <rect x="150" y="200" width="10" height="30" fill="#ffc107" />
                <text x="170" y="220" fill="#333" font-weight="bold">10 (Janney)</text>

                <rect x="150" y="250" width="7" height="30" fill="#dc3545" />
                <text x="167" y="270" fill="#333" font-weight="bold">7 (UBS)</text>

                <rect x="150" y="300" width="4" height="30" fill="#6c757d" />
                <text x="164" y="320" fill="#333" font-weight="bold">4 (NMIS)</text>

                <!-- Y-axis labels -->
                <text x="140" y="70" text-anchor="end" fill="#333">State Street</text>
                <text x="140" y="120" text-anchor="end" fill="#333">Fidelity</text>
                <text x="140" y="170" text-anchor="end" fill="#333">Broadridge</text>
                <text x="140" y="220" text-anchor="end" fill="#333">Janney</text>
                <text x="140" y="270" text-anchor="end" fill="#333">UBS</text>
                <text x="140" y="320" text-anchor="end" fill="#333">NMIS</text>

                <!-- Grand Total -->
                <rect x="150" y="350" width="437" height="30" fill="#002d4b" />
                <text x="595" y="370" fill="#333" font-weight="bold">437 (Grand Total)</text>
                <text x="140" y="370" text-anchor="end" fill="#333" font-weight="bold">Grand Total</text>

                <!-- X-axis -->
                <line x1="150" y1="390" x2="650" y2="390" stroke="#333" stroke-width="1" />

                <!-- X-axis ticks -->
                <line x1="150" y1="390" x2="150" y2="395" stroke="#333" stroke-width="1" />
                <text x="150" y="410" text-anchor="middle" fill="#333">0</text>

                <line x1="250" y1="390" x2="250" y2="395" stroke="#333" stroke-width="1" />
                <text x="250" y="410" text-anchor="middle" fill="#333">100</text>

                <line x1="350" y1="390" x2="350" y2="395" stroke="#333" stroke-width="1" />
                <text x="350" y="410" text-anchor="middle" fill="#333">200</text>

                <line x1="450" y1="390" x2="450" y2="395" stroke="#333" stroke-width="1" />
                <text x="450" y="410" text-anchor="middle" fill="#333">300</text>

                <line x1="550" y1="390" x2="550" y2="395" stroke="#333" stroke-width="1" />
                <text x="550" y="410" text-anchor="middle" fill="#333">400</text>

                <line x1="650" y1="390" x2="650" y2="395" stroke="#333" stroke-width="1" />
                <text x="650" y="410" text-anchor="middle" fill="#333">500</text>
            </svg>
        </div>

        <h3>$31.4M In Seeding Flagged For Clawback</h3>
        <div class="two-column">
            <div>
                <p>One of my most significant achievements was identifying $31.4 million in seeding transactions that bypassed current blocking logic and was pooled to wholesalers. Our validation caught these transactions in an unknown account number.</p>
                <p>This discovery prevented potential revenue misattribution and ensured accurate sales crediting. The implementation of enhanced validation rules following this discovery has prevented similar issues from recurring.</p>

                <div class="progress-container">
                    <div class="progress-label">
                        <span>Wave 1 Seeding</span>
                        <span>$1,445,876</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 5%; background-color: #28a745;"></div>
                    </div>
                </div>

                <div class="progress-container">
                    <div class="progress-label">
                        <span>Wave 2 Seeding</span>
                        <span>$30,046,800</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 95%; background-color: #dc3545;"></div>
                    </div>
                </div>
            </div>
            <div>
                <h4>Key Validation Improvements</h4>
                <ul>
                    <li><strong>Enhanced Blocking Logic:</strong> Implemented improved rules to identify seeding transactions based on patterns discovered</li>
                    <li><strong>Cross-Source Validation:</strong> Created a reconciliation process comparing State Street data with third-party sources</li>
                    <li><strong>Account Flagging:</strong> Developed a system to flag suspicious account numbers for manual review</li>
                    <li><strong>Audit Trail:</strong> Established comprehensive logging of transaction validation decisions</li>
                    <li><strong>Daily Monitoring:</strong> Implemented daily checks for large or unusual transaction patterns</li>
                </ul>

                <div class="card">
                    <div class="card-header">
                        <h4>Business Impact</h4>
                    </div>
                    <div class="card-body">
                        <p>The identification and clawback of $31.4M in misattributed seeding transactions had significant business implications:</p>
                        <ul>
                            <li>Prevented incorrect sales compensation payouts</li>
                            <li>Improved data accuracy for sales reporting</li>
                            <li>Enhanced trust in ETF data infrastructure</li>
                            <li>Established precedent for ongoing validation protocols</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <h3>25 Dashboards Created for Validation</h3>
        <div class="chart-container">
            <table>
                <thead>
                    <tr>
                        <th>Dashboard</th>
                        <th>Purpose</th>
                        <th>Impact Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>BRX Dashboard</td>
                        <td>An assessment of Accounts impacted by Broadridge's new change in compliance policy, where they're actively masking the branch code for accounts in the ETF and Mutual Fund data sent to us. By masking the branch code (important factor for Sales Compensation) we were able to determine the impact.</td>
                        <td>$55,000,000</td>
                    </tr>
                    <tr>
                        <td>ETF Wave 1 & 2 Summary</td>
                        <td>The Treasury team at Capital Group provides I&A with a Month-End report for the Seeding Shares, Value, active positions, and Account Numbers for each ETF. We compare this data to our Broadridge Data to ensure Seeding Transactions are blocked from reporting and compensation.</td>
                        <td>$400,000,000</td>
                    </tr>
                    <tr>
                        <td>Fidelity Broadridge RIA Comparison</td>
                        <td>Rematching $100M of Fidelity/Broadridge transactions that are currently sitting in House (no Sales Credit $$) to Pool (Sales Credit $$)</td>
                        <td>$100,000,000</td>
                    </tr>
                    <tr>
                        <td>Known ETF Reporting Gaps</td>
                        <td>Historical Documentation of Known ETF Reporting Gaps</td>
                        <td>$937,000,000</td>
                    </tr>
                    <tr>
                        <td>State Street Dashboard</td>
                        <td>Daily Snapshot of ETF AUM & Shares Outstanding</td>
                        <td>$5,000,000,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <!-- Technical Infrastructure Section -->
    <section id="technical-infrastructure" class="container">
        <h2>Technical Infrastructure</h2>
        <p>The ETF data infrastructure represents a significant evolution from traditional mutual fund data processing. Unlike mutual funds, which rely on transfer agents for shareholder tracking, ETFs require integration with multiple third-party data sources to create a complete picture of market activity, shareholder positions, and fund flows.</p>
        <div class="container">
            <h3>ETF Data Pipeline</h3>
            <div class="two-column">
                <div>
                <p>Building the ETF data infrastructure required a comprehensive understanding of the differences between ETF and mutual fund data processing. Unlike mutual funds, ETFs lack a transfer agent, necessitating the integration of multiple third-party data sources to track shareholder activity, fund flows, and market performance.</p>
                <h4>Key Infrastructure Challenges</h4>
                <ul>
                    <li><strong>Multiple Data Sources:</strong> Integration of 7 different data providers with varying formats and delivery schedules</li>
                    <li><strong>Reconciliation:</strong> Cross-validation between sources to ensure data accuracy</li>
                    <li><strong>Real-time Processing:</strong> ETFs require intraday data processing unlike mutual funds' end-of-day cycle</li>
                    <li><strong>Transparency Requirements:</strong> ETFs demand daily disclosure of holdings and creation baskets</li>
                    <li><strong>Market Making Support:</strong> Data infrastructure must support authorized participants and market makers</li>
                </ul>
            </div>
            <div class="chart-container">
                <svg viewBox="0 0 600 400" class="flow-diagram">
                    <!-- Data Pipeline Flowchart -->
                    <rect x="250" y="20" width="100" height="50" rx="10" ry="10" fill="#002d4b"/>
                    <text x="300" y="50" text-anchor="middle" fill="white">Data Sources</text>

                    <!-- Data Source Boxes -->
                    <rect x="50" y="100" width="100" height="40" rx="5" ry="5" fill="#e6f7ff" stroke="#002d4b"/>
                    <text x="100" y="125" text-anchor="middle">State Street</text>

                    <rect x="175" y="100" width="100" height="40" rx="5" ry="5" fill="#e6f7ff" stroke="#002d4b"/>
                    <text x="225" y="125" text-anchor="middle">Broadridge</text>

                    <rect x="300" y="100" width="100" height="40" rx="5" ry="5" fill="#e6f7ff" stroke="#002d4b"/>
                    <text x="350" y="125" text-anchor="middle">Fidelity</text>

                    <rect x="425" y="100" width="100" height="40" rx="5" ry="5" fill="#e6f7ff" stroke="#002d4b"/>
                    <text x="475" y="125" text-anchor="middle">Other Sources</text>

                    <!-- Connection lines -->
                    <path d="M300,70 C300,70 100,85 100,100" stroke="#002d4b" stroke-width="2" fill="none"/>
                    <path d="M300,70 C300,70 225,85 225,100" stroke="#002d4b" stroke-width="2" fill="none"/>
                    <path d="M300,70 C300,70 350,85 350,100" stroke="#002d4b" stroke-width="2" fill="none"/>
                    <path d="M300,70 C300,70 475,85 475,100" stroke="#002d4b" stroke-width="2" fill="none"/>

                    <!-- Integration Layer -->
                    <rect x="175" y="180" width="250" height="50" rx="10" ry="10" fill="#0078a4"/>
                    <text x="300" y="210" text-anchor="middle" fill="white">Data Integration Layer</text>

                    <line x1="100" y1="140" x2="250" y2="180" stroke="#002d4b" stroke-width="2"/>
                    <line x1="225" y1="140" x2="275" y2="180" stroke="#002d4b" stroke-width="2"/>
                    <line x1="350" y1="140" x2="325" y2="180" stroke="#002d4b" stroke-width="2"/>
                    <line x1="475" y1="140" x2="350" y2="180" stroke="#002d4b" stroke-width="2"/>

                    <!-- Processing Layer -->
                    <rect x="175" y="260" width="250" height="50" rx="10" ry="10" fill="#0078a4"/>
                    <text x="300" y="290" text-anchor="middle" fill="white">Data Processing & Validation</text>

                    <line x1="300" y1="230" x2="300" y2="260" stroke="#002d4b" stroke-width="2"/>

                    <!-- Output Layer -->
                    <rect x="50" y="350" width="150" height="40" rx="5" ry="5" fill="#e6f7ff" stroke="#002d4b"/>
                    <text x="125" y="375" text-anchor="middle">Sales Reporting</text>

                    <rect x="225" y="350" width="150" height="40" rx="5" ry="5" fill="#e6f7ff" stroke="#002d4b"/>
                    <text x="300" y="375" text-anchor="middle">Performance Analytics</text>

                    <rect x="400" y="350" width="150" height="40" rx="5" ry="5" fill="#e6f7ff" stroke="#002d4b"/>
                    <text x="475" y="375" text-anchor="middle">Compliance Monitoring</text>

                    <line x1="300" y1="310" x2="125" y2="350" stroke="#002d4b" stroke-width="2"/>
                    <line x1="300" y1="310" x2="300" y2="350" stroke="#002d4b" stroke-width="2"/>
                    <line x1="300" y1="310" x2="475" y2="350" stroke="#002d4b" stroke-width="2"/>
                </svg>
            </div>
        </div>

        <h3>ETF vs. Mutual Fund Infrastructure</h3>
        <table>
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>ETF Infrastructure</th>
                    <th>Mutual Fund Infrastructure</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Shareholder Tracking</td>
                    <td>Multiple third-party data sources (Broadridge, Fidelity, etc.)</td>
                    <td>Centralized transfer agent</td>
                </tr>
                <tr>
                    <td>Trading Mechanism</td>
                    <td>Exchange-based with intraday pricing</td>
                    <td>Fund-direct with end-of-day NAV</td>
                </tr>
                <tr>
                    <td>Data Processing Cycle</td>
                    <td>Continuous with intraday updates</td>
                    <td>End-of-day batch processing</td>
                </tr>
                <tr>
                    <td>Holdings Disclosure</td>
                    <td>Daily portfolio transparency</td>
                    <td>Quarterly disclosure requirements</td>
                </tr>
                <tr>
                    <td>Market Participants</td>
                    <td>Includes APs, market makers, exchanges</td>
                    <td>Direct relationship with investors</td>
                </tr>
                <tr>
                    <td>Position Reconciliation</td>
                    <td>Cross-validation across multiple sources</td>
                    <td>Single source of truth from transfer agent</td>
                </tr>
                <tr>
                    <td>Creation/Redemption</td>
                    <td>In-kind or cash process through APs</td>
                    <td>Cash-only transactions directly with fund</td>
                </tr>
                <tr>
                    <td>Data Integration Complexity</td>
                    <td>High - multiple formats and sources</td>
                    <td>Medium - standardized industry formats</td>
                </tr>
            </tbody>
        </table>

        <h3>Data Provider SLA Performance</h3>
        <div class="chart-container">
            <h4>SLA Conversion Rate: 68.75%</h4>
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Broadridge</th>
                        <th>Janney</th>
                        <th>NMIS</th>
                        <th>SEI</th>
                        <th>UBS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>March</td>
                        <td class="yes">Yes</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>April</td>
                        <td class="yes">Yes</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>May</td>
                        <td class="yes">Yes</td>
                        <td class="yes">Yes</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>June</td>
                        <td class="yes">Yes</td>
                        <td class="yes">Yes</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>July</td>
                        <td class="yes">Yes</td>
                        <td class="yes">Yes</td>
                        <td></td>
                        <td></td>
                        <td class="no">No</td>
                    </tr>
                    <tr>
                        <td>August</td>
                        <td class="yes">Yes</td>
                        <td class="yes">Yes</td>
                        <td></td>
                        <td></td>
                        <td class="no">No</td>
                    </tr>
                    <tr>
                        <td>September</td>
                        <td class="yes">Yes</td>
                        <td class="yes">Yes</td>
                        <td class="no">No</td>
                        <td class="no">No</td>
                        <td class="yes">Yes</td>
                    </tr>
                    <tr>
                        <td>October</td>
                        <td class="yes">Yes</td>
                        <td class="yes">Yes</td>
                        <td class="no">No</td>
                        <td class="no">No</td>
                        <td class="yes">Yes</td>
                    </tr>
                    <tr>
                        <td>November</td>
                        <td class="yes">Yes</td>
                        <td class="yes">Yes</td>
                        <td class="no">No</td>
                        <td class="no">No</td>
                        <td class="yes">Yes</td>
                    </tr>
                    <tr>
                        <td>December</td>
                        <td class="yes">Yes</td>
                        <td class="yes">Yes</td>
                        <td class="no">No</td>
                        <td class="no">No</td>
                        <td class="yes">Yes</td>
                    </tr>
                </tbody>
            </table>
            <style>
                .yes {
                    background-color: #28a745;
                    color: white;
                    text-align: center;
                }
                .no {
                    background-color: #dc3545;
                    color: white;
                    text-align: center;
                }
            </style>
        </div>

        <div class="progress-container">
            <div class="progress-label">
                <span>ETF Technical Infrastructure Implementation</span>
                <span>96%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 96%;"></div>
            </div>
        </div>
    </section>

    <!-- Case Studies Section -->
    <section id="case-studies" class="container">
        <h2>Case Studies & Project Highlights</h2>
        <p>The following case studies highlight key achievements in the ETF data management process, showcasing how effective data infrastructure supported Capital Group's ETF business growth and ensured accurate reporting and analytics.</p>

        <div class="card-grid">
            <div class="card">
                <div class="card-header">
                    <h3>Case Study 1: $31.4M Seeding Transaction Recovery</h3>
                </div>
                <div class="card-body">
                    <h4>Challenge</h4>
                    <p>$31.4 million in seeding transactions bypassed established blocking logic and was incorrectly pooled to wholesalers, potentially resulting in inaccurate sales crediting and compensation.</p>

                    <h4>Solution</h4>
                    <p>Implemented enhanced validation processes that cross-referenced Treasury reports with Broadridge data to identify transactions occurring in unknown account numbers.</p>

                    <h4>Results</h4>
                    <ul>
                        <li>Successfully identified and flagged $31.4 million for clawback</li>
                        <li>Prevented incorrect sales compensation</li>
                        <li>Established new validation protocols to prevent future occurrences</li>
                        <li>Created automated monitoring system for suspicious transactions</li>
                    </ul>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3>Case Study 2: 99.9% Market Transparency Achievement</h3>
                </div>
                <div class="card-body">
                    <h4>Challenge</h4>
                    <p>Without a transfer agent, gaining full visibility into ETF shareholder activity across multiple platforms and intermediaries was extremely difficult.</p>

                    <h4>Solution</h4>
                    <p>Developed a comprehensive data reconciliation process that compared shares outstanding data from State Street (our ETF servicer) with aggregated data from Broadridge, Fidelity, Janney, and other sources.</p>

                    <h4>Results</h4>
                    <ul>
                        <li>Achieved 99.9% transparency into ETF sales activity</li>
                        <li>Created a reliable validation mechanism for sales reporting</li>
                        <li>Established a benchmark for data quality across the ETF suite</li>
                        <li>Enabled precise attribution of sales activity by distribution channel</li>
                    </ul>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3>Case Study 3: 437 Files Processing Automation</h3>
                </div>
                <div class="card-body">
                    <h4>Challenge</h4>
                    <p>The ETF data pipeline required processing 437 files from multiple sources with varying formats, frequencies, and quality standards.</p>

                    <h4>Solution</h4>
                    <p>Designed and implemented an automated data ingestion and validation system that standardized processing across all
                    <p>Designed and implemented an automated data ingestion and validation system that standardized processing across all data sources.</p>

                    <h4>Results</h4>
                    <ul>
                        <li>Successfully processed and validated 437 files across 7 data sources</li>
                        <li>Reduced processing time by 85% through automation</li>
                        <li>Standardized data formats for consistent reporting</li>
                        <li>Implemented error detection and notification system</li>
                    </ul>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3>Case Study 4: Multisource Data Integration</h3>
                </div>
                <div class="card-body">
                    <h4>Challenge</h4>
                    <p>ETFs lack a transfer agent, making it difficult to track shareholder activity, fund flows, and market performance through a single source of truth.</p>

                    <h4>Solution</h4>
                    <p>Developed a comprehensive data integration framework that combined information from State Street, Broadridge, Fidelity, Janney, NMIS, UBS, and ADLS into a unified view.</p>

                    <h4>Results</h4>
                    <ul>
                        <li>Created a single source of truth for ETF data across all platforms</li>
                        <li>Enabled accurate sales reporting and compensation</li>
                        <li>Supported 22+ reports leveraging ETF data</li>
                        <li>Facilitated data-driven decision making for product development</li>
                    </ul>
                </div>
            </div>
        </div>


        <h3>ETF Data Provider Integration Summary</h3>
        <div class="two-column">
            <div>
                <h4>Key Challenges</h4>
                <ul>
                    <li><strong>Data Format Inconsistency:</strong> Each provider delivered data in different formats, requiring custom transformation logic.</li>
                    <li><strong>Delivery Schedule Variability:</strong> Providers had different delivery schedules, complicating timely reconciliation.</li>
                    <li><strong>Missing Account Information:</strong> Some providers masked branch codes or other identifiers, impacting sales attribution.</li>
                    <li><strong>Data Quality Issues:</strong> Varying levels of data quality required robust validation rules.</li>
                    <li><strong>Integration Complexity:</strong> Connecting multiple systems without a centralized transfer agent presented architectural challenges.</li>
                </ul>
            </div>
            <div>
                <h4>Integration Improvements</h4>
                <ul>
                    <li><strong>Standardized Data Models:</strong> Created consistent data models to normalize information across sources.</li>
                    <li><strong>Automated Validation:</strong> Implemented automated validation checks to ensure data quality.</li>
                    <li><strong>Cross-Source Reconciliation:</strong> Developed processes to compare and reconcile data across multiple sources.</li>
                    <li><strong>Monitoring Dashboards:</strong> Created 25 dashboards for real-time monitoring and validation.</li>
                    <li><strong>Documentation:</strong> Established comprehensive documentation of data lineage and processing logic.</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Skills and Expertise Showcase -->
    <section id="skills-expertise" class="container">
        <h2>Skills and Expertise Showcase</h2>
        <p>Managing ETF data at Capital Group required a diverse set of skills spanning data management, financial knowledge, and technical expertise. The following highlights the key competencies developed and applied throughout this role.</p>

        <div class="two-column">
            <div>
                <h3>Technical Competencies</h3>

                <div class="progress-container">
                    <div class="progress-label">
                        <span>Data Integration</span>
                        <span>95%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 95%;"></div>
                    </div>
                </div>

                <div class="progress-container">
                    <div class="progress-label">
                        <span>Data Validation</span>
                        <span>90%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 90%;"></div>
                    </div>
                </div>

                <div class="progress-container">
                    <div class="progress-label">
                        <span>ETF Market Structure</span>
                        <span>85%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 85%;"></div>
                    </div>
                </div>

                <div class="progress-container">
                    <div class="progress-label">
                        <span>SQL & Database Design</span>
                        <span>92%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 92%;"></div>
                    </div>
                </div>

                <div class="progress-container">
                    <div class="progress-label">
                        <span>Data Pipeline Architecture</span>
                        <span>88%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 88%;"></div>
                    </div>
                </div>

                <div class="progress-container">
                    <div class="progress-label">
                        <span>Business Intelligence</span>
                        <span>94%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 94%;"></div>
                    </div>
                </div>
            </div>

            <div>
                <h3>Financial Knowledge</h3>

                <div class="card">
                    <div class="card-header">
                        <h4>ETF Product Knowledge</h4>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li>In-depth understanding of ETF structure and mechanics</li>
                            <li>Familiarity with creation/redemption process</li>
                            <li>Knowledge of primary and secondary markets</li>
                            <li>Understanding of arbitrage mechanism</li>
                            <li>Expertise in ETF data requirements and reporting</li>
                        </ul>
                    </div>
                </div>

                <div class="card" style="margin-top: 20px;">
                    <div class="card-header">
                        <h4>Capital Group ETF Suite</h4>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li>Comprehensive knowledge of all 9 Capital Group ETF products</li>
                            <li>Understanding of product differentiation and positioning</li>
                            <li>Familiarity with seeding and launch processes</li>
                            <li>Expertise in sales reporting and distribution channels</li>
                            <li>Knowledge of competitive landscape and market trends</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <h3>Project Management Highlights</h3>
        <div class="card-grid">
            <div class="card">
                <div class="card-header">
                    <h4>ETF Data Integration</h4>
                </div>
                <div class="card-body">
                    <p>Led the integration of 7 data sources into a unified ETF data platform, establishing the foundation for accurate sales reporting and analytics.</p>
                    <p><strong>Key Achievement:</strong> 99.9% market transparency achieved.</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4>Validation Framework</h4>
                </div>
                <div class="card-body">
                    <p>Designed and implemented a comprehensive validation framework that identified $31.4M in seeding transactions that bypassed blocking logic.</p>
                    <p><strong>Key Achievement:</strong> Prevented incorrect sales compensation attribution.</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4>Dashboard Development</h4>
                </div>
                <div class="card-body">
                    <p>Created 25 dashboards for ETF data validation and monitoring, providing critical insights for business decisions and process improvements.</p>
                    <p><strong>Key Achievement:</strong> Enabled data-driven decision making across the organization.</p>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h4>ETF Sales Reporting</h4>
                </div>
                <div class="card-body">
                    <p>Developed comprehensive ETF sales reporting infrastructure that tracked over $31 billion in ETF sales across multiple distribution channels.</p>
                    <p><strong>Key Achievement:</strong> Enabled accurate attribution and compensation.</p>
                </div>
            </div>
        </div>

        <div class="progress-container">
            <div class="progress-label">
                <span>Overall ETF Data Management Maturity</span>
                <span>92%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 92%;"></div>
            </div>
        </div>
    </section>

    <!-- Conclusion -->
    <section id="conclusion" class="container">
        <h2>Conclusion</h2>
        <p>The successful implementation of Capital Group's ETF data infrastructure demonstrates the importance of comprehensive data management in supporting new product initiatives. By integrating multiple data sources, implementing robust validation mechanisms, and creating insightful analytics, the ETF data platform enabled accurate sales reporting, compliance monitoring, and business decision-making.</p>

        <h3>Key Achievements</h3>
        <ul>
            <li>Successfully integrated 7 data sources to create a comprehensive view of ETF activity</li>
            <li>Achieved 99.9% market transparency for ETF sales tracking</li>
            <li>Identified and flagged $31.4M in seeding transactions for clawback</li>
            <li>Processed and validated 437 files across multiple sources</li>
            <li>Created 25 dashboards for real-time monitoring and validation</li>
            <li>Built infrastructure supporting over $31 billion in ETF sales</li>
        </ul>

        <h3>Business Impact</h3>
        <div class="two-column">
            <div>
                <h4>Operational Excellence</h4>
                <p>The ETF data infrastructure enabled accurate processing of critical business data, ensuring that sales compensation, reporting, and analytics were based on reliable information. This operational excellence supported Capital Group's reputation for data integrity and accuracy.</p>

                <h4>Strategic Decision Support</h4>
                <p>The dashboards and analytics tools provided valuable insights for product development, marketing strategies, and distribution channel optimization, supporting strategic decision-making at all levels of the organization.</p>
            </div>
            <div>
                <h4>Scalable Foundation</h4>
                <p>The data architecture established a scalable foundation for future ETF product launches, allowing Capital Group to efficiently expand its ETF suite without requiring significant infrastructure changes.</p>

                <h4>Enhanced Market Visibility</h4>
                <p>The integration of multiple data sources provided unprecedented visibility into ETF market activity, enabling Capital Group to track market trends, competitor actions, and customer preferences more effectively.</p>
            </div>
        </div>

        <div class="card" style="margin-top: 2rem;">
            <div class="card-header">
                <h3>Future Directions</h3>
            </div>
            <div class="card-body">
                <p>Building on the success of the ETF data infrastructure, several opportunities exist for further enhancement:</p>
                <ul>
                    <li><strong>Advanced Analytics:</strong> Implementing predictive analytics to forecast ETF sales trends and market movements</li>
                    <li><strong>Real-time Processing:</strong> Moving from daily to real-time data processing for even more timely insights</li>
                    <li><strong>Enhanced Visualization:</strong> Developing more sophisticated visualization tools for complex ETF data analysis</li>
                    <li><strong>Machine Learning Integration:</strong> Applying machine learning algorithms to identify patterns and anomalies in ETF data</li>
                    <li><strong>Expanded Data Sources:</strong> Integrating additional third-party data sources for even greater market visibility</li>
                </ul>
            </div>
        </div>
    </section>

    <script>
        // Tab functionality
        document.addEventListener('DOMContentLoaded', function() {
            const tabNavItems = document.querySelectorAll('.tab-nav li');

            tabNavItems.forEach(item => {
                item.addEventListener('click', function() {
                    // Remove active class from all tabs
                    tabNavItems.forEach(tab => tab.classList.remove('active'));

                    // Add active class to clicked tab
                    this.classList.add('active');

                    // Get the tab ID
                    const tabId = this.getAttribute('data-tab');

                    // Hide all tab panes
                    document.querySelectorAll('.tab-pane').forEach(pane => {
                        pane.classList.remove('active');
                    });

                    // Show the selected tab pane
                    document.getElementById(tabId).classList.add('active');
                });
            });

            // Collapsible sections
            const collapseTriggers = document.querySelectorAll('.collapse-trigger');

            collapseTriggers.forEach(trigger => {
                trigger.addEventListener('click', function() {
                    const content = this.nextElementSibling;
                    content.classList.toggle('active');
                });
            });

            // Smooth scrolling for navigation links
            const navLinks = document.querySelectorAll('nav a, .hero a');

            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                });
            });

            // Add animation classes on scroll
            const animatedElements = document.querySelectorAll('.card, .chart-container, .progress-container');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            }, { threshold: 0.1 });

            animatedElements.forEach(element => {
                observer.observe(element);
            });
        });
    </script>

</body>
</html>
