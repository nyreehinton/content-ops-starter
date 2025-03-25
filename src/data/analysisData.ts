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
  title: 'Egg Price Analysis: Projected 15% Surge in Q1 2025',
  description: 'Comprehensive analysis of the factors driving the expected egg price increase in early 2025, including supply chain disruptions, regulatory changes, and increased demand.',
  category: 'Food Industry',
  date: 'March 20, 2025',
  imageUrl: '/images/egg-prices-chart.jpg',
  executiveSummary: 'Our analysis projects a 15% increase in egg prices during Q1 2025, primarily driven by the implementation of California\'s Proposition 12 and Maine\'s Question 3 animal welfare laws. These regulations, combined with ongoing inflationary pressures and seasonal demand patterns, will create significant upward price pressure in the US egg market.',
  keyPoints: [
    'Regulatory changes in California and Maine will reduce supply and increase production costs',
    'Consumer demand is expected to remain strong despite higher prices',
    'Regional price variations will be more pronounced than in previous years',
    'Producers with compliant facilities will see margin improvements despite higher costs'
  ],
  highlights: [
    'Egg consumption remains price inelastic even during inflationary periods',
    'Smaller producers face higher compliance costs proportionally',
    'Limited egg substitutes in baking and breakfast categories maintain demand',
    'International imports unlikely to significantly offset domestic supply constraints'
  ],
  analyst: {
    name: 'Dr. Sarah Chen',
    title: 'Senior Food Industry Analyst',
    imageUrl: '/images/analyst-sarah.jpg',
    bio: 'Dr. Chen specializes in agricultural economics with 12 years of experience analyzing food commodity pricing and regulatory impacts. Prior to joining Third Bridge, she served as an economic advisor to the USDA and published extensively on food supply chain dynamics.'
  }
};

// Regional price data
export const regionalPrices: RegionalPrice[] = [
  { name: 'California', price: '4.85', change: 28.9 },
  { name: 'Maine', price: '4.60', change: 29.3 },
  { name: 'Northeast', price: '4.50', change: 27.8 },
  { name: 'Midwest', price: '3.95', change: 17.7 },
  { name: 'South', price: '3.75', change: 20.0 },
  { name: 'Southwest', price: '3.90', change: 21.8 },
  { name: 'Northwest', price: '4.25', change: 24.7 }
];

// Price data by year
export const priceData: PriceData = {
  '2023': {
    stats: [
      { label: 'Avg. Retail Price', value: '$3.25/dozen', change: 3.2 },
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
    { name: 'Total U.S. Production', value: '96.1 billion eggs' },
    { name: 'Market Size', value: '8.2 billion USD' },
    { name: 'Cage-Free Production', value: '32% of total' },
    { name: 'Growth Rate', value: '3.5%' },
    { name: 'Production Decline', value: '-2.1%' }
  ],
  topCompanies: [
    { name: 'Cal-Maine Foods', marketShare: 17.4 },
    { name: 'Rose Acre Farms', marketShare: 9.2 },
    { name: 'Versova Holdings', marketShare: 7.8 },
    { name: 'Hillandale Farms', marketShare: 7.3 },
    { name: 'Michael Foods', marketShare: 6.9 }
  ],
  regulations: [
    { name: 'California Prop 12', impact: 'high' },
    { name: 'Maine Question 3', impact: 'high' },
    { name: 'Massachusetts Question 3', impact: 'medium' },
    { name: 'Colorado HB20-1343', impact: 'low' },
    { name: 'FDA Egg Safety Rules', impact: 'low' }
  ]
};

// Structural challenges in the egg industry
export const structuralChallenges: Challenge[] = [
  {
    title: 'Housing Conversion Costs',
    description: 'Converting conventional housing to cage-free systems costs between $40-$60 per bird, requiring significant capital expenditure.',
    icon: 'fas fa-home'
  },
  {
    title: 'Production Efficiency Reduction',
    description: 'Cage-free systems typically produce 5-8% fewer eggs per hen with 8-10% higher feed conversion ratios.',
    icon: 'fas fa-chart-line'
  },
  {
    title: 'Labor Requirements',
    description: 'Cage-free systems require 30-40% more labor hours for monitoring and management.',
    icon: 'fas fa-users'
  },
  {
    title: 'Interstate Commerce Complexities',
    description: 'Varied implementation timelines and requirements across states create compliance tracking challenges.',
    icon: 'fas fa-truck-moving'
  }
];

// Impact of California and Maine regulations
export const calMaineImpact: ImpactItem[] = [
  {
    title: 'Market Segmentation',
    description: 'Creation of two-tier market structure for compliant vs. non-compliant eggs',
    icon: 'fas fa-layer-group',
    severity: 'high'
  },
  {
    title: 'Price Premium',
    description: 'Price premium for compliant eggs with potential spillover to all eggs nationally',
    icon: 'fas fa-dollar-sign',
    severity: 'high'
  },
  {
    title: 'Supply Chain Reconfiguration',
    description: 'Producers redirect non-compliant production to unregulated markets',
    icon: 'fas fa-random',
    severity: 'medium'
  },
  {
    title: 'Legal Challenges',
    description: 'Commerce Clause challenges continuing to create implementation uncertainty',
    icon: 'fas fa-gavel',
    severity: 'medium'
  }
];

// Producer implications
export const producerImplications: string[] = [
  'Cost Structure Changes: Cage-free production increases costs by 25-40% per dozen',
  'Compliance Timeline Pressure: Less than 60% of production currently meets new standards',
  'Market Segmentation Opportunities: Premium positioning for early compliance adopters',
  'Technology Investment Acceleration: Automated monitoring systems becoming essential'
];

// Consumer implications
export const consumerImplications: string[] = [
  'Price Sensitivity Thresholds: Elasticity changes significantly at the $5/dozen threshold',
  'Perception of Value: 64% of consumers indicate willingness to pay more when benefits are clearly communicated',
  'Regional Availability Challenges: Non-compliant eggs redirected to unregulated markets',
  'Restaurant Menu Adaptations: Food service operations accelerating egg-alternative R&D'
];

// Key takeaway
export const keyTakeaway: string = "Strategic positioning required ahead of Q1 2025. Producers should accelerate compliance investments while developing tiered pricing strategies. Retailers must secure compliant supply chains while educating consumers about value proposition changes. Investors should expect volatility with advantages accruing to well-capitalized, compliance-ready producers.";

// Featured analyses cards
export const featuredAnalyses: AnalysisCard[] = [
  {
    id: 'dairy-industry-outlook-2025',
    title: 'Dairy Industry Outlook: Navigating the Plant-Based Revolution',
    preview: 'How traditional dairy producers are adapting to changing consumer preferences and the rise of alternative milk products.',
    imageUrl: '/images/thirdbridge/dairy-industry.svg',
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
    imageUrl: '/images/thirdbridge/farm-labor.svg',
    category: 'Policy Analysis',
    date: 'January 25, 2025',
    views: '1.9K',
    saves: '274'
  }
];