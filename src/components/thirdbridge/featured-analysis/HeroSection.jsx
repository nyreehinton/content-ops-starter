'use client';

import styles from '../../../styles/thirdbridge-new/ThirdBridge.module.css';
import { mainArticle } from '../../../data/thirdbridge/analysisData';

/**
 * Hero section component showing the main featured article
 */
export default function HeroSection() {
  return (
    <div className={styles.heroImage}>
      <img 
        src={mainArticle.imageUrl} 
        alt={mainArticle.title} 
      />
      <div className={styles.heroOverlay}>
        <div className="flex items-center mb-2">
          <span className={styles.heroCategory}>{mainArticle.category}</span>
          <span className={styles.heroDate}>{mainArticle.date}</span>
        </div>
        
        <h2 className={styles.heroTitle}>
          {mainArticle.title}
        </h2>
        
        <p className={styles.heroDescription}>
          {mainArticle.description}
        </p>
        
        <div className={styles.heroButtons}>
          <button className={styles.primaryButton}>
            <i className="fas fa-file-alt"></i>
            <span>Read Full Analysis</span>
          </button>
          <div className={styles.actionButtons}>
            <button className={styles.actionButton}>
              <i className="far fa-bookmark"></i>
              <span>Save</span>
            </button>
            <button className={styles.actionButton}>
              <i className="fas fa-share-alt"></i>
              <span>Share</span>
            </button>
            <button className={styles.actionButton}>
              <i className="fas fa-download"></i>
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}