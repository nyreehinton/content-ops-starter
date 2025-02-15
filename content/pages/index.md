---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      text: Welcome to My Portfolio
      color: text-dark
      type: TitleBlock
    subtitle: 'Hello, I''m Nyree Hinton'
    text: >
      I’m a Product Manager & Data Specialist based in Los Angeles with
      experience in data analytics, governance, and product development. Drawing
      on years of hands-on work in capital markets, machine learning, and agile
      project management, I aim to turn complex data problems into strategic
      solutions that drive business results.
    actions:
      - label: Bio
        altText: ''
        url: /
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: secondary
        elementId: ''
        type: Button
      - label: Past Projects
        altText: ''
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Link
    media:
      url: /images/Hinton_Nyree_Default_Beige_Headshot.jpeg
      altText: Unblock your team boost your time to production preview
      elementId: ''
      type: ImageBlock
    badge:
      label: Data Product Management
      color: text-primary
      type: Badge
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
  - type: FeaturedItemsSection
    title:
      text: What I’ve Achieved
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Real metrics and outcomes from my data-driven career
    items:
      - type: FeaturedItem
        title: $31B+
        subtitle: Global ETF Transaction Data
        text: >
          Spearheaded ingestion of multiple data sources, boosting transparency
          and advanced analytics for multi-billion-dollar ETF product suites.
        actions: []
        elementId: null
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
        type: FeaturedItem
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
        type: FeaturedItem
    actions:
      - label: See more
        altText: ''
        url: /
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Button
    badge:
      label: MY TRACK RECORD
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
          - pb-16
          - pt-16
          - pl-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
  - subtitle: Past Experience
    images:
      - altText: Empathy logo
        type: ImageBlock
      - url: /images/bloomberg-logo-vector.png.jpg
        altText: Wellster logo
        type: ImageBlock
      - url: /images/CaptialGroup_Logo_Horizontal.jpg
        altText: Vise logo
        type: ImageBlock
      - altText: Telus logo
        type: ImageBlock
        url: /images/Thirdbrige.png.jpg
        styles:
          self:
            borderWidth: 1
            padding:
              - pt-1
              - pl-1
              - pb-1
              - pr-1
            margin:
              - mt-1
              - ml-1
              - mb-1
              - mr-1
            borderRadius: x-small
            borderColor: border-light
      - altText: Contentful logo
        type: ImageBlock
      - altText: Sanity logo
        type: ImageBlock
      - altText: ''
        type: ImageBlock
        url: /images/Screenshot 2025-02-13 at 8.27.35 AM.jpg
    motion: move-to-left
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
    type: ImageGallerySection
  - posts:
      - content/pages/blog/case-study-1.md
      - content/pages/blog/case-study-2.md
      - content/pages/blog/case-study-3.md
    showThumbnail: true
    showDate: true
    showAuthor: true
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedPostsSection
    hoverEffect: move-up
    subtitle: A cumulation of previous research.
    title:
      type: TitleBlock
      text: Case Studies
      color: text-dark
      styles:
        self:
          textAlign: center
          fontWeight: 700
    showExcerpt: false
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
  - title:
      text: Tesla
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: An Deep-Dive Into Tesla Patents & Technology
    text: >+
      <div style="text-align: center">I conducted an in-depth review of Tesla’s
      patent filings and underlying technology to understand how they approach
      **vehicle range, odometer systems, and battery management**. My analysis
      focused on comparing Tesla’s predictive algorithms and real-world metrics,
      offering insights into the broader implications for both consumers and the
      EV market. While there were additional considerations that arose during my
      research, I primarily concentrated on how Tesla’s core engineering
      decisions impact everyday drivers.</div>

    badge:
      label: Exclusive consumer Report
      color: text-primary
      styles:
        self:
          textAlign: center
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: col
        justifyContent: center
      subtitle:
        textAlign: center
    type: GenericSection
    media:
      type: ImageBlock
      url: /images/IMG_0129.png
      altText: Image alt text placeholder
      elementId: ''
      styles:
        self:
          borderRadius: medium
          padding:
            - pl-16
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
  - type: GenericSection
    title:
      text: Education
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: The PennsylvaniaStateUniversity
    text: ''
    actions: []
    elementId: null
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: col-reverse
        justifyContent: center
        alignItems: center
      subtitle:
        textAlign: center
    backgroundImage:
      type: BackgroundImage
      altText: altText of the image
      backgroundSize: auto
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
    media:
      type: ImageBlock
      altText: Image alt text placeholder
      elementId: ''
      styles:
        self:
          borderRadius: medium
  - title:
      text: Certifications
      color: text-primary
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: ''
    items:
      - title: Certificate in ESG Investing from CFA
        tagline: Charted Financial Analyst Institute
        subtitle: ''
        text: >
          An industry-recognized credential demonstrating advanced insight into
          how environmental, social, and governance factors shape investment
          decisions. Widely adopted by finance professionals, this certificate
          emphasizes responsible and sustainable approaches to portfolio
          management.
        image:
          url: /images/IMG_0135.jpeg
          altText: Placeholder Image
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
      - title: Certified SAFe® 6 Practitioner from
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
          altText: Placeholder image
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
      - title: Securities Industry Essentials® (SIE®)
        tagline: Financial Industry Regulatory Authority
        subtitle: Exam Scheduled*
        text: ''
        image:
          url: /images/IMG_0138.png
          altText: Placeholder image
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-8
          - pb-16
          - pr-8
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedItemsSection
  - type: CarouselSection
    title: null
    subtitle: Tech Stack
    items:
      - title: “Visualization.”
        tagline: Tableau
        subtitle: 'Maria Walters, Company'
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
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
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          url: /images/IMG_1164.png
          altText: ''
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: 'SQL, Python, Excel'
        tagline: ''
        subtitle: Preferred coding languages
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          url: /images/person-placeholder-light.png
          altText: Maria Walters
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: >-
          “A designer knows he has achieved perfection not when there is nothing
          left to add, but when there is nothing left to take away.”
        tagline: Testimonial 4
        subtitle: 'Maria Walters, Company'
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          url: /images/person-placeholder-light.png
          altText: Maria Walters
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: >-
          "Design can be art. Design can be aesthetics. Design is so simple,
          that's why it is so complicated."
        tagline: Testimonial 5
        subtitle: 'Jane Walters, Company'
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          url: /images/person-placeholder-light.png
          altText: Maria Walters
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: >-
          “Quote from some important person goes right here. I love using
          Netlify Create.”
        tagline: Testimonial 6
        subtitle: 'Jane Doe, Company'
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        image:
          url: /images/img-placeholder-dark.png
          altText: Jane Doe
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-dark-fg-light
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
    elementId: null
    variant: next-prev-nav
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
  - title:
      text: '"Open to Work"'
      color: text-dark
      type: TitleBlock
    subtitle: Artificial Intelligence Reshaping the Meaning of “White-collar Employment”
    text: "As\_organizations reassess how AI can revolutionize their business models, many have made sweeping workforce reductions—including my own role. Yet I see this shift as an *opportunity* rather than a setback. \n\n\nI’m looking to help a forward-thinking company harness the power of AI for data governance, product insights, and fintech innovation. If you’re seeking someone who can align emerging technology with strategic goals—and drive real value in the face of industry transformation—let’s connect!\n"
    actions:
      - label: LinkedIn
        url: 'https://www.linkedin.com/in/nyree-hinton'
        icon: arrowRight
        iconPosition: right
        style: secondary
        type: Button
      - label: Contact
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Link
    media:
      url: /images/HeadshotAI.gif
      altText: Fun feature preview
      type: ImageBlock
    badge:
      label: ''
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
    type: GenericSection
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
  - title:
      text: Always Happy to Chat
      color: text-dark
      type: TitleBlock
    subtitle: "\U0001F4F2"
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
    type: GenericSection
seo:
  metaTitle: Home - Nyree Hinton
  metaDescription: >-
    Explore Nyree Hinton’s professional portfolio. Discover her background in
    data analytics, product management, and cross-functional collaboration.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
