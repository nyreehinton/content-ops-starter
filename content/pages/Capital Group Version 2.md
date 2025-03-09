<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ETF Data Management | Capital Group</title>
    <style>
        /* Capital Group color theme */
        :root {
            --primary-blue: #003da5;
            --secondary-blue: #0077c8;
            --accent-blue: #00a9e0;
            --light-blue: #cce5ff;
            --dark-gray: #333333;
            --medium-gray: #666666;
            --light-gray: #f5f5f5;
            --white: #ffffff;
            --black: #000000;
            --success-green: #28a745;
            --warning-orange: #fd7e14;
            --danger-red: #dc3545;
        }

        /* Base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--dark-gray);
            background-color: var(--white);
        }

        /* Typography */
        h1, h2, h3, h4, h5, h6 {
            font-weight: 600;
            line-height: 1.3;
            margin-bottom: 1rem;
            color: var(--primary-blue);
        }

        h1 {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 2rem;
            border-bottom: 2px solid var(--light-blue);
            padding-bottom: 0.5rem;
        }

        h3 {
            font-size: 1.5rem;
            color: var(--secondary-blue);
        }

        p {
            margin-bottom: 1.2rem;
        }

        a {
            color: var(--secondary-blue);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        a:hover {
            color: var(--primary-blue);
            text-decoration: underline;
        }

        /* Layout components */
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }

        .section {
            margin: 3rem 0;
            padding: 2rem 0;
            border-bottom: 1px solid var(--light-blue);
        }

        /* Hero section */
        .hero {
            background: linear-gradient(to right, var(--primary-blue), var(--secondary-blue));
            color: var(--white);
            padding: 6rem 2rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 L0,100 Z" fill="%23ffffff" fill-opacity="0.1"/></svg>') no-repeat;
            background-size: cover;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            margin: 0 auto;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1.5rem;
            color: var(--white);
        }

        .hero p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
        }

        /* Button styles */
        .btn {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            background-color: var(--white);
            color: var(--primary-blue);
            border-radius: 4px;
            font-weight: 600;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .btn:hover {
            background-color: var(--light-blue);
            text-decoration: none;
        }

        .btn-primary {
            background-color: var(--primary-blue);
            color: var(--white);
        }

        .btn-primary:hover {
            background-color: var(--secondary-blue);
            color: var(--white);
        }

        .btn-outline {
            background-color: transparent;
            border: 2px solid var(--white);
            color: var(--white);
        }

        .btn-outline:hover {
            background-color: var(--white);
            color: var(--primary-blue);
        }

        /* Grid system */
        .row {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
        }

        .col {
            flex: 1;
            padding: 0 15px;
        }

        /* Card styles */
        .card {
            background-color: var(--white);
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
            margin-bottom: 2rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .card-header {
            margin-bottom: 1rem;
        }

        .card-body {
            margin-bottom: 1rem;
        }

        .card-footer {
            padding-top: 1rem;
            border-top: 1px solid var(--light-gray);
        }

        /* Tab navigation */
        .tabs {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 2rem;
            border-bottom: 2px solid var(--light-blue);
        }

        .tab-btn {
            padding: 1rem 1.5rem;
            background: none;
            border: none;
            cursor: pointer;
            font-weight: 600;
            color: var(--medium-gray);
            position: relative;
            transition: color 0.3s ease;
        }

        .tab-btn.active {
            color: var(--primary-blue);
        }

        .tab-btn.active::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--primary-blue);
        }

        .tab-content {
            display: none;
            padding: 1.5rem 0;
        }

        .tab-content.active {
            display: block;
        }

        /* Chart containers */
        .chart-container {
            width: 100%;
            height: 400px;
            margin: 2rem 0;
            position: relative;
        }

        /* Data visualizations */
        .metric-card {
            text-align: center;
            padding: 2rem;
        }

        .metric-value {
            font-size: 3rem;
            font-weight: 700;
            color: var(--primary-blue);
            margin-bottom: 0.5rem;
            line-height: 1;
        }

        .metric-label {
            font-size: 1rem;
            font-weight: 600;
            color: var(--medium-gray);
        }

        /* Timeline */
        .timeline {
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 0;
        }

        .timeline::after {
            content: '';
            position: absolute;
            width: 6px;
            background-color: var(--light-blue);
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -3px;
        }

        .timeline-item {
            padding: 10px 40px;
            position: relative;
            width: 50%;
        }

        .timeline-item::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: var(--primary-blue);
            border: 4px solid var(--light-blue);
            border-radius: 50%;
            top: 15px;
            z-index: 1;
        }

        .timeline-left {
            left: 0;
        }

        .timeline-right {
            left: 50%;
        }

        .timeline-left::after {
            right: -10px;
        }

        .timeline-right::after {
            left: -10px;
        }

        .timeline-content {
            padding: 20px 30px;
            background-color: var(--white);
            position: relative;
            border-radius: 6px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .timeline-date {
            font-weight: 600;
            color: var(--primary-blue);
            margin-bottom: 0.5rem;
        }

        /* Responsive design */
        @media (max-width: 992px) {
            .timeline::after {
                left: 31px;
            }
            
            .timeline-item {
                width: 100%;
                padding-left: 70px;
                padding-right: 25px;
            }
            
            .timeline-item::after {
                left: 21px;
            }
            
            .timeline-right {
                left: 0;
            }
        }

        @media (max-width: 768px) {
            .col {
                flex: 0 0 100%;
                max-width: 100%;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .card {
                margin-bottom: 1.5rem;
            }
            
            .tabs {
                flex-direction: column;
            }
            
            .tab-btn {
                width: 100%;
                text-align: left;
                padding: 0.75rem 1rem;
            }
        }

        /* Animations */
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }

        /* Interactive elements */
        .expandable-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }

        .expandable-content.expanded {
            max-height: 1000px;
        }

        .expandable-trigger {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 0;
        }

        .expandable-trigger::after {
            content: '+';
            font-size: 1.5rem;
            transition: transform 0.3s ease;
        }

        .expandable-trigger.expanded::after {
            transform: rotate(45deg);
        }

        /* Data table styles */
        .data-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 2rem;
        }

        .data-table th,
        .data-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid var(--light-blue);
        }

        .data-table th {
            background-color: var(--light-gray);
            color: var(--primary-blue);
            font-weight: 600;
        }

        .data-table tr:hover {
            background-color: var(--light-gray);
        }

        /* Data filter controls */
        .filter-controls {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .filter-control {
            flex: 1;
            min-width: 200px;
        }

        .filter-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: var(--primary-blue);
        }

        .filter-select {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid var(--light-blue);
            border-radius: 4px;
            background-color: var(--white);
        }

        /* Case study styles */
        .case-study {
            padding: 2rem;
            margin-bottom: 2rem;
            background-color: var(--light-gray);
            border-radius: 8px;
            border-left: 4px solid var(--primary-blue);
        }

        .case-study-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .case-study-title {
            font-size: 1.5rem;
            color: var(--primary-blue);
        }

        .case-study-meta {
            color: var(--medium-gray);
        }

        .case-study-body {
            margin-bottom: 1.5rem;
        }

        .case-study-results {
            background-color: var(--white);
            padding: 1rem;
            border-radius: 4px;
            border-left: 3px solid var(--success-green);
        }

        /* Progress indicator */
        .progress-container {
            width: 100%;
            background-color: var(--light-gray);
            border-radius: 4px;
            margin: 1.5rem 0;
        }

        .progress-bar {
            height: 8px;
            background-color: var(--primary-blue);
            border-radius: 4px;
            width: 0;
            transition: width 1s ease;
        }

        /* Dashboard card */
        .dashboard-card {
            background-color: var(--white);
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
            overflow: hidden;
        }

        .dashboard-header {
            background-color: var(--primary-blue);
            color: var(--white);
            padding: 1rem 1.5rem;
        }

        .dashboard-body {
            padding: 1.5rem;
        }

        /* Tooltip styles */
        .tooltip {
            position: relative;
            display: inline-block;
            border-bottom: 1px dotted var(--medium-gray);
            cursor: help;
        }

        .tooltip .tooltip-text {
            visibility: hidden;
            width: 200px;
            background-color: var(--dark-gray);
            color: var(--white);
            text-align: center;
            border-radius: 6px;
            padding: 0.5rem;
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
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>ETF Data Management at Capital Group</h1>
            <p>A comprehensive overview of Exchange-Traded Funds, Capital Group's strategy, and the data infrastructure supporting $31+ billion in ETF sales.</p>
            <div>
                <a href="#etf-fundamentals" class="btn btn-outline">Explore ETF Fundamentals</a>
                <a href="#data-management" class="btn">View Data Management</a>
            </div>
        </div>
    </section>

    <main class="container">
        <!-- ETF Fundamentals Section -->
        <section id="etf-fundamentals" class="section">
            <h2>ETF Fundamentals</h2>
            <p>Exchange-traded funds (ETFs) represent a transformative shift in investment vehicles, combining the intraday liquidity of stocks with the diversified exposure of mutual funds. Unlike mutual funds, which settle at end-of-day net asset values (NAVs), ETFs require real-time price discovery mechanisms to maintain parity between market prices and underlying assets.</p>
            
            <div class="tabs">
                <button class="tab-btn active" data-tab="primary-market">Primary Market</button>
                <button class="tab-btn" data-tab="secondary-market">Secondary Market</button>
                <button class="tab-btn" data-tab="arbitrage">Arbitrage Mechanism</button>
                <button class="tab-btn" data-tab="comparison">ETFs vs. Mutual Funds</button>
            </div>
            
            <div id="primary-market" class="tab-content active">
                <h3>Primary Market Process</h3>
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-header">
                                <h4>Creation Process</h4>
                            </div>
                            <div class="card-body">
                                <p>Authorized Participants (APs), often large financial institutions, work directly with the ETF issuer to create new ETF shares.</p>
                                <p>APs deliver a "creation basket," which consists of the securities underlying the ETF (or equivalent cash). In return, they receive an equivalent number of ETF shares at the net asset value (NAV).</p>
                                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 300'><rect width='600' height='300' fill='%23f5f5f5'/><circle cx='150' cy='150' r='50' fill='%230077c8'/><rect x='350' y='100' width='100' height='100' fill='%23003da5'/><path d='M 200 150 L 350 150' stroke='%23333' stroke-width='3' stroke-dasharray='5,5'/><text x='150' y='200' text-anchor='middle' font-family='Arial' font-size='14'>APs</text><text x='400' y='220' text-anchor='middle' font-family='Arial' font-size='14'>ETF Issuer</text><text x='275' y='140' text-anchor='middle' font-family='Arial' font-size='14'>Creation Basket</text></svg>" alt="ETF Creation Process Diagram" style="width:100%; max-width:500px; display:block; margin:1.5rem auto;">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-header">
                                <h4>Redemption Process</h4>
                            </div>
                            <div class="card-body">
                                <p>APs redeem ETF shares by returning them to the issuer. In exchange, they receive the underlying securities or cash at the NAV.</p>
                                <p>This mechanism ensures the ETF's supply matches market demand.</p>
                                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 300'><rect width='600' height='300' fill='%23f5f5f5'/><circle cx='150' cy='150' r='50' fill='%230077c8'/><rect x='350' y='100' width='100' height='100' fill='%23003da5'/><path d='M 200 150 L 350 150' stroke='%23333' stroke-width='3' stroke-dasharray='5,5'/><text x='150' y='200' text-anchor='middle' font-family='Arial' font-size='14'>APs</text><text x='400' y='220' text-anchor='middle' font-family='Arial' font-size='14'>ETF Issuer</text><text x='275' y='140' text-anchor='middle' font-family='Arial' font-size='14'>Redemption</text></svg>" alt="ETF Redemption Process Diagram" style="width:100%; max-width:500px; display:block; margin:1.5rem auto;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="secondary-market" class="tab-content">
                <h3>Secondary Market</h3>
                <p>The secondary market is where most ETF trading occurs, as investors buy and sell ETF shares on stock exchanges just like they would trade individual stocks.</p>
                
                <div class="card">
                    <div class="card-header">
                        <h4>Key Secondary Market Characteristics</h4>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li><strong>Exchange Trading:</strong> ETFs are listed on exchanges and trade throughout the day at market prices.</li>
                            <li><strong>Liquidity Providers:</strong> Market makers and authorized participants help maintain liquidity.</li>
                            <li><strong>Bid-Ask Spread:</strong> The difference between the highest price a buyer is willing to pay and the lowest price a seller is willing to accept.</li>
                            <li><strong>Trading Volume:</strong> The number of ETF shares traded in a given period, often used as a measure of liquidity.</li>
                        </ul>
                        
                        <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'><rect width='800' height='400' fill='%23f5f5f5'/><rect x='100' y='150' width='600' height='100' fill='%230077c8' opacity='0.2'/><text x='400' y='100' text-anchor='middle' font-family='Arial' font-size='24' fill='%23003da5'>Secondary Market</text><circle cx='200' cy='200' r='30' fill='%23003da5'/><circle cx='600' cy='200' r='30' fill='%230077c8'/><text x='200' y='250' text-anchor='middle' font-family='Arial' font-size='14'>Buyer</text><text x='600' y='250' text-anchor='middle' font-family='Arial' font-size='14'>Seller</text><path d='M 230 200 L 570 200' stroke='%23333' stroke-width='2'/><path d='M 230 200 L 250 190 L 250 210 Z' fill='%23333'/><path d='M 570 200 L 550 190 L 550 210 Z' fill='%23333'/><text x='400' y='180' text-anchor='middle' font-family='Arial' font-size='14'>ETF Shares</text><text x='400' y='220' text-anchor='middle' font-family='Arial' font-size='14'>Cash</text></svg>" alt="ETF Secondary Market Diagram" style="width:100%; max-width:700px; display:block; margin:1.5rem auto;">
                    </div>
                </div>
            </div>
            
            <div id="arbitrage" class="tab-content">
                <h3>Arbitrage Mechanism</h3>
                <p>The arbitrage mechanism is essential to keeping ETF market prices aligned with the underlying net asset value (NAV).</p>
                
                <div class="card">
                    <div class="card-header">
                        <h4>How ETF Arbitrage Works</h4>
                    </div>
                    <div class="card-body">
                        <p>When an ETF trades at a premium or discount to its NAV, arbitrageurs (typically authorized participants) can take advantage of the price difference to make a profit while simultaneously helping to bring the ETF's market price back in line with its NAV.</p>
                        
                        <div class="row">
                            <div class="col">
                                <h5>Premium Scenario</h5>
                                <ol>
                                    <li>ETF shares trading above NAV (premium)</li>
                                    <li>APs buy underlying basket of securities</li>
                                    <li>APs create new ETF shares at NAV</li>
                                    <li>APs sell new ETF shares at market price</li>
                                    <li>Profit = Premium amount</li>
                                    <li>Increased supply pushes ETF price down toward NAV</li>
                                </ol>
                            </div>
                            <div class="col">
                                <h5>Discount Scenario</h5>
                                <ol>
                                    <li>ETF shares trading below NAV (discount)</li>
                                    <li>APs buy ETF shares at market price</li>
                                    <li>APs redeem ETF shares for underlying securities at NAV</li>
                                    <li>APs sell underlying securities at market price</li>
                                    <li>Profit = Discount amount</li>
                                    <li>Decreased supply pulls ETF price up toward NAV</li>
                                </ol>
                            </div>
                        </div>
                        
                        <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'><rect width='800' height='400' fill='%23f5f5f5'/><text x='400' y='50' text-anchor='middle' font-family='Arial' font-size='24' fill='%23003da5'>ETF Arbitrage Mechanism</text><path d='M 200 200 L 600 200' stroke='%23666' stroke-width='2'/><text x='400' y='220' text-anchor='middle' font-family='Arial' font-size='14'>ETF NAV</text><path d='M 200 150 Q 400 100 600 150' stroke='%230077c8' stroke-width='3' fill='none'/><text x='650' y='150' font-family='Arial' font-size='14' fill='%230077c8'>Premium</text><path d='M 200 250 Q 400 300 600 250' stroke='%23dc3545' stroke-width='3' fill='none'/><text x='650' y='250' font-family='Arial' font-size='14' fill='%23dc3545'>Discount</text><path d='M 300 150 L 300 120 L 350 120' stroke='%230077c8' stroke-width='2'/><text x='370' y='125' font-family='Arial' font-size='12' fill='%230077c8'>APs Create Shares</text><path d='M 300 250 L 300 280 L 350 280' stroke='%23dc3545' stroke-width='2'/><text x='370' y='285' font-family='Arial' font-size='12' fill='%23dc3545'>APs Redeem Shares</text><path d='M 500 150 Q 520 170 500 200' stroke='%230077c8' stroke-width='2' stroke-dasharray='5,5'/><path d='M 500 250 Q 520 230 500 200' stroke='%23dc3545' stroke-width='2' stroke-dasharray='5,5'/><text x='550' y='180' font-family='Arial' font-size='12'>Price Realignment</text></svg>" alt="ETF Arbitrage Mechanism" style="width:100%; max-width:700px; display:block; margin:1.5rem auto;">
                    </div>
                </div>
            </div>
            
            <div id="comparison" class="tab-content">
                <h3>ETFs vs. Mutual Funds</h3>
                <p>While ETFs and mutual funds share some similarities as pooled investment vehicles, they differ in several important ways.</p>
                
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>ETFs</th>
                            <th>Mutual Funds</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Trading</td>
                            <td>Intraday on exchanges</td>
                            <td>End-of-day at NAV</td>
                        </tr>
                        <tr>
                            <td>Pricing</td>
                            <td>Market price (may vary from NAV)</td>
                            <td>NAV calculated after market close</td>
                        </tr>
                        <tr>
                            <td>Transparency</td>
                            <td>Daily holdings disclosure (typically)</td>
                            <td>Quarterly holdings disclosure (typically)</td>
                        </tr>
                        <tr>
                            <td>Tax Efficiency</td>
                            <td>Generally more tax-efficient due to in-kind creation/redemption</td>
                            <td>Less tax-efficient due to cash transactions</td>
                        </tr>
                        <tr>
                            <td>Minimum Investment</td>
                            <td>One share</td>
                            <td>Varies (often $1,000+)</td>
                        </tr>
                        <tr>
                            <td>Fees</td>
                            <td>Expense ratio plus trading costs</td>
                            <td>Expense ratio plus potential loads</td>
                        </tr>
                        <tr>
                            <td>Shareholder Information</td>
                            <td>Limited visibility (no transfer agent)</td>
                            <td>Comprehensive visibility (transfer agent)</td>
                        </tr>
                        <tr>
                            <td>Data Infrastructure</td>
                            <td>Multiple third-party sources required</td>
                            <td>Centralized transfer agent data</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Capital Group ETF Strategy Section -->
        <section id="cg-strategy" class="section">
            <h2>Capital Group ETF Strategy</h2>
            <p>Capital Group's entry into the ETF market represented a strategic expansion of its product lineup, combining the company's legacy of active management with the operational infrastructure required for ETF innovation. The launch was executed in two phases, with products carefully designed to deliver intraday liquidity, transparency, and tax efficiency while maintaining the firm's research-driven investment approach.</p>
            
            <h3>Product Launch Timeline</h3>
            <div class="timeline">
                <div class="timeline-item timeline-left">
                    <div class="timeline-content">
                        <div class="timeline-date">February 2022</div>
                        <h4>Initial ETF Launch</h4>
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
                <div class="timeline-item timeline-right">
                    <div class="timeline-content">
                        <div class="timeline-date">October 2022</div>
                        <h4>Expansion Launch</h4>
                        <p>Expansion of the ETF suite with additional fixed-income offerings:</p>
                        <ul>
                            <li>Capital Group Municipal Income ETF</li>
                            <li>Capital Group Short Duration Income ETF</li>
                            <li>Capital Group US Multi-sector Income ETF</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <h3>ETF Product Portfolio</h3>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-header">
                            <h4>Core Equity ETF</h4>
                        </div>
                        <div class="card-body">
                            <p>A diversified portfolio of U.S. and international stocks with growth and income objectives.</p>
                            <p><strong>Launch:</strong> February 2022</p>
                            <p><strong>Assets:</strong> $20,000,000 (seeded)</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-header">
                            <h4>Core Plus Income ETF</h4>
                        </div>
                        <div class="card-body">
                            <p>A broadly diversified fixed-income portfolio with income and growth objectives.</p>
                            <p><strong>Launch:</strong> February 2022</p>
                            <p><strong>Assets:</strong> $85,000,000 (seeded)</p>
                        </div>
                    </div>
                </div>
                <div class="col">
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
                </div>
            </div>
            
            <div class="row">
                <div class="col">
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
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-header">
                            <h4>Growth ETF</h4>
                        </div>
                        <div class="card-body">
                            <p>Focuses on companies with strong growth potential.</p>
                            <p><strong>Launch:</strong> February 2022</p>
                            <p><strong>Assets:</strong> $80,000,000 (seeded)</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-header">
                            <h4>International Focus Equity ETF</h4>
                        </div>
                        <div class="card-body">
                            <p>Selectively invests in non-U.S. companies with growth potential.</p>
                            <p><strong>Launch:</strong> February 2022</p>
                            <p><strong>Assets:</strong> $40,000,000 (seeded)</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col">
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
                </div>
                <div class="col">
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
                </div>
                <div class="col">
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
            </div>
        </section>
        <!-- Data Management Framework Section -->
        <section id="data-management" class="section">
            <h2>ETF Data Management Framework</h2>
            <p>Managing ETF data presents unique challenges compared to traditional mutual funds. While mutual funds benefit from a centralized transfer agent, ETFs rely on a complex ecosystem of data providers, requiring sophisticated integration and validation frameworks to ensure accuracy and completeness.</p>

            <div class="row">
                <div class="col">
                    <div class="dashboard-card">
                        <div class="dashboard-header">
                            <h3>Data Management Challenges</h3>
                        </div>
                        <div class="dashboard-body">
                            <p>ETFs present several unique data management challenges:</p>
                            <ul>
                                <li><strong>Fragmented Ecosystem:</strong> Data must be sourced from multiple providers, including exchanges, authorized participants, clearing houses, and fund accountants.</li>
                                <li><strong>Intraday Trading:</strong> Unlike mutual funds, ETFs trade throughout the day, requiring real-time data processing capabilities.</li>
                                <li><strong>Creation/Redemption Activity:</strong> Transactions between authorized participants and the fund require specialized tracking.</li>
                                <li><strong>Market Price vs. NAV:</strong> Both metrics must be tracked and reconciled, with premium/discount analysis.</li>
                                <li><strong>Volume Discovery:</strong> Secondary market trading happens across multiple venues, requiring consolidation.</li>
                            </ul>
                            <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'><rect width='800' height='400' fill='%23f5f5f5'/><circle cx='400' cy='200' r='100' fill='%23003da5' opacity='0.2'/><text x='400' y='200' text-anchor='middle' font-family='Arial' font-size='18' fill='%23003da5'>ETF Data</text><circle cx='220' cy='120' r='50' fill='%230077c8' opacity='0.2'/><text x='220' y='120' text-anchor='middle' font-family='Arial' font-size='12'>Exchanges</text><circle cx='580' cy='120' r='50' fill='%230077c8' opacity='0.2'/><text x='580' y='120' text-anchor='middle' font-family='Arial' font-size='12'>Authorized Participants</text><circle cx='220' cy='280' r='50' fill='%230077c8' opacity='0.2'/><text x='220' y='280' text-anchor='middle' font-family='Arial' font-size='12'>Fund Accountants</text><circle cx='580' cy='280' r='50' fill='%230077c8' opacity='0.2'/><text x='580' y='280' text-anchor='middle' font-family='Arial' font-size='12'>Market Makers</text><path d='M 260 140 L 320 180' stroke='%23003da5' stroke-width='2'/><path d='M 540 140 L 480 180' stroke='%23003da5' stroke-width='2'/><path d='M 260 260 L 320 220' stroke='%23003da5' stroke-width='2'/><path d='M 540 260 L 480 220' stroke='%23003da5' stroke-width='2'/></svg>" alt="ETF Data Ecosystem" style="width:100%; max-width:600px; display:block; margin:1.5rem auto;">
                        </div>
                    </div>
                </div>
            </div>

            <h3>Key Success Metrics</h3>
            <div class="row">
                <div class="col">
                    <div class="metric-card card">
                        <div class="metric-value">99.9%</div>
                        <div class="metric-label">Market Data Transparency</div>
                        <p>Complete visibility into ETF trading activity across all venues, ensuring comprehensive market intelligence for investment decisions.</p>
                        <div class="progress-container">
                            <div class="progress-bar" style="width: 99.9%;"></div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="metric-card card">
                        <div class="metric-value">7</div>
                        <div class="metric-label">Data Sources Integrated</div>
                        <p>Comprehensive data infrastructure combining multiple market participants and data providers into a unified platform.</p>
                        <div class="progress-container">
                            <div class="progress-bar" style="width: 87.5%;"></div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="metric-card card">
                        <div class="metric-value">$31.4M</div>
                        <div class="metric-label">Seeding Transaction Identified</div>
                        <p>Successful identification and reconciliation of a complex multi-party seeding transaction, ensuring accurate books and records.</p>
                        <div class="progress-container">
                            <div class="progress-bar" style="width: 100%;"></div>
                        </div>
                    </div>
                </div>
            </div>

            <h3>Data Integration Architecture</h3>
            <div class="card">
                <div class="card-header">
                    <h4>Multi-Source Data Integration Framework</h4>
                </div>
                <div class="card-body">
                    <p>The ETF data integration architecture combines data from multiple sources into a unified platform for analysis, reporting, and decision-making.</p>
                    
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'><rect width='800' height='500' fill='%23ffffff'/><rect x='50' y='50' width='150' height='80' rx='10' fill='%23003da5'/><text x='125' y='90' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Exchange Data</text><rect x='50' y='150' width='150' height='80' rx='10' fill='%23003da5'/><text x='125' y='190' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>AP Data</text><rect x='50' y='250' width='150' height='80' rx='10' fill='%23003da5'/><text x='125' y='290' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Bloomberg</text><rect x='50' y='350' width='150' height='80' rx='10' fill='%23003da5'/><text x='125' y='390' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>ICE Data</text><rect x='300' y='150' width='200' height='180' rx='10' fill='%230077c8'/><text x='400' y='200' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>ETF Data</text><text x='400' y='240' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Integration</text><text x='400' y='280' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Platform</text><rect x='600' y='50' width='150' height='80' rx='10' fill='%2300a9e0'/><text x='675' y='90' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Trading Analytics</text><rect x='600' y='150' width='150' height='80' rx='10' fill='%2300a9e0'/><text x='675' y='190' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Reporting</text><rect x='600' y='250' width='150' height='80' rx='10' fill='%2300a9e0'/><text x='675' y='290' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Compliance</text><rect x='600' y='350' width='150' height='80' rx='10' fill='%2300a9e0'/><text x='675' y='390' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Client Data</text><path d='M 200 90 L 300 180' stroke='%23666666' stroke-width='2' stroke-dasharray='5,5'/><path d='M 200 190 L 300 190' stroke='%23666666' stroke-width='2'/><path d='M 200 290 L 300 230' stroke='%23666666' stroke-width='2' stroke-dasharray='5,5'/><path d='M 200 390 L 300 240' stroke='%23666666' stroke-width='2' stroke-dasharray='5,5'/><path d='M 500 180 L 600 90' stroke='%23666666' stroke-width='2' stroke-dasharray='5,5'/><path d='M 500 190 L 600 190' stroke='%23666666' stroke-width='2'/><path d='M 500 240 L 600 290' stroke='%23666666' stroke-width='2' stroke-dasharray='5,5'/><path d='M 500 240 L 600 390' stroke='%23666666' stroke-width='2' stroke-dasharray='5,5'/></svg>" alt="ETF Data Integration Architecture" style="width:100%; max-width:700px; display:block; margin:1.5rem auto;">
                    
                    <h5>Key Components:</h5>
                    <ul>
                        <li><strong>Data Ingestion Layer:</strong> APIs and file-based integrations with multiple data providers.</li>
                        <li><strong>Normalization Engine:</strong> Standardizes data formats from disparate sources.</li>
                        <li><strong>Validation Framework:</strong> Multi-level checks ensuring data accuracy and completeness.</li>
                        <li><strong>Master Data Management:</strong> Centralized repository of ETF reference data.</li>
                        <li><strong>Analytics Layer:</strong> Provides insights and visualization capabilities.</li>
                        <li><strong>Distribution Services:</strong> Delivers processed data to downstream consumers.</li>
                    </ul>
                </div>
            </div>

            <h3>Data Validation Framework</h3>
            <div class="expandable-trigger">Validation Process <span class="toggle-icon">+</span></div>
            <div class="expandable-content">
                <div class="card">
                    <div class="card-body">
                        <p>The data validation framework implements a multi-tiered approach to ensure data quality:</p>
                        
                        <ol>
                            <li><strong>Source Validation:</strong> Initial data quality checks at ingestion points.</li>
                            <li><strong>Cross-Source Reconciliation:</strong> Comparison of data elements across providers.</li>
                            <li><strong>Business Rule Enforcement:</strong> Implementation of domain-specific validation rules.</li>
                            <li><strong>Historical Pattern Analysis:</strong> Anomaly detection based on historical patterns.</li>
                            <li><strong>Manual Review Workflow:</strong> Escalation path for exceptions requiring human judgment.</li>
                        </ol>
                        
                        <p>This framework enabled the achievement of 99.9% market transparency across all trading venues, providing comprehensive visibility into ETF trading activity.</p>
                    </div>
                </div>
            </div>

            <div class="expandable-trigger">Exception Handling <span class="toggle-icon">+</span></div>
            <div class="expandable-content">
                <div class="card">
                    <div class="card-body">
                        <p>The exception handling process ensures that data anomalies are identified, investigated, and resolved:</p>
                        
                        <ul>
                            <li><strong>Automated Detection:</strong> Rule-based identification of potential data issues.</li>
                            <li><strong>Severity Classification:</strong> Categorization of exceptions based on business impact.</li>
                            <li><strong>Resolution Workflow:</strong> Structured process for investigation and correction.</li>
                            <li><strong>Root Cause Analysis:</strong> Identification of underlying issues to prevent recurrence.</li>
                            <li><strong>Continuous Improvement:</strong> Feedback loop for refining validation rules.</li>
                        </ul>
                        
                        <p>This process was instrumental in identifying and resolving a complex $31.4M seeding transaction that was not properly reflected in initial data feeds.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Interactive Product Explorer -->
        <section id="product-explorer" class="section">
            <h2>ETF Product Explorer</h2>
            <p>Capital Group's ETF suite combines the firm's investment expertise with the operational efficiencies of the ETF structure. The products span multiple asset classes and investment strategies, providing investors with a range of options to meet their financial goals.</p>
            
            <div class="filter-controls">
                <div class="filter-control">
                    <label class="filter-label" for="asset-class-filter">Asset Class</label>
                    <select id="asset-class-filter" class="filter-select">
                        <option value="all">All Asset Classes</option>
                        <option value="equity">Equity</option>
                        <option value="fixed-income">Fixed Income</option>
                    </select>
                </div>
                <div class="filter-control">
                    <label class="filter-label" for="launch-date-filter">Launch Date</label>
                    <select id="launch-date-filter" class="filter-select">
                        <option value="all">All Dates</option>
                        <option value="feb-2022">February 2022</option>
                        <option value="oct-2022">October 2022</option>
                    </select>
                </div>
                <div class="filter-control">
                    <label class="filter-label" for="sort-by">Sort By</label>
                    <select id="sort-by" class="filter-select">
                        <option value="name">Name</option>
                        <option value="aum">Assets Under Management</option>
                        <option value="launch-date">Launch Date</option>
                    </select>
                </div>
            </div>
            
            <div class="row product-grid">
                <!-- Equity ETFs -->
                <div class="col product-item" data-asset-class="equity" data-launch-date="feb-2022" data-aum="20000000">
                    <div class="card">
                        <div class="card-header">
                            <h4>Capital Group Core Equity ETF</h4>
                            <span class="badge badge-primary">Equity</span>
                        </div>
                        <div class="card-body">
                            <p><strong>Ticker:</strong> CGUS</p>
                            <p><strong>Launch Date:</strong> February 22, 2022</p>
                            <p><strong>Description:</strong> Seeks to provide long-term growth of capital through investments in a diversified portfolio of U.S. and non-U.S. companies.</p>
                            <p><strong>AUM:</strong> $20 million</p>
                            
                            <div class="progress-container">
                                <div class="progress-bar" style="width: 10%;"></div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary product-details-trigger" data-product="cgus">View Details</a>
                        </div>
                    </div>
                </div>
                
                <div class="col product-item" data-asset-class="fixed-income" data-launch-date="feb-2022" data-aum="85000000">
                    <div class="card">
                        <div class="card-header">
                            <h4>Capital Group Core Plus Income ETF</h4>
                            <span class="badge badge-secondary">Fixed Income</span>
                        </div>
                        <div class="card-body">
                            <p><strong>Ticker:</strong> CGCP</p>
                            <p><strong>Launch Date:</strong> February 22, 2022</p>
                            <p><strong>Description:</strong> Seeks to provide a high level of total return through investments in fixed-income securities and normally invests at least 80% of assets in bonds.</p>
                            <p><strong>AUM:</strong> $85 million</p>
                            
                            <div class="progress-container">
                                <div class="progress-bar" style="width: 30%;"></div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary product-details-trigger" data-product="cgcp">View Details</a>
                        </div>
                    </div>
                </div>
                
                <div class="col product-item" data-asset-class="equity" data-launch-date="feb-2022" data-aum="40000000">
                    <div class="card">
                        <div class="card-header">
                            <h4>Capital Group Dividend Value ETF</h4>
                            <span class="badge badge-primary">Equity</span>
                        </div>
                        <div class="card-body">
                            <p><strong>Ticker:</strong> CGDV</p>
                            <p><strong>Launch Date:</strong> February 22, 2022</p>
                            <p><strong>Description:</strong> Seeks to provide income and capital preservation, with a secondary objective of growth of capital through investments primarily in U.S. companies that pay dividends.</p>
                            <p><strong>AUM:</strong> $40 million</p>
                            
                            <div class="progress-container">
                                <div class="progress-bar" style="width: 20%;"></div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary product-details-trigger" data-product="cgdv">View Details</a>
                        </div>
                    </div>
                </div>
                
                <!-- Fixed Income ETFs -->
                <div class="col product-item" data-asset-class="fixed-income" data-launch-date="oct-2022" data-aum="1200000000">
                    <div class="card">
                        <div class="card-header">
                            <h4>Capital Group Municipal Income ETF</h4>
                            <span class="badge badge-secondary">Fixed Income</span>
                        </div>
                        <div class="card-body">
                            <p><strong>Ticker:</strong> CGMU</p>
                            <p><strong>Launch Date:</strong> October 25, 2022</p>
                            <p><strong>Description:</strong> Seeks to provide a high level of current income exempt from federal income tax, consistent with the preservation of capital through investments in municipal bonds.</p>
                            <p><strong>AUM:</strong> $1.2 billion</p>
                            
                            <div class="progress-container">
                                <div class="progress-bar" style="width: 80%;"></div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary product-details-trigger" data-product="cgmu">View Details</a>
                        </div>
                    </div>
                </div>
                
                <div class="col product-item" data-asset-class="fixed-income" data-launch-date="oct-2022" data-aum="1175000000">
                    <div class="card">
                        <div class="card-header">
                            <h4>Capital Group Short Duration Income ETF</h4>
                            <span class="badge badge-secondary">Fixed Income</span>
                        </div>
                        <div class="card-body">
                            <p><strong>Ticker:</strong> CGSD</p>
                            <p><strong>Launch Date:</strong> October 25, 2022</p>
                            <p><strong>Description:</strong> Seeks current income, consistent with a short duration profile and with preservation of capital, through investments in investment-grade fixed-income securities.</p>
                            <p><strong>AUM:</strong> $1.175 billion</p>
                            
                            <div class="progress-container">
                                <div class="progress-bar" style="width: 78%;"></div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary product-details-trigger" data-product="cgsd">View Details</a>
                        </div>
                    </div>
                </div>
                
                <div class="col product-item" data-asset-class="fixed-income" data-launch-date="oct-2022" data-aum="1955000000">
                    <div class="card">
                        <div class="card-header">
                            <h4>Capital Group US Multi-sector Income ETF</h4>
                            <span class="badge badge-secondary">Fixed Income</span>
                        </div>
                        <div class="card-body">
                            <p><strong>Ticker:</strong> CGMS</p>
                            <p><strong>Launch Date:</strong> October 25, 2022</p>
                            <p><strong>Description:</strong> Seeks a high level of current income with a secondary objective of capital appreciation through investments in a range of fixed-income sectors, including high yield bonds and mortgage-backed securities.</p>
                            <p><strong>AUM:</strong> $1.955 billion</p>
                            
                            <div class="progress-container">
                                <div class="progress-bar" style="width: 95%;"></div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary product-details-trigger" data-product="cgms">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Data Visualization Dashboard -->
        <section id="data-dashboard" class="section">
            <h2>ETF Data Visualization Dashboard</h2>
            <p>Effective ETF data management requires robust visualization capabilities to identify trends, anomalies, and opportunities. The following dashboard components provide key insights into ETF trading activity, creation/redemption flows, and market metrics.</p>
            
            <div class="row">
                <div class="col">
                    <div class="dashboard-card">
                        <div class="dashboard-header">
                            <h3>Market Transparency Metrics</h3>
                        </div>
                        <div class="dashboard-body">
                            <div class="chart-container">
                                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'><rect width='800' height='400' fill='%23f5f5f5'/><text x='400' y='30' font-family='Arial' font-size='16' text-anchor='middle' fill='%23003da5'>ETF Trading Volume by Venue</text><rect x='100' y='60' width='600' height='300' fill='%23ffffff' stroke='%23cccccc'/><line x1='100' y1='360' x2='700' y2='360' stroke='%23666666' stroke-width='2'/><line x1='100' y1='60' x2='100' y2='360' stroke='%23666666' stroke-width='2'/><text x='120' y='380' font-family='Arial' font-size='12' fill='%23666666'>NYSE</text><text x='220' y='380' font-family='Arial' font-size='12' fill='%23666666'>NASDAQ</text><text x='320' y='380' font-family='Arial' font-size='12' fill='%23666666'>CBOE</text><text x='420' y='380' font-family='Arial' font-size='12' fill='%23666666'>IEX</text><text x='520' y='380' font-family='Arial' font-size='12' fill='%23666666'>MEMX</text><text x='620' y='380' font-family='Arial' font-size='12' fill='%23666666'>Other</text><rect x='130' y='160' width='40' height='200' fill='%23003da5'/><rect x='230' y='120' width='40' height='240' fill='%23003da5'/><rect x='330' y='240' width='40' height='120' fill='%23003da5'/><rect x='430' y='280' width='40' height='80' fill='%23003da5'/><rect x='530' y='300' width='40' height='60' fill='%23003da5'/><rect x='630' y='320' width='40' height='40' fill='%23003da5'/><text x='80' y='200' transform='rotate(270, 80, 200)' font-family='Arial' font-size='12' fill='%23666666'>Volume (shares)</text></svg>" alt="ETF Trading Volume by Venue" style="width:100%; height:100%; object-fit:contain;">
                            </div>
                            <p>ETF trading activity occurs across multiple venues, requiring comprehensive data integration to achieve complete market transparency. The integration framework successfully captures 99.9% of all trading activity.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="dashboard-card">
                        <div class="dashboard-header">
                            <h3>Premium/Discount Analysis</h3>
                        </div>
                        <div class="dashboard-body">
                            <div class="chart-container">
                                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'><rect width='800' height='400' fill='%23f5f5f5'/><text x='400' y='30' font-family='Arial' font-size='16' text-anchor='middle' fill='%23003da5'>ETF Premium/Discount Analysis</text><rect x='100' y='60' width='600' height='300' fill='%23ffffff' stroke='%23cccccc'/><line x1='100' y1='210' x2='700' y2='210' stroke='%23666666' stroke-width='1'/><line x1='100' y1='60' x2='100' y2='360' stroke='%23666666' stroke-width='2'/><text x='80' y='210' font-family='Arial' font-size='12' text-anchor='end' fill='%23666666'>0%</text><text x='80' y='110' font-family='Arial' font-size='12' text-anchor='end' fill='%23666666'>+0.5%</text><text x='80' y='310' font-family='Arial' font-size='12' text-anchor='end' fill='%23666666'>-0.5%</text><path d='M 100 210 C 150 205, 200 215, 250 208 C 300 203, 350 212, 400 200 C 450 190, 500 220, 550 230 C 600 225, 650 210, 700 208' stroke='%230077c8' stroke-width='3' fill='none'/><text x='400' y='380' text-anchor='middle' font-family='Arial' font-size='12' fill='%23666666'>Time</text></svg>" alt="ETF Premium/Discount Analysis" style="width:100%; height:100%; object-fit:contain;">
                            </div>
                            <p>Tracking the relationship between an ETF's market price and its net asset value (NAV) is critical for evaluating market efficiency and arbitrage opportunities. The data integration platform provides real-time premium/discount analysis.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col">
                    <div class="dashboard-card">
                        <div class="dashboard-header">
                            <h3>Creation/Redemption Activity</h3>
                        </div>
                        <div class="dashboard-body">
                            <div class="chart-container">
                                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'><rect width='800' height='400' fill='%23f5f5f5'/><text x='400' y='30' font-family='Arial' font-size='16' text-anchor='middle' fill='%23003da5'>Creation/Redemption Activity</text><rect x='100' y='60' width='600' height='300' fill='%23ffffff' stroke='%23cccccc'/><line x1='100' y1='210' x2='700' y2='210' stroke='%23666666' stroke-width='1'/><line x1='100' y1='60' x2='100' y2='360' stroke='%23666666' stroke-width='2'/><text x='80' y='210' font-family='Arial' font-size='12' text-anchor='end' fill='%23666666'>0</text><text x='80' y='110' font-family='Arial' font-size='12' text-anchor='end' fill='%23666666'>+100,000</text><text x='80' y='310' font-family='Arial' font-size='12' text-anchor='end' fill='%23666666'>-100,000</text><rect x='130' y='150' width='40' height='60' fill='%23003da5'/><rect x='230' y='130' width='40' height='80' fill='%23003da5'/><rect x='330' y='170' width='40' height='40' fill='%23003da5'/><rect x='430' y='110' width='40' height='100' fill='%23003da5'/><rect x='530' y='210' width='40' height='80' fill='%23dc3545'/><rect x='630' y='210' width='40' height='40' fill='%23dc3545'/><text x='400' y='380' text-anchor='middle' font-family='Arial' font-size='12' fill='%23666666'>Date</text><text x='150' y='80' font-family='Arial' font-size='12' fill='%23003da5'>Creations</text><text x='650' y='80' font-family='Arial' font-size='12' fill='%23dc3545'>Redemptions</text></svg>" alt="Creation/Redemption Activity" style="width:100%; height:100%; object-fit:contain;">
                            </div>
                            <p>The primary market activity of ETF creation and redemption provides important insights into institutional investor behavior and potential market flows. Tracking this activity requires specialized data integration from authorized participants and the fund.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="dashboard-card">
                        <div class="dashboard-header">
                            <h3>Liquidity Analysis</h3>
                        </div>
                        <div class="dashboard-body">
                            <div class="chart-container">
                                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'><rect width='800' height='400' fill='%23f5f5f5'/><text x='400' y='30' font-family='Arial' font-size='16' text-anchor='middle' fill='%23003da5'>ETF Liquidity Analysis</text><rect x='100' y='60' width='600' height='300' fill='%23ffffff' stroke='%23cccccc'/><line x1='100' y1='360' x2='700' y2='360' stroke='%23666666' stroke-width='2'/><line x1='100' y1='60' x2='100' y2='360' stroke='%23666666' stroke-width='2'/><text x='120' y='380' font-family='Arial' font-size='12' fill='%23666666'>CGUS</text><text x='220' y='380' font-family='Arial' font-size='12' fill='%23666666'>CGCP</text><text x='320' y='380' font-family='Arial' font-size='12' fill='%23666666'>CGDV</text><text x='420' y='380' font-family='Arial' font-size='12' fill='%23666666'>CGMU</text><text x='520' y='380' font-family='Arial' font-size='12' fill='%23666666'>CGSD</text><text x='620' y='380' font-family='Arial' font-size='12' fill='%23666666'>CGMS</text><rect x='130' y='340' width='40' height='20' fill='%230077c8'/><rect x='230' y='320' width='40' height='40' fill='%230077c8'/><rect x='330' y='300' width='40' height='60' fill='%230077c8'/><rect x='430' y='160' width='40' height='200' fill='%230077c8'/><rect x='530' y='140' width='40' height='220' fill='%230077c8'/><rect x='630' y='100' width='40' height='260' fill='%230077c8'/><text x='80' y='200' transform='rotate(270, 80, 200)' font-family='Arial' font-size='12' fill='%23666666'>Average Daily Volume</text></svg>" alt="ETF Liquidity Analysis" style="width:100%; height:100%; object-fit:contain;">
                            </div>
                            <p>ETF liquidity analysis combines primary market capacity with secondary market trading activity to provide a comprehensive view of an ETF's true liquidity profile. This analysis is critical for institutional investors considering large positions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Case Studies Section -->
        <section id="case-studies" class="section">
            <h2>ETF Data Management Case Studies</h2>
            <p>The following case studies highlight key achievements in ETF data management, demonstrating the value of robust data integration and validation frameworks.</p>
            
            <div class="case-study">
                <div class="case-study-header">
                    <h3 class="case-study-title">Achieving 99.9% Market Transparency</h3>
                    <div class="case-study-meta">February 2022 - April 2022</div>
                </div>
                <div class="case-study-body">
                    <h4>Challenge</h4>
                    <p>With the launch of Capital Group's first ETFs in February 2022, the firm needed comprehensive visibility into trading activity across all market venues. Unlike mutual funds, which trade once daily at NAV, ETFs trade continuously throughout the day across multiple exchanges and alternative trading systems (ATS).</p>
                    
                    <h4>Solution</h4>
                    <p>Implemented a multi-source data integration framework that:</p>
                    <ul>
                        <li>Established direct feeds from major exchanges (NYSE, NASDAQ, CBOE)</li>
                        <li>Integrated with consolidated tape providers for comprehensive market coverage</li>
                        <li>Developed a custom reconciliation engine to identify and resolve data discrepancies</li>
                        <li>Built a real-time dashboard for monitoring trading activity across venues</li>
                    </ul>
                    
                    <h4>Implementation</h4>
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 300'><rect width='800' height='300' fill='%23f5f5f5'/><rect x='100' y='50' width='150' height='60' rx='5' fill='%23003da5'/><text x='175' y='85' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>NYSE Data Feed</text><rect x='100' y='120' width='150' height='60' rx='5' fill='%23003da5'/><text x='175' y='155' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>NASDAQ Data Feed</text><rect x='100' y='190' width='150' height='60' rx='5' fill='%23003da5'/><text x='175' y='225' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Consolidated Tape</text><path d='M 250 80 L 320 150' stroke='%23666666' stroke-width='2' stroke-dasharray='5,5'/><path d='M 250 150 L 320 150' stroke='%23666666' stroke-width='2'/><path d='M 250 220 L 320 150' stroke='%23666666' stroke-width='2' stroke-dasharray='5,5'/><rect x='320' y='120' width='160' height='60' rx='5' fill='%230077c8'/><text x='400' y='145' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Data Integration</text><text x='400' y='165' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Platform</text><path d='M 480 150 L 550 150' stroke='%23666666' stroke-width='2'/><rect x='550' y='120' width='150' height='60' rx='5' fill='%2300a9e0'/><text x='625' y='155' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Market Dashboard</text></svg>" alt="Market Transparency Implementation" style="width:100%; max-width:700px; display:block; margin:1.5rem auto;">
                    
                    <div class="case-study-results">
                        <h4>Results</h4>
                        <ul>
                            <li>Achieved 99.9% visibility into all ETF trading activity across market venues</li>
                            <li>Reduced data latency from 15 minutes to near real-time (30 seconds)</li>
                            <li>Identified and addressed data gaps in dark pool and ATS reporting</li>
                            <li>Enabled comprehensive trading analytics for the investment team</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="case-study">
                <div class="case-study-header">
                    <h3 class="case-study-title">$31.4M Seeding Transaction Identification</h3>
                    <div class="case-study-meta">October 2022</div>
                </div>
                <div class="case-study-body">
                    <h4>Challenge</h4>
                    <p>During the October 2022 launch of three fixed-income ETFs, a complex $31.4M seeding transaction was not properly reflected in initial data feeds. This discrepancy created reconciliation issues between various systems and risked inaccurate net asset value (NAV) calculations.</p>
                    
                    <h4>Solution</h4>
                    <p>Deployed a multi-faceted approach to identify, reconcile, and resolve the transaction discrepancy:</p>
                    <ul>
                        <li>Implemented enhanced cross-system validation rules to flag potential discrepancies</li>
                        <li>Developed a transaction reconstruction methodology to trace the flow of assets</li>
                        <li>Established direct communication channels with authorized participants for rapid verification</li>
                        <li>Created an automated reconciliation process for future transaction validation</li>
                    </ul>
                    
                    <h4>Technical Implementation</h4>
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 300'><rect width='800' height='300' fill='%23f5f5f5'/><rect x='50' y='50' width='150' height='60' rx='5' fill='%23003da5'/><text x='125' y='85' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>AP Transaction Data</text><rect x='50' y='120' width='150' height='60' rx='5' fill='%23003da5'/><text x='125' y='155' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Fund Accounting Data</text><rect x='50' y='190' width='150' height='60' rx='5' fill='%23003da5'/><text x='125' y='225' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Custody Data</text><path d='M 200 80 L 270 100' stroke='%23666666' stroke-width='2'/><path d='M 200 150 L 270 150' stroke='%23666666' stroke-width='2'/><path d='M 200 220 L 270 200' stroke='%23666666' stroke-width='2'/><rect x='270' y='100' width='160' height='100' rx='5' fill='%230077c8'/><text x='350' y='140' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Transaction</text><text x='350' y='160' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Reconciliation</text><text x='350' y='180' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>Discrepancy Detected</text><path d='M 430 150 L 500 150' stroke='%23666666' stroke-width='2'/><rect x='500' y='100' width='160' height='100' rx='5' fill='%2300a9e0'/><text x='580' y='140' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Root Cause</text><text x='580' y='160' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Analysis</text><text x='580' y='180' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>Missing Transaction</text><path d='M 660 150 L 730 150' stroke='%23666666' stroke-width='2'/><rect x='730' y='100' width='40' height='100' rx='5' fill='%2328a745'/><text x='750' y='150' transform='rotate(90, 750, 150)' font-family='Arial' font-size='14' fill='white'>Resolved</text></svg>" alt="Seeding Transaction Resolution" style="width:100%; max-width:700px; display:block; margin:1.5rem auto;">
                    
                    <div class="case-study-results">
                        <h4>Results</h4>
                        <ul>
                            <li>Successfully identified and reconciled the $31.4M transaction within 24 hours</li>
                            <li>Prevented potential NAV calculation errors that could have impacted investor confidence</li>
                            <li>Implemented system enhancements to prevent similar issues in future launches</li>
                            <li>Established a transaction verification protocol for all primary market activities</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="case-study">
                <div class="case-study-header">
                    <h3 class="case-study-title">Multi-source Data Integration</h3>
                    <div class="case-study-meta">March 2022 - September 2022</div>
                </div>
                <div class="case-study-body">
                    <h4>Challenge</h4>
                    <p>ETF data management requires integration of information from multiple sources, including exchanges, authorized participants, market makers, and fund accountants. Each source provides different data elements, formats, and delivery mechanisms, creating significant integration challenges.</p>
                    
                    <h4>Solution</h4>
                    <p>Designed and implemented a comprehensive data integration platform that:</p>
                    <ul>
                        <li>Established standardized data ingestion processes for each source</li>
                        <li>Developed a common data model to normalize information across providers</li>
                        <li>Created a master reference data repository for ETF identifiers and attributes</li>
                        <li>Implemented data quality checks at each integration point</li>
                        <li>Built flexible reporting capabilities to serve multiple stakeholders</li>
                    </ul>
                    
                    <h4>Architecture</h4>
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'><rect width='800' height='400' fill='%23f5f5f5'/><rect x='50' y='50' width='120' height='60' rx='5' fill='%23003da5'/><text x='110' y='85' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Exchange Data</text><rect x='50' y='120' width='120' height='60' rx='5' fill='%23003da5'/><text x='110' y='155' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>AP Data</text><rect x='50' y='190' width='120' height='60' rx='5' fill='%23003da5'/><text x='110' y='225' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Fund Accounting</text><rect x='50' y='260' width='120' height='60' rx='5' fill='%23003da5'/><text x='110' y='295' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Bloomberg</text><path d='M 170 80 L 230 150' stroke='%23666666' stroke-width='2'/><path d='M 170 150 L 230 150' stroke='%23666666' stroke-width='2'/><path d='M 170 220 L 230 150' stroke='%23666666' stroke-width='2'/><path d='M 170 290 L 230 150' stroke='%23666666' stroke-width='2'/><rect x='230' y='120' width='140' height='60' rx='5' fill='%230077c8'/><text x='300' y='145' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Data Ingestion</text><text x='300' y='165' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Layer</text><path d='M 370 150 L 430 150' stroke='%23666666' stroke-width='2'/><rect x='430' y='120' width='140' height='60' rx='5' fill='%230077c8'/><text x='500' y='145' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Data</text><text x='500' y='165' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Normalization</text><path d='M 570 150 L 630 150' stroke='%23666666' stroke-width='2'/><rect x='630' y='120' width='140' height='60' rx='5' fill='%230077c8'/><text x='700' y='145' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Data Quality</text><text x='700' y='165' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Validation</text><path d='M 700 180 L 700 220' stroke='%23666666' stroke-width='2'/><rect x='630' y='220' width='140' height='60' rx='5' fill='%2300a9e0'/><text x='700' y='245' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Analytics</text><text x='700' y='265' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Platform</text><path d='M 630 250 L 550 250' stroke='%23666666' stroke-width='2'/><path d='M 550 250 L 550 320' stroke='%23666666' stroke-width='2'/><path d='M 700 280 L 700 320' stroke='%23666666' stroke-width='2'/><rect x='480' y='320' width='140' height='60' rx='5' fill='%2300a9e0'/><text x='550' y='350' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Trading</text><text x='550' y='370' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Analytics</text><rect x='630' y='320' width='140' height='60' rx='5' fill='%2300a9e0'/><text x='700' y='350' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Reporting</text><text x='700' y='370' text-anchor='middle' font-family='Arial' font-size='14' fill='white'>Dashboard</text></svg>" alt="Multi-source Data Integration Architecture" style="width:100%; max-width:700px; display:block; margin:1.5rem auto;">
                    
                    <div class="case-study-results">
                        <h4>Results</h4>
                        <ul>
                            <li>Successfully integrated seven distinct data sources into a unified platform</li>
                            <li>Reduced manual reconciliation efforts by 85% through automated data validation</li>
                            <li>Improved data delivery timeliness from T+1 to intraday</li>
                            <li>Enhanced data quality with comprehensive validation rules</li>
                            <li>Enabled real-time analytics for trading, compliance, and reporting teams</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Technical Implementation Section -->
        <section id="technical-details" class="section">
            <h2>Technical Implementation Details</h2>
            <p>The ETF data management infrastructure combines multiple technologies and design patterns to create a robust, scalable platform for ETF data processing, analysis, and reporting.</p>
            
            <h3>Data Architecture</h3>
            <div class="card">
                <div class="card-header">
                    <h4>ETF Data Model</h4>
                </div>
                <div class="card-body">
                    <p>The ETF data model is designed to capture the unique characteristics of ETFs while maintaining compatibility with existing investment data structures:</p>
                    
                    <div class="row">
                        <div class="col">
                            <h5>Core Entities</h5>
                            <ul>
                                <li><strong>ETF Instrument:</strong> Basic reference data including ticker, CUSIP, name, and fund characteristics.</li>
                                <li><strong>Trading Data:</strong> Price, volume, and execution venue information from secondary market activity.</li>
                                <li><strong>Creation/Redemption:</strong> Primary market activity between authorized participants and the fund.</li>
                                <li><strong>Holdings:</strong> Underlying securities comprising the ETF portfolio.</li>
                                <li><strong>Premium/Discount:</strong> Relationship between market price and NAV over time.</li>
                                <li><strong>Performance:</strong> Historical returns and benchmark comparisons.</li>
                            </ul>
                        </div>
                        <div class="col">
                            <h5>Key Relationships</h5>
                            <ul>
                                <li><strong>ETF to Holdings:</strong> Many-to-many relationship capturing portfolio composition.</li>
                                <li><strong>ETF to APs:</strong> Many-to-many relationship for creation/redemption activity.</li>
                                <li><strong>Trading to Venues:</strong> Many-to-many relationship for execution tracking.</li>
                                <li><strong>NAV to Market Price:</strong> One-to-many relationship for premium/discount analysis.</li>
                                <li><strong>ETF to Benchmark:</strong> Many-to-many relationship for performance comparison.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'><rect width='800' height='400' fill='%23f5f5f5'/><rect x='300' y='50' width='200' height='80' rx='5' fill='%23003da5'/><text x='400' y='95' text-anchor='middle' font-family='Arial' font-size='16' fill='white'>ETF Instrument</text><rect x='100' y='200' width='150' height='80' rx='5' fill='%230077c8'/><text x='175' y='245' text-anchor='middle' font-family='Arial' font-size='16' fill='white'>Trading Data</text><rect x='300' y='200' width='200' height='80' rx='5' fill='%230077c8'/><text x='400' y='245' text-anchor='middle' font-family='Arial' font-size='16' fill='white'>Creation/Redemption</text><rect x='550' y='200' width='150' height='80' rx='5' fill='%230077c8'/><text x='625' y='245' text-anchor='middle' font-family='Arial' font-size='16' fill='white'>Holdings</text><rect x='300' y='320' width='200' height='60' rx='5' fill='%2300a9e0'/><text x='400' y='355' text-anchor='middle' font-family='Arial' font-size='16' fill='white'>Premium/Discount</text><path d='M 400 130 L 400 200' stroke='%23666666' stroke-width='2'/><path d='M 400 130 L 175 200' stroke='%23666666' stroke-width='2'/><path d='M 400 130 L 625 200' stroke='%23666666' stroke-width='2'/><path d='M 400 280 L 400 320' stroke='%23666666' stroke-width='2'/><path d='M 175 280 L 390 320' stroke='%23666666' stroke-width='2' stroke-dasharray='5,5'/></svg>" alt="ETF Data Model" style="width:100%; max-width:700px; display:block; margin:1.5rem auto;">
                </div>
            </div>
            
            <h3>Integration Framework</h3>
            <div class="card">
                <div class="card-header">
                    <h4>Data Integration Architecture</h4>
                </div>
                <div class="card-body">
                    <p>The ETF data integration framework is designed to handle diverse data sources with different formats, delivery mechanisms, and update frequencies.</p>
                    
                    <h5>Key Components:</h5>
                    <ul>
                        <li><strong>Source Adapters:</strong> Specialized connectors for each data provider, handling authentication, extraction, and initial validation.</li>
                        <li><strong>Transformation Pipeline:</strong> Processes to convert source-specific formats into the canonical data model.</li>
                        <li><strong>Data Quality Service:</strong> Validation rules enforcing completeness, accuracy, and consistency across sources.</li>
                        <li><strong>Master Data Management:</strong> Repository for reference data with versioning and lineage tracking.</li>
                        <li><strong>Data Lake:</strong> Raw storage of source data for auditability and reprocessing capabilities.</li>
                        <li><strong>Data Warehouse:</strong> Structured storage of processed data optimized for analytics and reporting.</li>
                        <li><strong>API Layer:</strong> Service interfaces for downstream systems to access ETF data.</li>
                    </ul>
                    
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'><rect width='800' height='400' fill='%23f5f5f5'/><rect x='50' y='50' width='100' height='50' rx='5' fill='%23003da5'/><text x='100' y='80' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>Exchange Data</text><rect x='50' y='110' width='100' height='50' rx='5' fill='%23003da5'/><text x='100' y='140' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>AP Data</text><rect x='50' y='170' width='100' height='50' rx='5' fill='%23003da5'/><text x='100' y='200' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>Bloomberg</text><rect x='50' y='230' width='100' height='50' rx='5' fill='%23003da5'/><text x='100' y='260' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>Fund Accounting</text><rect x='50' y='290' width='100' height='50' rx='5' fill='%23003da5'/><text x='100' y='320' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>ICE Data</text><rect x='200' y='170' width='100' height='100' rx='5' fill='%230077c8'/><text x='250' y='205' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>Source</text><text x='250' y='225' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>Adapters</text><path d='M 150 75 L 200 170' stroke='%23666666' stroke-width='2'/><path d='M 150 135 L 200 180' stroke='%23666666' stroke-width='2'/><path d='M 150 195 L 200 195' stroke='%23666666' stroke-width='2'/><path d='M 150 255 L 200 210' stroke='%23666666' stroke-width='2'/><path d='M 150 315 L 200 220' stroke='%23666666' stroke-width='2'/><rect x='350' y='170' width='100' height='100' rx='5' fill='%230077c8'/><text x='400' y='195' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>Transform</text><text x='400' y='215' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>Pipeline</text><path d='M 300 220 L 350 220' stroke='%23666666' stroke-width='2'/><rect x='350' y='50' width='100' height='50' rx='5' fill='%230077c8'/><text x='400' y='80' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>Data Quality</text><path d='M 400 170 L 400 100' stroke='%23666666' stroke-width='2'/><rect x='500' y='50' width='100' height='50' rx='5' fill='%230077c8'/><text x='550' y='70' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>Master Data</text><text x='550' y='90' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>Management</text><path d='M 450 75 L 500 75' stroke='%23666666' stroke-width='2'/><path d='M 550 100 L 550 170' stroke='%23666666' stroke-width='2'/><rect x='500' y='170' width='100' height='50' rx='5' fill='%2300a9e0'/><text x='550' y='200' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>Data Lake</text><path d='M 450 195 L 500 195' stroke='%23666666' stroke-width='2'/><rect x='500' y='230' width='100' height='50' rx='5' fill='%2300a9e0'/><text x='550' y='260' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>Data Warehouse</text><path d='M 450 220 L 500 255' stroke='%23666666' stroke-width='2'/><rect x='650' y='170' width='100' height='100' rx='5' fill='%2328a745'/><text x='700' y='210' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>API Layer</text><path d='M 600 195 L 650 210' stroke='%23666666' stroke-width='2'/><path d='M 600 255 L 650 220' stroke='%23666666' stroke-width='2'/><rect x='650' y='50' width='100' height='50' rx='5' fill='%2328a745'/><text x='700' y='80' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>BI Tools</text><path d='M 700 170 L 700 100' stroke='%23666666' stroke-width='2'/><rect x='650' y='290' width='100' height='50' rx='5' fill='%2328a745'/><text x='700' y='320' text-anchor='middle' font-family='Arial' font-size='12' fill='white'>Downstream</text><path d='M 700 270 L 700 290' stroke='%23666666' stroke-width='2'/></svg>" alt="ETF Data Integration Architecture" style="width:100%; max-width:700px; display:block; margin:1.5rem auto;">
                </div>
            </div>
            
            <h3>Validation Framework</h3>
            <div class="expandable-trigger">Data Quality Rules <span class="toggle-icon">+</span></div>
            <div class="expandable-content">
                <div class="card">
                    <div class="card-body">
                        <p>The validation framework implements multiple layers of checks to ensure data quality:</p>
                        
                        <h5>Validation Layers:</h5>
                        <ol>
                            <li><strong>Syntactic Validation:</strong> Ensures data adheres to expected formats, types, and ranges.</li>
                            <li><strong>Semantic Validation:</strong> Verifies data meets business rules and logical constraints.</li>
                            <li><strong>Cross-Source Validation:</strong> Confirms consistency across different data providers.</li>
                            <li><strong>Temporal Validation:</strong> Checks historical consistency and identifies anomalous changes.</li>
                            <li><strong>Reference Data Validation:</strong> Ensures alignment with master reference data.</li>
                        </ol>
                        
                        <h5>Implementation Approach:</h5>
                        <ul>
                            <li><strong>Rule Engine:</strong> Configurable validation rules that can be updated without code changes.</li>
                            <li><strong>Exception Handling:</strong> Processes for managing validation failures, including severity classification and resolution workflows.</li>
                            <li><strong>Quality Metrics:</strong> Measurements of data quality across dimensions (completeness, accuracy, timeliness).</li>
                            <li><strong>Continuous Improvement:</strong> Feedback loop for refining validation rules based on operational experience.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <h3>Performance Optimizations</h3>
            <div class="expandable-trigger">Processing Efficiency <span class="toggle-icon">+</span></div>
            <div class="expandable-content">
                <div class="card">
                    <div class="card-body">
                        <p>The ETF data platform incorporates several performance optimizations to handle high-volume data processing efficiently:</p>
                        
                        <h5>Key Optimizations:</h5>
                        <ul>
                            <li><strong>Parallel Processing:</strong> Distributed computation for data transformation and validation tasks.</li>
                            <li><strong>Incremental Processing:</strong> Processing only changed data to reduce computational load.</li>
                            <li><strong>Caching:</strong> Strategic caching of frequently accessed data to reduce database load.</li>
                            <li><strong>Query Optimization:</strong> Tuned database queries with appropriate indexing for analytics workloads.</li>
                            <li><strong>Data Partitioning:</strong> Strategic data partitioning for improved query performance.</li>
                            <li><strong>Resource Scaling:</strong> Dynamic allocation of computing resources based on workload demands.</li>
                        </ul>
                        
                        <h5>Results:</h5>
                        <ul>
                            <li>Reduced processing time for daily ETF data from 4 hours to 20 minutes</li>
                            <li>Achieved near real-time updates for critical trading metrics</li>
                            <li>Improved query response time for analytics by 85%</li>
                            <li>Enabled intraday reprocessing capabilities for data corrections</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <script>
        // Tab navigation
        document.addEventListener('DOMContentLoaded', function() {
            // Tab functionality
            const tabButtons = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const tabId = button.getAttribute('data-tab');
                    
                    // Hide all tab contents
                    tabContents.forEach(content => {
                        content.classList.remove('active');
                    });
                    
                    // Deactivate all buttons
                    tabButtons.forEach(btn => {
                        btn.classList.remove('active');
                    });
                    
                    // Activate the clicked button and show the corresponding content
                    button.classList.add('active');
                    document.getElementById(tabId).classList.add('active');
                });
            });
            
            // Expandable content
            const expandableTriggers = document.querySelectorAll('.expandable-trigger');
            
            expandableTriggers.forEach(trigger => {
                trigger.addEventListener('click', () => {
                    trigger.classList.toggle('expanded');
                    const content = trigger.nextElementSibling;
                    content.classList.toggle('expanded');
                });
            });
            
            // Product filter functionality
            const assetClassFilter = document.getElementById('asset-class-filter');
            const launchDateFilter = document.getElementById('launch-date-filter');
            const sortBy = document.getElementById('sort-by');
            const productItems = document.querySelectorAll('.product-item');
            
            function filterProducts() {
                const assetClass = assetClassFilter.value;
                const launchDate = launchDateFilter.value;
                
                productItems.forEach(item => {
                    const itemAssetClass = item.getAttribute('data-asset-class');
                    const itemLaunchDate = item.getAttribute('data-launch-date');
                    
                    const assetClassMatch = assetClass === 'all' || itemAssetClass === assetClass;
                    const launchDateMatch = launchDate === 'all' || itemLaunchDate === launchDate;
                    
                    if (assetClassMatch && launchDateMatch) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
            
            function sortProducts() {
                const grid = document.querySelector('.product-grid');
                const items = Array.from(grid.querySelectorAll('.product-item'));
                
                items.sort((a, b) => {
                    if (sortBy.value === 'name') {
                        const nameA = a.querySelector('h4').textContent.toLowerCase();
                        const nameB = b.querySelector('h4').textContent.toLowerCase();
                        return nameA.localeCompare(nameB);
                    } else if (sortBy.value === 'aum') {
                        const aumA = parseInt(a.getAttribute('data-aum'));
                        const aumB = parseInt(b.getAttribute('data-aum'));
                        return aumB - aumA; // Descending order
                    } else if (sortBy.value === 'launch-date') {
                        const dateA = a.getAttribute('data-launch-date');
                        const dateB = b.getAttribute('data-launch-date');
                        return dateA.localeCompare(dateB);
                    }
                    return 0;
                });
                
                // Remove all items
                items.forEach(item => {
                    grid.removeChild(item);
                });
                
                // Add sorted items
                items.forEach(item => {
                    grid.appendChild(item);
                });
            }
            
            assetClassFilter.addEventListener('change', filterProducts);
            launchDateFilter.addEventListener('change', filterProducts);
            sortBy.addEventListener('change', sortProducts);
            
            // Initialize progress bars with animation
            const progressBars = document.querySelectorAll('.progress-bar');
            
            function animateProgressBars() {
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 300);
                });
            }
            
            // Lazy loading for metrics
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateProgressBars();
                        observer.disconnect();
                    }
                });
            });
            
            // Observe the metrics section
            const metricsSection = document.querySelector('.metric-card');
            if (metricsSection) {
                observer.observe(metricsSection);
            }
        });
    </script>
</body>
</html>
