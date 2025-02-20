---
title: Exchange Traded Funds
slug: etf
date: '2024-03-26'
excerpt: ''
colors: bg-light-fg-dark
type: PostLayout
styles:
  self:
    flexDirection: col
isFeatured: false
seo:
  type: Seo
  metaTitle: ETF
---
<div style="text-align: left">**Exchange-traded funds** (ETFs) represent a transformative shift in investment vehicles, combining the intraday liquidity of stocks with the diversified exposure of mutual funds. Unlike mutual funds, which settle at end-of-day net asset values (NAVs), ETFs require real-time price discovery mechanisms to maintain parity between market prices and underlying assets. </div>

Capital Group’s 2022 ETF launches marked the firm’s strategic *entry* into this competitive arena. With over $31 billion in ETF assets under management by 2025, these products demanded a reimagining of data acquisition, vendor partnerships, and system architecture to meet regulatory transparency mandates and investor expectations and required infrastructure capable of reconciling daily creation/redemption baskets, tracking seeding capital flows, and maintaining compliance across 7+ vendor partnership

my role centered on architecting the analytic pipelines that underpinned the launch and scaling of $31B in ETF assets from 2021–202312. This work required data governance, cloud-based processing frameworks, and cross-functional collaboration—challenges amplified by simultaneous enterprise-wide migrations to next-generation systems. Below, I detail how we transformed raw vendor feeds into actionable insights while navigating a landscape of evolving data sources and regulatory scrutiny.

![](/images/etfmutual.png)

<div style="text-align: center">## Capital Group's ETF Product Launches & Data Strategy</div>

Over two years, Capital Group launched 21 ETFs, representing over $31 billion in sales – an impressive feat for a relatively new entrant in the ETF space.

```
| Symbol | Fund Name                                                       |
|:------:|-----------------------------------------------------------------|
| CGGE   | Capital Group Global Equity ETF                                 |
| CGXU   | Capital Group International Focus Equity ETF                    |
| N/A    | Capital Group New Geography Equity ETF                          |
| CGGR   | Capital Group Growth ETF                                        |
| CGGO   | Capital Group Global Growth Equity ETF                          |
| CGIE   | Capital Group International Equity ETF                          |
| CGIC   | Capital Group International Core Equity ETF                     |
| CGGE   | Capital Group Global Equity ETF                                 |
| CGCV   | Capital Group Conservative Equity ETF                           |
| CGUS   | Capital Group Core Equity ETF                                   |
| N/A    | Capital Group Dividend Growers ETF                              |
| CGDV   | Capital Group Dividend Value ETF                                |
| N/A    | Capital Group Core Bond ETF                                     |
| CGCP   | Capital Group Core Plus Income ETF                              |
| CGIB   | Capital Group International Bond ETF (USD-Hedged)               |
| CGSD   | Capital Group Short Duration Income ETF                         |
| CGMS   | Capital Group U.S. Multi-Sector Income ETF                      |
| CGUI   | Capital Group Ultra Short Income ETF                            |
| CGHM   | Capital Group Municipal High-Income ETF                         |
| CGMU   | Capital Group Municipal Income ETF (14020Y 20 1 40309)          |
| CGSM   | Capital Group Short Duration Municipal Income ETF               |
```

<div style="text-align: center">## ETF Primary & Secondary Markets</div>

<div style="text-align: left">\*\*
Primary Market – Creation and Redemption\*\*
\------------------------------------------The **Primary Market** is where new ETF shares are created or redeemed. This process involves direct interactions between the **ETF issuer**, **Authorized Participants (APs)**, and the underlying securities of the fund:1.  **Authorized Participants (APs)**:
APs are institutional entities, such as banks or market makers, authorized to interact directly with the ETF issuer. They act as intermediaries enabling the creation and redemption of ETF shares.</div>

2.  **Creation Process**:

    *   When demand for an ETF increases, APs acquire a "creation basket" of securities (or cash) that mirrors the ETF's holdings.

    *   They deliver this basket to the ETF issuer in exchange for new ETF shares, which are then sold to the market.

3.  **Redemption Process**:

    *   Conversely, if demand for ETF shares decreases, APs return ETF shares to the issuer in exchange for an equivalent basket of underlying securities (or cash).## **Secondary Market – Trading Among Investors**The **Secondary Market** is where ETF shares are actively bought and sold by retail and institutional investors on stock exchanges, similar to individual stocks. Transactions in the Secondary Market do not affect the ETF's underlying assets.1.  **Market Makers**:
        Market makers help ensure liquidity in the Secondary Market. They maintain bid-ask spreads by buying and selling ETF shares to meet supply and demand imbalances.

4.  **Institutional and Retail Clients**:

    *   **Institutional Clients**: Large-scale investors, such as pension funds, hedge funds, or asset managers, trade ETFs for portfolio diversification or hedging purposes.

    *   **Retail Clients**: Individual investors buy ETFs for accessibility to diversified asset classes.**Benefits of the Secondary Market**:\*   Intraday Trading: Investors can trade ETFs throughout the day at market-determined prices.

*   Liquidity: High trading volume ensures that buyers and sellers can easily execute trades.

![](/images/Primary%20Market.webp)
