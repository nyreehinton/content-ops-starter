'use client';

import styles from '../../../styles/thirdbridge-new/ThirdBridge.module.css';
import { producerImplications, consumerImplications, calMaineImpact, keyTakeaway } from '../../../data/thirdbridge/analysisData';

/**
 * Conclusion tab content for the main article
 */
export default function ConclusionTab() {
  return (
    <div className={styles.tabContentSection}>
      <h3 className={styles.tabTitle}>Market Implications & Outlook</h3>
      
      <div className={styles.contentColumns}>
        <div className={styles.mainColumn}>
          <div className={styles.contentBlock}>
            {/* California & Maine Regulations Impact */}
            <div className={styles.impactAnalysis}>
              <h4 className={styles.contentSubtitle}>
                California & Maine Regulations: Impact Assessment
              </h4>
              
              <div className={styles.impactGrid}>
                {calMaineImpact.map((impact, index) => (
                  <div key={index} className={styles.impactCard}>
                    <div className={styles.impactHeader}>
                      <div className={styles.impactIcon}>
                        <i className={impact.icon}></i>
                      </div>
                      <h5 className={styles.impactTitle}>{impact.title}</h5>
                    </div>
                    <div className={styles.impactBody}>
                      <p>{impact.description}</p>
                    </div>
                    <div className={styles.impactFooter}>
                      <div className={styles.impactSeverity} style={{
                        backgroundColor: impact.severity === 'high' ? '#EF4444' : 
                                       impact.severity === 'medium' ? '#F59E0B' : '#10B981'
                      }}>
                        {impact.severity} impact
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Market Implications */}
            <div className={styles.marketImplications}>
              <h4 className={styles.contentSubtitle}>Market Implications</h4>
              
              <div className={styles.implicationsContainer}>
                <div className={styles.implicationsColumn}>
                  <div className={styles.implicationsHeader}>
                    <i className="fas fa-industry"></i>
                    <h5>For Producers</h5>
                  </div>
                  <ul className={styles.implicationsList}>
                    {producerImplications.map((item, index) => (
                      <li key={index}>
                        <span className={styles.implicationIcon}>
                          <i className="fas fa-angle-right"></i>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.implicationsColumn}>
                  <div className={styles.implicationsHeader}>
                    <i className="fas fa-shopping-cart"></i>
                    <h5>For Consumers</h5>
                  </div>
                  <ul className={styles.implicationsList}>
                    {consumerImplications.map((item, index) => (
                      <li key={index}>
                        <span className={styles.implicationIcon}>
                          <i className="fas fa-angle-right"></i>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Key Takeaway */}
            <div className={styles.keyTakeaway}>
              <div className={styles.takeawayHeader}>
                <i className="fas fa-lightbulb"></i>
                <h4>Key Takeaway</h4>
              </div>
              <blockquote className={styles.takeawayQuote}>
                {keyTakeaway}
              </blockquote>
            </div>
          </div>
        </div>
        
        <div className={styles.sideColumn}>
          {/* Outlook */}
          <div className={styles.infoBox}>
            <h4>
              <i className="fas fa-chart-line"></i>
              3-Year Outlook
            </h4>
            <div className={styles.outlookCard}>
              <div className={styles.outlookHeader}>Price Projection</div>
              <div className={styles.outlookChart}>
                {/* Placeholder for chart */}
                <img src="/images/thirdbridge/thirdbridge/price-projection.png" alt="3-Year Price Projection" />
              </div>
              <div className={styles.outlookStats}>
                <div className={styles.outlookStat}>
                  <div className={styles.statLabel}>Short-term (6 mo)</div>
                  <div className={styles.statValue}>
                    <i className="fas fa-arrow-up"></i> Volatile
                  </div>
                </div>
                <div className={styles.outlookStat}>
                  <div className={styles.statLabel}>Mid-term (1-2 yr)</div>
                  <div className={styles.statValue}>
                    <i className="fas fa-arrow-right"></i> Stabilizing
                  </div>
                </div>
                <div className={styles.outlookStat}>
                  <div className={styles.statLabel}>Long-term (3 yr)</div>
                  <div className={styles.statValue}>
                    <i className="fas fa-arrow-down"></i> Declining
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Actions */}
          <div className={styles.infoBox}>
            <h4>
              <i className="fas fa-tasks"></i>
              Recommended Actions
            </h4>
            <div className={styles.actionsList}>
              <div className={styles.actionItem}>
                <div className={styles.actionTitle}>
                  <i className="fas fa-file-alt"></i>
                  <span>Download Full Report</span>
                </div>
              </div>
              <div className={styles.actionItem}>
                <div className={styles.actionTitle}>
                  <i className="fas fa-chart-pie"></i>
                  <span>View Interactive Data</span>
                </div>
              </div>
              <div className={styles.actionItem}>
                <div className={styles.actionTitle}>
                  <i className="fas fa-user-tie"></i>
                  <span>Speak with an Analyst</span>
                </div>
              </div>
              <div className={styles.actionItem}>
                <div className={styles.actionTitle}>
                  <i className="fas fa-rss"></i>
                  <span>Subscribe to Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}