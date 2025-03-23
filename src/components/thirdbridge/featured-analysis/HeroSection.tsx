'use client';

import { mainArticle } from '@/data/analysisData';
import { getSafeArticle } from '@/components/thirdbridge/utils/dataHelpers';
import styles from '@/styles/ThirdBridge.module.css';
import Link from 'next/link';

/**
 * Hero section displaying the main featured article with overlay
 */
export default function HeroSection() {
  const article = getSafeArticle(mainArticle);
  return (
    <div className={styles.heroImage}>
      {/* Use a placeholder image if the original image is not available */}
      <img
        src="/images/thirdbridge/egg-price-hero.jpg"
        alt={article.title}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = 'https://placehold.co/1200x500/0a2856/ffffff?text=Egg+Price+Analysis';
        }}
      />
      <div className={styles.heroOverlay}>
        <span className={styles.heroCategory}>{article.category}</span>
        <span className={styles.heroDate}>{article.date}</span>
        <h2 className={styles.heroTitle}>{article.title}</h2>
        <p className={styles.heroDescription}>{article.description}</p>
        <div className={styles.heroButtons}>
          <Link href="/egg-price-surge-2025">
            <button className={styles.primaryButton}>
              <i className="fas fa-eye"></i>
              Read Full Analysis
            </button>
          </Link>
          <div className={styles.actionButtons}>
            <button className={styles.actionButton}>
              <i className="fas fa-bookmark"></i>
              Save
            </button>
            <button className={styles.actionButton}>
              <i className="fas fa-share-alt"></i>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}