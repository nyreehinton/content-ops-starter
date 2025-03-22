'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../../../styles/thirdbridge-new/ThirdBridge.module.css';

// Add this interface definition
interface HeroSectionProps {
  title: string;
  category: string;
  date: string;
  description: string;
  imageSrc: string;
}

// Update component signature
const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  category,
  date,
  description,
  imageSrc
}) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImage}>
        <Image 
          src={imageSrc} 
          alt={title}
          width={600}
          height={400}
          objectFit="cover"
        />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroMeta}>
          <span className={styles.heroCategory}>{category}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
        <h3 className={styles.heroTitle}>{title}</h3>
        <p className={styles.heroDescription}>{description}</p>
        <div className={styles.heroActions}>
          <button className={styles.primaryButton}>
            <i className="fas fa-download"></i> Download Full Report
          </button>
          <button className={styles.secondaryButton}>
            <i className="fas fa-share-alt"></i> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 