import React from 'react';

interface BloombergRevenueChartProps {
  className?: string;
  title?: string;
  subtitle?: string;
  [key: string]: any;
}

interface Dataset {
  label: string;
  data: number[];
  color: string;
  fill: boolean;
  fillColor: string;
  dashed?: boolean;
}

const BloombergRevenueChart: React.FC<BloombergRevenueChartProps> = ({ 
  className,
  title = 'Revenue Growth',
  subtitle,
  ...rest
}) => {
  // Sample data for Revenue Growth - from bloomberg1_backup.md
  const data = {
    labels: ['Q1 2017', 'Q2 2017', 'Q3 2017', 'Q4 2017', 'Q1 2018', 'Q2 2018'],
    datasets: [
      {
        label: 'Revenue (Millions USD)',
        data: [180, 214, 240, 470, 432.6, 252.8],
        color: '#0d73ff',
        fill: true,
        fillColor: 'rgba(13, 115, 255, 0.1)'
      }
    ] as Dataset[]
  };

  // Bloomberg-style colors and styling
  const bloombergColors = {
    navy: '#1a1e29',
    darkBlue: '#1f2937',
    blue: '#2d3748',
    accent: '#ff9900',
    orange: '#f97316',
    light: '#f8fafc',
    gray: '#64748b',
    chartBlue: '#0d73ff',
    chartGreen: '#16a34a',
    chartRed: '#dc2626',
    chartYellow: '#eab308',
  };

  const width = 800;
  const height = 400;
  const margin = { top: 40, right: 60, bottom: 60, left: 70 }; // Wider left margin for currency labels
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Calculate scales
  const minValue = 0; // Start at zero for revenue
  const maxValue = Math.ceil(Math.max(...data.datasets[0].data) * 1.1 / 100) * 100; // Round to nearest hundred
  
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
    <div className={className} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '8px', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', 
        padding: '1.5rem',
        border: '1px solid #e2e8f0'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '1.5rem', 
          paddingBottom: '1rem', 
          borderBottom: '1px solid #e2e8f0' 
        }}>
          <h3 style={{ 
            fontSize: '1.1rem', 
            fontWeight: 600, 
            color: bloombergColors.navy, 
            margin: 0 
          }}>
            {title}
          </h3>
        </div>
        
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          {/* Subtitle */}
          {subtitle && (
            <text 
              x={width / 2} 
              y={margin.top / 2 + 20} 
              textAnchor="middle" 
              fill={bloombergColors.gray}
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
                  fill={bloombergColors.gray}
                  fontSize="12"
                >
                  ${value.toFixed(0)}M
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
              stroke={dataset.color || bloombergColors.chartBlue} 
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
                fill={dataset.color || bloombergColors.chartBlue} 
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
              fill={bloombergColors.gray}
              fontSize="12"
            >
              {label}
            </text>
          ))}

          {/* Legend */}
          <g transform={`translate(${width - margin.right - 200}, ${margin.top})`}>
            {data.datasets.map((dataset, i) => (
              <g key={`legend-${i}`} transform={`translate(0, ${i * 25})`}>
                <line 
                  x1="0" 
                  y1="10" 
                  x2="20" 
                  y2="10" 
                  stroke={dataset.color || bloombergColors.chartBlue} 
                  strokeWidth="2" 
                  strokeDasharray={dataset.dashed ? "5,5" : "0"} 
                />
                <circle cx="10" cy="10" r="4" fill={dataset.color || bloombergColors.chartBlue} />
                <text x="30" y="15" fill={bloombergColors.navy} fontSize="12">{dataset.label}</text>
              </g>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default BloombergRevenueChart; 