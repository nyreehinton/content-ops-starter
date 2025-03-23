import { useState } from 'react';
import styles from '@/styles/ThirdBridge.module.css';
import Sidebar from '@/components/thirdbridge/layout/Sidebar';
import TopBar from '@/components/thirdbridge/layout/TopBar';
import FeaturedAnalysisSection from '@/components/thirdbridge/featured-analysis/FeaturedAnalysisSection';
import Overview from '@/components/thirdbridge/overview/Overview';

/**
 * Main ThirdBridge page component
 */
export default function ThirdBridgePage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  
  // Toggle sidebar for mobile
  const toggleMobileSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  
  // Render the content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'featured':
        return <FeaturedAnalysisSection />;
      case 'overview':
        return <Overview setActiveSection={setActiveSection} />;
      case 'interviews':
        return <div className={styles.sectionContent}>Interview Library Content</div>;
      case 'industry':
        return <div className={styles.sectionContent}>Industry Analysis Content</div>;
      case 'methodology':
        return <div className={styles.sectionContent}>Methodology Content</div>;
      default:
        return <Overview setActiveSection={setActiveSection} />;
    }
  };
  
  return (
    <div className={`${styles.root} ${styles.container} bg-white`}>
      {/* Sidebar */}
      <Sidebar 
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      {/* Main Content Area */}
      <div className={`${styles.mainContent} ${sidebarCollapsed ? styles.expanded : ''} bg-white`}>
        {/* Top Navigation Bar */}
        <TopBar toggleMobileSidebar={toggleMobileSidebar} />
        
        {/* Content Section */}
        <div className={`${styles.contentContainer} bg-white`}>
          {renderContent()}
        </div>
      </div>
      
      {/* Mobile Overlay when sidebar is open */}
      {!sidebarCollapsed && (
        <div 
          className={styles.mobileOverlay}
          onClick={() => setSidebarCollapsed(true)}
        ></div>
      )}
    </div>
  );
}