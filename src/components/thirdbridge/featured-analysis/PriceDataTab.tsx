'use client';

import React from 'react';
import { useState } from 'react';
import { priceData, regionalPrices } from '@/data';
import { getSafePriceData, getSafeYears, getSafeRegionalPrice, DEFAULT_REGIONAL_PRICE } from '@/components/thirdbridge/utils/dataHelpers';
import styles from '@/styles/ThirdBridge.module.css';
import EggPriceChart from '@/components/charts/EggPriceChart';

/**
 * Price Data tab content for the featured analysis
 */
export default function PriceDataTab() {
  const safePriceData = getSafePriceData(priceData);
  const years = getSafeYears(safePriceData);
  const [selectedYear, setSelectedYear] = useState(years[years.length - 1]); // Default to most recent year
  
  return (
    <div className={styles.tabContent}>
      <div className={styles.tabSection}>
        <div className={styles.priceComparison}>
          <h4>Regional Price Comparison</h4>
          <div className={styles.priceTable}>
            <div className={styles.priceTableHeader}>
              <div>Region</div>
              <div>Price (per dozen)</div>
              <div>Change</div>
            </div>
            {(regionalPrices || []).map((region, index) => {
              const safePrice = getSafeRegionalPrice(region);
              return (
                <div 
                  key={index} 
                  className={styles.priceTableRow}
                >
                  <div>{safePrice.name}</div>
                  <div>${safePrice.price}</div>
                  <div className={safePrice.change > 0 ? styles.priceUp : styles.priceDown}>
                    {safePrice.change > 0 ? '+' : ''}{safePrice.change}%
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className={styles.priceHistory}>
          <h4>Price History</h4>
          <div className={styles.yearSelector}>
            {years.map(year => (
              <button 
                key={year}
                className={`${styles.yearButton} ${selectedYear === year ? styles.yearButtonActive : ''}`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
          
          <div className={styles.chartContainer}>
            <EggPriceChart />
          </div>
        </div>
      </div>
      
      <div className={styles.tabSection}>
        <h4>Key Price Drivers for {selectedYear}</h4>
        <div className={styles.driversGrid}>
          {safePriceData[selectedYear]?.drivers.map((driver, index) => (
            <div key={index} className={styles.driverCard}>
              <div className={styles.driverTitle}>{driver.name}</div>
              <div className={`${styles.driverImpact} ${styles[`impact${driver.impact.charAt(0).toUpperCase() + driver.impact.slice(1)}`]}`}>
                {driver.impact.toUpperCase()} IMPACT
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.tabSection}>
        <h4>Key Statistics for {selectedYear}</h4>
        <div className={styles.statsGrid}>
          {safePriceData[selectedYear]?.stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={`${styles.statChange} ${stat.change >= 0 ? styles.statPositive : styles.statNegative}`}>
                {stat.change > 0 ? '+' : ''}{stat.change}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}