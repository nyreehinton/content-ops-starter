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
  url: /images/4514E66D-6C1E-4DC4-9680-A1A70FBA90B1.jpeg
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
<div style="text-align: left">With the theoretical foundation established regarding Tesla’s software-driven odometer calculations, the next step focuses on quantifying discrepancies between Tesla’s energy-based odometer system and real-world mileage measurements. 1. What is the expected mileage based on the EPA-rated energy consumption standard?2.  What is the real-world mileage based on actual energy consumption rates?3.  How does the odometer reading compare to expected and real-world mileage?
4\.  What is the efficiency adjustment factor (η) used by Tesla’s system?
5\.  What is the discrepancy percentage between Tesla’s odometer and real-world data? The subject of this analysis is a 2020 Tesla Model Y Long Range, purchased in December 2022. The vehicle features an 82-kWh battery pack with an EPA-estimated range of 326 miles (at 265 Wh/mile efficiency).\`\`\`\`\`\`\`\`\`\`\`\````
```</div>

This section details the methods, data sources, equations, and key findings used to analyze whether the odometer readings accurately reflect physical distance traveled or if they were inflated based on energy efficiency manipulations.

<div style="text-align: center"># Data Sources</div>

The analysis relies on multiple independent data sources to cross-validate the mileage recorded by the Tesla Model Y. These data sources include:

<div style="text-align: center">**Vehicle Specifications**</div>

|                   Model                  |    Battery Capacity    | Original EPA Range    | Odometer Start | Odometer End |
| :--------------------------------------: | :--------------------: | --------------------- | -------------- | ------------ |
| 2020 Tesla Model Y Long Range Dual Motor | 78 kWh (75 kWh usable) | 326 miles (265 Wh/mi) | 36,772 miles   | 49,987 miles |

<div style="text-align: center"></div>

<div style="text-align: center">**Key Terms**</div>

|               **Term**               | **Description**                                                                                                                                              |
| :----------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|       **Energy Consumed (kWh)**      | Kilowatt-hours (kWh) expended, recorded via Tesla API.                                                                                                       |
|       **EPA-Rated Efficiency**       | 265 Wh/mi (a standardized value assigned during EPA testing to estimate energy consumption per mile under ideal conditions)                                  |
|           **Actual Wh/mi**           | Real-world energy efficiency, calculated by dividing energy consumed (kWh) by the actual physical distance traveled.                                         |
|          **Odometer Miles**          | Miles displayed on the vehicle’s touchscreen (software-calculated).                                                                                          |
| **Efficiency Adjustment Factor (η)** | A multiplier applied to Tesla’s energy-based mileage calculation to account for factors like driving behavior, battery health, and environmental conditions. |
|            **Discrepancy**           | The percentage difference between Tesla’s odometer reading and the real-world mileage, highlighting the extent of mileage inflation or deflation.            |

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

<div style="text-align: center"># Equations</div>

Parameter

Value

\| Energy Consumed (Total) | 5,582 kWh |

\| Odometer Reading (End of Period) | 13,228 miles |

\| EPA Wh/mi (Nominal Efficiency) | 265 Wh/mi |

\| Actual Wh/mi (Calculated) | 370 Wh/mi |

\| Physical GPS Mileage (Real-World Distance) | 11,743 miles |

Over the course of 6 months, the Tesla Model Y was charged consistently, adding 5,582 kWh of energy to the Findings

After conducting the technical analysis, the following major findings emerged:

\\#### A. Odometer Readings Exceeded Expected Mileage Based on Energy Consumption

• The Tesla Model Y recorded 13,228 miles over 7 months.

• Based on real-world efficiency (370 Wh/mi), the vehicle should have recorded 15,089 miles.

• However, using EPA-rated efficiency (265 Wh/mi), the mileage should have been 21,064 miles.

Both methods fail to explain the exact odometer reading, suggesting Tesla’s system dynamically alters mileage calculations.

C. Tesla’s Efficiency Factor Appears to Change Over Time

Reviewing charging logs over multiple months, the vehicle’s reported efficiency changed, even though no significant driving condition changes occurred.

<!---->

This suggests that Tesla is modifying the efficiency factor via software updates, affecting odometer readings dynamically.

D. Service Center Logs Show Odometer Jumps That Do Not Match Driving Behavior

Comparing Tesla’s service visit odometer records against charging logs revealed inconsistencies.

<!---->

Mileage increased faster than expected in the weeks leading up to warranty expiration, suggesting possible manipulation to accelerate warranty end dates.

Step 1: Baseline Energy-to-Mile Conversion
Formula:

Data Inputs:
•	Total energy added via charging: 5,582 kWh
•	EPA efficiency rate: 0.265 kWh/mi (265 Wh/mi)

Calculation:

Interpretation:
If the vehicle operated at EPA efficiency, 5,582 kWh of energy should theoretically equate to 21,064 miles driven.
Step 2: Real-World Energy Efficiency
Formula:

Data Inputs:
•	Total physical distance (GPS): 11,743 miles
•	Total energy consumed: 5,582,000 Wh (5,582 kWh × 1,000)
Calculation:

Interpretation:
Actual energy consumption averaged 475 Wh/mi – 79% higher than EPA’s 265 Wh/mi rating.
