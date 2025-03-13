import React from 'react';

interface StockPerformanceChartProps {
  className?: string;
  title?: string;
  subtitle?: string;
  [key: string]: any;
}

const StockPerformanceChart: React.FC<StockPerformanceChartProps> = ({ 
  className,
  title = 'ams-SW Stock Performance vs Semiconductor Index',
  subtitle,
  ...rest
}) => {
  // Sample data for ams-SW and Semiconductor Index
  const data = {
    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    datasets: [
      {
        label: 'ams-SW',
        data: [100, 110, 105, 115, 125, 140, 130, 135, 150, 145, 160, 155, 170],
        color: '#ff9900',
        fill: true,
        fillColor: 'rgba(249, 115, 22, 0.1)'
      },
      {
        label: 'Semiconductor Index',
        data: [100, 105, 108, 112, 115, 120, 118, 125, 130, 132, 138, 140, 145],
        color: '#2d3748',
        dashed: true,
        fill: false
      }
    ]
  };

  const width = 800;
  const height = 400;
  const margin = { top: 40, right: 60, bottom: 60, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Calculate scales
  const minValue = 90; // Slightly below the minimum value for better visualization
  const maxValue = Math.ceil(Math.max(
    ...data.datasets[0].data,
    ...data.datasets[1].data
  ) * 1.1); // Add 10% padding
  
  const xScale = (index: number) => margin.left + (index * chartWidth / (data.labels.length - 1));
  const yScale = (value: number) => chartHeight - ((value - minValue) * chartHeight / (maxValue - minValue)) + margin.top;

  // Generate path data for each dataset
  const generatePathData = (dataset: typeof data.datasets[0]) => {
    return dataset.data.map((value, i) => 
      `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(value)}`
    ).join(' ');
  };

  // Generate area fill path for datasets with fill=true
  const generateAreaPath = (dataset: typeof data.datasets[0]) => {
    if (!dataset.fill) return '';
    
    const linePath = dataset.data.map((value, i) => 
      `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(value)}`
    ).join(' ');
    
    return `${linePath} L ${xScale(data.labels.length - 1)} ${yScale(minValue)} L ${xScale(0)} ${yScale(minValue)} Z`;
  };

  return (
    <div className={className}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {/* Title */}
        {title && (
          <text 
            x={width / 2} 
            y={margin.top / 2} 
            textAnchor="middle" 
            fill="#333"
            fontSize="16"
            fontWeight="bold"
          >
            {title}
          </text>
        )}
        
        {/* Subtitle */}
        {subtitle && (
          <text 
            x={width / 2} 
            y={margin.top / 2 + 20} 
            textAnchor="middle" 
            fill="#666"
            fontSize="14"
          >
            {subtitle}
          </text>
        )}

        {/* Y-axis */}
        <line 
          x1={margin.left} 
          y1={margin.top} 
          x2={margin.left} 
          y2={height - margin.bottom} 
          stroke="#ccc" 
          strokeWidth="1"
        />
        
        {/* X-axis */}
        <line 
          x1={margin.left} 
          y1={height - margin.bottom} 
          x2={width - margin.right} 
          y2={height - margin.bottom} 
          stroke="#ccc" 
          strokeWidth="1"
        />

        {/* Horizontal grid lines */}
        {Array.from({ length: 6 }).map((_, i) => {
          const y = margin.top + (i * chartHeight / 5);
          const value = maxValue - (i * (maxValue - minValue) / 5);
          return (
            <React.Fragment key={`grid-${i}`}>
              <line 
                x1={margin.left} 
                y1={y} 
                x2={width - margin.right} 
                y2={y} 
                stroke="#eee" 
                strokeWidth="1"
              />
              <text 
                x={margin.left - 10} 
                y={y} 
                textAnchor="end" 
                alignmentBaseline="middle"
                fill="#666"
                fontSize="12"
              >
                {value.toFixed(0)}
              </text>
            </React.Fragment>
          );
        })}

        {/* Area fills for datasets */}
        {data.datasets.map((dataset, datasetIndex) => (
          dataset.fill && (
            <path 
              key={`area-${datasetIndex}`}
              d={generateAreaPath(dataset)} 
              fill={dataset.fillColor || 'rgba(0, 0, 0, 0.1)'} 
              opacity="0.5"
            />
          )
        ))}

        {/* Data lines */}
        {data.datasets.map((dataset, datasetIndex) => (
          <path 
            key={`line-${datasetIndex}`}
            d={generatePathData(dataset)} 
            fill="none" 
            stroke={dataset.color} 
            strokeWidth="2" 
            strokeDasharray={dataset.dashed ? "5,5" : "0"} 
          />
        ))}

        {/* Data points */}
        {data.datasets.map((dataset, datasetIndex) => (
          dataset.data.map((value, i) => (
            <circle 
              key={`point-${datasetIndex}-${i}`}
              cx={xScale(i)} 
              cy={yScale(value)} 
              r="4" 
              fill={dataset.color} 
            />
          ))
        ))}

        {/* X-axis labels */}
        {data.labels.map((label, i) => (
          <text 
            key={`label-${i}`}
            x={xScale(i)} 
            y={height - margin.bottom + 20} 
            textAnchor="middle"
            fill="#666"
            fontSize="12"
          >
            {label}
          </text>
        ))}

        {/* Legend */}
        <g transform={`translate(${width - margin.right - 150}, ${margin.top})`}>
          {data.datasets.map((dataset, i) => (
            <g key={`legend-${i}`} transform={`translate(0, ${i * 25})`}>
              <line 
                x1="0" 
                y1="10" 
                x2="20" 
                y2="10" 
                stroke={dataset.color} 
                strokeWidth="2" 
                strokeDasharray={dataset.dashed ? "5,5" : "0"} 
              />
              <circle cx="10" cy="10" r="4" fill={dataset.color} />
              <text x="30" y="15" fill="#333" fontSize="12">{dataset.label}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default StockPerformanceChart; 