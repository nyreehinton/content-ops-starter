---
title: What's a Data Product?
slug: data-product
date: '2025-01-02'
excerpt: ''
isFeatured: true
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: row
type: PostLayout
author: content/data/nyree.json
---

<div style="text-align: center">### A High-Level Overview</div>

A **data product** is a curated asset that packages information for a specific business purpose, solving distinct needs through analytics, reporting, or other decision-support tools. Unlike a simple raw dataset, a data product has **clear ownership, repeatable processes, and governance** that ensure its ongoing quality and relevance. At Capital Group, launching a robust data product for Exchange Traded Funds (ETFs) required integrating various new and existing data sources into a single, cohesive pipeline. This unified approach enabled stakeholders across the organization—from sales and marketing teams to finance and compliance—to derive trustworthy insights from a centralized source.

![](/images/F260552C-E031-4ACA-9871-B8E7F1EEEF45.jpeg)

<div style="text-align: center">## The Fundamental Issue</div>

<div style="text-align: center">### ETFs Without a Transfer Agent</div>

One of the most significant challenges ETFs present for firms like Capital Group compared to traditional mutual funds is the lack of a **transfer agent**. Mutual funds rely on a transfer agent to directly record individual shareholder transactions, providing granular, real-time data. This data is the backbone for reporting, analytics, and critical processes such as **sales compensation**.

| **Aspect**              | **Mutual Funds**                                                                     | **Current ETFs**                                                                                      | **Business Impact**                                                                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Transfer Agent**      | Records **individual shareholder transactions** directly (name, account type, etc.). | No transfer agent; shareholder activity tracked **only via APs and DTC custodial aggregations**.      | **Sales Crediting**: ETF flows must be reverse-engineered from AP/daily custodian reports, delaying accuracy in sales compensation payouts. |
| **Data Source**         | Direct feeds from transfer agents, brokers, and custodians.                          | **Third-party vendors** (e.g., Broadridge, Albridge) provide **aggregated omnibus account data**.     | **Reporting**: High-level data limits granular insights into investor demographics like IRA vs. taxable accounts.                           |
| **Data Granularity**    | **Individual account-level**: Enables precise tracking of flows per investor.        | **Office/AP-level**: Example: Broadridge data identifies advisor offices but not individual advisors. | **Analytics**: Inability to map transactions to specific financial advisors complicates channel attribution.                                |
| **Data Latency**        | Real-time or T+1 access via transfer agent systems.                                  | **T+1 to T+5 delay** for vendor data (e.g., monthly Broadridge files).                                | **Decision-Making**: Sales teams lack real-time visibility into trends (e.g., surge in CGDG inflows from RIAs).                             |
| **Compliance**          | Direct visibility into dividend distributions and cost basis reporting.              | **Omnibus gaps**: Missing account-type data (e.g., IRA vs. 529) risks tax reporting errors.           | **Regulatory Risk**: Potential penalties if tax forms misreport shareholder distributions.                                                  |
| **Portfolio Analytics** | Position-level transparency via quarterly filings.                                   | Holdings disclosed daily at **basket level** (AP creation/redemption units, not full fund).           | **Risk Modeling**: Limited visibility into full fund holdings complicates liquidity stress testing.                                         |

---

<div style="text-align: center">## Closing the Gap</div>

Building the ETF Data Product to address the gap caused by the absence of a transfer agent, we established partnerships with external data providers like Broadridge, Fidelity, and others. These vendors provided aggregated data on shareholder activity, though with limitations in granularity and frequency.

<div style="text-align: center">### Vendor Data Ecosystem for ETF Operations</div>

| **Data Vendor** | **Data Type**              | **Granularity**       | **Frequency** | **Coverage**   | **Limitations**                                                                   |
| --------------- | -------------------------- | --------------------- | ------------- | -------------- | --------------------------------------------------------------------------------- |
| Broadridge      | Omnibus transactions       | Office-level          | Monthly       | \~95% of flows | Aggregated by office; lacks advisor/account-level detail (e.g., IRA vs. taxable). |
| Fidelity        | Account-level transactions | Individual accounts   | Daily         | \~18% of AUM   | Limited to Fidelity-cleared accounts only.                                        |
| State Street    | NAV, shares outstanding    | Fund-level aggregates | Daily         | 100%           | Does not include transaction or shareholder data.                                 |

<div style="text-align: center">## Challenges in Acquiring and Managing Third-Party Data</div>

1. **Vendor Schema Mismatches**:

   - Different vendors, such as Broadridge and Albridge, delivered data in non-standardized formats (e.g., CSV, JSON) with inconsistent column structures, requiring transformation and mapping logic before ingestion.

   - For example, Broadridge provided office-level data, limiting visibility into specific advisors within multi-advisor offices, which impacted sales attribution accuracy.

2. **Data Latency**:

   - While ETFs require intraday updates for IIV calculations, certain vendor feeds (like omnibus account data) were only available on a T+1 basis. This delay impacted the ability to attribute flows accurately and required interim extrapolation models.

3. **Integration with Legacy Systems**:

   - Capital Group transitioned from older systems like DORIS and AFTP to modern platforms like THOR and Caspian during the ETF launch. This migration posed risks of data loss or schema conflicts, particularly for complex security types such as fixed income instruments.

4. **Data Gaps**:

   - Certain data points, like account type (e.g., IRA, 529), were missing in vendor feeds, complicating the task of reconciling sales data across platforms.

---

<div style="text-align: center">## My Contributions to the ETF Data Product</div>

As the Data Product Manager for ETF analytics, I drove the pipeline's creation and continuous improvement to meet the demands of a fast-paced launch environment. My contributions were integral to the seamless onboarding of new data providers, ensuring high data quality, and facilitating impactful analytics for the ETF launch.

![](/images/Data%20Management%20Framework.png)

---

### **1. End-to-End Pipeline Development**

- **Designed and Built the ETF Data Ingestion Pipeline**:
  - Orchestrated the systematic flow of vendor data from acquisition to reporting, ensuring that data was accurately ingested, processed, and delivered for downstream use.
  - Established a robust infrastructure supporting multiple data formats (e.g., Broadridge, Fidelity, State Street) and transformed disparate datasets into a unified schema.
- **Implemented Quality Control Processes**:
  - Introduced automated validation methods to cross-check incoming vendor data with internal systems (e.g., reconciling Broadridge's aggregated sales data against State Street's NAV files).
  - Identified and addressed discrepancies consistently, ensuring accurate and timely reporting.

---

### **2. Advanced Analytics and Reporting Enablement**

- Enabled **actionable insights** for stakeholders across Sales Compensation, Marketing, and Product teams by transforming raw vendor feeds into advanced Tableau dashboards. Key deliverables included:
  - **Sales Attribution Dashboards**: Tracked regional and advisor-level inflows for CGDG and other ETFs, empowering sales teams to focus on high-performing territories.
  - **Liquidity Monitoring Tools**: Created dashboards visualizing Authorized Participant (AP) activity to assess fund liquidity and market-making trends.
- Partnered with Sales Compensation teams to reconcile **$6.3 billion** in ETF transactions across datasets, ensuring accurate sales crediting and downstream adjustments.

---

### **3. Addressing Data Latency and Accuracy Challenges**

- **Real-Time Visibility Models**: Mitigated data delays from T+1 vendor feeds by developing interim calculation models to extrapolate data, maintaining the operational flow of insights during high-demand periods like CGDG's launch.
- **Enhanced Data Validation Pipeline**: Designed processes to reconcile vendor files with output systems such as AFTP and LASR, improving data reliability for reporting and compliance.

---

### **4. Integrated Data into Enterprise Systems**

- Led the integration of ETF data feeds into **THOR** (processing platform) and **Caspian** (data lake) during the transition from legacy systems, ensuring seamless adoption with minimal disruption.
- Built fallback mechanisms to account for vendor outages (e.g., using Bloomberg secondary market data when Broadridge files were unavailable), ensuring operational continuity even during data delivery lapses.

---

### **5. Vendor Onboarding and Collaboration**

- **Established Vendor Relationships**: Partnered with key providers like Broadridge, Albridge, and Fidelity to define data requirements, negotiate SLAs, and onboard datasets critical to ETF operations.
- **Solved Schema Challenges**: Built Python-based scripts to map and normalize vendor data into Capital Group's internal systems, streamlining disparate formats into a cohesive structure fit for downstream consumption.

---

### **6. Cross-Functional Collaboration**

- Acted as the central liaison between **IT, Sales, Product, and Business Reporting teams**, ensuring that all stakeholders' requirements were met in the data product lifecycle.
- **Resolved Recurring Vendor Issues**: Proactively escalated and addressed recurring problems, such as Broadridge data latency, by renegotiating SLAs and aligning vendor teams with Capital Group's operational priorities.

---

<div style="text-align: center">## Key Outcomes of My Work</div>

- **Accelerated ETF Launch Readiness**:
  Successfully onboarded and operationalized three critical data vendors within six months, meeting a tight go-live timeline for five ETFs.
- **Enhanced Data Transparency**:
  Improved visibility into shareholder activity by integrating and enriching aggregated vendor data, enabling targeted marketing and efficient sales reporting across five funds.
- **Improved Operational Efficiency**:
  Achieved a **50% reduction in manual validation processes** by automating data ingestion and processing, saving significant time and resources.
- **Mitigated Compliance Risks**: Addressed regulatory data gaps proactively, ensuring adherence to SEC transparency requirements and avoiding potential compliance violations.

The ETF data product I built at Capital Group bridges the fundamental gap created by the lack of a transfer agent, turning fragmented and incomplete third-party data into a reliable analytics foundation. By addressing issues in granularity, frequency, and latency, I delivered a scalable solution that empowers stakeholders, accelerates decision-making, and ensures compliance. This work not only supported the successful launch of Capital Group's ETF offerings but also established a data management framework that will scale with future product growth.
