import React from 'react';

export const EggPriceChart: React.FC = () => {
  const data = [
    { year: '2022', price: 2.50 },
    { year: '2023', price: 3.15 },
    { year: '2024', price: 4.20 },
    { year: '2025', price: 5.85 }
  ];

  const width = 800;
  const height = 400;
  const margin = { top: 20, right: 30, bottom: 40, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Calculate scales
  const minPrice = 0;
  const maxPrice = Math.ceil(Math.max(...data.map(d => d.price)));
  
  const xScale = (x: number) => margin.left + (x * chartWidth / (data.length - 1));
  const yScale = (y: number) => chartHeight - ((y - minPrice) * chartHeight / (maxPrice - minPrice)) + margin.top;

  // Generate path data
  const pathData = data.map((point, i) => 
    `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(point.price)}`
  ).join(' ');

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* Y-axis */}
      <line 
        x1={margin.left} 
        y1={margin.top} 
        x2={margin.left} 
        y2={height - margin.bottom} 
        stroke="#666" 
      />
      
      {/* X-axis */}
      <line 
        x1={margin.left} 
        y1={height - margin.bottom} 
        x2={width - margin.right} 
        y2={height - margin.bottom} 
        stroke="#666" 
      />

      {/* Data line */}
      <path 
        d={pathData} 
        fill="none" 
        stroke="rgb(75, 192, 192)" 
        strokeWidth="2" 
      />

      {/* Data points */}
      {data.map((point, i) => (
        <circle 
          key={point.year}
          cx={xScale(i)} 
          cy={yScale(point.price)} 
          r="4" 
          fill="rgb(75, 192, 192)" 
        />
      ))}

      {/* X-axis labels */}
      {data.map((point, i) => (
        <text 
          key={point.year}
          x={xScale(i)} 
          y={height - margin.bottom + 20} 
          textAnchor="middle"
          fill="#666"
        >
          {point.year}
        </text>
      ))}

      {/* Y-axis labels */}
      {Array.from({ length: maxPrice + 1 }).map((_, i) => (
        <text 
          key={i}
          x={margin.left - 10} 
          y={yScale(i)} 
          textAnchor="end" 
          alignmentBaseline="middle"
          fill="#666"
        >
          ${i.toFixed(2)}
        </text>
      ))}

      {/* Title */}
      <text 
        x={width / 2} 
        y={margin.top} 
        textAnchor="middle" 
        fill="#333"
        fontSize="16"
      >
        Egg Price Trends (2022-2025)
      </text>
    </svg>
  );
};

export default EggPriceChart; 