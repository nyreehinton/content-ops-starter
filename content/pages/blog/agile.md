---
type: PostLayout
title: Implementing Agile Framework for ETF Data Product Management
date: '2022-10-10'
author: content/data/person1.json
excerpt: >-
  Facilisis dui. Nulla molestie risus in mi dapibus, eget porta lorem semper.
  Donec sed facilisis nibh.
featuredImage:
  type: ImageBlock
  altText: Thumbnail
  elementId: ''
  styles:
    self:
      padding:
        - pt-0
        - pl-0
        - pb-0
        - pr-0
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
slug: agile
isFeatured: false
isDraft: false
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
---
<div style="text-align: center"></div>

### Introduction: Embracing Agility at Capital Group

In my role as the ETF Data Product Manager at Capital Group, I recognized early on the importance of adopting **SAFe® (Scaled Agile Framework)** principles to manage the complexity and velocity of our ETF data product development. My responsibility went beyond just setting up pipelines; I was tasked with orchestrating a system that could evolve rapidly to meet market needs, manage vendor dependencies, and deliver high-quality, actionable insights in real-time.

### Why SAFe?

SAFe offered the scalability and alignment necessary to manage multiple Agile Release Trains (ARTs) and cross-functional teams simultaneously. Here are the reasons behind this choice:

*   **Enterprise Agility**: SAFe's comprehensive framework aligned our ETF launches with the overarching enterprise goals, ensuring our product strategy was coherent with the firm's vision.
*   **Cross-Team Alignment**: With 7+ teams, 7-8 systems, and 4-5 different ingestion pipelines, SAFe provided a structure for alignment through PI Planning, synchronization, and a shared Vision.
*   **Built-in Quality**: Lean principles within SAFe emphasize Built-In Quality, ensuring the data product met Capital Group's rigorous standards for accuracy and compliance.

### Key Elements of SAFe Implementation

#### 1. **PI Planning: Synchronizing Teams Across the ART**

*   **Vision and Roadmaps**: Articulating the future state of the ETF data product, connecting it to business strategy and market opportunities for rapid pivoting.
*   **PI Objectives**: Teams committed to PI Objectives, creating shared understanding and alignment on deliverables across 8-12 week Planning Intervals (PIs).
*   **ART Backlog**: Created a centralized ART Backlog, containing Features (both business and architectural) prioritized using WSJF (Weighted Shortest Job First).

#### 2. **Kanban and Scrum for Teams**

*   **SAFe Team Kanban**: Enabled new business teams to manage continuously changing demands and prioritize work efficiently, with daily review and adjustment.
*   **SAFe Scrum**: Provided new technology teams with structured events like Daily Stand-ups, Iteration Planning, and Retrospectives for enhanced team alignment and predictability.

#### 3. **Cross-Functional Teams and Topologies**

*   **Stream-Aligned Teams**: Formed teams around the flow of work, ensuring the ability to deliver value directly to the Customer as foreseen in the ART Backlog.
*   **Enabling Teams**: Specialized teams with focused expertise for tasks like designing complex data schemas or solving data latency issues.

#### 4. **Lean Principles in Practice**

*   **Taking an Economic View**: Every Feature was justified by a benefit hypothesis that quantified the value to shareholders and the business.
*   **Applying Systems Thinking**: Approached data ingestion as part of a larger ecosystem, considering the impact of each change on the entire system.
*   **Unlocking Knowledge Worker Motivation**: Fostered an environment for cross-functional collaboration, allowing every team member to flourish and contribute to product innovation.

#### 5. **Continuous Learning and Adaptation**

*   **Retrospectives**: Conducted regularly after each Iteration, focusing on improving processes, quality, and team dynamics.
*   **Spikes**: Used when facing high uncertainty or technical risk, allowing data science and engineering teams to research potential solutions before planning.

### Outcomes and Impact

*   **Launch Readiness**: Successfully integrated 3 critical data vendors into our ART pipeline, meeting tight go-live deadlines for the $31B ETF launch.
*   **Operational Efficiency**: Reduced manual data validation by 50% through automation, decreasing time for data reconciliation by 70%.
*   **Increased Transparency**: Improved data transparency, enhancing investor communication by 30% and enabling real-time AP activity monitoring.
*   **Enhanced Quality**: Achieved a 98% data accuracy rate, minimizing market intelligence arbitrage gaps across vendor feeds.

### Continuous Improvement

I led the team in relentless improvement through:

*   **Lean-Agile Training**: Facilitated SAFe® training for all teams, increasing their understanding and commitment to the Agile mindset.
*   **Problem-Solving Workshops**: Hosted workshops to improve data ingestion processes and introduce innovations.

## The Challenge: Traditional Waterfall vs. Agile in ETF Data Operations

### Before Agile:

*   6-9 month development cycles
*   Rigid requirements often outdated by launch
*   Limited stakeholder visibility and engagement
*   Difficulty adapting to regulatory changes mid-development

### Agile Goals:

*   Reduce time-to-market by 50%
*   Increase stakeholder satisfaction by 40%
*   Improve data quality and reduce defects by 30%
*   Enhance team productivity and morale

## My Approach: Tailored Agile Implementation

### 1. Scrum Adaptation for ETF Data Flows

*   **Sprint Planning**: Bi-weekly sprints aligned with ETF NAV calculation cycles
*   **Daily Stand-ups**: Cross-functional meetings including Data Engineers, Business Analysts, and Compliance
*   **Sprint Reviews**: Demos of new data pipelines and dashboards to stakeholders
*   **Retrospectives**: Continuous improvement focus, especially on data quality and processing speed

### 2. Kanban for Ongoing Data Operations

*   Visualized workflow for data ingestion, transformation, and delivery
*   WIP limits to prevent bottlenecks in data processing
*   Continuous flow for daily NAV calculations and AP basket creation

### 3. User Stories and Acceptance Criteria

*   Collaborated with Sales, Compliance, and Portfolio Managers to create detailed user stories
*   Example: "As a Sales Manager, I want daily AP creation/redemption data so that I can attribute flows to specific channels"
*   Defined clear acceptance criteria for each data product feature

### 4. Automated Testing and Continuous Integration

*   Implemented automated data quality checks using Python and SQL
*   Continuous integration pipeline for nightly data reconciliation
*   Reduced manual QA effort by 60%

### 5. DevOps Practices for Data Pipeline Management

*   Adopted Infrastructure as Code for data pipeline deployment
*   Implemented feature flags to safely roll out new data transformations
*   Achieved 99.99% uptime for critical ETF data feeds

## Key Achievements and Metrics

1.  **Accelerated Time-to-Market**
    *   Reduced new data product feature delivery from 6 months to 6 weeks
    *   Launched 5 new ETFs in 8 months, surpassing industry average by 40%

2.  **Enhanced Data Quality**
    *   Reduced data defects by 45% through automated testing
    *   Achieved 99.9% accuracy in daily NAV calculations

3.  **Improved Stakeholder Satisfaction**
    *   Increased stakeholder satisfaction scores from 65% to 92%
    *   Enabled Sales team to attribute 98% of flows within 24 hours, up from 70% in 5 days

4.  **Regulatory Compliance Agility**
    *   Implemented new SEC reporting requirements 2 months ahead of deadline
    *   Zero compliance violations in first year of ETF operations

5.  **Team Performance and Morale**
    *   Increased team velocity by 35% over 6 months
    *   Reduced overtime hours by 50% while increasing output

## Agile Tools and Techniques Mastered

*   **Jira**: For sprint planning, backlog management, and tracking velocity
*   **Confluence**: Knowledge base for user stories, acceptance criteria, and sprint documentation
*   **GitLab**: Version control and CI/CD pipeline management
*   **Tableau**: Agile metrics dashboards for stakeholder transparency

## Overcoming Challenges: Agile in a Regulated Environment

1.  **Challenge**: Balancing Agility with Compliance
    *   **Solution**: Integrated compliance officers into sprint planning and reviews
    *   **Outcome**: 100% regulatory compliance while maintaining agile velocity

2.  **Challenge**: Resistance to Change from Traditional Teams
    *   **Solution**: Conducted workshops and paired experienced agile practitioners with skeptics
    *   **Outcome**: 95% team buy-in within 3 months

3.  **Challenge**: Adapting Scrum to 24/7 ETF Operations
    *   **Solution**: Implemented a "Follow the Sun" model with distributed teams
    *   **Outcome**: Continuous development and support without sacrificing work-life balance

## Leadership and Mentorship

*   Led Agile transformation for a team of 25 across Data Engineering, Analytics, and Business Intelligence
*   Mentored 5 Scrum Masters, all of whom achieved certification within 6 months
*   Conducted bi-monthly Agile best practices sessions, attended by 100+ employees across the organization

## Conclusion: Agile as a Competitive Advantage in ETF Management

By implementing Agile methodologies, we transformed our ETF data product management from a reactive, slow-moving process to a proactive, market-leading operation. This agility not only improved our operational efficiency but also positioned Capital Group as an innovator in the ETF space, capable of rapidly adapting to market changes and client needs.

The success of this Agile transformation demonstrates my ability to lead complex, cross-functional initiatives, drive cultural change, and deliver measurable business value through innovative project management approaches.

***

