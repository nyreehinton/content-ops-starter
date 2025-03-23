'use client';

import { useState } from 'react';
import styles from '../../../styles/thirdbridge-new/ThirdBridge.module.css';
import HeroSection from './HeroSection';
import Tabs from '../ui/Tabs';
import OverviewTab from './OverviewTab';
import PriceDataTab from './PriceDataTab';
import IndustryStructureTab from './IndustryStructureTab';
import ConclusionTab from './ConclusionTab';
import FeaturedCard from './FeaturedCard';
import { featuredAnalyses } from '../../../data/thirdbridge/analysisData';

/**
 * Main Featured Analysis Section that contains the hero article and cards
 */
export default function FeaturedAnalysisSection() {
  const tabs = [
    { id: 'overview', label: 'Overview', content: <OverviewTab /> },
    { id: 'data', label: 'Price Data', content: <PriceDataTab /> },
    { id: 'industry', label: 'Industry Structure', content: <IndustryStructureTab /> },
    { id: 'conclusion', label: 'Conclusion', content: <ConclusionTab /> },
  ];

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
        
        {/* Content Tabs */}
        <Tabs tabs={tabs} />
      </div>
      
      {/* More Featured Analyses */}
      <div className={styles.cardsHeader}>
        <h2 className={styles.cardsTitle}>
          <span className={styles.titleIndicator}></span>
          More Featured Analyses
        </h2>
      </div>
      
      <div className={styles.cardsGrid}>
        {featuredAnalyses.map((analysis) => (
          <FeaturedCard key={analysis.id} analysis={analysis} />
        ))}
      </div>
    </section>
  );
}