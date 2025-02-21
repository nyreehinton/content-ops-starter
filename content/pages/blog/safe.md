---
type: PostLayout
title: Scaled Agile Framework
date: '2022-10-10'
excerpt: ''
bottomSections:
  - type: DividerSection
    title: Divider
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-3
          - pl-3
          - pb-3
          - pr-3
  - type: FeaturedItemsSection
    title:
      type: TitleBlock
      text: Key Benefits
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: Subtitle goes here
    items:
      - type: FeaturedItem
        title: 500k
        subtitle: Numbers Done
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          type: ImageBlock
          url: /images/icon1.svg
          altText: Lightning bolt symbol on red background
          elementId: ''
          styles:
            self:
              borderRadius: x-large
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
            textAlign: left
      - type: FeaturedItem
        title: 20x
        subtitle: The Job Stuff
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          type: ImageBlock
          url: /images/icon2.svg
          altText: Featured icon two
          elementId: ''
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            textAlign: left
            justifyContent: center
      - type: FeaturedItem
        title: 200%
        subtitle: Faster
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          type: ImageBlock
          url: /images/icon3.svg
          altText: Featured icon three
          elementId: ''
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
    actions:
      - type: Button
        label: Get started
        altText: ''
        url: /
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
    badge:
      type: Badge
      label: This is a badge
      color: text-primary
      styles:
        self:
          textAlign: center
    elementId: ''
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pb-16
          - pt-16
          - pl-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
slug: safe
isFeatured: true
isDraft: false
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
<div style="text-align: center"></div>

<div style="text-align: center">### Introduction: Embracing Agility at Capital Group</div>

In my role as the ETF Data Product Manager at Capital Group, I recognized early on the importance of adopting **SAFe® (Scaled Agile Framework)** principles to manage the complexity and velocity of our ETF data product development. My responsibility went beyond just setting up pipelines; I was tasked with orchestrating a system that could evolve rapidly to meet market needs, manage vendor dependencies, and deliver high-quality, actionable insights in real-time.![](/images/BP-Overview_6_WEB.webp)

<div style="text-align: center">## Why Agile for the ETF Data Product?</div>

The ETF data product presented several unique challenges:

*   **Lack of a Transfer Agent**: Unlike mutual funds, there was no direct access to shareholder-level data, which required creating workarounds to reconcile aggregated, delayed data from third-party vendors.
*   **Cross-Functional Coordination**: Managing input from 7+ teams (Sales, Legal, IT, Compliance, Product, etc.) using 8+ systems with varying requirements.
*   **Frequent Change Management**: Data pipelines were impacted by regulatory updates, vendor schema shifts, and enterprise migrations to platforms like THOR and Caspian.
*   **High Stakeholder Expectations**: Delivering data products that aligned with sales compensation policies, analytics needs, and compliance guidelines.

An Agile framework provided the structure and flexibility needed to address these challenges by emphasizing collaboration, incremental delivery, and responsiveness to change.

<div style="text-align: center">## Key Agile Practices</div>

### 1. **Defining Clear Roles and Responsibilities**

To ensure alignment across teams, I established a **RACI (Responsible, Accountable, Consulted, Informed)** model during the early phases of the project. This clarified expectations and decision-making authority for each stakeholder.

*   **Product Owner (My Role)**: Defined the vision for the ETF data product, prioritized the backlog, and acted as the primary liaison between business and IT teams.
*   **Scrum Master**: Ensured smooth sprint execution, facilitated stand-ups, and coached the team on Agile best practices.
*   **Cross-Functional Teams**: Collaborated on development, data validation, and reporting as part of an Agile Release Train (ART).

![](/images/Picture1.png)

### 2. **Backlog Creation and Prioritization**

I built and maintained a comprehensive **product backlog** to manage the end-to-end pipeline:

*   **Epics**: High-level objectives such as "Enable Sales Crediting" or "Integrate Vendor Data Sources."
*   **Features**: Subcomponents of epics, such as onboarding Broadridge and automating downstream validation.
*   **User Stories**: Specific deliverables, written in the "As a \[Role], I want \[Functionality], so that \[Business Value]" format to connect tasks to business outcomes.

Example User Story:

*   *"As a sales manager, I want visibility into investor flows by advisor office so that I can properly attribute sales credit and incentivize performance."*

### 3. **Incremental Development and Delivery**

The ETF data product was developed incrementally to deliver tangible value at each iteration:

*   **Two-Week Sprints**: Delivered features like initial vendor integrations, schema validations, and reporting dashboards in biweekly cycles.
*   **Minimum Viable Product (MVP)**: Focused initial development on core functionalities, such as reconciling creation/redemption activity and NAV reporting. Further enhancements were prioritized in subsequent sprints.

### 4. **Daily Stand-Ups and Sprint Ceremonies**

Regular communication was key to maintaining team alignment and addressing blockers:

*   **Daily Stand-Ups**: 15-minute updates to discuss progress, impediments, and upcoming goals.
*   **Sprint Planning**: Planned workload for each iteration, ensuring commitments aligned with team capacity.
*   **Sprint Reviews**: Demonstrated completed work to stakeholders, collecting feedback for continuous improvement.
*   **Retrospectives**: Identified what went well and areas for improvement to refine processes.

### 5. **Visualizing Work Through Kanban Boards**

I created Kanban boards to streamline the workflow and track progress in real time:

*   **Columns**: To-Do, In Progress, In Review, Done.
*   **Stories as Cards**: Each user story was represented as a card, ensuring transparency and prioritization.

### 6. **Continuous Feedback Loops**

I emphasized collaboration and feedback at every stage to ensure deliverables met business needs:

*   **Regular Stakeholder Updates**: Presented progress via dashboards and sprint demos to engage sales, legal, and compliance teams.
*   **Automated Data Validations**: Built processes to identify and resolve discrepancies early, minimizing downstream issues.

