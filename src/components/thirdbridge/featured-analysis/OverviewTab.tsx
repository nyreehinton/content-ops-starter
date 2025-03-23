'use client';

import { mainArticle } from '@/data/analysisData';
import styles from '@/styles/ThirdBridge.module.css';

/**
 * Overview tab content for the featured analysis
 */
export default function OverviewTab() {
  return (
    <div className={styles.tabContentSection}>
      <h3 className={styles.tabTitle}>Overview</h3>
      
      <div className={styles.contentColumns}>
        <div className={styles.mainColumn}>
          <div className={styles.contentBlock}>
            <h4 className={styles.contentSubtitle}>Executive Summary</h4>
            <p className={styles.textLarge}>
              {mainArticle.executiveSummary}
            </p>
          </div>
          
          <div className={styles.keyPoints}>
            <h4>Key Points</h4>
            <ul>
              {mainArticle.keyPoints.map((point, index) => (
                <li key={index}>
                  <div className={styles.keyPointIcon}>
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className={styles.keyPointText}>{point}</div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.contentBlock}>
            <h4 className={styles.contentSubtitle}>Market Context</h4>
            <p className={styles.textLarge}>
              The egg industry has been on a path of increasing consolidation for decades, with the number of commercial egg producers declining by 58% since 2000. This market concentration, while creating economies of scale during normal operations, became a liability during the avian influenza outbreak when large producers faced simultaneous disruptions. Additionally, the industry's just-in-time inventory practices, optimized for the perishable nature of eggs, left little buffer when supply disruptions occurred.
            </p>
          </div>
        </div>
        
        <div className={styles.sideColumn}>
          <div className={styles.infoBox}>
            <h4>
              <i className="fas fa-lightbulb"></i>
              Highlights
            </h4>
            <ul>
              {mainArticle.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.analystInfo}>
            <img 
              src={mainArticle.analyst.imageUrl} 
              alt={mainArticle.analyst.name}
              className={styles.analystImage}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/100x100/0a2856/ffffff?text=NH';
              }}
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
  );
}