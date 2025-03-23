'use client';

import { ReactNode } from 'react';
import styles from '../../../styles/thirdbridge-new/ThirdBridge.module.css';

/**
 * Tooltip component for displaying additional information on hover
 */
export default function Tooltip({ content, position = 'top', children }) {
  const tooltipClass = `${styles.tooltipContent} ${styles[`tooltip${position.charAt(0).toUpperCase() + position.slice(1)}`]}`;
  
  return (
    <div className={styles.tooltipContainer}>
      {children}
      <div className={tooltipClass}>
        {content}
      </div>
    </div>
  );
}