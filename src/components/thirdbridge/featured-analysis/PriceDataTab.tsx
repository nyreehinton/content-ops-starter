'use client';

import React from 'react';
import styles from '../../../styles/thirdbridge-new/ThirdBridge.module.css';

const PriceDataTab: React.FC = () => {
  return (
    <div className={styles.tabContentContainer}>
      <h3 className={styles.tabTitle}>Market Data & Pricing</h3>
      
      <div className={styles.overviewSection}>
        <p>
          As the NLP market matures, pricing models and revenue generation strategies have evolved significantly.
          This section analyzes current pricing trends, cost structures, and key metrics across the 
          major NLP service providers and technology segments.
        </p>
      </div>
      
      <div className={styles.chartSection}>
        <h3 className={styles.sectionTitle}>Service Pricing Trends</h3>
        <div className={styles.chartContainer}>
          <img 
            src="/images/thirdbridge/pricing-trends-chart.jpg" 
            alt="NLP Service Pricing Trends" 
            className={styles.chartImage}
          />
        </div>
        <p className={styles.projectionNotes}>
          Chart shows normalized pricing per 1M tokens across major LLM providers, indexed to January 2022 levels.
          Note the significant price reduction for inference costs while model fine-tuning costs remain relatively stable.
        </p>
      </div>
      
      <div className={styles.tableContainer}>
        <h3 className={styles.sectionTitle}>Comparative Pricing Analysis</h3>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Model</th>
              <th>Input (per 1M tokens)</th>
              <th>Output (per 1M tokens)</th>
              <th>Fine-tuning (per hour)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OpenAI</td>
              <td>GPT-4o</td>
              <td>$5.00</td>
              <td>$15.00</td>
              <td>$100.00</td>
            </tr>
            <tr>
              <td>Google</td>
              <td>Gemini Pro</td>
              <td>$4.00</td>
              <td>$12.00</td>
              <td>$120.00</td>
            </tr>
            <tr>
              <td>Anthropic</td>
              <td>Claude 3 Opus</td>
              <td>$6.00</td>
              <td>$18.00</td>
              <td>$140.00</td>
            </tr>
            <tr>
              <td>Cohere</td>
              <td>Command R+</td>
              <td>$3.00</td>
              <td>$10.00</td>
              <td>$90.00</td>
            </tr>
            <tr>
              <td>OpenAI</td>
              <td>GPT-3.5</td>
              <td>$0.50</td>
              <td>$1.50</td>
              <td>$40.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className={styles.chartSection}>
        <h3 className={styles.sectionTitle}>Enterprise Spending Projections</h3>
        <div className={styles.projectionChart}>
          <img 
            src="/images/thirdbridge/enterprise-spending-chart.jpg" 
            alt="Enterprise NLP Spending Projections" 
            className={styles.chartImage}
          />
        </div>
        <p className={styles.projectionNotes}>
          Chart shows projected enterprise spending on NLP services by industry through 2028.
          Financial services and healthcare sectors are anticipated to lead growth, with compound
          annual growth rates of 37% and 34% respectively.
        </p>
      </div>
      
      <div className={styles.overviewSection}>
        <h3 className={styles.sectionTitle}>Key Market Observations</h3>
        <ul className={styles.implicationList}>
          <li>
            <strong>Price Compression:</strong> Service pricing has decreased by an average of 31% year-over-year
            as competition increases and technology matures.
          </li>
          <li>
            <strong>Premium Tier Growth:</strong> Despite overall price compression, premium service tiers 
            have grown 47% faster than base-level offerings, indicating strong enterprise willingness 
            to pay for advanced capabilities.
          </li>
          <li>
            <strong>Bundling Strategies:</strong> Major providers are increasingly bundling NLP services
            with other cloud offerings, making direct price comparisons more difficult.
          </li>
          <li>
            <strong>Volume Discounting:</strong> Volume-based discounting has become standard, with 
            enterprise customers receiving 20-40% discounts on published rates.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriceDataTab; 