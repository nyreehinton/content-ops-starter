import { Article, AnalysisCard, RegionalPrice, PriceData, IndustryData } from '@/data/analysisData';

/**
 * Default values to use when data is missing
 */

export const defaultArticle: Article = {
  id: 'default-article',
  title: 'Analysis Article',
  description: 'This is a placeholder description for when the actual data is unavailable.',
  imageUrl: '/images/thirdbridge/placeholder.jpg',
  category: 'Analysis',
  date: 'Current Date',
  executiveSummary: 'This is a placeholder executive summary for when the actual data is unavailable.',
  keyPoints: ['Point 1', 'Point 2', 'Point 3'],
  highlights: ['Highlight 1', 'Highlight 2', 'Highlight 3'],
  analyst: {
    name: 'Analyst Name',
    title: 'Analyst Title',
    imageUrl: '/images/thirdbridge/placeholder-analyst.jpg',
    bio: 'This is a placeholder bio for when the actual data is unavailable.'
  }
};

export const defaultAnalysisCard: AnalysisCard = {
  id: 'default-card',
  title: 'Analysis Card',
  preview: 'This is a placeholder preview for when the actual data is unavailable.',
  imageUrl: '/images/thirdbridge/placeholder.jpg',
  category: 'Analysis',
  date: 'Current Date',
  views: '0',
  saves: '0'
};

export const defaultRegionalPrice: RegionalPrice = {
  name: 'Region',
  price: '0.00',
  change: 0
};

export const defaultYearData = {
  stats: [
    { label: 'Statistic 1', value: '0', change: 0 },
    { label: 'Statistic 2', value: '0', change: 0 }
  ],
  drivers: [
    { name: 'Driver 1', impact: 'low' as const },
    { name: 'Driver 2', impact: 'low' as const }
  ]
};

export const defaultPriceData: PriceData = {
  '2023': defaultYearData,
  '2024': defaultYearData,
  '2025': defaultYearData
};

export const defaultIndustryData: IndustryData = {
  metrics: [{ name: 'Metric 1', value: '0' }],
  topCompanies: [{ name: 'Company 1', marketShare: 0 }],
  regulations: [{ name: 'Regulation 1', impact: 'low' as const }]
};

/**
 * Helper functions to safely access data
 */

export function getSafeArticle(article?: Article | null): Article {
  return article || defaultArticle;
}

export function getSafeAnalysisCard(card?: AnalysisCard | null): AnalysisCard {
  return card || defaultAnalysisCard;
}

export function getSafeRegionalPrices(prices?: RegionalPrice[] | null): RegionalPrice[] {
  return prices?.length ? prices : [defaultRegionalPrice];
}

export function getSafePriceData(data?: PriceData | null): PriceData {
  return data || defaultPriceData;
}

export function getSafeIndustryData(data?: IndustryData | null): IndustryData {
  return data || defaultIndustryData;
}

export function getSafeYears(data?: PriceData | null): string[] {
  return data ? Object.keys(data).sort() : Object.keys(defaultPriceData).sort();
}

export function getSafeImplications(implications?: string[] | null): string[] {
  return implications?.length ? implications : ['No implications available.'];
}

export function getSafeKeyTakeaway(takeaway?: string | null): string {
  return takeaway || 'Key takeaway information is not available.';
}
