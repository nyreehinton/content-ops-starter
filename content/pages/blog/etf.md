---
title: Building the Analytic Foundation for Capital Group's ETF Ecosystem
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
seo:
  metaTitle: Surround Yourself With the Right People
  metaDescription: You can add the excerpt and main keywords of your blog post here.
  socialImage: /images/abstract-feature1.svg
  type: Seo
colors: bg-light-fg-dark
type: PostLayout
styles:
  self:
    flexDirection: col
isFeatured: false
---
Capital Group's entry into the exchange-traded fund (ETF) market marked a pivotal shift in its product strategy, blending its legacy expertise in active management with the operational demands of ETF innovation13. As ETFs trade intraday-like stocks but require robust data infrastructure to support pricing accuracy, tax efficiency, and compliance, my role centered on architecting the analytic pipelines that underpinned the launch and scaling of $31B in ETF assets from 2021–202312. 

This work required data governance, cloud-based processing frameworks, and cross-functional collaboration—challenges amplified by simultaneous enterprise-wide migrations to next-generation systems. 

Below, I detail how we transformed raw vendor feeds into actionable insights while navigating a landscape of evolving data sources and regulatory scrutiny.

## Exchange Traded Funds 

Exchange-traded funds (ETFs) represent pooled investment vehicles designed for intraday trading, contrasting with traditional mutual funds that settle at end-of-day net asset values (NAVs)3. While ETFs offer tax efficiency via in-kind redemptions and lower expense ratios, their success hinges on precise data management to mitigate risks like front-running and arbitrage gaps3. Capital Group’s 2023 ETF launches—including the **Capital Group Dividend Growers ETF (CGDG)** and **International Equity ETF (CGIE)**—required infrastructure capable of reconciling daily creation/redemption baskets, tracking seeding capital flows, and maintaining compliance across 7+ vendor partnerships

*   **Evolving Data Sources**: Unlike mutual funds, ETF data pipelines integrated new vendors like Broadridge and Albridge, whose feeds lacked granularity and standardized schemas12.

*   **System Transition**: Legacy platforms (DORIS, AFTP) migrated to THOR, a unified processing engine, while Caspian emerged as the centralized data lake for all ETF holdings and transactions1.

**Regulatory Dynamics**: SEC mandates for daily transparency necessitated real-time NAV calculations and intraday indicative values (IIVs) to align market prices with underlying assets3.

## Data Governance Framework Design

Central to my role was establishing a governance model that ensured data accuracy across liquidity provisioning, securities lending, and tax reporting. Key components included:

*   **Automated Seeding Money Monitoring**:
    ETF launches require seed capital to initiate trading, but discrepancies in these transactions risked regulatory penalties. I designed an automated tracker that cross-referenced treasury reports against custodian data, flagging $170M in unreported seed transactions during Wave 3 ETF launches12. This tool reduced manual reconciliation efforts by 85% and became a cornerstone of Capital’s ETF compliance toolkit.

**RACI Matrix Implementation**:
To clarify ownership across 14 stakeholder groups (IT, Legal, Portfolio Management), I led the development of a RACI (Responsible, Accountable, Consulted, Informed) framework. This model resolved bottlenecks in data ingestion workflows, particularly during the integration of Broadridge’s transactional data into THOR’s processing logic



## Databricks Pipeline Optimization

The ETF analytics backbone relied on Apache Spark and Python workflows within Databricks, where I achieved:

*   **ETL Acceleration**:
    By optimizing Parquet file partitioning and implementing dynamic predicate pushdowns, we reduced ETF position reconciliation times from 6 hours to 1.8 hours (70% faster). This enabled real-time visibility into intraday creation/redemption activities, critical for AP (Authorized Participant) communications13.

**Vendor Integrations**:
Nine data sources—including Albridge’s shareholder activity feeds and Bloomberg’s fixed-income pricing—were normalized into a unified schema. This allowed Portfolio Managers to attribute $3B in sales inflows to specific buyer segments, supporting targeted go-to-market strategies for CGBL (Core Balanced ETF) and CGSM (Short Duration Muni ETF)2.

In the early stages of a startup, every team member plays a crucial role. The right people bring not only their skills but also their energy, attitude, and resilience. They’re the ones who will stick with you through thick and thin, help navigate obstacles, and push the company toward success.
