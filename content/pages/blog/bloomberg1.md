---
title: 'Bloomberg1'
slug: bloomberg12
date: '2020-03-04'
excerpt: 'A high-level overview of my internship experience at Bloomberg with AMS SW.'
featuredImage:
  url: /images/BBG.webp
  altText: 'Bloomberg logo'
  styles:
    self:
      borderRadius: large
  type: ImageBlock
bottomSections:
  - title: Divider
    colors:
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
  - items:
      - title: About This Report
        tagline: ''
        subtitle: ''
        image:
          url: /images/BBG.webp
          altText: 'Company logo'
          styles:
            self:
              margin:
                - ml-3
          type: ImageBlock
        colors:
        styles:
          self:
            padding:
              - pt-6
              - pl-6
              - pb-6
              - pr-6
            textAlign: left
            borderColor: border-neutralAlt
            borderStyle: none
            borderWidth: 0
            borderRadius: none
            flexDirection: row
        type: FeaturedItem
    variant: small-list
    colors:
    styles:
      self:
        margin:
          - mb-20
        padding:
          - pt-0
          - pl-0
          - pb-0
          - pr-0
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedItemsSection
isFeatured: true
colors:
styles:
  self:
    padding:
      - pt-5
      - pl-5
      - pb-5
      - pr-5
    textAlign: center
    borderColor: border-light
    borderStyle: none
    borderWidth: 0
    borderRadius: none
    flexDirection: col
type: CustomHTMLLayout
author: content/data/nyree.json
allowed_elements:
  - html
  - head
  - body
  - meta
  - title
  - h1
  - h2
  - h3
  - h4
  - h5
  - h6
  - p
  - a
  - img
  - ul
  - ol
  - li
  - strong
  - em
  - blockquote
  - hr
  - br
  - div
  - span
  - table
  - thead
  - tbody
  - tr
  - th
  - td
  - header
  - nav
  - main
  - footer
  - section
  - article
  - aside
  - figure
  - figcaption
  - canvas
  - script
  - style
seo:
  metaTitle: Bloomberg Intelligence Analysis | AMS SW Experience
  metaDescription: A detailed overview of semiconductor analysis and market research experience at Bloomberg Intelligence, focusing on AMS SW.
  socialImage: /images/BBG.webp
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bloomberg Intelligence: ams-SW Semiconductor Analysis</title>
</head>
<body>
    <!-- Main content -->
    <div class="main-content">
        <!-- Stock Performance Chart -->
        <div class="chart-container">
            <div class="chart-header">
                <h3 class="chart-title">ams-SW Stock Performance vs Semiconductor Index</h3>
            </div>
            <div data-sb-field-path="content">
                <div data-sb-object-id="stockPerformanceChart">
                    <ChartBlock type="stock-performance" />
                </div>
            </div>
        </div>
    </div>
</body>
</html>
