---
type: PostLayout
title: Comparative Analysis of A Tesla Model Y’s Odometer (Part 2)
slug: technical-analysis
date: '2025-02-14'
excerpt: >-
  With the theoretical foundation established regarding Tesla’s software-driven
  odometer calculations, the next step is to implement a rigorous technical
  analysis using real-world data sources from a subject vehicle: a 2020 Tesla
  Model Y. This section details the methods, data sources, equations, and key
  findings used to analyze whether the odometer readings accurately reflect
  physical distance traveled.
featuredImage:
  altText: Thumbnail
  type: ImageBlock
  styles:
    self:
      borderRadius: medium
      padding:
        - pt-0
        - pl-0
        - pb-0
        - pr-0
  url: /images/image (3).jpg
bottomSections: []
isFeatured: false
isDraft: false
seo:
  metaTitle: ''
  metaDescription: ''
  socialImage: /images/4514E66D-6C1E-4DC4-9680-A1A70FBA90B1.jpeg
  type: Seo
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: row
    textAlign: left
---
With the theoretical foundation established regarding Tesla’s software-driven odometer calculations, the next step focuses on quantifying discrepancies between Tesla’s energy-based odometer system and real-world mileage measurements.
![](/images/1F8BAC34-F885-46D9-882B-03D772A6BDD7.png)

The subject of this analysis is a 2020 Tesla Model Y Long Range, purchased in December 2022. The vehicle features an 82-kWh battery pack with an EPA-estimated range of 326 miles (at 265 Wh/mile efficiency).

This section details the methods, data sources, equations, and key findings used to analyze whether the odometer readings accurately reflect physical distance traveled or if they were inflated based on energy efficiency manipulations.

<div style="text-align: center"># Data Sources</div>

The analysis relies on multiple independent data sources to cross-validate the mileage recorded by the Tesla Model Y. These data sources include:

<div style="text-align: center">**Vehicle Specifications**</div>

|                   Model                  |    Battery Capacity    | Original EPA Range    | Odometer Start | Odometer End |
| :--------------------------------------: | :--------------------: | --------------------- | -------------- | ------------ |
| 2020 Tesla Model Y Long Range Dual Motor | 78 kWh (75 kWh usable) | 326 miles (265 Wh/mi) | 36,772 miles   | 49,987 miles |

<div style="text-align: center"></div>

<div style="text-align: center">**Key Terms**</div>

|               **Term**               | **Description**                                                                                                                                                                                     |
| :----------------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       **Energy Consumed (kWh)**      | The total amount of electrical energy used by the vehicle over a given period of time or distance.                                                                                                  |
|             **EPA Wh/mi**            | The U.S. Environmental Protection Agency's (EPA) estimate of energy consumption per mile in watt-hours, based on a controlled test cycle. For the 2020 Model Y Long Range, this value is 265 Wh/mi. |
|           **Vehicle Wh/mi**          | Real-world energy efficiency, calculated by dividing energy consumed (kWh) by the actual physical distance traveled.                                                                                |
|          **Odometer Miles**          | Miles displayed on the vehicle’s touchscreen (software-calculated).                                                                                                                                 |
| **Efficiency Adjustment Factor (η)** | A multiplier applied to Tesla’s energy-based mileage calculation to account for factors like driving behavior, battery health, and environmental conditions.                                        |
|            **Discrepancy**           | The percentage difference between Tesla’s odometer reading and the real-world mileage, highlighting the extent of mileage inflation or deflation.                                                   |

A. Tesla’s In-Car Data Logs

Tesla vehicles store various logs locally, including:
Odometer Readings: The official mileage displayed inside the vehicle.
Trip Data: Energy efficiency metrics (Wh/mi), distance traveled, and energy consumed.
Range Estimations: Projected range remaining based on battery percentage.

The Tesla Vehicle Data Request provided official logs that included:

Charge Start/End Time (UTC)
Charge Duration (s).
Energy Added (kWh).
Odometer Readings (not consistently available).

B. Service Center Odometer Logs

Tesla service visits provide third-party validation of mileage readings. By comparing these timestamped odometer readings to the in-car logs, we can check whether the mileage increase was reasonable.

C. Charging Session Data

By analyzing charging logs, we can independently estimate how far the vehicle should have traveled based on energy consumption rather than odometer data.

***

<div style="text-align: center">## Parameters</div>

1.  Input Data from Case Study: For this analysis, we used telematics and charging data collected over a 7-month period with the following details:

| Metric                       | Value   | Source           |
| ---------------------------- | ------- | ---------------- |
| **Energy Consumed (kWh)**    | 5,582   | Charging Logs    |
| **EPA Efficiency (Wh/mi)**   | 265     | EPA Rating       |
| **Tesla Efficiency (Wh/mi)** | 299–370 | Tesla Energy App |
| **Odometer Mileage (miles)** | 13,228  | Tesla Dashboard  |
| **Physical Mileage (miles)** | 11,743  | GPS Tracking     |

### **Step-by-Step Calculations**

#### **1. EPA-Estimated Mileage**

Using the EPA efficiency value of **265 Wh/mi**, we calculate the expected mileage based on the total energy consumed:

![](/images/EPA-Estimated%20Mileage.png)

***

#### **2. Tesla Energy-Efficiency Mileage**

Next, we calculate mileage using Tesla’s real-world efficiency values, which ranged from **299 to 370 Wh/mi** during the study. Using the **average efficiency (370 Wh/mi)** for simplicity:

![](/images/Tesla%20Energy-Efficiency%20Mileage.png)

This value represents the expected mileage based on Tesla’s **real-world energy consumption metrics**.

***

#### **3. Physical Mileage**

The **physical mileage** was calculated using the sum of GPS-verified trip distances:

![](/images/Physical%20Mileage.png)

This represents the actual ground distance traveled and serves as the baseline for comparison.

***

#### **4. Odometer Discrepancy**

Finally, we calculate the **percentage discrepancy** between Tesla’s reported odometer mileage and the physically measured mileage:

![](/images/Odometer%20Discrepancy.png)

Tesla’s odometer reading is **inflated by 12.64%** relative to the actual physical distance measured.

***

## Findings

### Mileage Comparison

| Metric                       | Value (miles) | Percent Difference   |
| ---------------------------- | ------------- | -------------------- |
| **EPA-Estimated Mileage**    | 21,064        | +79.4% (vs Odometer) |
| **Tesla Efficiency Mileage** | --            | +% (vs Odometer)     |
| **Odometer Mileage**         | --            | +% (vs Physical)     |
| **Physical Mileage**         | --            | Baseline             |

### Observations

**EPA Overestimation**: The EPA mileage expectation exceeds odometer mileage by nearly 80%, reflecting the limitations of standardized laboratory tests for real-world driving.

