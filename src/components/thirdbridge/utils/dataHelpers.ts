import { Article, AnalysisCard, RegionalPrice, PriceData, IndustryData } from '@/data/analysisData';
import type { AnalysisCard as AnalysisCardType, Article as ArticleType, RegionalPrice as RegionalPriceType } from '@/data';

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
 * Default values for an Article
 */
export const DEFAULT_ARTICLE: ArticleType = {
  id: '',
  title: 'Analysis not found',
  description: 'This analysis is no longer available or has been moved.',
  imageUrl: '/images/thirdbridge/placeholder.svg',
  category: 'N/A',
  date: 'No date',
  executiveSummary: '',
  keyPoints: [],
  highlights: [],
  analyst: {
    name: 'Unknown',
    title: 'Analyst',
    imageUrl: '/images/thirdbridge/placeholder-analyst.svg',
    bio: 'No biography available'
  }
};

/**
 * Default values for an AnalysisCard
 */
export const DEFAULT_ANALYSIS_CARD: AnalysisCardType = {
  id: '',
  title: 'Analysis not found',
  preview: 'This analysis is no longer available or has been moved.',
  imageUrl: '/images/thirdbridge/placeholder.svg',
  category: 'N/A',
  date: 'No date',
  views: '0',
  saves: '0'
};

/**
 * Default values for a RegionalPrice
 */
export const DEFAULT_REGIONAL_PRICE: RegionalPriceType = {
  name: 'Unknown Region',
  price: '0.00',
  change: 0
};

/**
 * Helper functions to safely access data
 */

export function getSafeArticle(article: ArticleType | null | undefined): ArticleType {
  if (!article) return DEFAULT_ARTICLE;
  
  return {
    id: article.id || DEFAULT_ARTICLE.id,
    title: article.title || DEFAULT_ARTICLE.title,
    description: article.description || DEFAULT_ARTICLE.description,
    imageUrl: article.imageUrl || DEFAULT_ARTICLE.imageUrl,
    category: article.category || DEFAULT_ARTICLE.category,
    date: article.date || DEFAULT_ARTICLE.date,
    executiveSummary: article.executiveSummary || DEFAULT_ARTICLE.executiveSummary,
    keyPoints: article.keyPoints || DEFAULT_ARTICLE.keyPoints,
    highlights: article.highlights || DEFAULT_ARTICLE.highlights,
    analyst: {
      name: article.analyst?.name || DEFAULT_ARTICLE.analyst.name,
      title: article.analyst?.title || DEFAULT_ARTICLE.analyst.title,
      imageUrl: article.analyst?.imageUrl || DEFAULT_ARTICLE.analyst.imageUrl,
      bio: article.analyst?.bio || DEFAULT_ARTICLE.analyst.bio
    }
  };
}

export function getSafeAnalysisCard(card: AnalysisCardType | null | undefined): AnalysisCardType {
  if (!card) return DEFAULT_ANALYSIS_CARD;
  
  return {
    id: card.id || DEFAULT_ANALYSIS_CARD.id,
    title: card.title || DEFAULT_ANALYSIS_CARD.title,
    preview: card.preview || DEFAULT_ANALYSIS_CARD.preview,
    imageUrl: card.imageUrl || DEFAULT_ANALYSIS_CARD.imageUrl,
    category: card.category || DEFAULT_ANALYSIS_CARD.category,
    date: card.date || DEFAULT_ANALYSIS_CARD.date,
    views: card.views?.toString() || DEFAULT_ANALYSIS_CARD.views,
    saves: card.saves?.toString() || DEFAULT_ANALYSIS_CARD.saves
  };
}

export function getSafeRegionalPrice(price: RegionalPriceType | null | undefined): RegionalPriceType {
  if (!price) return DEFAULT_REGIONAL_PRICE;
  
  return {
    name: price.name || DEFAULT_REGIONAL_PRICE.name,
    price: price.price || DEFAULT_REGIONAL_PRICE.price,
    change: typeof price.change === 'number' ? price.change : DEFAULT_REGIONAL_PRICE.change
  };
}

export function getSafePriceData(data: Record<string, any> | null | undefined): Record<string, any> {
  if (!data) return {'2025': DEFAULT_YEAR_DATA};
  return data;
}

export function getSafeIndustryData(data?: IndustryData | null): IndustryData {
  return data || defaultIndustryData;
}

export function getSafeYears(data: Record<string, any>): string[] {
  if (!data) return ['2025'];
  return Object.keys(data).sort();
}

export function getSafeImplications(implications?: string[] | null): string[] {
  return implications?.length ? implications : ['No implications available.'];
}

export function getSafeKeyTakeaway(takeaway?: string | null): string {
  return takeaway || 'Key takeaway information is not available.';
}

/**
 * Default year data structure
 */
const DEFAULT_YEAR_DATA = {
  stats: [
    { label: 'No data available', value: 'N/A', change: 0 }
  ],
  drivers: [
    { name: 'No data available', impact: 'low' as const }
  ]
};
