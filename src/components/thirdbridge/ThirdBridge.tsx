'use client';

import React, { useState } from 'react';
import styles from '../../styles/thirdbridge-new/ThirdBridge.module.css';
import Sidebar from './layout/Sidebar';
import TopBar from './layout/TopBar';
import FeaturedAnalysisSection from './featured-analysis/FeaturedAnalysisSection';

export type SectionType = 'overview' | 'interviews' | 'industry' | 'methodology' | 'featured';

/**
 * Main ThirdBridge component
 */
const ThirdBridge: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionType>('overview');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleSectionChange = (section: SectionType) => {
    setActiveSection(section);
  };

  return (
    <div className={styles.container}>
      <Sidebar 
        collapsed={sidebarCollapsed} 
        setCollapsed={setSidebarCollapsed}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <TopBar toggleMobileSidebar={toggleSidebar} />
      
      <main className={`${styles.mainContent} ${sidebarCollapsed ? styles.expanded : ''}`}>
        <div className={styles.contentContainer}>
          {activeSection === 'overview' && (
            <div className={styles.contentSection}>
              <h1 className={styles.sectionTitle}>Overview</h1>
              <p>ThirdBridge provides in-depth market analysis and intelligence for investment professionals.</p>
              <p>Navigate using the sidebar to explore our featured analysis, interview library, and industry reports.</p>
            </div>
          )}
          
          {activeSection === 'interviews' && (
            <div className={styles.contentSection}>
              <h1 className={styles.sectionTitle}>Interview Library</h1>
              <p>Browse our extensive collection of expert interviews covering various sectors and topics.</p>
              <p>This section is currently under development. Check back soon for updates.</p>
            </div>
          )}
          
          {activeSection === 'industry' && (
            <div className={styles.contentSection}>
              <h1 className={styles.sectionTitle}>Industry Analysis</h1>
              <p>Access comprehensive industry reports, market structure analysis, and competitive landscapes.</p>
              <p>This section is currently under development. Check back soon for updates.</p>
            </div>
          )}
          
          {activeSection === 'methodology' && (
            <div className={styles.contentSection}>
              <h1 className={styles.sectionTitle}>Methodology</h1>
              <p>Learn about our research methodology, data sources, and analytical frameworks.</p>
              <p>ThirdBridge analysis combines quantitative data modeling with qualitative expert insights to provide a comprehensive view of market dynamics.</p>
            </div>
          )}
          
          {activeSection === 'featured' && <FeaturedAnalysisSection />}
        </div>
      </main>
    </div>
  );
};

export default ThirdBridge; 