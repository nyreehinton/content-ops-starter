---
title: Home
slug: Home
sections:
  - type: GenericSection
    title:
      text: Welcome to My Portfolio
      color: text-dark
      type: TitleBlock
      styles:
        self:
          textAlign: center
          fontWeight: bold
    subtitle: ''
    text: >
      I'm a Product Manager & Data Specialist based in Los Angeles with
      experience in data analytics, governance, and product development. Drawing
      on years of hands-on work in capital markets, machine learning, and agile
      project management, I aim to turn complex data problems into strategic
      solutions that drive business results.
    actions:
      - label: VIEW PORTFOLIO
        altText: "View Nyree Hinton's portfolio"
        url: /Experience
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: 'portfolio-cta'
        type: Button
      - label: CONTACT ME
        altText: 'Contact Nyree Hinton'
        url: /#contact-section
        showIcon: true
        icon: mail
        iconPosition: right
        style: secondary
        elementId: 'contact-cta'
        type: Link
    media:
      url: /images/Hinton_Nyree_Default_Beige_Headshot.jpeg
      altText: Nyree Hinton - Financial Analyst and Product Manager professional headshot
      elementId: 'hero-image'
      type: ImageBlock
    badge:
      label: Data Product Management
      color: text-primary
      type: Badge
    elementId: 'hero-section'
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: column
        padding:
          - pt-24
          - pl-24
          - pb-24
          - pr-24
        borderRadius: none
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        justifyContent: center
        textAlign: center

  - type: DividerSection
    styles:
      self:
        padding:
          - pt-4
          - pb-4
        margin:
          - mt-0
          - mb-0
    colors: bg-light-fg-dark

  - type: GenericSection
    title:
      text: Use Case Gallery
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: "Learn how I've solved real-world challenges through data-driven approaches"
    text: ''
    elementId: 'use-cases'
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-24
          - pb-8
          - pr-24
        justifyContent: center
        alignItems: center
        borderRadius: none
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
      subtitle:
        textAlign: center

  - type: FeaturedItemsSection
    title:
      text: ''
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: ''
    items:
      - type: FeaturedItem
        title: ETF Analytics
        subtitle: Capital Markets
        text: >
          Spearheaded ingestion of multiple data sources, boosting transparency
          and advanced analytics for multi-billion-dollar ETF product suites with over $31B in assets.
        actions:
          - label: Learn More
            url: /capital-group
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: primary
            type: Link
        elementId: 'etf-analytics'
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-12
              - pl-12
              - pb-12
              - pr-12
            borderRadius: medium
            flexDirection: column
            justifyContent: flex-start
            textAlign: left
            boxShadow: 'var(--card-shadow)'
        image:
          type: ImageBlock
          altText: ETF Analytics dashboard visualization
          elementId: ''
          url: /images/IMG_1163.png
          styles:
            self:
              borderRadius: medium
      - title: Compliance Automation
        subtitle: Risk Management
        text: >
          Built a custom seeding-money tracker that flagged unreported
          transactions, strengthening regulatory adherence and recovering $170M while minimizing risk exposure.
        image:
          url: /images/icon2.svg
          altText: Compliance automation visualization
          elementId: ''
          type: ImageBlock
          styles:
            self:
              borderRadius: medium
        actions:
          - label: View Case Study
            url: /blog/case-study-1
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: primary
            type: Link
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-12
              - pl-12
              - pb-12
              - pr-12
            borderRadius: medium
            flexDirection: column
            textAlign: left
            justifyContent: flex-start
            boxShadow: 'var(--card-shadow)'
        type: FeaturedItem
        elementId: 'compliance-automation'
      - title: Data Pipeline Optimization
        subtitle: Performance Engineering
        text: >
          Optimized Apache Spark ETL pipelines with SQL & Python in Databricks,
          cutting data processing time by 70% and accelerating insights delivery for stakeholders.
        image:
          url: /images/IMG_1164.png
          altText: Data pipeline optimization visualization
          elementId: ''
          type: ImageBlock
          styles:
            self:
              borderRadius: medium
        actions:
          - label: Explore Solution
            url: /blog/case-study-2
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: primary
            type: Link
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-12
              - pl-12
              - pb-12
              - pr-12
            borderRadius: medium
            flexDirection: column
            textAlign: left
            justifyContent: flex-start
            boxShadow: 'var(--card-shadow)'
        type: FeaturedItem
        elementId: 'data-pipeline'
    actions:
      - label: VIEW ALL PROJECTS
        altText: "View all of Nyree Hinton's projects"
        url: /Experience
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: 'all-projects-cta'
        type: Button
    badge:
      label: FEATURED WORK
      color: text-primary
      styles:
        self:
          textAlign: center
      type: Badge
    elementId: 'featured-work'
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pb-16
          - pt-0
          - pl-24
          - pr-24
        justifyContent: center
        margin:
          - mt-0
          - mb-16
          - ml-0
          - mr-0
      subtitle:
        textAlign: center

  - type: DividerSection
    styles:
      self:
        padding:
          - pt-4
          - pb-4
        margin:
          - mt-0
          - mb-0
    colors: bg-light-fg-dark

  - type: GenericSection
    title:
      text: Benchmarks
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: 'Real metrics and outcomes from my data-driven career'
    text: ''
    elementId: 'benchmarks'
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-24
          - pb-8
          - pr-24
        justifyContent: center
        alignItems: center
        borderRadius: none
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
      subtitle:
        textAlign: center

  - type: FeaturedItemsSection
    items:
      - type: FeaturedItem
        title: $31B+
        subtitle: Global ETF Transaction Data
        text: >
          Spearheaded ingestion of multiple data sources, boosting transparency
          and advanced analytics for multi-billion-dollar ETF product suites.
        actions: []
        elementId: 'metric-etf'
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
            boxShadow: 'var(--card-shadow)'
        image:
          type: ImageBlock
          altText: Lightning bolt symbol on red background
          elementId: ''
          url: /images/icon1.svg
          styles:
            self:
              borderRadius: x-large
      - title: $170M
        subtitle: Recovered Through Compliance
        text: >
          Built a custom seeding-money tracker that flagged unreported
          transactions, strengthening regulatory adherence and minimizing risk
          exposure.
        image:
          url: /images/icon2.svg
          altText: Featured icon two
          elementId: ''
          type: ImageBlock
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
            boxShadow: 'var(--card-shadow)'
        type: FeaturedItem
        elementId: 'metric-compliance'
      - title: 70%
        subtitle: Faster Processing
        text: >
          Optimized Apache Spark ETL pipelines with SQL & Python in Databricks,
          cutting data processing time by over two-thirds and accelerating
          insights.
        image:
          url: /images/icon3.svg
          altText: Featured icon three
          elementId: ''
          type: ImageBlock
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
            boxShadow: 'var(--card-shadow)'
        type: FeaturedItem
        elementId: 'metric-processing'
    elementId: 'metrics'
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pb-16
          - pt-0
          - pl-24
          - pr-24
        justifyContent: center
        margin:
          - mt-0
          - mb-16
          - ml-0
          - mr-0

  - type: DividerSection
    styles:
      self:
        padding:
          - pt-4
          - pb-4
        margin:
          - mt-0
          - mb-0
    colors: bg-neutral-fg-dark

  - subtitle: "Companies I've Worked With"
    images:
      - url: /images/bloomberg-logo-vector.png.jpg
        altText: Bloomberg logo
        type: ImageBlock
        styles:
          self:
            borderRadius: none
            width: narrow
      - url: /images/CaptialGroup_Logo_Horizontal.jpg
        altText: Capital Group logo
        type: ImageBlock
        styles:
          self:
            borderRadius: none
            width: narrow
      - url: /images/Thirdbrige.png.jpg
        altText: Third Bridge logo
        type: ImageBlock
        styles:
          self:
            borderRadius: none
            width: narrow
      - url: /images/Screenshot 2025-02-13 at 8.27.35 AM.jpg
        altText: Additional company logo
        type: ImageBlock
        styles:
          self:
            borderRadius: none
            width: narrow
    motion: move-to-left
    colors: bg-neutral-fg-dark
    styles:
      self:
        justifyContent: center
        padding:
          - pt-16
          - pl-24
          - pb-16
          - pr-24
      subtitle:
        textAlign: center
    type: ImageGallerySection
    elementId: 'companies'

  - type: DividerSection
    styles:
      self:
        padding:
          - pt-4
          - pb-4
        margin:
          - mt-0
          - mb-0
    colors: bg-light-fg-dark

  - title:
      text: Tesla Research Report
      color: text-primary
      styles:
        self:
          textAlign: left
          fontWeight: light
      type: TitleBlock
    subtitle: 'Deep-Dive Analysis'
    text: >
      Uncovered a 12.64% inflation in Tesla's odometer readings through precise analysis of energy consumption versus distance traveled.
    badge:
      label: Research Deep Dive
      color: text-primary
      styles:
        self:
          textAlign: left
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: row
        justifyContent: flex-start
        alignItems: center
        padding:
          - pt-24
          - pl-24
          - pb-24
          - pr-24
        borderRadius: none
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
      subtitle:
        textAlign: left
    type: GenericSection
    elementId: 'tesla-research-section'
    actions:
      - type: Button
        label: READ REPORT
        altText: 'Read Tesla odometer inflation research report'
        url: /tesla
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: 'tesla-report-cta'
    media:
      type: ImageBlock
      url: /images/IMG_0129.png
      altText: Tesla research report showing 12.64% odometer inflation analysis by Nyree Hinton
      elementId: ''
      styles:
        self:
          borderRadius: medium
          boxShadow: 'var(--card-shadow)'

  - type: DividerSection
    styles:
      self:
        padding:
          - pt-4
          - pb-4
        margin:
          - mt-0
          - mb-0
    colors: bg-neutral-fg-dark

  - posts:
      - content/pages/blog/case-study-1.md
      - content/pages/blog/case-study-2.md
      - content/pages/blog/ams-sw
    showThumbnail: true
    showDate: true
    showAuthor: true
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-24
          - pl-24
          - pb-24
          - pr-24
        justifyContent: center
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        borderRadius: none
      subtitle:
        textAlign: center
    type: FeaturedPostsSection
    hoverEffect: move-up
    subtitle: 'A collection of previous research'
    title:
      type: TitleBlock
      text: Case Studies
      color: text-dark
      styles:
        self:
          textAlign: center
          fontWeight: light
    showExcerpt: false
    elementId: 'case-studies-section'
    actions:
      - type: Button
        label: VIEW ALL
        altText: 'View all case studies and research'
        url: /blog
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: 'case-studies-cta'

  - type: DividerSection
    styles:
      self:
        padding:
          - pt-4
          - pb-4
        margin:
          - mt-0
          - mb-0
    colors: bg-light-fg-dark

  - type: CarouselSection
    title:
      type: TitleBlock
      text: Technical Proficiency
      color: text-dark
      styles:
        self:
          textAlign: center
          fontWeight: light
    subtitle: "Tools and technologies I've mastered"
    items:
      - title: Visualization
        tagline: Tableau
        subtitle: ''
        text: >
          I have designed and deployed 36 interactive dashboards that streamline
          decision-making for global stakeholders. By leveraging hyper-extract
          automation and optimized data sources, my Tableau implementations have
          significantly reduced load times and improved usability across Capital
          Group's ETF product suite.
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-12
              - pb-12
              - pl-12
              - pr-12
            textAlign: left
            borderRadius: none
            flexDirection: row
            justifyContent: center
            boxShadow: 'var(--card-shadow)'
        type: FeaturedItem
        elementId: 'tableau-skill'
        image:
          type: ImageBlock
          url: /images/IMG_1163.png
          altText: Tableau visualization dashboard example showing ETF analytics and data insights
          elementId: ''
          styles:
            self:
              borderRadius: medium
      - title: Databricks
        tagline: ''
        subtitle: Platform
        text: >
          Using Databricks, I engineered robust ETL pipelines that integrate 9
          ETF data sources representing $31B in assets. My workflows, built on
          Delta Tables and optimized SQL views, have accelerated data processing
          by up to 70%, ensuring rapid and reliable insights for both internal
          and external teams.
        image:
          url: /images/IMG_1164.png
          altText: Databricks platform interface used for ETL pipeline optimization and data processing
          styles:
            self:
              borderRadius: medium
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-12
              - pb-12
              - pl-12
              - pr-12
            textAlign: left
            borderRadius: none
            flexDirection: row
            justifyContent: center
            boxShadow: 'var(--card-shadow)'
        type: FeaturedItem
      - title: 'SQL, Python, Excel'
        tagline: ''
        subtitle: Preferred coding languages
        text: >
          I use SQL as the primary tool to structure and optimize large
          datasets. My experience with advanced SQL techniques, such as window
          functions, partitioning, and indexing helps me maintain data integrity
          and improve query performance, which is essential for both reporting
          and analytical projects.


          Python complements my SQL skills by allowing me to build flexible ETL
          pipelines. Using libraries like Pandas and PySpark within Databricks,
          I extend SQL's capabilities to handle diverse data transformation
          tasks. This approach enables me to automate workflows and adjust to
          various project complexities.
        image:
          url: /images/techstack.png
          altText: SQL, Python, and Excel technical skills visualization representing Nyree Hinton's coding proficiency
          styles:
            self:
              borderRadius: medium
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-12
              - pb-12
              - pl-12
              - pr-12
            textAlign: left
            borderRadius: none
            flexDirection: row
            justifyContent: center
            boxShadow: 'var(--card-shadow)'
        type: FeaturedItem
    elementId: 'technical-skills'
    variant: next-prev-nav
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
        padding:
          - pt-24
          - pb-24
          - pl-24
          - pr-24
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        borderRadius: none
      subtitle:
        textAlign: center

  - type: DividerSection
    styles:
      self:
        padding:
          - pt-4
          - pb-4
        margin:
          - mt-0
          - mb-0
    colors: bg-neutral-fg-dark

  - title:
      text: Open to New Opportunities
      color: text-dark
      type: TitleBlock
      styles:
        self:
          textAlign: center
          fontWeight: light
    subtitle: 'Artificial Intelligence Reshaping the Meaning of White-collar Employment'
    text: "<div style=\"text-align: left\">As organizations reassess how AI can revolutionize their business models, many have made sweeping workforce reductions—including my own role. Yet I see this shift as an *opportunity*.</div>\n\n<div style=\"text-align: left\">If you're seeking someone who can align emerging technology with strategic goals—and drive real value in the face of industry transformation—let's connect!</div>\n\n"
    actions:
      - label: LINKEDIN
        url: 'https://www.linkedin.com/in/nyree-hinton'
        icon: arrowRight
        iconPosition: right
        style: secondary
        type: Button
        altText: 'Connect with Nyree Hinton on LinkedIn'
        elementId: 'linkedin-cta'
      - type: Link
        label: EMAIL ME
        altText: 'Send email to Nyree Hinton'
        url: 'mailto:nyreehinton@gmail.com'
        showIcon: true
        icon: mail
        iconPosition: right
        style: secondary
        elementId: 'email-cta'
    media:
      url: /images/HeadshotAI.gif
      altText: Nyree Hinton AI-generated professional headshot animation showcasing technology expertise
      type: ImageBlock
      styles:
        self:
          borderRadius: medium
          boxShadow: 'var(--card-shadow)'
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row-reverse
        justifyContent: center
        padding:
          - pt-24
          - pl-24
          - pb-24
          - pr-24
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        borderRadius: none
      subtitle:
        textAlign: center
    type: GenericSection
    elementId: 'contact-section'
    badge:
      type: Badge
      label: Contact Me
      color: text-primary
      styles:
        self:
          textAlign: center

  - type: DividerSection
    styles:
      self:
        padding:
          - pt-4
          - pb-4
        margin:
          - mt-0
          - mb-0
    colors: bg-light-fg-dark

  - title:
      text: Always Happy to Chat
      color: text-dark
      type: TitleBlock
    subtitle: '📲'
    text: >
      If you found something of interest or have a general question feel free to
      reach out!
    media:
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
          type: TextareaFormControl
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
          boxShadow: 'var(--card-shadow)'
      type: FormBlock
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: null
    badge:
      label: General Inquiries
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-12
          - pl-12
          - pb-12
          - pr-12
        borderRadius: medium
        boxShadow: 'var(--card-shadow)'
    type: GenericSection
seo:
  metaTitle: Home - Nyree Hinton
  metaDescription: >-
    Explore Nyree Hinton's professional portfolio. Discover his background in
    data analytics, product management, and cross-functional collaboration.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
