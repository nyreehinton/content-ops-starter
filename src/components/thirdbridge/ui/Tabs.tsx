'use client';

import { useState, ReactNode } from 'react';
import styles from '@/styles/ThirdBridge.module.css';

interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  onTabChange?: (tabId: string) => void;
}

/**
 * Tabs component for displaying tabbed content
 */
export default function Tabs({ tabs, onTabChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');
  
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };
  
  return (
    <div>
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
      <div className={styles.tabContent}>
        {tabs.map((tab) => (
          <div 
            key={tab.id} 
            className={activeTab === tab.id ? '' : 'hidden'}
            style={{ display: activeTab === tab.id ? 'block' : 'none' }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}