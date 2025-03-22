'use client';

import { useState } from 'react';
import styles from '../../../styles/thirdbridge-new/ThirdBridge.module.css';
import { priceData, regionalPrices } from '../../../data/thirdbridge/analysisData';

/**
 * Price Data tab content for the main article
 */
export default function PriceDataTab() {
  const [activeYear, setActiveYear] = useState('2025');
  
  // This is a placeholder - in a real implementation, this would be 
  // replaced with a real chart library like Chart.js or Recharts
  const renderChart = () => {
    return (
      <div className={styles.chartPlaceholder}>
        <div className={styles.chartInfo}>
          <div className={styles.chartTitle}>Egg Price Index (2020-2025)</div>
          <div className={styles.chartSubtitle}>National Average Retail Price</div>
        </div>
        <div className={styles.chartImage}>
          <img 
            src="/images/thirdbridge/price-chart.png" 
            alt="Egg Price Trend Chart" 
          />
        </div>
        <div className={styles.chartLegend}>
          <div className={styles.legendItem}>
            <span className={styles.legendColor} style={{ backgroundColor: '#4A6FDC' }}></span>
            <span>Retail Price</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendColor} style={{ backgroundColor: '#F59E0B' }}></span>
            <span>Wholesale Price</span>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className={styles.tabContentSection}>
      <h3 className={styles.tabTitle}>Market Pricing Analysis</h3>
      
      <div className={styles.contentColumns}>
        <div className={styles.mainColumn}>
          {/* Price Chart Section */}
          <div className={styles.contentBlock}>
            <div className={styles.yearSelector}>
              {Object.keys(priceData).map((year) => (
                <button 
                  key={year}
                  className={`${styles.yearButton} ${activeYear === year ? styles.activeYear : ''}`}
                  onClick={() => setActiveYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>
            
            {renderChart()}
            
            <div className={styles.priceComparison}>
              <h4>Price Comparison by Region</h4>
              <div className={styles.priceMap}>
                <div className={styles.mapContainer}>
                  <img 
                    src="/images/thirdbridge/us-map.png" 
                    alt="US Regional Price Map" 
                  />
                </div>
                
                <div className={styles.regionsGrid}>
                  {regionalPrices.map((region) => (
                    <div key={region.name} className={styles.regionCard}>
                      <div className={styles.regionName}>{region.name}</div>
                      <div className={styles.regionPrice}>${region.price}</div>
                      <div className={`${styles.regionChange} ${region.change > 0 ? styles.priceIncrease : styles.priceDecrease}`}>
                        <i className={`fas fa-arrow-${region.change > 0 ? 'up' : 'down'}`}></i>
                        {Math.abs(region.change)}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.sideColumn}>
          <div className={styles.infoBox}>
            <h4>
              <i className="fas fa-chart-line"></i>
              Key Statistics for {activeYear}
            </h4>
            <div className={styles.statsList}>
              {priceData[activeYear].stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                  {stat.change && (
                    <div className={`${styles.statChange} ${stat.change > 0 ? styles.positive : styles.negative}`}>
                      <i className={`fas fa-arrow-${stat.change > 0 ? 'up' : 'down'}`}></i>
                      {Math.abs(stat.change)}%
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.infoBox}>
            <h4>
              <i className="fas fa-info-circle"></i>
              Price Drivers
            </h4>
            <ul className={styles.driversList}>
              {priceData[activeYear].drivers.map((driver, index) => (
                <li key={index}>
                  <div className={styles.driverName}>{driver.name}</div>
                  <div className={styles.driverImpact} style={{ backgroundColor: driver.impact === 'high' ? '#EF4444' : driver.impact === 'medium' ? '#F59E0B' : '#10B981' }}>
                    {driver.impact}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}