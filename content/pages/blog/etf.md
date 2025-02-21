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



![](/images/Screenshot%202025-02-20%20at%204.06.12%E2%80%AFPM.png)

***

<div style="text-align: center">## ETF Processing: Primary and Secondary Markets</div>

### Primary Market

*   **Creation Process**:
    *   **Authorized Participants (APs)**, often large financial institutions, work directly with the ETF issuer to create new ETF shares.
    *   APs deliver a "creation basket," which consists of the securities underlying the ETF (or equivalent cash). In return, they receive an equivalent number of ETF shares at the net asset value (NAV).
*   **Redemption Process**:
    *   APs redeem ETF shares by returning them to the issuer. In exchange, they receive the underlying securities or cash at the NAV.
    *   This mechanism ensures the ETF’s supply matches market demand.

### Secondary Market

*   **Investors Trading ETF Shares**:
    *   Retail and institutional investors buy and sell ETF shares in the secondary market through exchanges via brokers, similar to trading individual stocks.
    *   Prices on the secondary market are determined by supply and demand, fluctuating throughout the trading day.

### Arbitrage Mechanism

*   **Role of APs and Market Makers**:
    *   APs and market makers use arbitrage to ensure the ETF's market price aligns with the NAV.
    *   If the ETF trades above its NAV, APs create shares to increase supply, lowering the price. If it trades below, they redeem shares to decrease supply, raising the price.

This dual-market structure ensures liquidity, efficient pricing, and a seamless investment vehicle for a wide range of participants.

![](/images/Primary%20Market.webp)

***

<div style="text-align: center">## Capital Group's ETF Product Launches & Data Strategy</div>

The launch of Capital Group's first suite of Exchange-Traded Funds (ETFs) marked a monumental shift in the company’s product strategy, uniting its legacy of active management with the operational demands of ETF innovation. These products were engineered to deliver the benefits of intraday liquidity, transparency, and tax efficiency while maintaining the firm’s rigorous, research-driven investment strategies. The ETF offerings, which included the **Capital Group Dividend Growers ETF (CGDG)** and **Capital Group International Equity ETF (CGIE)**, aimed to provide tailored solutions for investors seeking growth, income, and diversification across equity and fixed-income markets.

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

Unlike mutual funds, ETFs presented a unique set of operational challenges that required building an entirely new infrastructure. The integration of third-party vendor data, such as **Broadridge** and **Fidelity**, was critical to fill the gap left by the lack of a transfer agent—a core feature of mutual fund operations. These vendors provided key data on shareholder activity, fund flows, and market performance, which was then transformed and optimized through custom-developed data pipelines. This infrastructure ensured that Capital Group could provide accurate sales crediting, compliance reporting, and actionable insights to stakeholders.

This initiative not only laid the groundwork for Capital Group’s successful entry into the competitive ETF market but also highlighted the importance of a robust data strategy. My role was instrumental in bridging these operational and data gaps, enabling the seamless launch and ongoing scalability of these innovative products.