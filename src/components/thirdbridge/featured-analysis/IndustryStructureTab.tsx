'use client';

import { industryData, structuralChallenges, calMaineImpact } from '@/data/analysisData';
import { getSafeIndustryData } from '@/components/thirdbridge/utils/dataHelpers';
import styles from '@/styles/ThirdBridge.module.css';

/**
 * Industry Structure tab content for the featured analysis
 */
export default function IndustryStructureTab() {
  const safeIndustryData = getSafeIndustryData(industryData);
  const safeStructuralChallenges = structuralChallenges || [];
  const safeCalMaineImpact = calMaineImpact || [];
  return (
    <div className={styles.tabContentSection}>
      <h3 className={styles.tabTitle}>Industry Structure Analysis</h3>
      
      <div className={styles.industryDiagram}>
        <div className={styles.diagramHeader}>U.S. Egg Industry Structure</div>
        <div className={styles.diagramContent}>
          <div className={styles.diagramImage}>
            <div className={styles.svgPlaceholder}>
              <img 
                src="/images/thirdbridge/egg-industry-structure.jpg" 
                alt="Egg Industry Structure"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/800x400/0a2856/ffffff?text=Egg+Industry+Structure+Diagram';
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.diagramFooter}>Source: USDA Economic Research Service, Industry Reports, Third Bridge Analysis</div>
      </div>
      
      <div className={styles.contentColumns}>
        <div className={styles.mainColumn}>
          <div className={styles.contentBlock}>
            <h4 className={styles.contentSubtitle}>Current Industry Metrics</h4>
            <div className={styles.metricsList}>
              {safeIndustryData.metrics.map((metric, index) => (
                <div key={index} className={styles.metricItem}>
                  <span className={styles.metricName}>{metric.name}</span>
                  <span className={styles.metricValue}>{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.structuralChallenges}>
            <h4 className={styles.contentSubtitle}>Structural Vulnerabilities</h4>
            <div className={styles.challengesGrid}>
              {safeStructuralChallenges.map((challenge, index) => (
                <div key={index} className={styles.challengeCard}>
                  <div className={styles.challengeIcon}>
                    <i className={challenge.icon}></i>
                  </div>
                  <div className={styles.challengeContent}>
                    <div className={styles.challengeTitle}>{challenge.title}</div>
                    <p className={styles.challengeDescription}>{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.impactAnalysis}>
            <h4 className={styles.contentSubtitle}>Impact of California & Maine Regulations</h4>
            <div className={styles.impactGrid}>
              {safeCalMaineImpact.map((impact, index) => (
                <div key={index} className={styles.impactCard}>
                  <div className={styles.impactHeader}>
                    <div className={styles.impactIcon}>
                      <i className={impact.icon}></i>
                    </div>
                    <h5 className={styles.impactTitle}>{impact.title}</h5>
                  </div>
                  <div className={styles.impactBody}>
                    <p>{impact.description}</p>
                  </div>
                  <div className={styles.impactFooter}>
                    <span 
                      className={styles.impactSeverity}
                      style={{ 
                        backgroundColor: 
                          impact.severity === 'high' ? '#e53e3e' : 
                          impact.severity === 'medium' ? '#dd6b20' : 
                          '#38a169'
                      }}
                    >
                      {impact.severity} impact
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.sideColumn}>
          <div className={styles.infoBox}>
            <h4>
              <i className="fas fa-building"></i>
              Market Concentration
            </h4>
            <div className={styles.companiesList}>
              {safeIndustryData.topCompanies.map((company, index) => (
                <div key={index} className={styles.companyItem}>
                  <div className={styles.companyRank}>{index + 1}</div>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyName}>{company.name}</div>
                    <div className={styles.companyShare}>{company.marketShare}% market share</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.infoBox}>
            <h4>
              <i className="fas fa-gavel"></i>
              Key Regulations
            </h4>
            <div className={styles.regulationsList}>
              {safeIndustryData.regulations.map((regulation, index) => (
                <div key={index} className={styles.regulationItem}>
                  <span className={styles.regulationName}>{regulation.name}</span>
                  <span 
                    className={styles.regulationImpact}
                    style={{ 
                      backgroundColor: 
                        regulation.impact === 'high' ? '#e53e3e' : 
                        regulation.impact === 'medium' ? '#dd6b20' : 
                        '#38a169'
                    }}
                  >
                    {regulation.impact}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}