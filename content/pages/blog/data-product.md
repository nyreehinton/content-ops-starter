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
---
<div style="text-align: center">### A High-Level Overview</div>

A **data product** is a curated asset that packages information for a specific business purpose, solving distinct needs through analytics, reporting, or other decision-support tools. Unlike a simple raw dataset, a data product has **clear ownership, repeatable processes, and governance** that ensure its ongoing quality and relevance. At Capital Group, launching a robust data product for Exchange Traded Funds (ETFs) required integrating various new and existing data sources into a single, cohesive pipeline. This unified approach enabled stakeholders across the organization—from sales and marketing teams to finance and compliance—to derive trustworthy insights from a centralized source.

<div style="text-align: center">### The Fundamental Issue: ETFs Without a Transfer Agent</div>

One of the most significant challenges ETFs present for firms like Capital Group compared to traditional mutual funds is the lack of a **transfer agent**. Mutual funds rely on a transfer agent to directly record individual shareholder transactions, providing granular, real-time data. This data is the backbone for reporting, analytics, and critical processes such as **sales compensation**.

For ETFs, however, there is no transfer agent; instead, shares are traded on the secondary market through exchanges and facilitated by **Authorized Participants (APs)** in the primary market. As a result:

*   **Capital Group does not receive direct, granular data on shareholder activity.**
*   Instead, ETF shareholder activity is processed and aggregated by custodians, clearinghouses, and third-party data vendors. These intermediaries provide insight into sales and ownership, but the information is delayed, incomplete, and often aggregated at high levels (e.g., at the office or omnibus account level).

<div style="text-align: center">### Why This Matters</div>

This lack of direct data creates operational and strategic challenges:

*   **Sales Crediting**: Without granular data, compensating sales teams for ETF inflows accurately becomes difficult. For mutual funds, each transaction can be traced to an individual shareholder, while ETFs require reverse-engineering aggregated data to determine flows.
*   **Reporting**: High-level data makes it difficult to provide detailed analytics to stakeholders across sales, marketing, and product management.
*   **Analytics and Decision-Making**: Granularity is essential for understanding fund dynamics, identifying key channels driving flows, and adjusting strategies accordingly.


## Closing the Gap: Building the ETF Data Product  

### Strategic Approach to Solve the Problem  

1. **Vendor Onboarding for Third-Party Data Acquisition**  
   To address the gap caused by the absence of a transfer agent, we established partnerships with external data providers like Broadridge, Fidelity, and others. These vendors provided aggregated data on shareholder activity, though with limitations in granularity and frequency.  
   - **Examples of Data Sources**:  
     - **Broadridge**: Monthly data with office-level granularity, providing visibility into ~95% of CG ETF transactions.  
     - **Fidelity**: Daily account-level transaction data, offering a detailed view but for a subset of accounts.  
     - **State Street**: Daily NAV and outstanding share data for accounting and reconciliation purposes.  

2. **Data Transformation and Normalization**  
   The raw data from vendors arrived in disparate formats and varied levels of granularity. To build a usable data product, we:  
   - **Developed Transformation Logic**: Using Python and SQL, I created transformation scripts to normalize data across different vendors, ensuring compatibility with downstream systems.  
   - **Standardized Schema**: Mapped critical fields (e.g., account type, transaction types) into a unified schema, enabling consistent reporting and analytics.  

3. **Overcoming Omnibus Account Challenges**  
   Many vendors, such as Broadridge, provided shareholder activity data at the **office level** rather than the individual advisor or account level. As a result, key data points like the **line of business**, **advisor name**, or specific account types (e.g., IRA, 529) were missing.  
   **Solutions Implemented**:  
   - Extrapolated missing details using available patterns in other data feeds (e.g., matching CUSIPs to transaction flows in Fidelity files).  
   - Designed validation processes to flag and fill data gaps where possible.  

4. **Integration into Capital Group Systems**  
   We integrated these transformed, standardized datasets into Capital Group’s enterprise platforms, such as **THOR** (processing platform), **Caspian** (data lake), and **LASR** (reporting system).  
   - Established automated pipelines to process ETF sales and assets consistently across all systems.  
   - Created backfill solutions for legacy data gaps, ensuring continuity in reporting.  

---

### My Impact: Designing and Delivering a Comprehensive ETF Data Product  

As the Data Product Manager, my role was to lead the development, standardization, and operationalization of the ETF data pipeline, turning disparate and incomplete vendor data into a cohesive data product. Key contributions include:  

1. **End-to-End Pipeline Development**  
   - Designed and managed the **ETF data ingestion pipeline**, ensuring consistent flow from acquisition to transformation to reporting.  
   - Implemented quality control processes to validate incoming data (e.g., cross-referencing Broadridge files with State Street’s NAV data to identify discrepancies).  

2. **Advanced Analytics and Reporting Enablement**  
   - Delivered reliable data to downstream systems, enabling high-impact dashboards in Tableau and Power BI for internal stakeholders.  
   - Empowered sales teams with actionable insights by enriching vendor data, such as identifying regional trends in CGDG inflows.  

3. **Cross-Functional Collaboration**  
   - Partnered with Sales Compensation, IT, and Product teams to ensure that the data product met all stakeholder requirements.  
   - Escalated recurring vendor issues (e.g., Broadridge file latency) to negotiate better SLAs and improve data delivery standards.  

4. **Impactful Metrics**  
   - **\$6.3B** in transactions reconciled using Broadridge data, enabling accurate day-to-day sales crediting for the sales force.  
   - **50% Reduction in Manual Processes**: Leveraged automation to eliminate manual validation steps, saving significant time for business teams.  

<div style="text-align: center">### Characteristics of ETF Data</div>

ETF data differs significantly from that of mutual funds, introducing new challenges:

*   **Granularity**: ETF data is often at an aggregate or basket level (e.g., creation/redemption activity), whereas mutual funds provide position-level transparency.
*   **Frequency**: ETF data flows occur intraday or daily to support real-time operations, compared to mutual funds' less frequent reporting cadence.
*   **Standardization**: Each vendor delivers data in distinct formats, requiring extensive normalization before integration into analytics workflows.

These differences demanded innovative approaches to ingestion and transformation, as existing mutual fund systems were not equipped for the speed and complexity of ETF data.

***

<div style="text-align: center">## Challenges in Acquiring and Managing Third-Party Data</div>

1.  **Vendor Schema Mismatches**:
    *   Different vendors, such as Broadridge and Albridge, delivered data in non-standardized formats (e.g., CSV, JSON) with inconsistent column structures, requiring transformation and mapping logic before ingestion.
    *   For example, Broadridge provided office-level data, limiting visibility into specific advisors within multi-advisor offices, which impacted sales attribution accuracy.

2.  **Data Latency**:
    *   While ETFs require intraday updates for IIV calculations, certain vendor feeds (like omnibus account data) were only available on a T+1 basis. This delay impacted the ability to attribute flows accurately and required interim extrapolation models.

3.  **Integration with Legacy Systems**:
    *   Capital Group transitioned from older systems like DORIS and AFTP to modern platforms like THOR and Caspian during the ETF launch. This migration posed risks of data loss or schema conflicts, particularly for complex security types such as fixed income instruments.

4.  **Data Gaps**:
    *   Certain data points, like account type (e.g., IRA, 529), were missing in vendor feeds, complicating the task of reconciling sales data across platforms.

<div style="text-align: center">## My Impact on the ETF Data Product</div>

As a Data Product Manager, I was responsible for building and improving the ETF analytics pipeline to meet the demands of a fast-paced and high-stakes launch. My specific contributions included:

### 1. Vendor Onboarding & Data Normalization

*   **Engaged Third-Party Providers**: Coordinated with vendors such as Broadridge, Albridge, and Fidelity to define requirements, delivery formats, and SLAs.
*   **Overcame Schema Challenges**: Developed Python-based scripts to automate the mapping and transformation of vendor data into the standardized schemas required by downstream systems like Caspian.

### 2. Addressing Data Latency and Accuracy

*   **Extrapolated Missing Data**: Created interim models to fill gaps in T+1 feeds, enabling real-time visibility into investor flows during CGDG’s high-demand launch period.
*   **Enhanced Data Quality Pipeline**: Established validation and reconciliation steps between raw vendor files and processed outputs to ensure consistency across systems like AFTP and LASR.

### 3. Integrated Data into Enterprise Systems

*   Worked with engineering teams to migrate ETF data feeds into the THOR platform, ensuring minimal downtime during the transition.
*   Designed fallback mechanisms to handle Broadridge file outages, leveraging secondary market data from Bloomberg to maintain operational continuity.

### 4. Developed Analytics and Reporting

*   Enabled downstream analytics by delivering clean, reliable data that powered 36 Tableau dashboards, including reports on AP activity and sales attribution.
*   Partnered with Sales Compensation teams to reconcile $6.3B in flows processed through Broadridge, ensuring accurate crediting for key sales stakeholders.

### 5. Led Cross-Functional Collaboration

*   Acted as the primary liaison between Product, IT, and Business teams, ensuring alignment across stakeholders on priorities, timelines, and deliverables.
*   Identified and escalated data discrepancies to vendors, leading to quicker resolution of recurring issues.

***

## Key Outcomes of My Work

*   **Accelerated ETF Launch Readiness**: Successfully onboarded and integrated three critical data vendors within six months, meeting a tight go-live deadline.
*   **Enhanced Data Transparency**: Improved visibility into shareholder activity across five funds, enabling targeted marketing and investor engagement.
*   **Operational Efficiency**: Reduced manual data validation processes by 50% through automation, saving significant time for downstream teams.
*   **Compliance Risk Mitigation**: Addressed regulatory data gaps proactively, preventing potential compliance violations during SEC audits.

***

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
