'use client';

import styles from '../../styles/ThirdBridge.module.css';
import { industryData, structuralChallenges } from '../../data/analysisData';

/**
 * Industry Structure tab content for the main article
 */
export default function IndustryStructureTab() {
    return (
        <div className={styles.tabContentSection}>
            <h3 className={styles.tabTitle}> Industry Structure Analysis </h3>
            <div className={styles.contentColumns}>
                <div className={styles.mainColumn}>
                    <div className={styles.contentBlock}>
                        <h4 className={styles.contentSubtitle}>Market Concentration and Structural Vulnerabilities </h4>
                        {/* Industry Structure Diagram */}{' '}
                        <div className={styles.industryDiagram}>
                            <div className={styles.diagramHeader}>U.S.Egg Industry Structure </div>{' '}
                            <div className={styles.diagramContent}>
                                <div className={styles.diagramImage}>
                                    {' '}
                                    {/* Placeholder for actual SVG or image diagram */}{' '}
                                    <div className={styles.svgPlaceholder}>
                                        <img src="/images/industry-structure.svg" alt="Egg Industry Structure" />
                                    </div>{' '}
                                </div>{' '}
                            </div>{' '}
                            <div className={styles.diagramFooter}>Source: USDA Economic Research Service, ThirdBridge Analysis </div>{' '}
                        </div>
                        {/* Structural Challenges */}{' '}
                        <div className={styles.structuralChallenges}>
                            <h4> Key Structural Challenges </h4>
                            <div className={styles.challengesGrid}>
                                {' '}
                                {structuralChallenges.map((challenge, index) => (
                                    <div key={index} className={styles.challengeCard}>
                                        <div className={styles.challengeIcon}>
                                            <i className={challenge.icon}> </i>{' '}
                                        </div>{' '}
                                        <div className={styles.challengeContent}>
                                            <h5 className={styles.challengeTitle}> {challenge.title} </h5>{' '}
                                            <p className={styles.challengeDescription}> {challenge.description} </p>{' '}
                                        </div>{' '}
                                    </div>
                                ))}{' '}
                            </div>{' '}
                        </div>{' '}
                    </div>{' '}
                </div>
                <div className={styles.sideColumn}>
                    {' '}
                    {/* Industry Metrics */}{' '}
                    <div className={styles.infoBox}>
                        <h4>
                            <i className="fas fa-industry"> </i>
                            Industry Metrics{' '}
                        </h4>{' '}
                        <div className={styles.metricsList}>
                            {' '}
                            {industryData.metrics.map((metric, index) => (
                                <div key={index} className={styles.metricItem}>
                                    <div className={styles.metricName}> {metric.name} </div> <div className={styles.metricValue}> {metric.value} </div>{' '}
                                </div>
                            ))}{' '}
                        </div>{' '}
                    </div>
                    {/* Top Companies */}{' '}
                    <div className={styles.infoBox}>
                        <h4>
                            <i className="fas fa-building"> </i>
                            Market Leaders{' '}
                        </h4>{' '}
                        <div className={styles.companiesList}>
                            {' '}
                            {industryData.topCompanies.map((company, index) => (
                                <div key={index} className={styles.companyItem}>
                                    <div className={styles.companyRank}> {index + 1} </div>{' '}
                                    <div className={styles.companyInfo}>
                                        <div className={styles.companyName}> {company.name} </div>{' '}
                                        <div className={styles.companyShare}> {company.marketShare} % market share </div>{' '}
                                    </div>{' '}
                                </div>
                            ))}{' '}
                        </div>{' '}
                    </div>
                    {/* Regulatory Environment */}{' '}
                    <div className={styles.infoBox}>
                        <h4>
                            <i className="fas fa-balance-scale"> </i>
                            Regulatory Environment{' '}
                        </h4>{' '}
                        <div className={styles.regulationsList}>
                            {' '}
                            {industryData.regulations.map((regulation, index) => (
                                <div key={index} className={styles.regulationItem}>
                                    <div className={styles.regulationName}> {regulation.name} </div>{' '}
                                    <div
                                        className={styles.regulationImpact}
                                        style={{
                                            backgroundColor: regulation.impact === 'high' ? '#EF4444' : regulation.impact === 'medium' ? '#F59E0B' : '#10B981'
                                        }}
                                    >
                                        {' '}
                                        {regulation.impact}{' '}
                                    </div>{' '}
                                </div>
                            ))}{' '}
                        </div>{' '}
                    </div>{' '}
                </div>{' '}
            </div>{' '}
        </div>
    );
}
