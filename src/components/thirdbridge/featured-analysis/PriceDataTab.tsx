'use client';

import { useState } from 'react';
import { priceData, regionalPrices } from '@/data/analysisData';
import { getSafePriceData, getSafeRegionalPrices, getSafeYears } from '@/components/thirdbridge/utils/dataHelpers';
import styles from '@/styles/ThirdBridge.module.css';
import EggPriceChart from '@/components/charts/EggPriceChart';

/**
 * Price Data tab content for the featured analysis
 */
export default function PriceDataTab() {
  const safeData = getSafePriceData(priceData);
  const safeRegionalPrices = getSafeRegionalPrices(regionalPrices);
  const years = getSafeYears(safeData);
  const [activeYear, setActiveYear] = useState(years[years.length - 1] || '2025');
  
  return (
    <div className={styles.tabContentSection}>
      <h3 className={styles.tabTitle}>Price Data Analysis</h3>
      
      <div className={styles.chartPlaceholder}>
        <div className={styles.chartInfo}>
          <div className={styles.chartTitle}>Egg Price Trends (2023-2025)</div>
          <div className={styles.chartSubtitle}>National Average Retail Price per Dozen (USD)</div>
        </div>
        <div className={styles.chartImage}>
          <EggPriceChart className={styles.eggPriceChart} />
        </div>
        <div className={styles.chartLegend}>
          <div className={styles.legendItem}>
            <div className={styles.legendColor} style={{ backgroundColor: '#0a2856' }}></div>
            <span>Retail Price</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendColor} style={{ backgroundColor: '#c19b4a' }}></div>
            <span>Producer Price</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendColor} style={{ backgroundColor: '#718096' }}></div>
            <span>Production Cost</span>
          </div>
        </div>
      </div>
      
      <div className={styles.contentColumns}>
        <div className={styles.mainColumn}>
          <div className={styles.yearSelector}>
            {years.map((year) => (
              <button 
                key={year}
                className={`${styles.yearButton} ${activeYear === year ? styles.activeYear : ''}`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
          
          <div className={styles.statsList}>
            {safeData[activeYear].stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={`${styles.statChange} ${stat.change >= 0 ? styles.positive : styles.negative}`}>
                  <i className={`fas fa-${stat.change >= 0 ? 'arrow-up' : 'arrow-down'}`}></i>
                  {Math.abs(stat.change)}%
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.contentBlock}>
            <h4 className={styles.contentSubtitle}>Primary Price Drivers in {activeYear}</h4>
            <ul className={styles.driversList}>
              {safeData[activeYear].drivers.map((driver, index) => (
                <li key={index}>
                  <span className={styles.driverName}>{driver.name}</span>
                  <span 
                    className={styles.driverImpact}
                    style={{ 
                      backgroundColor: 
                        driver.impact === 'high' ? '#e53e3e' : 
                        driver.impact === 'medium' ? '#dd6b20' : 
                        '#38a169'
                    }}
                  >
                    {driver.impact}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className={styles.sideColumn}>
          <div className={styles.priceComparison}>
            <h4>Regional Price Comparison</h4>
            <div className={styles.priceMap}>
              <div className={styles.mapContainer}>
                <img 
                  src="/images/thirdbridge/us-egg-price-map.jpg" 
                  alt="US Egg Price Map"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/400x300/0a2856/ffffff?text=US+Egg+Price+Map';
                  }}
                />
              </div>
              <div className={styles.regionsGrid}>
                {safeRegionalPrices.map((region, index) => (
                  <div key={index} className={styles.regionCard}>
                    <div className={styles.regionName}>{region.name}</div>
                    <div className={styles.regionPrice}>${region.price}</div>
                    <div className={`${styles.regionChange} ${styles.priceIncrease}`}>
                      <i className="fas fa-arrow-up"></i>
                      {region.change}% YoY
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}