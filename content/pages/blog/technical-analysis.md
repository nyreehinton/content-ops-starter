---
type: PostLayout
title: 'Part 2: Technical Analysis of A Tesla Model Y’s Odometer'
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
  url: /images/IMG_1242.png
bottomSections: []
isFeatured: false
isDraft: false
seo:
  metaTitle: What is a Design System
  metaDescription: You can add the excerpt and main keywords of your blog post here.
  socialImage: /images/abstract-feature3.svg
  type: Seo
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: row
    textAlign: left
---
<div style="text-align: center">## Data Sources, Equations, and Findings</div>

With the theoretical foundation established regarding Tesla’s software-driven odometer calculations, the next step is to implement a rigorous technical analysis using real-world data sources from a subject vehicle: a 2020 Tesla Model Y.

This section details the methods, data sources, equations, and key findings used to analyze whether the odometer readings accurately reflect physical distance traveled or if they were inflated based on energy efficiency manipulations.

![](/images/IMG_1248.jpeg)

<div style="text-align: center">### 1. Data Sources and Collection Process</div>

The analysis relies on multiple independent data sources to cross-validate the mileage recorded by the Tesla Model Y. These data sources include:

#### A. Tesla’s In-Car Data Logs

Tesla vehicles store various logs locally, including:

*   Odometer Readings: The official mileage displayed inside the vehicle.

<!---->

*   Trip Data: Energy efficiency metrics (Wh/mi), distance traveled, and energy consumed.

<!---->

*   Range Estimations: Projected range remaining based on battery percentage.

The Tesla Vehicle Data Request provided official logs that included:

*   Charge Start/End Time (UTC).

<!---->

*   Charge Duration (s).

<!---->

*   Energy Added (kWh).

<!---->

*   Odometer Readings (not consistently available).

#### B. Service Center Odometer Logs

Tesla service visits provide third-party validation of mileage readings. By comparing these timestamped odometer readings to the in-car logs, we can check whether the mileage increase was reasonable.

#### C. Charging Session Data

By analyzing charging logs, we can independently estimate how far the vehicle should have traveled based on energy consumption rather than odometer data.

#### D. GPS-Tracked Mileage vs. Odometer Mileage 

By manually tracking actual road miles driven using Google Maps or GPS logs, we can compare them to Tesla’s odometer readings.

<div style="text-align: center">### 2. Equations and Methodology for Technical Analysis</div>

#### A. Energy Efficiency Calculations

Tesla’s energy efficiency is a key variable in determining mileage:

> \text{Miles} = \frac{\text{Energy Added (kWh)} \times 1,000}{\text{Energy Efficiency (Wh/mile)}}

Where:

*   Energy Added (kWh) is obtained from charging logs.

<!---->

*   Energy Efficiency (Wh/mile) is based on real-world trip data from the in-car system.

Example Calculation:

*   If 5,582 kWh of energy was added and the EPA-rated efficiency is 265 Wh/mile, then: 

> \frac{5,582 \times 1,000}{265} = 21,064 \text{ miles (expected)}

*   If real-world efficiency is 370 Wh/mile, then: 

> \frac{5,582 \times 1,000}{370} = 15,089 \text{ miles (expected)}

*   However, actual odometer readings showed only 13,228 miles recorded.

This discrepancy suggests that Tesla’s mileage calculations are not purely based on physical travel distance but are instead influenced by software-based estimations.

#### B. Verifying Tesla’s Energy-to-Miles Conversion Against Odometer Data

Tesla’s mileage calculations assume an energy efficiency conversion factor stored in memory, which can be adjusted remotely.

The odometer reading is computed using:

> \text{Odometer Increment} = \frac{\text{Energy Consumed (Wh)}}{\text{Stored Efficiency Factor (Wh/mile)}} 

Since Tesla’s stored efficiency factor can be modified via software updates, it means Tesla can adjust how many miles get recorded per unit of energy used—a key method of inflating odometer readings. 

Verification Process:

1\. Compare actual road miles traveled (GPS data) to Tesla’s odometer reading.

2\. Compare expected miles driven based on charging logs to Tesla’s odometer.

3\. Analyze efficiency discrepancies between Tesla’s displayed values and real-world results.

If the actual road miles consistently fall below Tesla’s odometer readings, it suggests Tesla’s efficiency factor is being manipulated to inflate recorded miles.

#### C. Driving Behavior Multipliers and Their Effect on Mileage

Tesla’s system applies a multiplier to energy efficiency based on driving style.

The efficiency calculation uses: 

> \text{Adjusted Efficiency} = \text{Base Efficiency} \times \text{Driving Mode Multiplier} 

Where:

*   Aggressive Mode Multiplier (<1.0) inflates mileage, increasing recorded miles per kWh.

<!---->

*   Efficient Mode Multiplier (>1.0) reduces recorded mileage, making energy usage seem more efficient.

Example:

*   If normal efficiency is 4 miles/kWh, but an aggressive driving penalty of 0.95 is applied:

> 4 \times 0.95 = 3.8 \text{ miles/kWh}

This means more miles will be logged than actual road distance traveled.

If a Tesla continuously logs mileage at a reduced efficiency due to driving style penalties, the total odometer reading will increase faster than expected.

<div style="text-align: center">### 3. Key Findings from the Data Analysis</div>

After conducting the technical analysis, the following major findings emerged:

#### A. Odometer Readings Exceeded Expected Mileage Based on Energy Consumption

• The Tesla Model Y recorded 13,228 miles over 7 months.

• Based on real-world efficiency (370 Wh/mi), the vehicle should have recorded 15,089 miles.

• However, using EPA-rated efficiency (265 Wh/mi), the mileage should have been 21,064 miles.

• Both methods fail to explain the exact odometer reading, suggesting Tesla’s system dynamically alters mileage calculations.

#### B. GPS-Tracked Mileage vs. Tesla Odometer Mileage Showed Discrepancies

• Multiple trips were tracked via Google Maps and GPS logs.

• Odometer consistently showed more miles than actual distance traveled.

• Some trips recorded 10-20% more miles than the actual physical route.

#### C. Tesla’s Efficiency Factor Appears to Change Over Time

*   Reviewing charging logs over multiple months, the vehicle’s reported efficiency changed, even though no significant driving condition changes occurred.

<!---->

*   This suggests that Tesla is modifying the efficiency factor via software updates, affecting odometer readings dynamically.

#### D. Service Center Logs Show Odometer Jumps That Do Not Match Driving Behavior

*   Comparing Tesla’s service visit odometer records against charging logs revealed inconsistencies.

<!---->

*   Mileage increased faster than expected in the weeks leading up to warranty expiration, suggesting possible manipulation to accelerate warranty end dates.

<div style="text-align: center">### 4. Implications of the Findings</div>

*   Warranty Expiration Acceleration: Inflated mileage readings lead to premature warranty expirations, forcing owners to pay out-of-pocket for repairs.

<!---->

*   Overstated Lease Mileage: Tesla owners with leases may face higher mileage overage fees if the odometer records more miles than actually driven.

<!---->

*   Obscured Battery Degradation: By adjusting efficiency factors, Tesla can mask real battery degradation, making it seem like the vehicle is more efficient than it truly is. 

Tesla owners should be aware that:

1.  Your odometer reading may not reflect the actual road miles you’ve driven.

2.  Tesla can remotely modify efficiency calculations, affecting how miles are recorded.

3.  Driving style penalties can artificially inflate odometer readings.

Stay tuned for further updates and a deeper look into Tesla’s software manipulation strategies.
