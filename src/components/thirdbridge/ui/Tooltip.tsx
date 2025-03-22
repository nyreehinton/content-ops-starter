'use client';

import styles from '../../../styles/thirdbridge-new/ThirdBridge.module.css';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  content: string;
  position?: TooltipPosition;
  children: React.ReactNode;
}

/**
 * Tooltip component for showing additional information on hover
 */
export default function Tooltip({ content, position = 'top', children }: TooltipProps) {
  // Create position-specific class
  const positionClass = styles[`tooltip${position.charAt(0).toUpperCase() + position.slice(1)}`];
  
  return (
    <div className={styles.tooltipContainer}>
      {children}
      <div className={`${styles.tooltipContent} ${positionClass}`}>
        {content}
      </div>
    </div>
  );
} 