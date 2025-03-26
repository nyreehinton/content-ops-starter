/**
 * Featured analysis data for ThirdBridge
 * @typedef {Object} AnalysisCard
 * @property {string} id - Unique identifier for the analysis
 * @property {string} title - Title of the analysis
 * @property {string} preview - Preview text or description
 * @property {string} imageUrl - URL to the image
 * @property {string} category - Category of the analysis
 * @property {string} date - Publication date
 * @property {string|number} views - Number of views
 * @property {string|number} saves - Number of saves
 *
 * @typedef {Object} Analyst
 * @property {string} name - Name of the analyst
 * @property {string} title - Job title
 * @property {string} imageUrl - URL to analyst's image
 * @property {string} bio - Analyst biography
 *
 * @typedef {Object} Article
 * @property {string} id - Unique identifier for the article
 * @property {string} title - Title of the article
 * @property {string} description - Description or summary
 * @property {string} imageUrl - URL to the image
 * @property {string} category - Category of the article
 * @property {string} date - Publication date
 * @property {string} executiveSummary - Executive summary text
 * @property {string[]} keyPoints - Key points as an array of strings
 * @property {string[]} highlights - Highlights as an array of strings
 * @property {Analyst} analyst - The analyst who wrote the article
 *
 * @typedef {Object} RegionalPrice
 * @property {string} name - Region name
 * @property {string} price - Price as string
 * @property {number} change - Percentage change
 *
 * @typedef {Object} StatItem
 * @property {string} label - Statistic label
 * @property {string} value - Value as string
 * @property {number} change - Percentage change
 *
 * @typedef {Object} DriverItem
 * @property {string} name - Driver name
 * @property {'low'|'medium'|'high'} impact - Impact level
 *
 * @typedef {Object} YearData
 * @property {StatItem[]} stats - Array of statistics
 * @property {DriverItem[]} drivers - Array of drivers
 *
 * @typedef {Object} PriceData
 * @property {YearData} [year] - Year data keyed by year string
 *
 * @typedef {Object} MetricItem
 * @property {string} name - Metric name
 * @property {string} value - Value as string
 *
 * @typedef {Object} CompanyItem
 * @property {string} name - Company name
 * @property {number} marketShare - Market share percentage
 *
 * @typedef {Object} RegulationItem
 * @property {string} name - Regulation name
 * @property {'low'|'medium'|'high'} impact - Impact level
 *
 * @typedef {Object} IndustryData
 * @property {MetricItem[]} metrics - Industry metrics
 * @property {CompanyItem[]} topCompanies - Top companies
 * @property {RegulationItem[]} regulations - Relevant regulations
 *
 * @typedef {Object} Challenge
 * @property {string} title - Challenge title
 * @property {string} description - Challenge description
 * @property {string} icon - Icon identifier
 *
 * @typedef {Object} ImpactItem
 * @property {string} title - Impact title
 * @property {string} description - Impact description
 * @property {string} icon - Icon identifier
 * @property {'low'|'medium'|'high'} severity - Severity level
 */

/**
 * Featured analyses cards
 * @type {AnalysisCard[]}
 */
export const featuredAnalyses = [
    {
        id: 'egg-price-surge',
        title: 'The Perfect Storm: Analyzing the 2025 Egg Price Surge',
        preview:
            'An examination of the complex interplay of factors beyond bird flu that have led to unprecedented egg price volatility in the American market.',
        imageUrl:
            'https://images.unsplash.com/photo-1611434686174-44a8f2416561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400&q=80',
        category: 'Market Analysis',
        date: 'Jan 15, 2025',
        views: '2.4K',
        saves: '32'
    },
    {
        id: 'dairy-industry',
        title: 'Dairy Industry Outlook: 2025-2030',
        preview:
            'A comprehensive analysis of structural challenges, innovation opportunities, and regulatory impacts shaping the future of the dairy industry.',
        imageUrl:
            'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400&q=80',
        category: 'Industry Forecast',
        date: 'Dec 12, 2024',
        views: '1.8K',
        saves: '24'
    },
    {
        id: 'alternative-proteins',
        title: 'The Rise of Alternative Proteins: Market Analysis',
        preview:
            'Examining the accelerating growth of plant-based, fermentation-derived, and cultivated meat alternatives and their impact on traditional protein markets.',
        imageUrl:
            'https://images.unsplash.com/photo-1595004944653-709417a0426e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400&q=80',
        category: 'Emerging Trends',
        date: 'Nov 28, 2024',
        views: '3.1K',
        saves: '45'
    },
    {
        id: 'retail-digital-transformation',
        title: 'Retail Transformation: Digital Integration Strategies',
        preview:
            'How leading retailers are restructuring their operations to integrate digital channels, leverage data analytics, and create seamless customer experiences.',
        imageUrl:
            'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400&q=80',
        category: 'Industry Analysis',
        date: 'Oct 15, 2024',
        views: '2.2K',
        saves: '27'
    },
    {
        id: 'agricultural-tech-investments',
        title: 'AgTech Investment Landscape 2025',
        preview:
            'Tracking venture capital flows, strategic investments, and emerging technology platforms transforming agricultural production and distribution.',
        imageUrl:
            'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400&q=80',
        category: 'Investment Analysis',
        date: 'Oct 3, 2024',
        views: '1.7K',
        saves: '19'
    },
    {
        id: 'food-service-innovation',
        title: 'Food Service Innovation: Post-Pandemic Evolution',
        preview: 'How restaurant chains and food service operators are adapting their business models, leveraging technology, and reimagining physical spaces.',
        imageUrl:
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400&q=80',
        category: 'Trend Analysis',
        date: 'Sept 18, 2024',
        views: '2.0K',
        saves: '23'
    }
];

/**
 * Hero article data
 * @type {Article}
 */
export const heroArticle = {
    id: 'egg-price-surge',
    title: 'The Perfect Storm: Analyzing the 2025 Egg Price Surge',
    category: 'Market Analysis',
    date: 'January 15, 2025',
    imageUrl:
        'https://images.unsplash.com/photo-1611434686174-44a8f2416561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&h=800&q=80',
    description:
        'An examination of the complex interplay of factors beyond bird flu that have led to unprecedented egg price volatility in the American market.',
    executiveSummary:
        "Our analysis projects a 15% increase in egg prices during Q1 2025, primarily driven by the implementation of California's Proposition 12 and Maine's Question 3 animal welfare laws.",
    keyPoints: [
        'Regulatory changes in California and Maine will reduce supply and increase production costs',
        'Consumer demand is expected to remain strong despite higher prices',
        'Regional price variations will be more pronounced than in previous years',
        'Producers with compliant facilities will see margin improvements despite higher costs'
    ],
    highlights: [
        'Egg consumption remains price inelastic even during inflationary periods',
        'Smaller producers face higher compliance costs proportionally',
        'Limited egg substitutes in baking and breakfast categories maintain demand'
    ],
    analyst: {
        name: 'Nyree Hinton',
        title: 'Sector Analyst - Food & Agriculture',
        imageUrl: '/images/thirdbridge/analyst-nyree.jpg',
        bio: 'Specializes in agricultural economics with focus on regulatory impacts on commodity pricing.'
    }
};

// Include the main article from the TS version
/**
 * Main featured article data
 * @type {Article}
 */
export const mainArticle = {
    id: 'egg-price-surge-2025',
    title: 'Egg Price Analysis: Projected 15% Surge in Q1 2025',
    description:
        'Comprehensive analysis of the factors driving the expected egg price increase in early 2025, including supply chain disruptions, regulatory changes, and increased demand.',
    category: 'Food Industry',
    date: 'March 20, 2025',
    imageUrl: '/images/egg-prices-chart.jpg',
    executiveSummary:
        "Our analysis projects a 15% increase in egg prices during Q1 2025, primarily driven by the implementation of California's Proposition 12 and Maine's Question 3 animal welfare laws. These regulations, combined with ongoing inflationary pressures and seasonal demand patterns, will create significant upward price pressure in the US egg market.",
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

// Add exports from the TS version
/** @type {RegionalPrice[]} */
export const regionalPrices = [
    { name: 'California', price: '4.85', change: 28.9 },
    { name: 'Maine', price: '4.60', change: 29.3 },
    { name: 'Northeast', price: '4.50', change: 27.8 },
    { name: 'Midwest', price: '3.95', change: 17.7 },
    { name: 'South', price: '3.75', change: 20.0 },
    { name: 'Southwest', price: '3.90', change: 21.8 },
    { name: 'Northwest', price: '4.25', change: 24.7 }
];

/** @type {PriceData} */
export const priceData = {
    2023: {
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
    2024: {
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
    2025: {
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

/** @type {IndustryData} */
export const industryData = {
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

/** @type {Challenge[]} */
export const structuralChallenges = [
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

/** @type {ImpactItem[]} */
export const calMaineImpact = [
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

/** @type {string[]} */
export const producerImplications = [
    'Cost Structure Changes: Cage-free production increases costs by 25-40% per dozen',
    'Compliance Timeline Pressure: Less than 60% of production currently meets new standards',
    'Market Segmentation Opportunities: Premium positioning for early compliance adopters',
    'Technology Investment Acceleration: Automated monitoring systems becoming essential'
];

/** @type {string[]} */
export const consumerImplications = [
    'Price Sensitivity Thresholds: Elasticity changes significantly at the $5/dozen threshold',
    'Perception of Value: 64% of consumers indicate willingness to pay more when benefits are clearly communicated',
    'Regional Availability Challenges: Non-compliant eggs redirected to unregulated markets',
    'Restaurant Menu Adaptations: Food service operations accelerating egg-alternative R&D'
];

/** @type {string} */
export const keyTakeaway =
    'Strategic positioning required ahead of Q1 2025. Producers should accelerate compliance investments while developing tiered pricing strategies. Retailers must secure compliant supply chains while educating consumers about value proposition changes. Investors should expect volatility with advantages accruing to well-capitalized, compliance-ready producers.';
