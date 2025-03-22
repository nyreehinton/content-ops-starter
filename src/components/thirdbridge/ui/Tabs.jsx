'use client';

import { useState, ReactNode } from 'react';
import styles from '../../../styles/thirdbridge-new/ThirdBridge.module.css';

/**
 * Tabs component for displaying tabbed content
 */
export default function Tabs({ tabs, onTabChange }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');
  
  const handleTabClick = (tabId) => {
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