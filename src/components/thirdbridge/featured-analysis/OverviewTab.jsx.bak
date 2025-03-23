'use client';

import styles from '../../../styles/thirdbridge-new/ThirdBridge.module.css';
import { mainArticle } from '../../../data/thirdbridge/analysisData';

/**
 * Overview tab content for the main article
 */
export default function OverviewTab() {
  return (
    <div className={styles.tabContentSection}>
      <h3 className={styles.tabTitle}>Executive Summary</h3>
      
      <div className={styles.contentColumns}>
        <div className={styles.mainColumn}>
          <div className={styles.contentBlock}>
            <p className={styles.textLarge}>
              {mainArticle.executiveSummary}
            </p>
            
            <div className={styles.keyPoints}>
              <h4>Key Market Dynamics</h4>
              <ul>
                {mainArticle.keyPoints.map((point, index) => (
                  <li key={index}>
                    <span className={styles.keyPointIcon}>
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className={styles.keyPointText}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.sideColumn}>
          <div className={styles.infoBox}>
            <h4>
              <i className="fas fa-lightbulb"></i>
              Key Highlights
            </h4>
            <ul>
              {mainArticle.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.infoBox}>
            <h4>
              <i className="fas fa-user-tie"></i>
              Lead Analyst
            </h4>
            <div className={styles.analystInfo}>
              <img 
                src={mainArticle.analyst.imageUrl} 
                alt={mainArticle.analyst.name}
                className={styles.analystImage}
              />
              <div>
                <div className={styles.analystName}>{mainArticle.analyst.name}</div>
                <div className={styles.analystTitle}>{mainArticle.analyst.title}</div>
              </div>
            </div>
            <p className={styles.analystBio}>{mainArticle.analyst.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}