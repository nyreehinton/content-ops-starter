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

<div style="text-align: center">## Closing the Gap: Building the ETF Data Product</div>

### Strategic Approach to Solve the Problem

1.  **Vendor Onboarding for Third-Party Data Acquisition**\
    To address the gap caused by the absence of a transfer agent, we established partnerships with external data providers like Broadridge, Fidelity, and others. These vendors provided aggregated data on shareholder activity, though with limitations in granularity and frequency.
    *   **Examples of Data Sources**:
        *   **Broadridge**: Monthly data with office-level granularity, providing visibility into \~95% of CG ETF transactions.
        *   **Fidelity**: Daily account-level transaction data, offering a detailed view but for a subset of accounts.
        *   **State Street**: Daily NAV and outstanding share data for accounting and reconciliation purposes.

2.  **Data Transformation and Normalization**\
    The raw data from vendors arrived in disparate formats and varied levels of granularity. To build a usable data product, we:
    *   **Developed Transformation Logic**: Using Python and SQL, I created transformation scripts to normalize data across different vendors, ensuring compatibility with downstream systems.
    *   **Standardized Schema**: Mapped critical fields (e.g., account type, transaction types) into a unified schema, enabling consistent reporting and analytics.

3.  **Overcoming Omnibus Account Challenges**\
    Many vendors, such as Broadridge, provided shareholder activity data at the **office level** rather than the individual advisor or account level. As a result, key data points like the **line of business**, **advisor name**, or specific account types (e.g., IRA, 529) were missing.\
    **Solutions Implemented**:
    *   Extrapolated missing details using available patterns in other data feeds (e.g., matching CUSIPs to transaction flows in Fidelity files).
    *   Designed validation processes to flag and fill data gaps where possible.

4.  **Integration into Capital Group Systems**\
    We integrated these transformed, standardized datasets into Capital Group’s enterprise platforms, such as **THOR** (processing platform), **Caspian** (data lake), and **LASR** (reporting system).
    *   Established automated pipelines to process ETF sales and assets consistently across all systems.
    *   Created backfill solutions for legacy data gaps, ensuring continuity in reporting.

## Challenges in Acquiring and Managing Third-Party Data

1.  **Vendor Schema Mismatches**:

    *   Different vendors, such as Broadridge and Albridge, delivered data in non-standardized formats (e.g., CSV, JSON) with inconsistent column structures, requiring transformation and mapping logic before ingestion.

    *   For example, Broadridge provided office-level data, limiting visibility into specific advisors within multi-advisor offices, which impacted sales attribution accuracy.

2.  **Data Latency**:

    *   While ETFs require intraday updates for IIV calculations, certain vendor feeds (like omnibus account data) were only available on a T+1 basis. This delay impacted the ability to attribute flows accurately and required interim extrapolation models.

3.  **Integration with Legacy Systems**:

    *   Capital Group transitioned from older systems like DORIS and AFTP to modern platforms like THOR and Caspian during the ETF launch. This migration posed risks of data loss or schema conflicts, particularly for complex security types such as fixed income instruments.

4.  **Data Gaps**:

    *   Certain data points, like account type (e.g., IRA, 529), were missing in vendor feeds, complicating the task of reconciling sales data across platforms.

<div style="text-align: center">## My Contributions to the ETF Data Product</div>

As the Data Product Manager for ETF analytics, I drove the pipeline’s creation and continuous improvement to meet the demands of a fast-paced launch environment. My contributions were integral to the seamless onboarding of new data providers, ensuring high data quality, and facilitating impactful analytics for the ETF launch.

### **1. End-to-End Pipeline Development**

*   **Designed and Built the ETF Data Ingestion Pipeline**:
    *   Orchestrated the systematic flow of vendor data from acquisition to reporting, ensuring that data was accurately ingested, processed, and delivered for downstream use.
    *   Established a robust infrastructure supporting multiple data formats (e.g., Broadridge, Fidelity, State Street) and transformed disparate datasets into a unified schema.
*   **Implemented Quality Control Processes**:
    *   Introduced automated validation methods to cross-check incoming vendor data with internal systems (e.g., reconciling Broadridge’s aggregated sales data against State Street’s NAV files).
    *   Identified and addressed discrepancies consistently, ensuring accurate and timely reporting.

### **2. Advanced Analytics and Reporting Enablement**

*   Enabled **actionable insights** for stakeholders across Sales Compensation, Marketing, and Product teams by transforming raw vendor feeds into advanced Tableau dashboards. Key deliverables included:
    *   **Sales Attribution Dashboards**: Tracked regional and advisor-level inflows for CGDG and other ETFs, empowering sales teams to focus on high-performing territories.
    *   **Liquidity Monitoring Tools**: Created dashboards visualizing Authorized Participant (AP) activity to assess fund liquidity and market-making trends.
*   Partnered with Sales Compensation teams to reconcile **$6.3 billion** in ETF transactions across datasets, ensuring accurate sales crediting and downstream adjustments.

### **3. Addressing Data Latency and Accuracy Challenges**

*   **Real-Time Visibility Models**: Mitigated data delays from T+1 vendor feeds by developing interim calculation models to extrapolate data, maintaining the operational flow of insights during high-demand periods like CGDG’s launch.
*   **Enhanced Data Validation Pipeline**: Designed processes to reconcile vendor files with output systems such as AFTP and LASR, improving data reliability for reporting and compliance.

### **4. Integrated Data into Enterprise Systems**

*   Led the integration of ETF data feeds into **THOR** (processing platform) and **Caspian** (data lake) during the transition from legacy systems, ensuring seamless adoption with minimal disruption.
*   Built fallback mechanisms to account for vendor outages (e.g., using Bloomberg secondary market data when Broadridge files were unavailable), ensuring operational continuity even during data delivery lapses.

***

### **5. Vendor Onboarding and Collaboration**

*   **Established Vendor Relationships**: Partnered with key providers like Broadridge, Albridge, and Fidelity to define data requirements, negotiate SLAs, and onboard datasets critical to ETF operations.
*   **Solved Schema Challenges**: Built Python-based scripts to map and normalize vendor data into Capital Group’s internal systems, streamlining disparate formats into a cohesive structure fit for downstream consumption.

***

### **6. Cross-Functional Collaboration**

*   Acted as the central liaison between **IT, Sales, Product, and Business Reporting teams**, ensuring that all stakeholders' requirements were met in the data product lifecycle.
*   **Resolved Recurring Vendor Issues**: Proactively escalated and addressed recurring problems, such as Broadridge data latency, by renegotiating SLAs and aligning vendor teams with Capital Group's operational priorities.

***

<div style="text-align: center">## Key Outcomes of My Work</div>

*   **Accelerated ETF Launch Readiness**:\
    Successfully onboarded and operationalized three critical data vendors within six months, meeting a tight go-live timeline for five ETFs.
*   **Enhanced Data Transparency**:\
    Improved visibility into shareholder activity by integrating and enriching aggregated vendor data, enabling targeted marketing and efficient sales reporting across five funds.
*   **Improved Operational Efficiency**:\
    Achieved a **50% reduction in manual validation processes** by automating data ingestion and processing, saving significant time and resources.
*   **Mitigated Compliance Risks**:Addressed regulatory data gaps proactively, ensuring adherence to SEC transparency requirements and avoiding potential compliance violations.



The ETF data product I built at Capital Group bridges the fundamental gap created by the lack of a transfer agent, turning fragmented and incomplete third-party data into a reliable analytics foundation. By addressing issues in granularity, frequency, and latency, I delivered a scalable solution that empowers stakeholders, accelerates decision-making, and ensures compliance. This work not only supported the successful launch of Capital Group’s ETF offerings but also established a data management framework that will scale with future product growth.
