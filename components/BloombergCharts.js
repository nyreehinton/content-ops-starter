'use client';

import React, { useEffect, useRef, useState } from 'react';

// This component will dynamically load Chart.js and render charts
const BloombergCharts = ({ chartId, chartType, data, options }) => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This code only runs in the browser, not during server-side rendering
    let chart = null;
    
    const initializeChart = async () => {
      try {
        setLoading(true);
        
        // Dynamically import Chart.js
        const { Chart, registerables } = await import('chart.js');
        Chart.register(...registerables);
        
        // Try to import ChartDataLabels plugin if needed
        let ChartDataLabels;
        try {
          ChartDataLabels = (await import('chartjs-plugin-datalabels')).default;
          Chart.register(ChartDataLabels);
        } catch (err) {
          console.warn('ChartDataLabels plugin not loaded:', err);
        }
        
        // Get the canvas context
        const ctx = chartRef.current.getContext('2d');
        
        // Destroy existing chart if it exists
        if (chartInstance) {
          chartInstance.destroy();
        }
        
        // Create new chart
        chart = new Chart(ctx, {
          type: chartType,
          data: data,
          options: options || {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                backgroundColor: 'rgba(26, 30, 41, 0.9)',
                titleFont: { size: 13 },
                bodyFont: { size: 12 },
                padding: 12,
                cornerRadius: 8
              }
            }
          }
        });
        
        setChartInstance(chart);
        setLoading(false);
        setError(null);
        
      } catch (err) {
        console.error('Error initializing chart:', err);
        setError(err.message);
        setLoading(false);
      }
    };
    
    // Initialize the chart
    initializeChart();
    
    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [chartId, chartType, data, options]); // Re-run when these props change

  return (
    <div className="chart-container">
      {loading && <div className="chart-loading">Loading chart...</div>}
      {error && (
        <div className="chart-error">
          Error loading chart: {error}
        </div>
      )}
      <canvas ref={chartRef} id={chartId}></canvas>
    </div>
  );
};

// Revenue Chart Component
export const RevenueChart = () => {
  const data = {
    labels: ['Q1 2017', 'Q2 2017', 'Q3 2017', 'Q4 2017', 'Q1 2018', 'Q2 2018'],
    datasets: [{
      label: 'Revenue (Millions USD)',
      data: [180, 214, 240, 470, 432.6, 252.8],
      borderColor: '#0d73ff',
      backgroundColor: 'rgba(13, 115, 255, 0.1)',
      tension: 0.1,
      fill: true
    }]
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          padding: 20,
          usePointStyle: true,
          font: { size: 12 }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(26, 30, 41, 0.9)',
        titleFont: { size: 13 },
        bodyFont: { size: 12 },
        padding: 12,
        cornerRadius: 8
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(0, 0, 0, 0.05)' },
        ticks: {
          callback: function(value) {
            return '$' + value + 'M';
          }
        }
      },
      x: {
        grid: { display: false }
      }
    }
  };
  
  return <BloombergCharts chartId="revenueChart" chartType="line" data={data} options={options} />;
};

// Stock Performance Chart Component
export const StockPerformanceChart = () => {
  const data = {
    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    datasets: [{
      label: 'ams-SW',
      data: [100, 110, 105, 115, 125, 140, 130, 135, 150, 145, 160, 155, 170],
      borderColor: '#ff9900',
      backgroundColor: 'rgba(249, 115, 22, 0.1)',
      tension: 0.4,
      fill: true
    },
    {
      label: 'Semiconductor Index',
      data: [100, 105, 108, 112, 115, 120, 118, 125, 130, 132, 138, 140, 145],
      borderColor: '#2d3748',
      borderDash: [5, 5],
      tension: 0.4,
      fill: false
    }]
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          padding: 20,
          usePointStyle: true,
          font: { size: 12 }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(26, 30, 41, 0.9)',
        titleFont: { size: 13 },
        bodyFont: { size: 12 },
        padding: 12,
        cornerRadius: 8
      }
    }
  };
  
  return <BloombergCharts chartId="stockPerformanceChart" chartType="line" data={data} options={options} />;
};

// Margin Trends Chart Component
export const MarginTrendsChart = () => {
  const data = {
    labels: ['Q1 2016', 'Q2 2016', 'Q3 2016', 'Q4 2016', 'Q1 2017', 'Q2 2017', 'Q3 2017', 'Q4 2017', 'Q1 2018', 'Q2 2018'],
    datasets: [{
      label: 'Gross Margin (%)',
      data: [49, 48, 51, 50, 40, 35, 25, 20, 15, 9],
      borderColor: '#0d73ff',
      backgroundColor: 'rgba(13, 115, 255, 0.1)',
      tension: 0.4,
      fill: true
    },
    {
      label: 'Operating Margin (%)',
      data: [30, 28, 32, 33, 25, 20, 5, -10, -20, -29],
      borderColor: '#16a34a',
      backgroundColor: 'rgba(22, 163, 74, 0.1)',
      tension: 0.4,
      fill: true
    }]
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          padding: 20,
          usePointStyle: true,
          font: { size: 12 }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(26, 30, 41, 0.9)',
        titleFont: { size: 13 },
        bodyFont: { size: 12 },
        padding: 12,
        cornerRadius: 8
      }
    },
    scales: {
      y: {
        grid: { color: 'rgba(0, 0, 0, 0.05)' },
        ticks: {
          callback: function(value) {
            return value + '%';
          }
        }
      },
      x: {
        grid: { display: false }
      }
    }
  };
  
  return <BloombergCharts chartId="marginTrendsChart" chartType="line" data={data} options={options} />;
};

// Export all chart components
export default {
  RevenueChart,
  StockPerformanceChart,
  MarginTrendsChart,
  BloombergCharts
}; 