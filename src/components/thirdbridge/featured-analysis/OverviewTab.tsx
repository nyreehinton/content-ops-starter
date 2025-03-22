'use client';

import React from 'react';
import styles from '../../../styles/thirdbridge-new/ThirdBridge.module.css';

const OverviewTab: React.FC = () => {
  return (
    <div className={styles.tabContentContainer}>
      <h3 className={styles.tabTitle}>Market Overview</h3>
      
      <div className={styles.overviewSection}>
        <p>
          The Natural Language Processing (NLP) market has experienced unprecedented growth over the past five years, 
          with a compound annual growth rate (CAGR) of 32.4% from 2018 to 2023. This growth has been driven primarily 
          by advances in transformer models, increased computational resources, and a growing demand for automation 
          in text-intensive industries.
        </p>
        <p>
          Large language models (LLMs) have become the dominant technology in the space, with applications ranging 
          from customer service automation to content generation and advanced analytics. The market is expected to 
          reach $43.9 billion by 2027, representing a significant opportunity for investors and enterprises alike.
        </p>
      </div>
      
      <div className={styles.keyPointsContainer}>
        <h3 className={styles.sectionTitle}>Key Findings</h3>
        <div className={styles.keyPoints}>
          <div className={styles.keyPoint}>
            <div className={styles.keyPointIcon}>
              <i className="fas fa-chart-line"></i>
            </div>
            <div className={styles.keyPointContent}>
              <h4>Accelerating Growth</h4>
              <p>NLP market growing at 32.4% CAGR, significantly outpacing broader AI market growth of 21.3%.</p>
            </div>
          </div>
          
          <div className={styles.keyPoint}>
            <div className={styles.keyPointIcon}>
              <i className="fas fa-trophy"></i>
            </div>
            <div className={styles.keyPointContent}>
              <h4>Market Leaders</h4>
              <p>OpenAI, Google, and Anthropic control 78% of the enterprise LLM market by revenue.</p>
            </div>
          </div>
          
          <div className={styles.keyPoint}>
            <div className={styles.keyPointIcon}>
              <i className="fas fa-users"></i>
            </div>
            <div className={styles.keyPointContent}>
              <h4>Adoption Trends</h4>
              <p>Enterprise adoption has reached 47% in 2023, up from 12% in 2020.</p>
            </div>
          </div>
          
          <div className={styles.keyPoint}>
            <div className={styles.keyPointIcon}>
              <i className="fas fa-globe"></i>
            </div>
            <div className={styles.keyPointContent}>
              <h4>Regional Dynamics</h4>
              <p>North America leads with 42% market share, with Asia-Pacific showing fastest growth at 38.7% CAGR.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.chartSection}>
        <h3 className={styles.sectionTitle}>Market Size Growth</h3>
        <div className={styles.chartContainer}>
          <img 
            src="/images/thirdbridge/market-growth-chart.jpg" 
            alt="NLP Market Growth Chart" 
            className={styles.chartImage}
          />
          <div className={styles.chartLegend}>
            <div className={styles.legendItem}>
              <div className={styles.legendColor} style={{ backgroundColor: '#4E79A7' }}></div>
              <span>North America</span>
            </div>
            <div className={styles.legendItem}>
              <div className={styles.legendColor} style={{ backgroundColor: '#F28E2B' }}></div>
              <span>Europe</span>
            </div>
            <div className={styles.legendItem}>
              <div className={styles.legendColor} style={{ backgroundColor: '#59A14F' }}></div>
              <span>Asia-Pacific</span>
            </div>
            <div className={styles.legendItem}>
              <div className={styles.legendColor} style={{ backgroundColor: '#B6992D' }}></div>
              <span>Rest of World</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.mapSection}>
        <h3 className={styles.sectionTitle}>Global Adoption Heatmap</h3>
        <div className={styles.mapContainer}>
          <img 
            src="/images/thirdbridge/adoption-heatmap.jpg" 
            alt="Global NLP Adoption Heatmap" 
            className={styles.mapImage}
          />
          <p className={styles.mapCaption}>
            Darker regions indicate higher adoption rates of NLP technologies in enterprise environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab; 