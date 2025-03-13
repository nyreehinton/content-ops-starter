import React from 'react';
import ChartBlock from '../../blocks/ChartBlock';

interface Chart {
  type: string;
  [key: string]: any;
}

interface ChartSectionProps {
  title?: string;
  subtitle?: string;
  charts: Chart[];
  className?: string;
}

const ChartSection: React.FC<ChartSectionProps> = ({ title, subtitle, charts, className }) => {
  if (!charts || charts.length === 0) {
    return null;
  }

  return (
    <div className={className || 'py-12'}>
      {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
      {subtitle && <p className="text-xl mb-8 text-gray-600">{subtitle}</p>}
      <div className="grid gap-8">
        {charts.map((chart, index) => {
          // Extract type and other props
          const { type, ...chartProps } = chart;
          
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md overflow-auto">
              <ChartBlock 
                type={type} 
                className="w-full h-[400px] min-w-[800px]" 
                title={chartProps.title || title}
                subtitle={chartProps.subtitle || subtitle}
                {...chartProps}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChartSection; 