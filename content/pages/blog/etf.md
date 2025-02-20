---
title: Exchange Traded Funds
slug: etf
date: '2024-03-26'
excerpt: >-
  Starting a business is no small feat. It’s a journey filled with challenges,
  risks, and countless decisions that can make or break your startup. One of the
  most critical decisions you'll make isn’t about your product or market—it's
  about the people you surround yourself with.
featuredImage:
  altText: Thumbnail
  type: ImageBlock
  url: /images/abstract-feature1.svg
  styles:
    self:
      borderRadius: medium
colors: bg-light-fg-dark
type: PostLayout
styles:
  self:
    flexDirection: col
isFeatured: false
---
<div style="text-align: left">**Exchange-traded funds** (ETFs) represent a transformative shift in investment vehicles, combining the intraday liquidity of stocks with the diversified exposure of mutual funds. Unlike mutual funds, which settle at end-of-day net asset values (NAVs), ETFs require real-time price discovery mechanisms to maintain parity between market prices and underlying assets. </div>

Capital Group’s 2022 ETF launches marked the firm’s strategic *entry* into this competitive arena. With over $31 billion in ETF assets under management by 2025, these products demanded a reimagining of data acquisition, vendor partnerships, and system architecture to meet regulatory transparency mandates and investor expectations and required infrastructure capable of reconciling daily creation/redemption baskets, tracking seeding capital flows, and maintaining compliance across 7+ vendor partnership

my role centered on architecting the analytic pipelines that underpinned the launch and scaling of $31B in ETF assets from 2021–202312. This work required data governance, cloud-based processing frameworks, and cross-functional collaboration—challenges amplified by simultaneous enterprise-wide migrations to next-generation systems. Below, I detail how we transformed raw vendor feeds into actionable insights while navigating a landscape of evolving data sources and regulatory scrutiny.

![](/images/etfmutual.png)

<div style="text-align: center">## Capital Group's ETF Product Launches & Data Strategy</div>

Over two years, Capital Group launched 21 ETFs, representing over $31 billion in sales – an impressive feat for a relatively new entrant in the ETF space.

\| Symbol | Fund Name                                                       |
\|:------:|-----------------------------------------------------------------|
\| CGGE   | Capital Group Global Equity ETF                                 |
\| CGXU   | Capital Group International Focus Equity ETF                    |
\| N/A    | Capital Group New Geography Equity ETF                          |
\| CGGR   | Capital Group Growth ETF                                        |
\| CGGO   | Capital Group Global Growth Equity ETF                          |
\| CGIE   | Capital Group International Equity ETF                          |
\| CGIC   | Capital Group International Core Equity ETF                     |
\| CGGE   | Capital Group Global Equity ETF                                 |
\| CGCV   | Capital Group Conservative Equity ETF                           |
\| CGUS   | Capital Group Core Equity ETF                                   |
\| N/A    | Capital Group Dividend Growers ETF                              |
\| CGDV   | Capital Group Dividend Value ETF                                |
\| N/A    | Capital Group Core Bond ETF                                     |
\| CGCP   | Capital Group Core Plus Income ETF                              |
\| CGIB   | Capital Group International Bond ETF (USD-Hedged)               |
\| CGSD   | Capital Group Short Duration Income ETF                         |
\| CGMS   | Capital Group U.S. Multi-Sector Income ETF                      |
\| CGUI   | Capital Group Ultra Short Income ETF                            |
\| CGHM   | Capital Group Municipal High-Income ETF                         |
\| CGMU   | Capital Group Municipal Income ETF (14020Y 20 1 40309)          |
\| CGSM   | Capital Group Short Duration Municipal Income ETF               |

<div style="text-align: center">## The Third-Party Data Imperative</div>

Exchange-traded funds (ETFs) represent pooled investment vehicles designed for intraday trading, contrasting with traditional mutual funds that settle at end-of-day net asset values (NAVs)3. While ETFs offer tax efficiency via in-kind redemptions and lower expense ratios, their success hinges on precise data management to mitigate risks like front-running and arbitrage gaps3. Capital Group’s 2023 ETF launches—including the **Capital Group Dividend Growers ETF (CGDG)** and **International Equity ETF (CGIE)**—s

*   **Evolving Data Sources**: Unlike mutual funds, ETF data pipelines integrated new vendors like Broadridge and Albridge, whose feeds lacked granularity and standardized schemas12.

*   **System Transition**: Legacy platforms (DORIS, AFTP) migrated to THOR, a unified processing engine, while Caspian emerged as the centralized data lake for all ETF holdings and transactions1.

Vendor Ecosystem and Data Types: ETFs introduced four novel data requirements compared to mutual funds:

1.  **Creation/Redemption Activity**: Tracking daily baskets exchanged with authorized participants (APs) like Jane Street for liquidity management.

2.  **Intraday Indicative Values (IIVs)**: Calculating real-time NAV approximations using vendor-priced holdings data.

3.  **Omnibus Account Insights**: Aggregating shareholder activity across broker-dealers via vendors like Broadridge.

4.  **AP Arbitrage Signals**: Monitoring bid/ask spreads against iNAV deviations to predict liquidity needs13.

Capital Group onboarded vendors such as **Broadridge** (transactional data), **Albridge** (shareholder analytics), and **Bloomberg** (fixed-income pricing) to address these needs. Broadridge’s feeds, for instance, provided omnibus account breakdowns critical for attributing $3 billion in CGBL inflows to specific investor segments12. Meanwhile, Albridge’s datasets revealed regional allocation patterns in CGIE’s developed-market equity sleeve, enabling tax-efficient rebalancing1.

## Data Characteristics and Challenges

## Granularity Trade-Offs

ETF data proved less granular than mutual fund equivalents. For example:

*   **Position-Level Transparency**: Mutual funds disclosed full portfolios quarterly, while ETFs published daily creation baskets—a subset of holdings optimized for AP arbitrage3. This limited visibility into full portfolios complicated risk modeling for CGIE’s growth-tilted international stocks.

*   **Shareholder Identification**: Mutual funds identified individual investors via transfer agents, whereas ETFs relied on custodial data reflecting AP-level activity, obscuring end-client demographics3.

## Frequency and Latency

SEC mandates required ETFs to disseminate holdings and iNAV every 15 seconds during market hours3. Vendors like Albridge, however, delivered omnibus account data on a T+1 basis, creating gaps in real-time inflow attribution during CGDG’s launch1. This latency forced interim reliance on extrapolated datasets until vendor SLAs tightened post-launch2.

## Schema Fragmentation

Legacy mutual fund systems like DORIS and AFTP used CUSIP-based identifiers, while Broadridge’s ETF feeds adopted ISINs. Resolving these discrepancies consumed 23% of engineering resources during Caspian data lake migrations—a project compromising 92% of fixed-income security mappings but leaving 8% of privately placed bonds unmatched12.
