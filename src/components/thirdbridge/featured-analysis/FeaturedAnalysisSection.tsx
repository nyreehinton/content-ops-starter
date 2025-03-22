'use client';

import React, { useState } from 'react';
import styles from '../../../styles/thirdbridge-new/ThirdBridge.module.css';
import HeroSection from './HeroSection';
import OverviewTab from './OverviewTab';
import IndustryStructureTab from './IndustryStructureTab';
import PriceDataTab from './PriceDataTab';
import ConclusionTab from './ConclusionTab';

interface FeaturedAnalysisSectionProps {
  title?: string;
}

const FeaturedAnalysisSection: React.FC<FeaturedAnalysisSectionProps> = ({ title = 'Featured Analysis' }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.analysisContainer}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      
      <HeroSection 
        title="Natural Language Processing Evolution"
        category="AI & Machine Learning"
        date="June 15, 2023"
        description="An in-depth analysis of the evolving landscape of Natural Language Processing and its implications for enterprise applications in the coming decade."
        imageSrc="/images/thirdbridge/nlp-hero.jpg"
      />
      
      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'overview' ? styles.activeTab : ''}`}
            onClick={() => handleTabChange('overview')}
          >
            Overview
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'industry' ? styles.activeTab : ''}`}
            onClick={() => handleTabChange('industry')}
          >
            Industry Structure
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'price' ? styles.activeTab : ''}`}
            onClick={() => handleTabChange('price')}
          >
            Market Data
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'conclusion' ? styles.activeTab : ''}`}
            onClick={() => handleTabChange('conclusion')}
          >
            Conclusion
          </button>
        </div>
        
        <div className={styles.tabContent}>
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'industry' && <IndustryStructureTab />}
          {activeTab === 'price' && <PriceDataTab />}
          {activeTab === 'conclusion' && <ConclusionTab />}
        </div>
      </div>
    </div>
  );
};

export default FeaturedAnalysisSection;