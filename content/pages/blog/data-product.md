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

<div style="text-align: left">As the Data Product Manager for ETF analytics, I drove the pipeline’s creation and continuous improvement to meet the demands of a fast-paced launch environment. My contributions were integral to the seamless onboarding of new data providers, ensuring high data quality, and facilitating impactful analytics for the ETF launch. Key areas of focus included:
1\. Vendor Onboarding & Data Normalization	•	Engaged Third-Party Providers: Coordinated with critical vendors such as Broadridge, Albridge, and Fidelity to establish clear data requirements, delivery formats, and SLAs to ensure reliable data delivery.	•	Overcame Schema Challenges: Developed Python-based scripts to automate the mapping and transformation of vendor data into the standardized schemas required by downstream systems like Caspian and THOR, which greatly reduced manual intervention and accelerated the pipeline setup.
2\. Addressing Data Latency and Accuracy	•	Extrapolated Missing Data: In the high-demand launch period for CGDG, I created interim models to fill gaps in the T+1 data feeds, enabling real-time visibility into investor flows and ensuring operational continuity even during data delays.	•	Enhanced Data Quality Pipeline: Established robust validation and reconciliation processes to cross-check raw vendor files with processed outputs, ensuring consistent and reliable data delivery across platforms like AFTP, LASR, and THOR.
3\. Integrated Data into Enterprise Systems	•	Migrated ETF Data Feeds to THOR: Worked closely with engineering teams to migrate ETF data feeds into the new THOR platform with minimal downtime, ensuring a seamless transition and continued support for business operations.	•	Developed Fallback Mechanisms: Designed contingency processes to handle outages in critical data feeds, such as leveraging secondary market data from Bloomberg when Broadridge files faced delays, ensuring no disruption in analytics or reporting.4. Developed Analytics and Reporting	•	Enabled Downstream Analytics: Delivered clean, validated data that powered 36 critical Tableau dashboards, enabling teams to track metrics such as AP activity, investor trends, and sales attribution.	•	Sales Compensation Support: Partnered with the Sales Compensation team to reconcile over $6.3B in ETF flows, ensuring accurate and timely compensation for the salesforce, improving motivation and business outcomes.5. Led Cross-Functional Collaboration	•	Primary Liaison for Stakeholder Alignment: Acted as the central point of contact between the Product, IT, and Business teams, ensuring clear communication and alignment on priorities, timelines, and deliverables.	•	Escalated Data Issues: Identified recurring data issues with vendors and worked with them to negotiate better delivery standards and resolve inconsistencies, ensuring a more efficient and reliable data pipeline.</div>

