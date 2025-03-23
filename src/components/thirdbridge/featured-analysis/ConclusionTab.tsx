'use client';

import { producerImplications, consumerImplications, keyTakeaway } from '@/data/analysisData';
import styles from '@/styles/ThirdBridge.module.css';

/**
 * Conclusion tab content for the featured analysis
 */
export default function ConclusionTab() {
  return (
    <div className={styles.tabContentSection}>
      <h3 className={styles.tabTitle}>Conclusion & Implications</h3>
      
      <div className={styles.keyTakeaway}>
        <div className={styles.takeawayHeader}>
          <i className="fas fa-quote-left"></i>
          <h4>Key Takeaway</h4>
        </div>
        <p className={styles.takeawayQuote}>{keyTakeaway}</p>
      </div>
      
      <div className={styles.contentColumns}>
        <div className={styles.mainColumn}>
          <div className={styles.marketImplications}>
            <h4 className={styles.contentSubtitle}>Market Implications</h4>
            <div className={styles.implicationsContainer}>
              <div className={styles.implicationsColumn}>
                <div className={styles.implicationsHeader}>
                  <i className="fas fa-industry"></i>
                  <h5>For Producers</h5>
                </div>
                <ul className={styles.implicationsList}>
                  {producerImplications.map((implication, index) => (
                    <li key={index}>
                      <span className={styles.implicationIcon}>
                        <i className="fas fa-angle-right"></i>
                      </span>
                      {implication}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.implicationsColumn}>
                <div className={styles.implicationsHeader}>
                  <i className="fas fa-users"></i>
                  <h5>For Consumers</h5>
                </div>
                <ul className={styles.implicationsList}>
                  {consumerImplications.map((implication, index) => (
                    <li key={index}>
                      <span className={styles.implicationIcon}>
                        <i className="fas fa-angle-right"></i>
                      </span>
                      {implication}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className={styles.contentBlock}>
            <h4 className={styles.contentSubtitle}>Long-term Industry Outlook</h4>
            <p className={styles.textLarge}>
              The egg industry is at a critical inflection point. While the current price volatility is expected to stabilize by late 2025, structural changes are becoming permanent. The transition to cage-free production will continue, with an estimated 70% of production expected to meet cage-free standards by 2030. This shift, coupled with ongoing industry consolidation, will likely result in a more segmented market with premium and value tiers becoming increasingly distinct.
            </p>
            <p className={styles.textLarge}>
              Regulatory fragmentation across states will become a defining feature of the industry landscape, requiring producers to maintain multiple production systems and supply chains. This complexity will favor larger producers with the capital to invest in diverse facilities and robust biosecurity measures, potentially accelerating the consolidation trend.
            </p>
          </div>
        </div>
        
        <div className={styles.sideColumn}>
          <div className={styles.outlookCard}>
            <div className={styles.outlookHeader}>5-Year Price Outlook</div>
            <div className={styles.outlookChart}>
              <img 
                src="/images/thirdbridge/price-forecast.jpg" 
                alt="5-Year Price Forecast"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/400x200/0a2856/ffffff?text=Price+Forecast+Chart';
                }}
              />
            </div>
            <div className={styles.outlookStats}>
              <div className={styles.outlookStat}>
                <span className={styles.statLabel}>2026 Projected Price</span>
                <span className={styles.statValue}>
                  <i className="fas fa-dollar-sign"></i> 4.72
                </span>
              </div>
              <div className={styles.outlookStat}>
                <span className={styles.statLabel}>2030 Projected Price</span>
                <span className={styles.statValue}>
                  <i className="fas fa-dollar-sign"></i> 5.86
                </span>
              </div>
              <div className={styles.outlookStat}>
                <span className={styles.statLabel}>5-Year Volatility Trend</span>
                <span className={styles.statValue}>
                  <i className="fas fa-arrow-down"></i> Decreasing
                </span>
              </div>
            </div>
          </div>
          
          <div className={styles.infoBox}>
            <h4>
              <i className="fas fa-tasks"></i>
              Recommended Actions
            </h4>
            <div className={styles.actionsList}>
              <div className={styles.actionItem}>
                <div className={styles.actionTitle}>
                  <i className="fas fa-eye"></i>
                  Monitor regulatory developments
                </div>
              </div>
              <div className={styles.actionItem}>
                <div className={styles.actionTitle}>
                  <i className="fas fa-chart-line"></i>
                  Analyze price sensitivity across segments
                </div>
              </div>
              <div className={styles.actionItem}>
                <div className={styles.actionTitle}>
                  <i className="fas fa-search"></i>
                  Identify regional arbitrage opportunities
                </div>
              </div>
              <div className={styles.actionItem}>
                <div className={styles.actionTitle}>
                  <i className="fas fa-shield-alt"></i>
                  Assess biosecurity investments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}