'use client';

import React from 'react';
import styles from '../../../styles/thirdbridge-new/ThirdBridge.module.css';

const IndustryStructureTab: React.FC = () => {
  return (
    <div className={styles.tabContentContainer}>
      <h3 className={styles.tabTitle}>Industry Structure</h3>
      
      <div className={styles.overviewSection}>
        <p>
          The NLP industry has evolved from a fragmented landscape of specialized providers to a more 
          consolidated structure dominated by major AI research labs and technology giants. This section 
          examines the current competitive dynamics, market segmentation, and the evolving value chain.
        </p>
      </div>
      
      <div className={styles.structureSection}>
        <h3 className={styles.sectionTitle}>Competitive Landscape</h3>
        <div className={styles.structureDiagram}>
          <img 
            src="/images/thirdbridge/market-share-diagram.jpg" 
            alt="NLP Market Share by Company" 
            className={styles.diagramImage}
          />
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Company</th>
                <th>Market Share (%)</th>
                <th>Key Models</th>
                <th>Primary Sectors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OpenAI</td>
                <td>32.5%</td>
                <td>GPT-4, GPT-4o</td>
                <td>Enterprise, Consumer, Healthcare</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>29.8%</td>
                <td>Gemini, PaLM</td>
                <td>Enterprise, Consumer, Education</td>
              </tr>
              <tr>
                <td>Anthropic</td>
                <td>15.7%</td>
                <td>Claude 3</td>
                <td>Enterprise, Healthcare, Finance</td>
              </tr>
              <tr>
                <td>Meta</td>
                <td>8.4%</td>
                <td>Llama 3</td>
                <td>Open Source, Research</td>
              </tr>
              <tr>
                <td>Cohere</td>
                <td>4.2%</td>
                <td>Command</td>
                <td>Enterprise, Search</td>
              </tr>
              <tr>
                <td>Others</td>
                <td>9.4%</td>
                <td>Various</td>
                <td>Mixed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className={styles.challengeCards}>
        <div className={styles.challengeCard}>
          <div className={styles.challengeTitle}>
            <i className="fas fa-brain"></i>
            <span>Model Development Costs</span>
          </div>
          <p>
            Training cutting-edge LLMs requires significant computational resources, with 
            costs ranging from $5-20 million for state-of-the-art models. This creates substantial 
            barriers to entry for new market participants.
          </p>
        </div>
        
        <div className={styles.challengeCard}>
          <div className={styles.challengeTitle}>
            <i className="fas fa-shield-alt"></i>
            <span>Regulatory Compliance</span>
          </div>
          <p>
            Evolving regulations around AI safety, data privacy, and content generation are 
            increasing compliance costs and creating uncertainty for market participants.
          </p>
        </div>
        
        <div className={styles.challengeCard}>
          <div className={styles.challengeTitle}>
            <i className="fas fa-server"></i>
            <span>Infrastructure Bottlenecks</span>
          </div>
          <p>
            Limited supply of high-performance GPUs and specialized AI chips is creating 
            deployment constraints and increasing operating costs for NLP service providers.
          </p>
        </div>
      </div>
      
      <div className={styles.implicationsSection}>
        <h3 className={styles.sectionTitle}>Strategic Implications</h3>
        
        <div className={styles.implicationTitle}>
          <i className="fas fa-chess"></i>
          <span>For Established Players</span>
        </div>
        <ul className={styles.implicationList}>
          <li><strong>Vertical Integration:</strong> Leading companies are increasingly acquiring specialized 
          infrastructure and data providers to secure competitive advantages.</li>
          <li><strong>API Ecosystem Development:</strong> Expanding partner networks and creating 
          robust developer ecosystems is becoming critical for market expansion.</li>
        </ul>
        
        <div className={styles.implicationTitle}>
          <i className="fas fa-rocket"></i>
          <span>For New Entrants</span>
        </div>
        <ul className={styles.implicationList}>
          <li><strong>Niche Specialization:</strong> Focusing on industry-specific applications and 
          specialized use cases offers viable entry strategies.</li>
          <li><strong>Open Source Leverage:</strong> Building on open-source models allows new 
          entrants to reduce development costs while focusing on application innovation.</li>
        </ul>
      </div>
    </div>
  );
};

export default IndustryStructureTab; 