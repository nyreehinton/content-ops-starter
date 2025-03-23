'use client';

import { AnalysisCard } from '@/data/analysisData';
import { getSafeAnalysisCard } from '@/components/thirdbridge/utils/dataHelpers';
import styles from '@/styles/ThirdBridge.module.css';
import Link from 'next/link';

interface FeaturedCardProps {
  analysis: AnalysisCard;
}

/**
 * Card component for displaying a featured analysis
 */
export default function FeaturedCard({ analysis }: FeaturedCardProps) {
  const safeAnalysis = getSafeAnalysisCard(analysis);
  return (
    <div className={styles.featuredCard}>
      <div className={styles.cardImageContainer}>
        <img
          src={safeAnalysis.imageUrl}
          alt={safeAnalysis.title}
          className={styles.cardImage}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.co/600x340/0a2856/ffffff?text=${encodeURIComponent(safeAnalysis.title.substring(0, 20))}`;
          }}
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <span className={styles.cardCategory}>{safeAnalysis.category}</span>
          <span className={styles.cardDate}>{safeAnalysis.date}</span>
        </div>
        <h3 className={styles.cardTitle}>{safeAnalysis.title}</h3>
        <p className={styles.cardDescription}>{safeAnalysis.preview}</p>
        <div className={styles.cardFooter}>
          <div className={styles.cardStats}>
            <span className={styles.cardStat}>
              <i className="fas fa-eye"></i> {safeAnalysis.views}
            </span>
            <span className={styles.cardStat}>
              <i className="fas fa-bookmark"></i> {safeAnalysis.saves}
            </span>
          </div>
          <Link href={safeAnalysis.id === 'egg-price-surge-2025' ? `/egg-price-surge-2025` : `#${safeAnalysis.id}`}>
            <button className={styles.cardButton}>Read</button>
          </Link>
        </div>
      </div>
    </div>
  );
}