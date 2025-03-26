/**
 * Central export file for all data
 * This file exports all data from various data files to provide a single import point
 */

// Re-export everything from analysisData
export {
    featuredAnalyses,
    heroArticle,
    mainArticle,
    regionalPrices,
    priceData,
    industryData,
    structuralChallenges,
    calMaineImpact,
    producerImplications,
    consumerImplications,
    keyTakeaway
} from './analysisData';

// Export type definitions - these will be recognized by TypeScript via JSDoc in the .js file
/**
 * @typedef {import('./analysisData').AnalysisCard} AnalysisCard
 * @typedef {import('./analysisData').Analyst} Analyst
 * @typedef {import('./analysisData').Article} Article
 * @typedef {import('./analysisData').RegionalPrice} RegionalPrice
 * @typedef {import('./analysisData').StatItem} StatItem
 * @typedef {import('./analysisData').DriverItem} DriverItem
 * @typedef {import('./analysisData').YearData} YearData
 * @typedef {import('./analysisData').PriceData} PriceData
 * @typedef {import('./analysisData').MetricItem} MetricItem
 * @typedef {import('./analysisData').CompanyItem} CompanyItem
 * @typedef {import('./analysisData').RegulationItem} RegulationItem
 * @typedef {import('./analysisData').IndustryData} IndustryData
 * @typedef {import('./analysisData').Challenge} Challenge
 * @typedef {import('./analysisData').ImpactItem} ImpactItem
 */
