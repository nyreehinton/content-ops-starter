---
title: Exclusive Tesla Report
slug: Exclusive-Tesla-Report
sections:
  - title:
      text: Tesla Odometer Investigation
      color: text-light
      styles:
        self:
          textAlign: center
          fontWeight: 400
      type: TitleBlock
    subtitle: Are the readings accurate?
    text: >
      Over the past year, I’ve conducted an in-depth review of Tesla’s odometer
      systems, analyzing everything from patent filings and charging logs to
      user testimonies on social media. My primary goal has been to determine
      whether Tesla vehicles accurately measure mileage or if certain
      algorithmic factors are inflating those readings. In this section, Ill
      walk you through the data sources, investigative steps, and final
      takeaways of my research”along with practical tips for anyone looking to
      understand, validate, or challenge their own Teslas odometer readings.
    actions: []
    colors: bg-dark-fg-light
    styles:
      self:
        padding:
          - pt-40
          - pl-4
          - pb-40
          - pr-4
        alignItems: center
        flexDirection: row-reverse
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
    type: GenericSection
    backgroundImage:
      type: BackgroundImage
      altText: Yolk Steering
      backgroundSize: cover
      backgroundPosition: bottom
      backgroundRepeat: repeat-y
      opacity: 10
      url: /images/IMG_0367.jpeg
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
      type: TitleBlock
      text: Generic Section With A Form
      color: text-dark
    subtitle: Section with a form subtitle
    text: |-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    actions: []
    media:
      type: FormBlock
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        icon: arrowRight
        iconPosition: right
        style: primary
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
    badge:
      type: Badge
      label: Contact Us
      color: text-primary
    colors: bg-light-fg-dark
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
  - title:
      text: 'Part 2: Methodology & Data Sources'
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    people:
      - content/data/person1.json
      - content/data/person2.json
      - content/data/person3.json
      - content/data/person4.json
      - content/data/person5.json
      - content/data/person6.json
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
    type: FeaturedPeopleSection
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
  - type: FeaturedPostsSection
    title:
      type: TitleBlock
      text: 3. The Report
      color: text-dark
      styles:
        self:
          textAlign: center
    posts:
      - content/pages/blog/the-central-hypothesis.md
      - content/pages/blog/technical-analysis.md
      - content/pages/blog/fundamental-market-misdiagnoses.md
    showThumbnail: true
    showExcerpt: true
    showDate: false
    showAuthor: false
    actions: []
    elementId: ''
    variant: big-list
    colors: bg-light-fg-dark
    hoverEffect: thin-underline
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
  - type: DividerSection
    title: Divider
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-20
          - pl-20
          - pb-20
          - pr-20
  - title:
      text: Full Reports
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Confidently Accompanying Information
    items:
      - title: Odometer Report Pt.1
        subtitle: '2023'
        text: ''
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: Odometer Report Pt.2
        subtitle: '2024'
        text: ''
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: Class Action Civil Complaint
        subtitle: '2025'
        text: ''
        colors: bg-neutral-fg-dark
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
      - label: Request Copies
        url: /nyreehinton@gmail.com
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
    variant: toggle-list
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pb-40
          - pt-16
          - pl-3
          - pr-3
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedItemsSection
seo:
  metaTitle: ''
  metaDescription: ''
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
isDraft: false
---
