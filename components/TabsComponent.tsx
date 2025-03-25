import { useState, ReactNode } from 'react';
import styles from '@/styles/ThirdBridge.module.css';

interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsComponentProps {
  tabs: TabItem[];
  onTabChange?: (tabId: string) => void;
}

/**
 * Modified Tabs component for the egg price surge page
 */
export default function TabsComponent({ tabs, onTabChange }: TabsComponentProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');
  
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
    
    // Scroll to top of content area when changing tabs
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div style={{ overflow: 'visible' }}>
      <div className={styles.tabsContainer}>
        <div className={styles.tabsList}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.tabContent} style={{ overflow: 'visible' }}>
        {tabs.map((tab) => (
          <div 
            key={tab.id} 
            className={activeTab === tab.id ? '' : 'hidden'}
            style={{ 
              display: activeTab === tab.id ? 'block' : 'none',
              overflow: 'visible'
            }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
