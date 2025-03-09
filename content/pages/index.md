---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      text: Welcome to My Portfolio
      color: text-primary
      type: TitleBlock
      styles:
        self:
          textAlign: left
          fontWeight: light
    subtitle: ''
    text: >
      A collection of my work as an Equity Analyst & Product Manager within the Financial sector spanning technology & consumer markets, M&A strategy, and ETF analytics—crafted with architectural primers.
    actions:
      - label: VIEW PORTFOLIO
        altText: ''
        url: /Experience
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Button
    media:
      url: /images/Hinton_Nyree_Default_Lifestyle 2_Headshot.jpeg
      altText: Nyree Hinton headshot
      elementId: ''
      type: ImageBlock
      styles:
        self:
          width: narrow
          borderRadius: medium
    badge:
      label: Nyree Hinton
      color: text-primary
      type: Badge
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
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

  - type: GenericSection
    title:
      text: Professional Expertise
      color: text-dark
      type: TitleBlock
      styles:
        self:
          textAlign: center
          fontWeight: light
    subtitle: ''
    text: ''
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-24
          - pb-0
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
    elementId: expertise
  - type: FeaturedItemsSection
    title:
      text: ''
      color: text-dark
      styles:
        self:
          textAlign: center
          fontWeight: light
      type: TitleBlock
    subtitle: ''
    items:
      - type: FeaturedItem
        title: Capital Markets
        subtitle: Bloomberg
        text: >
          Analyzed global ETF transaction data exceeding $31B, enhancing transparency and providing advanced analytics for multi-billion-dollar product suites.
        actions: []
        elementId: null
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-12
              - pl-12
              - pb-12
              - pr-12
            borderRadius: none
            flexDirection: row
            justifyContent: center
            textAlign: left
            boxShadow: 'var(--card-shadow)'
            borderWidth: 0
            borderStyle: none
            borderColor: border-dark
        image:
          type: ImageBlock
          altText: Bloomberg financial data visualization
          elementId: ''
          url: /images/bloomberg-logo-vector.png.jpg
          styles:
            self:
              borderRadius: none
              width: narrow
      - title: Data Governance
        subtitle: Capital Group
        text: >
          Engineered robust ETL pipelines integrating 9 data sources, accelerating processing by 70% and ensuring reliable insights for both internal and external stakeholders.
        image:
          url: /images/Capital_Group_Companies.jpg
          altText: Capital Group logo
          elementId: ''
          type: ImageBlock
          styles:
            self:
              borderRadius: none
              width: narrow
        actions: []
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-12
              - pl-12
              - pb-12
              - pr-12
            borderRadius: none
            flexDirection: row
            textAlign: left
            justifyContent: center
            boxShadow: 'var(--card-shadow)'
            borderWidth: 0
            borderStyle: none
            borderColor: border-dark
        type: FeaturedItem
      - title: Market Intelligence
        subtitle: Third Bridge
        text: >
          Conducted 125+ executive-level discussions, uncovering vital trends in consumer staples, services, and agricultural markets that informed strategic investment decisions.
        image:
          url: /images/Thirdbrige.png.jpg
          altText: Third Bridge logo
          elementId: ''
          type: ImageBlock
          styles:
            self:
              borderRadius: none
              width: narrow
        actions: []
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-12
              - pl-12
              - pb-12
              - pr-12
            borderRadius: none
            flexDirection: row
            boxShadow: 'var(--card-shadow)'
            borderWidth: 0
            borderStyle: none
            borderColor: border-dark
        type: FeaturedItem
    actions: []
    badge:
      label: ''
      color: text-primary
      styles:
        self:
          textAlign: center
      type: Badge
    elementId: ''
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pb-24
          - pt-0
          - pl-24
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
      text: Tesla Report
      color: text-primary
      styles:
        self:
          textAlign: left
          fontWeight: light
      type: TitleBlock
    subtitle: ''
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
    actions:
      - type: Button
        label: READ REPORT
        altText: ''
        url: /tesla
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
    media:
      type: ImageBlock
      url: /images/IMG_0129.png
      altText: Tesla Investigation
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
      - content/pages/blog/lime-scooters.md
      - content/pages/blog/ams-sw.md
      - content/pages/blog/purple-innovation.md
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
    subtitle: A collection of previous research
    title:
      type: TitleBlock
      text: Case Studies
      color: text-dark
      styles:
        self:
          textAlign: center
          fontWeight: light
    showExcerpt: false
    actions:
      - type: Button
        label: VIEW ALL
        altText: ''
        url: /blog
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''

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
    subtitle: Tools and technologies I've mastered
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
        image:
          type: ImageBlock
          url: /images/IMG_1163.png
          altText: ''
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
          altText: ''
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
          altText: ''
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
    elementId: null
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
      text: Academic Credentials
      color: text-primary
      styles:
        self:
          textAlign: center
          fontWeight: light
      type: TitleBlock
    subtitle: The Pennsylvania State University
    items:
      - title: Certificate in ESG Investing
        tagline: Charted Financial Analyst Institute (CFA)
        subtitle: ''
        text: >
          An industry-recognized credential demonstrating advanced insight into
          how environmental, social, and governance factors shape investment
          decisions. Widely adopted by finance professionals, this certificate
          emphasizes responsible and sustainable approaches to portfolio
          management.
        image:
          url: /images/IMG_0135.jpeg
          altText: ESG Investing Certificate
          styles:
            self:
              borderRadius: medium
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-12
              - pl-12
              - pb-12
              - pr-12
            borderRadius: none
            flexDirection: col
            boxShadow: 'var(--card-shadow)'
        type: FeaturedItem
      - title: Certified SAFe® 6 Practitioner
        tagline: 'Scaled Agile, Inc.'
        subtitle: ''
        text: >
          A recognized qualification in the Scaled Agile Framework (SAFe),
          emphasizing an ability to coordinate and streamline agile practices
          across large teams. This certification underscores my capacity to
          drive collaborative planning, continuous delivery, and iterative
          improvements at the enterprise level.
        image:
          url: /images/Certified SAFe 6 Practitioner.png
          altText: SAFe Practitioner Certificate
          styles:
            self:
              borderRadius: medium
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-12
              - pl-12
              - pb-12
              - pr-12
            borderRadius: none
            flexDirection: col
            boxShadow: 'var(--card-shadow)'
        type: FeaturedItem
      - title: Securities Industry Essentials® (SIE®)
        tagline: Financial Industry Regulatory Authority
        subtitle: Exam Scheduled*
        text: ''
        image:
          url: /images/IMG_0138.png
          altText: SIE Certificate
          styles:
            self:
              borderRadius: medium
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-12
              - pl-12
              - pb-12
              - pr-12
            borderRadius: none
            flexDirection: col
            boxShadow: 'var(--card-shadow)'
        type: FeaturedItem
      - type: FeaturedItem
        title: Bloomberg Market Concepts (BMC)
        tagline: Bloomberg L.P.
        subtitle: ''
        text: >
          BMC offers a comprehensive overview of key financial markets and
          instruments. Through modules on Economic Indicators, Fixed Income,
          Currencies, and Equities, I gained a solid grounding in market
          mechanics and the principles that drive global financial markets.
        image:
          type: ImageBlock
          url: /images/Bloomberg Market Concepts.jpg
          altText: Bloomberg Market Concepts Certificate
          styles:
            self:
              borderRadius: medium
        actions: []
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-12
              - pl-12
              - pb-12
              - pr-12
            borderRadius: none
            flexDirection: col
            boxShadow: 'var(--card-shadow)'
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
    type: FeaturedItemsSection
    badge:
      type: Badge
      label: Education
      color: text-primary
      styles:
        self:
          textAlign: center
    actions:
      - type: Button
        label: SEE MORE
        altText: ''
        url: /Experience
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''

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
      text: Open to New Opportunities
      color: text-dark
      type: TitleBlock
      styles:
        self:
          textAlign: center
          fontWeight: light
    subtitle: Artificial Intelligence Reshaping the Meaning of "White-collar Employment"
    text: "<div style=\"text-align: left\">As\_organizations reassess how AI can revolutionize their business models, many have made sweeping workforce reductions—including my own role. Yet I see this shift as an *opportunity*.</div>\n\n<div style=\"text-align: left\">If you're seeking someone who can align emerging technology with strategic goals—and drive real value in the face of industry transformation—let's connect!</div>\n\n"
    actions:
      - label: LINKEDIN
        url: 'https://www.linkedin.com/in/nyree-hinton'
        icon: arrowRight
        iconPosition: right
        style: secondary
        type: Button
      - type: Link
        label: EMAIL ME
        altText: Send email
        url: 'mailto:nyreehinton@gmail.com'
        showIcon: true
        icon: mail
        iconPosition: right
        style: secondary
        elementId: ''
    media:
      url: /images/HeadshotAI.gif
      altText: Nyree Hinton AI-generated headshot
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
    badge:
      type: Badge
      label: Contact Me
      color: text-primary
      styles:
        self:
          textAlign: center

seo:
  metaTitle: Financial Analysis Portfolio - Nyree Hinton
  metaDescription: >-
    A collection of precise financial insights and research spanning equity markets, 
    M&A strategy, and ETF analytics—crafted with architectural elegance.
  socialImage: /images/Bloomberg Princeton.JPG
  type: Seo
type: PageLayout
---
