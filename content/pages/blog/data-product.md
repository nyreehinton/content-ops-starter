---
title: What's a Data Product?
slug: data-product
date: '2025-01-02'
excerpt: >-
  Sit ratione eligendi et quis distinctio et maiores accusantium aut accusamus
  facere sit repellat quidem qui alias nostrum et earum enim. Cum quis sint eos
  dolor quas ad odit ipsum qui quia eius.
featuredImage:
  url: /images/abstract-feature2.svg
  altText: Thumbnail
  type: ImageBlock
  styles:
    self:
      borderRadius: medium
isFeatured: true
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: row
type: PostLayout
author: content/data/person1.json
---
A data product is a curated asset that packages information for a specific business purpose, solving distinct needs through analytics, reporting, or other decision-support tools. Unlike a simple raw dataset, a data product has clear ownership, repeatable processes, and governance that ensure its ongoing quality and relevance. At Capital Group, launching a robust data product for Exchange Traded Funds (ETFs) required integrating various new and existing data sources into a single, cohesive pipeline. This unified approach enabled stakeholders across the organization—from sales and marketing teams to finance and compliance—to derive trustworthy insights from a centralized source.


## The Third-Party Data Imperative

In the context of ETF analytics, acquiring third-party data is critical for tapping into information that does not originate internally. For instance, we partnered with industry providers such as Broadridge, Janney, Fidelity, and State Street to capture transaction-level or aggregated information relevant to ETF performance and investor behavior. The type of data ranged from granular trade records to daily net asset values (NAVs) to monthly distribution files. Different vendors delivered these feeds at varying frequencies (daily, monthly, or even ad-hoc), reflecting each provider’s standard cadence and their role in the ETF ecosystem. By carefully negotiating the data terms and formats up front, we ensured that each feed integrated smoothly into the Capital Group data architecture.


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
