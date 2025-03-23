import { useState } from 'react';
import styles from '@/styles/ThirdBridge.module.css';
import HeroSection from '@/components/thirdbridge/featured-analysis/HeroSection';
import Link from 'next/link';
import FeaturedCard from '@/components/thirdbridge/featured-analysis/FeaturedCard';
import { featuredAnalyses } from '@/data/analysisData';
import { getSafeAnalysisCard } from '@/components/thirdbridge/utils/dataHelpers';

/**
 * Main Featured Analysis Section that contains the hero article and cards
 */
export default function FeaturedAnalysisSection() {

  return (
    <section className={styles.sectionContent}>
      {/* Header with visual elements */}
      <div className={styles.sectionHeader}>
        <div className={styles.headerBlur1}></div>
        <div className={styles.headerBlur2}></div>
        
        <h1 className={styles.sectionTitle}>
          Featured Analysis
          <span className={styles.titleUnderline}></span>
        </h1>
        <p className={styles.sectionDescription}>
          In-depth research and strategic analysis of emerging market trends and industry dynamics.
        </p>
      </div>
      
      {/* Featured Analysis - Hero Article */}
      <div className={styles.heroArticle}>
        {/* Hero Section with Overlay Text */}
        <HeroSection />
        
        {/* Link to full analysis */}
        <div className={styles.viewFullAnalysisContainer}>
          <Link href="/egg-price-surge-2025">
            <button className={styles.viewFullAnalysisButton}>
              <i className="fas fa-eye"></i>
              View Full Analysis
            </button>
          </Link>
        </div>
      </div>
      
      {/* More Featured Analyses */}
      <div className={styles.cardsHeader}>
        <h2 className={styles.cardsTitle}>
          <span className={styles.titleIndicator}></span>
          More Featured Analyses
        </h2>
      </div>
      
      <div className={styles.cardsGrid}>
        {(featuredAnalyses || []).map((analysis) => (
          <FeaturedCard key={analysis.id} analysis={analysis} />
        ))}
      </div>
    </section>
  );
}