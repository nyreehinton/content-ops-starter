'use client';

import { AnalysisCard } from '@/data/analysisData';
import styles from '@/styles/ThirdBridge.module.css';
import Link from 'next/link';

interface FeaturedCardProps {
  analysis: AnalysisCard;
}

/**
 * Card component for displaying a featured analysis
 */
export default function FeaturedCard({ analysis }: FeaturedCardProps) {
  return (
    <div className={styles.featuredCard}>
      <div className={styles.cardImageContainer}>
        <img
          src={analysis.imageUrl}
          alt={analysis.title}
          className={styles.cardImage}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.co/600x340/0a2856/ffffff?text=${encodeURIComponent(analysis.title.substring(0, 20))}`;
          }}
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <span className={styles.cardCategory}>{analysis.category}</span>
          <span className={styles.cardDate}>{analysis.date}</span>
        </div>
        <h3 className={styles.cardTitle}>{analysis.title}</h3>
        <p className={styles.cardDescription}>{analysis.preview}</p>
        <div className={styles.cardFooter}>
          <div className={styles.cardStats}>
            <span className={styles.cardStat}>
              <i className="fas fa-eye"></i> {analysis.views}
            </span>
            <span className={styles.cardStat}>
              <i className="fas fa-bookmark"></i> {analysis.saves}
            </span>
          </div>
          <Link href={`#${analysis.id}`}>
            <button className={styles.cardButton}>Read</button>
          </Link>
        </div>
      </div>
    </div>
  );
}