/**
 * Sample data for ThirdBridge featured analysis
 * Replace with your actual data sources as needed
 */

// Types for our data
export interface Analyst {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
  executiveSummary: string;
  keyPoints: string[];
  highlights: string[];
  analyst: Analyst;
}

export interface RegionalPrice {
  name: string;
  price: string;
  change: number;
}

export interface StatItem {
  label: string;
  value: string;
  change: number;
}

export interface DriverItem {
  name: string;
  impact: 'low' | 'medium' | 'high';
}

export interface YearData {
  stats: StatItem[];
  drivers: DriverItem[];
}

export interface PriceData {
  [year: string]: YearData;
}

export interface MetricItem {
  name: string;
  value: string;
}

export interface CompanyItem {
  name: string;
  marketShare: number;
}

export interface RegulationItem {
  name: string;
  impact: 'low' | 'medium' | 'high';
}

export interface IndustryData {
  metrics: MetricItem[];
  topCompanies: CompanyItem[];
  regulations: RegulationItem[];
}

export interface Challenge {
  title: string;
  description: string;
  icon: string;
}

export interface ImpactItem {
  title: string;
  description: string;
  icon: string;
  severity: 'low' | 'medium' | 'high';
}

export interface AnalysisCard {
  id: string;
  title: string;
  preview: string;
  imageUrl: string;
  category: string;
  date: string;
  views: string;
  saves: string;
}

// Main featured article data
export const mainArticle: Article = {
  id: 'egg-price-surge-2025',
  title: 'The Perfect Storm: Analyzing the 2025 Egg Price Surge',
  description: 'An in-depth examination of the market dynamics, regulatory changes, and structural vulnerabilities that led to unprecedented egg price volatility in early 2025.',
  imageUrl: '/images/thirdbridge/egg-price-hero.jpg',
  category: 'Market Analysis',
  date: 'March 15, 2025',
  executiveSummary: 'In the first quarter of 2025, U.S. consumers experienced the sharpest increase in egg prices in over a decade, with retail prices surging over 45% in some markets. This analysis examines the complex interplay of factors that created a "perfect storm" for the egg market, including the avian influenza outbreak, implementation of cage-free mandates in California and Maine, consolidation in the industry, and supply chain vulnerabilities exposed during the pandemic.',
  keyPoints: [
    'Avian influenza outbreak affected 7.5% of the U.S. laying hen flock, significantly tightening supply',
    'California and Maine legislation requiring cage-free production created market segmentation and logistical challenges',
    'Industry concentration (top 5 producers control 58% of market) amplified supply disruptions',
    'Structural vulnerabilities in the supply chain revealed by the pandemic remained unaddressed',
    'Regional price disparities reached unprecedented levels with the West Coast experiencing the highest increases'
  ],
  highlights: [
    'National average retail price reached $5.43 per dozen in February 2025',
    'Producer margins increased 83% year-over-year despite higher input costs',
    'Cage-free eggs now represent 32% of total retail market, up from 24% in 2023',
    'Import volumes from Mexico increased 142% to help meet demand'
  ],
  analyst: {
    name: 'Nyree Hinton',
    title: 'Sector Analyst - Consumer Staples',
    imageUrl: '/images/thirdbridge/nyree-hinton-headshot.png',
    bio: 'Nyree Hinton specializes in Consumer Staples with a focus on food commodities and agricultural markets. She has extensive expertise in analyzing market dynamics, regulatory impacts, and structural factors affecting food supply chains and pricing.'
  }
};

// Regional price data
export const regionalPrices: RegionalPrice[] = [
  { name: 'West Coast', price: '6.89', change: 52.4 },
  { name: 'Mountain', price: '5.77', change: 48.1 },
  { name: 'Midwest', price: '4.92', change: 37.5 },
  { name: 'South', price: '5.11', change: 42.3 },
  { name: 'Northeast', price: '5.48', change: 45.7 },
  { name: 'California', price: '7.28', change: 58.9 }
];

// Price data by year
export const priceData: PriceData = {
  '2023': {
    stats: [
      { label: 'Avg. Retail Price', value: '$3.24/dozen', change: 3.2 },
      { label: 'Producer Price', value: '$1.42/dozen', change: -1.8 },
      { label: 'Price Volatility', value: '4.2%', change: -0.3 },
      { label: 'Production Cost', value: '$1.12/dozen', change: 2.1 }
    ],
    drivers: [
      { name: 'Feed Costs', impact: 'medium' },
      { name: 'Labor Costs', impact: 'low' },
      { name: 'Energy Prices', impact: 'low' },
      { name: 'Disease Outbreaks', impact: 'low' }
    ]
  },
  '2024': {
    stats: [
      { label: 'Avg. Retail Price', value: '$3.68/dozen', change: 13.6 },
      { label: 'Producer Price', value: '$1.56/dozen', change: 9.9 },
      { label: 'Price Volatility', value: '5.7%', change: 1.5 },
      { label: 'Production Cost', value: '$1.27/dozen', change: 13.4 }
    ],
    drivers: [
      { name: 'Feed Costs', impact: 'high' },
      { name: 'Labor Costs', impact: 'medium' },
      { name: 'Energy Prices', impact: 'medium' },
      { name: 'Disease Outbreaks', impact: 'medium' }
    ]
  },
  '2025': {
    stats: [
      { label: 'Avg. Retail Price', value: '$5.43/dozen', change: 47.6 },
      { label: 'Producer Price', value: '$2.86/dozen', change: 83.3 },
      { label: 'Price Volatility', value: '12.4%', change: 6.7 },
      { label: 'Production Cost', value: '$1.56/dozen', change: 22.8 }
    ],
    drivers: [
      { name: 'Feed Costs', impact: 'medium' },
      { name: 'Labor Costs', impact: 'medium' },
      { name: 'Energy Prices', impact: 'low' },
      { name: 'Disease Outbreaks', impact: 'high' },
      { name: 'Regulatory Changes', impact: 'high' }
    ]
  }
};

// Industry data
export const industryData: IndustryData = {
  metrics: [
    { name: 'Total U.S. Production', value: '107.6 billion eggs' },
    { name: 'Laying Hen Population', value: '324.7 million' },
    { name: 'Cage-Free Production', value: '32.4% of total' },
    { name: 'Average Flock Size', value: '1.48 million birds' },
    { name: 'Export Volume', value: '356 million dozen' },
    { name: 'Import Volume', value: '42.8 million dozen' }
  ],
  topCompanies: [
    { name: 'Cal-Maine Foods', marketShare: 18.7 },
    { name: 'Rose Acre Farms', marketShare: 12.3 },
    { name: 'Versova Holdings', marketShare: 10.5 },
    { name: 'Daybreak Foods', marketShare: 8.9 },
    { name: 'Michael Foods', marketShare: 7.6 }
  ],
  regulations: [
    { name: 'California Prop 12', impact: 'high' },
    { name: 'Maine L.D. 1019', impact: 'medium' },
    { name: 'Massachusetts Question 3', impact: 'medium' },
    { name: 'Colorado HB20-1343', impact: 'low' },
    { name: 'FDA Egg Safety Rules', impact: 'low' }
  ]
};

// Structural challenges in the egg industry
export const structuralChallenges: Challenge[] = [
  {
    title: 'Market Concentration',
    description: 'Top 5 producers control 58% of the U.S. egg market, creating vulnerabilities when large producers face disruptions.',
    icon: 'fas fa-chart-pie'
  },
  {
    title: 'Geographic Concentration',
    description: '62% of egg production is concentrated in the Midwest and South, creating logistical challenges for national distribution.',
    icon: 'fas fa-map-marker-alt'
  },
  {
    title: 'Limited Flexibility',
    description: 'Specialized production systems require 12-18 months to significantly expand capacity, creating inelastic supply.',
    icon: 'fas fa-compress-alt'
  },
  {
    title: 'Supply Chain Fragility',
    description: 'Just-in-time inventory practices leave little buffer for unexpected disruptions in production or distribution.',
    icon: 'fas fa-link'
  }
];

// Impact of California and Maine regulations
export const calMaineImpact: ImpactItem[] = [
  {
    title: 'Market Segmentation',
    description: 'The cage-free requirements effectively created a two-tier market, with compliant eggs commanding a premium and reducing overall supply flexibility.',
    icon: 'fas fa-object-group',
    severity: 'high'
  },
  {
    title: 'Distribution Logistics',
    description: 'Producers must maintain separate supply chains for conventional and cage-free eggs, increasing transportation complexity and costs.',
    icon: 'fas fa-truck',
    severity: 'medium'
  },
  {
    title: 'Production Constraints',
    description: 'Cage-free systems require more labor and space per bird, reducing overall production capacity during the transition period.',
    icon: 'fas fa-warehouse',
    severity: 'high'
  },
  {
    title: 'Capital Investment',
    description: 'Producers have invested over $3.5 billion to convert conventional systems to cage-free, requiring price increases to recoup costs.',
    icon: 'fas fa-coins',
    severity: 'medium'
  }
];

// Producer implications
export const producerImplications: string[] = [
  'Accelerated investment in cage-free production systems will be necessary to meet regulatory deadlines',
  'Opportunities for premium pricing will continue in regions with strict housing requirements',
  'Smaller producers without capital for conversion may face consolidation pressure',
  'Disease prevention capabilities will be a key competitive advantage',
  'Geographic diversification of production facilities will reduce vulnerability'
];

// Consumer implications
export const consumerImplications: string[] = [
  'Price volatility likely to continue through 2026 as industry adjusts to new regulations',
  'Wider price gap between conventional and specialty eggs expected to persist',
  'Regional price disparities will incentivize cross-border shopping in affected states',
  'Lower-income households disproportionately impacted by price increases',
  'Consumer awareness of production methods influencing purchasing decisions'
];

// Key takeaway
export const keyTakeaway: string = "The 2025 egg price crisis demonstrates how underlying vulnerabilities can turn a significant but manageable disease outbreak into a market-wide crisis that affects millions of consumers. Understanding these structural factors is essential for developing more resilient agricultural systems.";

// Featured analyses cards
export const featuredAnalyses: AnalysisCard[] = [
  {
    id: 'dairy-industry-outlook-2025',
    title: 'Dairy Industry Outlook: Navigating the Plant-Based Revolution',
    preview: 'How traditional dairy producers are adapting to changing consumer preferences and the rise of alternative milk products.',
    imageUrl: '/images/thirdbridge/dairy-industry.jpg',
    category: 'Industry Outlook',
    date: 'February 28, 2025',
    views: '2.4K',
    saves: '342'
  },
  {
    id: 'alternative-proteins-market',
    title: 'Alternative Proteins: Market Expansion and Investment Opportunities',
    preview: 'Analyzing the rapid growth of plant-based and lab-grown protein markets and identifying key investment trends.',
    imageUrl: '/images/thirdbridge/alt-proteins.jpg',
    category: 'Investment Analysis',
    date: 'February 12, 2025',
    views: '3.7K',
    saves: '521'
  },
  {
    id: 'farm-labor-shortage',
    title: 'The Deepening Farm Labor Crisis: Policy Solutions and Automation',
    preview: 'Examining the structural causes of agricultural labor shortages and potential technological and policy remedies.',
    imageUrl: '/images/thirdbridge/farm-labor.jpg',
    category: 'Policy Analysis',
    date: 'January 25, 2025',
    views: '1.9K',
    saves: '274'
  }
];