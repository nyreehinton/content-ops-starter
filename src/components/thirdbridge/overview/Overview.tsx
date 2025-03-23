import React, { useEffect, useRef } from 'react';
import styles from '@/styles/ThirdBridge.module.css';
import Tooltip from '@/components/thirdbridge/ui/Tooltip';
import { interviews, industries } from '@/lib/data';
import Chart from 'chart.js/auto';

interface OverviewProps {
  setActiveSection: (section: string) => void;
}

const Overview: React.FC<OverviewProps> = ({ setActiveSection }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Food & Beverage', 'Retail & Apparel', 'Agriculture', 'Technology', 'Home Improvement', 'Health & Wellness'],
            datasets: [{
              label: 'Number of Interviews',
              data: [18, 23, 14, 16, 12, 9],
              backgroundColor: [
                'rgba(22, 43, 64, 0.8)',
                'rgba(22, 43, 64, 0.7)',
                'rgba(22, 43, 64, 0.6)',
                'rgba(22, 43, 64, 0.5)',
                'rgba(22, 43, 64, 0.4)',
                'rgba(22, 43, 64, 0.3)'
              ],
              borderColor: [
                'rgba(22, 43, 64, 1)',
                'rgba(22, 43, 64, 1)',
                'rgba(22, 43, 64, 1)',
                'rgba(22, 43, 64, 1)',
                'rgba(22, 43, 64, 1)',
                'rgba(22, 43, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: 'rgba(200, 200, 200, 0.2)'
                }
              },
              x: {
                grid: {
                  display: false
                }
              }
            },
            plugins: {
              legend: {
                display: false
              }
            }
          }
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section className={`${styles.sectionContent} bg-white`}>
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold text-navy-700 mb-2">Market Research Portfolio</h1>
        <p className="text-slate-600 text-lg max-w-3xl">
          A consolidated collection of C-Suite conversations, sector research, and strategic reviews conducted during my engagement with ThirdBridge.
        </p>
      </div>
      
      {/* Analytics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Total Interviews</p>
              <h3 className="text-3xl font-display font-bold text-navy-600">120</h3>
            </div>
            <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-navy-500">
              <i className="fas fa-comments"></i>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-slate-500">
              <span className="text-emerald-500"><i className="fas fa-arrow-up text-xs mr-1"></i>12%</span>
              increase from previous quarter
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Industries Covered</p>
              <h3 className="text-3xl font-display font-bold text-navy-600">8</h3>
            </div>
            <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-navy-500">
              <i className="fas fa-industry"></i>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-slate-500">
              <span className="text-emerald-500"><i className="fas fa-plus text-xs mr-1"></i>2</span>
              new sectors added this quarter
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Key Findings</p>
              <h3 className="text-3xl font-display font-bold text-navy-600">32</h3>
            </div>
            <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-navy-500">
              <i className="fas fa-lightbulb"></i>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-slate-500">
              <span className="text-emerald-500"><i className="fas fa-arrow-up text-xs mr-1"></i>8</span>
              actionable insights delivered
            </p>
          </div>
        </div>
      </div>
      
      {/* Industry Breakdown Chart */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-slate-100 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-display text-xl font-bold text-navy-700">Industry Breakdown</h2>
          <div className="flex space-x-2">
            <button className="text-sm text-slate-500 hover:text-navy-500 px-3 py-1 rounded border border-slate-200 transition-colors">
              <i className="fas fa-download mr-1"></i> Export
            </button>
            <Tooltip content="This chart displays the distribution of interviews conducted across various industry sectors, highlighting areas of focus and expertise.">
              <button className="text-sm text-slate-500 hover:text-navy-500 px-2 py-1 rounded border border-slate-200 transition-colors">
                <i className="fas fa-info-circle"></i>
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="h-80">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
      
      {/* Featured Highlights */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl font-bold text-navy-700">Featured Highlights</h2>
          <button 
            className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
            onClick={() => setActiveSection('featured')}
          >
            View All <i className="fas fa-arrow-right ml-1"></i>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured Item 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-all">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611434686174-44a8f2416561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400&q=80" 
                alt="Egg price analysis" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 right-3 bg-indigo-700 text-white text-xs font-medium px-2 py-1 rounded">
                In-Depth Analysis
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-bold text-navy-700 mb-2">
                The Perfect Storm: Analyzing the 2025 Egg Price Surge
              </h3>
              <p className="text-slate-600 mb-4 line-clamp-3">
                An examination of the complex interplay of factors beyond bird flu that have led to unprecedented egg price volatility in the American market.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">Published: Jan 15, 2025</span>
                <button 
                  className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
                  onClick={() => setActiveSection('featured')}
                >
                  Read Analysis <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </div>
            </div>
          </div>
          
          {/* Featured Item 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-all">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400&q=80" 
                alt="Retail transformation" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-medium px-2 py-1 rounded">
                Executive Interview
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-bold text-navy-700 mb-2">
                Retail Transformation: Insights from Industry Leaders
              </h3>
              <p className="text-slate-600 mb-4 line-clamp-3">
                Consolidating perspectives from C-Suite executives at leading retail companies on post-pandemic strategies and digital transformation.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">Published: Dec 8, 2024</span>
                <button 
                  className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
                  onClick={() => setActiveSection('featured')}
                >
                  Read Interview <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Interviews Preview */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl font-bold text-navy-700">Recent Interviews</h2>
          <button 
            className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
            onClick={() => setActiveSection('interviews')}
          >
            View All <i className="fas fa-arrow-right ml-1"></i>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {interviews.slice(0, 3).map((interview, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-5 border border-slate-100">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-medium text-navy-700">{interview.title}</h3>
                <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">{interview.date}</span>
              </div>
              <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                {interview.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">
                  <i className="fas fa-tag mr-1"></i> {interview.industry}
                </span>
                <button 
                  className="text-xs font-medium text-amber-600 hover:text-amber-700 transition-colors"
                  onClick={() => setActiveSection('interviews')}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;