import { ReactNode } from 'react';
import styles from '@/styles/ThirdBridge.module.css';

interface TooltipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode;
}

/**
 * Tooltip component for displaying additional information on hover
 */
export default function Tooltip({ content, position = 'top', children }: TooltipProps) {
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