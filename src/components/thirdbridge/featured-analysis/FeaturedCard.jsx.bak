'use client';

import styles from '../../../styles/thirdbridge-new/ThirdBridge.module.css';

/**
 * Featured Analysis Card Component
 */
export default function FeaturedCard({ analysis }) {
  return (
    <div className={styles.featuredCard}>
      <div className={styles.cardImageContainer}>
        <img 
          src={analysis.imageUrl} 
          alt={analysis.title} 
          className={styles.cardImage} 
        />
      </div>
      
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <span className={styles.cardCategory}>{analysis.category}</span>
          <span className={styles.cardDate}>{analysis.date}</span>
        </div>
        
        <h3 className={styles.cardTitle}>{analysis.title}</h3>
        
        <p className={styles.cardDescription}>
          {analysis.preview}
        </p>
        
        <div className={styles.cardFooter}>
          <div className={styles.cardStats}>
            <div className={styles.cardStat}>
              <i className="fas fa-eye"></i>
              <span>{analysis.views}</span>
            </div>
            <div className={styles.cardStat}>
              <i className="fas fa-bookmark"></i>
              <span>{analysis.saves}</span>
            </div>
          </div>
          <button className={styles.cardButton}>Read Analysis</button>
        </div>
      </div>
    </div>
  );
}