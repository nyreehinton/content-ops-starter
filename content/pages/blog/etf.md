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

`subgraph Secondary Market
A[Investor A] -- Buys/Sells Shares --> B((Broker/Exchange))
C[Investor B] -- Buys/Sells Shares --> B
end`

`subgraph Primary Market - Creation/Redemption
B -- Creation/Redemption Order --> D[Authorized Participant (AP)]
D -- Delivers Basket of Securities --> E((ETF Sponsor/Fund))
E -- Issues/Redeems Creation Units --> D
D -- Sends ETF Shares --> B
end`
