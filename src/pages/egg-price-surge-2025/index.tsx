import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/ThirdBridge.module.css';
import { 
  mainArticle, 
  priceData, 
  regionalPrices, 
  industryData, 
  structuralChallenges, 
  calMaineImpact,
  producerImplications,
  consumerImplications,
  keyTakeaway 
} from '@/data/analysisData';
import { 
  getSafeArticle, 
  getSafePriceData, 
  getSafeRegionalPrices, 
  getSafeYears,
  getSafeIndustryData,
  getSafeImplications,
  getSafeKeyTakeaway 
} from '@/components/thirdbridge/utils/dataHelpers';
import TabsComponent from './TabsComponent';
import EggPriceChart from '@/components/charts/EggPriceChart';

/**
 * 2025 Egg Price Surge Analysis Page
 */
export default function EggPriceSurgePage() {
  const article = getSafeArticle(mainArticle);
  const safeProducerImplications = getSafeImplications(producerImplications);
  const safeConsumerImplications = getSafeImplications(consumerImplications);
  const safeKeyTakeaway = getSafeKeyTakeaway(keyTakeaway);
  const safeData = getSafePriceData(priceData);
  const safeRegionalPrices = getSafeRegionalPrices(regionalPrices);
  const years = getSafeYears(safeData);
  const [activeYear, setActiveYear] = useState(years[years.length - 1] || '2025');
  const safeIndustryData = getSafeIndustryData(industryData);
  const safeStructuralChallenges = structuralChallenges || [];
  const safeCalMaineImpact = calMaineImpact || [];
  
  // Overview Tab Content
  const OverviewTabContent = () => (
    <div className={styles.tabContentSection}>
      <h3 className={styles.tabTitle}>Overview</h3>
      
      <div className={styles.contentColumns}>
        <div className={styles.mainColumn}>
          <div className={styles.contentBlock}>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 mb-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">The Egg Industry's Perfect Storm</h2>
              <p className="text-base leading-relaxed">
                The egg industry faces unprecedented challenges in 2025, with prices reaching historic highs and supply chain disruptions causing widespread market instability.
              </p>
            </div>

            <h4 className={styles.contentSubtitle}>A Crisis in the Carton</h4>
            <p className={styles.textLarge}>
              In 2025, egg prices have cracked new records, with a dozen Grade A large eggs averaging $4.95 in January—a staggering 53% jump from the previous year. Shelves are thinning, stores like Trader Joe's and Costco are imposing purchase limits, and consumers are venting their frustration online. As I write this on March 10, 2025, the headlines scream about bird flu, with over 148 million hens culled since 2022, including 20 million in the last quarter of 2024 alone. It's a dramatic narrative, and it's easy to pin the blame on this outbreak. But is it the whole story?
            </p>

            <p className={styles.textLarge}>
              I'm Nyree Hinton, an analyst and content creator with years of experience unpacking complex industry dynamics through investor conversations. On May 13, 2021, I sat down with Tim Dawson, the former CFO of Cal-Maine Foods—the world's largest egg producer—for an in-depth interview about the egg industry's inner workings. That conversation, paired with my ongoing analysis of agricultural markets, gives me a unique lens to dissect today's crisis. The question I'm exploring here isn't just whether bird flu is driving these sky-high prices—it's how structural factors, from feed costs to distribution models, have long set the stage for volatility, with or without a viral outbreak. Let's crack into it.
            </p>
            
            <h4 className={styles.contentSubtitle}>Executive Summary</h4>
            <p className={styles.textLarge}>
              {article.executiveSummary}
            </p>
          </div>
          
          <div className={styles.keyPoints}>
            <h4>Key Points</h4>
            <ul>
              {article.keyPoints.map((point, index) => (
                <li key={index}>
                  <div className={styles.keyPointIcon}>
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className={styles.keyPointText}>{point}</div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.contentBlock}>
            <h4 className={styles.contentSubtitle}>Revisiting 2021: Tim Dawson's Window into the Egg Industry</h4>
            <p className={styles.textLarge}>
              When I spoke with Tim Dawson in 2021, he painted a vivid picture of an industry that's both sprawling and surprisingly personal. "The egg industry still, today, is largely composed of family businesses," he told me, noting that Cal-Maine stands out as the exception—a public giant in a sea of private, often generational operations. These family-run farms, many tracing back to a great-grandmother's backyard flock, contrast sharply with Cal-Maine's 44 million hens and its status as the top player not just in the U.S., but globally.
            </p>

            <h5 className={styles.subContentTitle}>The Industry's Core Dynamics</h5>
            <p className={styles.textLarge}>
              Dawson highlighted a few fundamentals that remain critical today. First, feed costs dominate production economics. "Between 50-65% of that cost is feed cost," he explained, adding, "For every USD 0.25 increase in the cost of a bushel of corn, it impacts their feed cost by a penny per dozen." That's a tight margin game, and it's one every producer plays.
            </p>

            <p className={styles.textLarge}>
              Second, egg pricing is a rollercoaster. "Egg pricing is not only seasonal. It's cyclical. It's just extremely volatile," he said, recalling a moment when prices swung 38% in eight days. He tied this to predictable patterns—strong demand around Easter and the winter holidays, slumps in summer—but underscored that sudden shifts are par for the course.
            </p>

            <p className={styles.textLarge}>
              The egg industry has been on a path of increasing consolidation for decades, with the number of commercial egg producers declining by 58% since 2000. This market concentration, while creating economies of scale during normal operations, became a liability during the avian influenza outbreak when large producers faced simultaneous disruptions. Additionally, the industry's just-in-time inventory practices, optimized for the perishable nature of eggs, left little buffer when supply disruptions occurred.
            </p>
          </div>
        </div>
        
        <div className={styles.sideColumn}>
          <div className={styles.infoBox}>
            <h4>
              <i className="fas fa-lightbulb"></i>
              Highlights
            </h4>
            <ul>
              {article.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.infoBox}>
            <h4>
              <i className="fas fa-exclamation-circle"></i>
              Critical Facts
            </h4>
            <ul>
              <li>148 million hens culled since 2022 due to bird flu</li>
              <li>20 million hens lost in Q4 2024 alone</li>
              <li>National average egg price reached $4.95 in January 2025</li>
              <li>53% price increase year-over-year</li>
              <li>Feed costs represent 50-65% of production expenses</li>
            </ul>
          </div>
          
          <div className={styles.analystInfo}>
            <img 
              src={article.analyst.imageUrl} 
              alt={article.analyst.name}
              className={styles.analystImage}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/100x100/0a2856/ffffff?text=NH';
              }}
            />
            <div>
              <div className={styles.analystName}>{article.analyst.name}</div>
              <div className={styles.analystTitle}>{article.analyst.title}</div>
            </div>
          </div>
          <p className={styles.analystBio}>{article.analyst.bio}</p>
        </div>
      </div>
    </div>
  );
  
  // Price Data Tab Content
  const PriceDataTabContent = () => (
    <div className={styles.tabContentSection}>
      <h3 className={styles.tabTitle}>Price Data Analysis</h3>
      
      <div className={styles.contentBlock}>
        <h4 className={styles.contentSubtitle}>The Feed Cost Factor</h4>
        <p className={styles.textLarge}>
          Feed costs dominate the egg industry's economics. In 2021, Tim Dawson noted corn at $7 a bushel and soybean meal at $400 a ton were "historically pretty high." Today, inflation has kept those pressures alive, and with feed making up 50-65% of production costs, every quarter-dollar hike in corn prices adds a penny per dozen. That might sound small, but scale it across millions of eggs, and it's a margin squeeze—especially for smaller producers without Cal-Maine's efficiency edge. 
        </p>
        <p className={styles.textLarge}>
          Dawson hinted at Cal-Maine's resilience: "Cal-Maine works... on minimising the amount of feed that each hen consumes to produce an egg." In 2025, that discipline could be a lifeline as feed inflation compounds bird flu's toll. The USDA's March 2-8, 2025, Egg Market News Report pegs national egg prices at record levels with no immediate relief expected.
        </p>
      </div>
      
      <div className={styles.chartPlaceholder}>
        <div className={styles.chartInfo}>
          <div className={styles.chartTitle}>Egg Price Trends (2023-2025)</div>
          <div className={styles.chartSubtitle}>National Average Retail Price per Dozen (USD)</div>
        </div>
        <div className={styles.chartImage}>
          <EggPriceChart className={styles.eggPriceChart} />
        </div>
        <div className={styles.chartLegend}>
          <div className={styles.legendItem}>
            <div className={styles.legendColor} style={{ backgroundColor: '#0a2856' }}></div>
            <span>Retail Price</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendColor} style={{ backgroundColor: '#c19b4a' }}></div>
            <span>Producer Price</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendColor} style={{ backgroundColor: '#718096' }}></div>
            <span>Production Cost</span>
          </div>
        </div>
      </div>
      
      <div className={styles.contentColumns}>
        <div className={styles.mainColumn}>
          <div className={styles.yearSelector}>
            {years.map((year) => (
              <button 
                key={year}
                className={`${styles.yearButton} ${activeYear === year ? styles.activeYear : ''}`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
          
          <div className={styles.statsList}>
            {safeData[activeYear].stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={`${styles.statChange} ${stat.change >= 0 ? styles.positive : styles.negative}`}>
                  <i className={`fas fa-${stat.change >= 0 ? 'arrow-up' : 'arrow-down'}`}></i>
                  {Math.abs(stat.change)}%
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.contentBlock}>
            <h4 className={styles.contentSubtitle}>Primary Price Drivers in {activeYear}</h4>
            <p className={styles.textLarge}>
              In {activeYear}, the primary factors affecting egg prices include both structural industry elements and economic pressures. Volatility in pricing has been exceptional, with Dawson recalling a period when prices swung 38% in just eight days. Egg pricing follows seasonal patterns—strong demand around Easter and winter holidays, slumps in summer—but the magnitude of swings has intensified with market concentration and external shocks.
            </p>
            <ul className={styles.driversList}>
              {safeData[activeYear].drivers.map((driver, index) => (
                <li key={index}>
                  <span className={styles.driverName}>{driver.name}</span>
                  <span 
                    className={styles.driverImpact}
                    style={{ 
                      backgroundColor: 
                        driver.impact === 'high' ? '#e53e3e' : 
                        driver.impact === 'medium' ? '#dd6b20' : 
                        '#38a169'
                    }}
                  >
                    {driver.impact}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className={styles.sideColumn}>
          <div className={styles.priceComparison}>
            <h4>Regional Price Comparison</h4>
            <div className={styles.priceMap}>
              <div className={styles.mapContainer}>
                <img 
                  src="/images/thirdbridge/us-egg-price-map.jpg" 
                  alt="US Egg Price Map"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/400x300/0a2856/ffffff?text=US+Egg+Price+Map';
                  }}
                />
              </div>
              <div className={styles.regionsGrid}>
                {safeRegionalPrices.map((region, index) => (
                  <div key={index} className={styles.regionCard}>
                    <div className={styles.regionName}>{region.name}</div>
                    <div className={styles.regionPrice}>${region.price}</div>
                    <div className={`${styles.regionChange} ${styles.priceIncrease}`}>
                      <i className="fas fa-arrow-up"></i>
                      {region.change}% YoY
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.infoBox}>
            <h4>
              <i className="fas fa-exclamation-circle"></i>
              Price Shock Stats
            </h4>
            <ul>
              <li>National average price reached $4.95/dozen in January 2025</li>
              <li>53% increase from previous year</li>
              <li>National caged extra-large eggs: $7.42-$7.84/dozen (March 2025)</li>
              <li>Cal-Maine culled 1.6 million hens in April 2024</li>
              <li>Prices expected to remain elevated through 2025</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Industry Structure Tab Content
  const IndustryStructureTabContent = () => (
    <div className={styles.tabContentSection}>
      <h3 className={styles.tabTitle}>Industry Structure Analysis</h3>
      
      <div className={styles.contentBlock}>
        <h4 className={styles.contentSubtitle}>Cal-Maine's Strategic Position</h4>
        <p className={styles.textLarge}>
          Cal-Maine's strategy has been described with confidence by industry insiders. Unlike smaller producers, Cal-Maine leans heavily on retail—90% of its sales go to grocery giants like Walmart, Publix, and H-E-B. When asked if this made them over-exposed, former CFO Tim Dawson pushed back: "I don't think it's not taking advantage so much as they believe that's a better business to be in, and that's why they're in that business." He contrasted this with foodservice, where demand for egg products (think liquid eggs for fast food) can crater during disruptions like the 2020 pandemic. Retail, he argued, offers stability—a point that resonates now as we navigate 2025's chaos.
        </p>
        <p className={styles.textLarge}>
          Dawson also flagged Cal-Maine's acquisition playbook. "When those families get ready to make a change, Cal-Maine is there," he said, describing how the company has grown by snapping up struggling or transitioning family operations. This consolidation trend, he suggested, thrives in times of upheaval—a dynamic that continues to play out in 2025's market.
        </p>
      </div>
      
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
            <h4 className={styles.contentSubtitle}>The 2025 Crisis: Bird Flu Meets a Fragile System</h4>
            <p className={styles.textLarge}>
              The egg industry is reeling in 2025. The highly pathogenic avian influenza (HPAI) has decimated flocks, with the USDA reporting over 148 million birds culled since 2022. Cal-Maine itself culled 1.6 million hens and 337,000 pullets at its Texas facility in April 2024 alone—3.6% of its flock gone in one swoop. The result? Supply shortages that have pushed prices to unprecedented heights. The USDA's March 2-8, 2025, Egg Market News Report pegs national caged extra-large egg prices at $7.42 to $7.84 per dozen, with little relief in sight. Experts like David Anderson from Texas A&M warn that as long as the virus persists, "supply will remain tight, potentially pushing prices higher."
            </p>
          </div>
          
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
            <p className={styles.textLarge}>
              Bird flu is a glaring catalyst—but not the sole villain in the 2025 egg price crisis. The culling of 148 million hens since 2022 is a supply gut punch, no doubt. When you lose that many birds—over a third of the U.S.'s roughly 325 million laying hens—you're going to see prices soar. Cal-Maine's Texas losses alone underscore how even the biggest players aren't immune. Yet, industry warnings about feed costs, distribution quirks, and industry fragmentation suggest there's more at play in this crisis.
            </p>
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
            <p className={styles.textLarge}>
              Dawson flagged cage-free mandates—pushed by groups like the Humane Society—as a looming capital burden. By 2021, 26% of U.S. hens were cage-free; commitments suggested 70% by 2025. That shift requires big upfront costs—costs smaller farms can't always shoulder. Bird flu's culls might delay conversions, but the trend persists, nudging production expenses higher and adding another layer to price hikes.
            </p>
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

          <div className={styles.infoBox}>
            <h4>
              <i className="fas fa-exclamation-triangle"></i>
              Consumer Impact
            </h4>
            <p className={styles.textMedium}>
              Consumers are feeling the pinch. Social media posts brim with frustration—"Eggs at $10 a carton? I'm done"—while stores ration stock. Politically, it's a hot potato: White House Press Secretary Karoline Leavitt has pointed fingers at past administrations, though culling is a standard HPAI response, not a policy quirk. The scale of this outbreak dwarfs 2015's, when prices hit notable but lower peaks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Conclusion Tab Content
  const ConclusionTabContent = () => (
    <div className={styles.tabContentSection}>
      <h3 className={styles.tabTitle}>Conclusion & Implications</h3>
      
      <div className={styles.keyTakeaway}>
        <div className={styles.takeawayHeader}>
          <i className="fas fa-quote-left"></i>
          <h4>Key Takeaway</h4>
        </div>
        <p className={styles.takeawayQuote}>{safeKeyTakeaway}</p>
      </div>
      
      <div className={styles.contentColumns}>
        <div className={styles.mainColumn}>
          <div className={styles.contentBlock}>
            <h4 className={styles.contentSubtitle}>A Perfect Storm, Not a Lone Culprit</h4>
            <p className={styles.textLarge}>
              So, is bird flu the main reason egg prices are skyrocketing in 2025? It's a major aggravator—148 million culled hens can't be ignored—but it's not the whole story. Feed cost inflation, retail vs. foodservice dynamics, consolidation pressures, and cage-free shifts have long made this industry a tinderbox. Bird flu lit the match, but the fuel was already there. As I reflect on my 2021 chat with Tim Dawson, I'm struck by how his insights—feed as the cost king, volatility as a constant, Cal-Maine's retail bet—frame today's chaos as both unique and eerily familiar.
            </p>
          </div>
          
          <div className={styles.marketImplications}>
            <h4 className={styles.contentSubtitle}>Market Implications</h4>
            <div className={styles.implicationsContainer}>
              <div className={styles.implicationsColumn}>
                <div className={styles.implicationsHeader}>
                  <i className="fas fa-industry"></i>
                  <h5>For Producers</h5>
                </div>
                <ul className={styles.implicationsList}>
                  {safeProducerImplications.map((implication, index) => (
                    <li key={index}>
                      <span className={styles.implicationIcon}>
                        <i className="fas fa-angle-right"></i>
                      </span>
                      {implication}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.implicationsColumn}>
                <div className={styles.implicationsHeader}>
                  <i className="fas fa-users"></i>
                  <h5>For Consumers</h5>
                </div>
                <ul className={styles.implicationsList}>
                  {safeConsumerImplications.map((implication, index) => (
                    <li key={index}>
                      <span className={styles.implicationIcon}>
                        <i className="fas fa-angle-right"></i>
                      </span>
                      {implication}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className={styles.contentBlock}>
            <h4 className={styles.contentSubtitle}>Looking Forward</h4>
            <p className={styles.textLarge}>
              Looking ahead, solutions like poultry vaccines (debated due to trade risks) or better feed hedging could help. The USDA's $1.25 billion biosecurity push since 2022 is a start, but controlling HPAI remains elusive. Cal-Maine's expansion into cage-free and branded eggs might steady its course, while consumers may adapt—cutting back or hunting alternatives. For now, prices may climb until the virus ebbs or supply rebuilds.
            </p>
            <p className={styles.textLarge}>
              The egg industry is at a critical inflection point. While the current price volatility is expected to stabilize by late 2025, structural changes are becoming permanent. The transition to cage-free production will continue, with an estimated 70% of production expected to meet cage-free standards by 2030. This shift, coupled with ongoing industry consolidation, will likely result in a more segmented market with premium and value tiers becoming increasingly distinct.
            </p>
            <p className={styles.textLarge}>
              Regulatory fragmentation across states will become a defining feature of the industry landscape, requiring producers to maintain multiple production systems and supply chains. This complexity will favor larger producers with the capital to invest in diverse facilities and robust biosecurity measures, potentially accelerating the consolidation trend.
            </p>
            <p className={styles.textLarge}>
              As someone who's tracked this sector through countless investor dialogues, I'll keep watching the USDA's Egg Market News and social media's pulse for updates. My talk with Dawson gave me a front-row seat to the egg industry's mechanics, and blending that with 2025's data reinforces one truth: this crisis is a perfect storm, not a single squawk. Stay tuned—and maybe stock up on those cartons while you can.
            </p>
          </div>
        </div>
        
        <div className={styles.sideColumn}>
          <div className={styles.outlookCard}>
            <div className={styles.outlookHeader}>5-Year Price Outlook</div>
            <div className={styles.outlookChart}>
              <img 
                src="/images/thirdbridge/price-forecast.jpg" 
                alt="5-Year Price Forecast"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/400x200/0a2856/ffffff?text=Price+Forecast+Chart';
                }}
              />
            </div>
            <div className={styles.outlookStats}>
              <div className={styles.outlookStat}>
                <span className={styles.statLabel}>2026 Projected Price</span>
                <span className={styles.statValue}>
                  <i className="fas fa-dollar-sign"></i> 4.72
                </span>
              </div>
              <div className={styles.outlookStat}>
                <span className={styles.statLabel}>2030 Projected Price</span>
                <span className={styles.statValue}>
                  <i className="fas fa-dollar-sign"></i> 5.86
                </span>
              </div>
              <div className={styles.outlookStat}>
                <span className={styles.statLabel}>5-Year Volatility Trend</span>
                <span className={styles.statValue}>
                  <i className="fas fa-arrow-down"></i> Decreasing
                </span>
              </div>
            </div>
          </div>
          
          <div className={styles.infoBox}>
            <h4>
              <i className="fas fa-tasks"></i>
              Recommended Actions
            </h4>
            <div className={styles.actionsList}>
              <div className={styles.actionItem}>
                <div className={styles.actionTitle}>
                  <i className="fas fa-eye"></i>
                  Monitor regulatory developments
                </div>
              </div>
              <div className={styles.actionItem}>
                <div className={styles.actionTitle}>
                  <i className="fas fa-chart-line"></i>
                  Analyze price sensitivity across segments
                </div>
              </div>
              <div className={styles.actionItem}>
                <div className={styles.actionTitle}>
                  <i className="fas fa-search"></i>
                  Identify regional arbitrage opportunities
                </div>
              </div>
              <div className={styles.actionItem}>
                <div className={styles.actionTitle}>
                  <i className="fas fa-shield-alt"></i>
                  Assess biosecurity investments
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.infoBox}>
            <h4>
              <i className="fas fa-lightbulb"></i>
              Historical Patterns
            </h4>
            <p className={styles.textMedium}>
              Dawson's emphasis on supply-demand balances and cost-plus traps rings true. "Cal-Maine was typically more profitable during higher-feed-cost periods," he said, because tight supply boosted prices. Today's culling mimics that dynamic: fewer hens, higher prices, potential profit—if you can weather the storm. The egg market's cyclical nature—seasonal spikes, rapid corrections—means this crisis fits a pattern, even if the scale feels unprecedented.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Define tab configurations
  const tabs = [
    { id: 'overview', label: 'Overview', content: <OverviewTabContent /> },
    { id: 'data', label: 'Price Data', content: <PriceDataTabContent /> },
    { id: 'industry', label: 'Industry Structure', content: <IndustryStructureTabContent /> },
    { id: 'conclusion', label: 'Conclusion', content: <ConclusionTabContent /> },
  ];

  return (
    <>
      <Head>
        <title>{article.title} | ThirdBridge Analysis</title>
        <meta name="description" content={article.description} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <div className={`${styles.root} ${styles.container} ${styles.eggPageContainer} bg-white`}>
        <div className={styles.eggPriceAnalysisPage}>
          {/* Back to Featured Analysis Link */}
          <div className={styles.backLink}>
            <Link href="/thirdbridge">
              <span className={styles.backButton}>
                <i className="fas fa-arrow-left"></i> Back to Featured Analysis
              </span>
            </Link>
          </div>

          {/* Hero Image Section */}
          <div className={styles.articleHeroImage}>
            <img
              src="/images/thirdbridge/egg-price-hero.jpg"
              alt={article.title}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/1200x500/0a2856/ffffff?text=Egg+Price+Analysis';
              }}
            />
            <div className={styles.heroOverlay}>
              <span className={styles.heroCategory}>{article.category}</span>
              <span className={styles.heroDate}>{article.date}</span>
              <h1 className={styles.heroTitle}>{article.title}</h1>
              <p className={styles.heroDescription}>{article.description}</p>
            </div>
          </div>

          {/* Article Metadata */}
          <div className={styles.articleMetadata}>
            <div className={styles.analystInfo}>
              <img 
                src={article.analyst.imageUrl} 
                alt={article.analyst.name}
                className={styles.analystImage}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/100x100/0a2856/ffffff?text=NH';
                }}
              />
              <div>
                <div className={styles.analystName}>{article.analyst.name}</div>
                <div className={styles.analystTitle}>{article.analyst.title}</div>
              </div>
            </div>
            <div className={styles.articleActions}>
              <button className={styles.actionButton}>
                <i className="fas fa-bookmark"></i> Save
              </button>
              <button className={styles.actionButton}>
                <i className="fas fa-share-alt"></i> Share
              </button>
              <button className={styles.actionButton}>
                <i className="fas fa-download"></i> Download PDF
              </button>
            </div>
          </div>

          {/* Content Tabs */}
          <TabsComponent tabs={tabs} />
        </div>
      </div>
    </>
  );
}
