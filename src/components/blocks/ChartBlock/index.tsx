import React from 'react';
import dynamic from 'next/dynamic';

// Define chart types and their corresponding components
export const chartComponents = {
  'egg-price': dynamic(() => import('../../charts/EggPriceChart'), {
    loading: () => <div>Loading egg price chart...</div>,
    ssr: false
  }),
  'stock-performance': dynamic(() => import('../../charts/StockPerformanceChart'), {
    loading: () => <div>Loading stock performance chart...</div>,
    ssr: false
  }),
  'bloomberg-stock-performance': dynamic(() => import('../../charts/BloombergStockPerformanceChart'), {
    loading: () => <div>Loading Bloomberg stock performance chart...</div>,
    ssr: false
  }),
  'bloomberg-revenue': dynamic(() => import('../../charts/BloombergRevenueChart'), {
    loading: () => <div>Loading Bloomberg revenue chart...</div>,
    ssr: false
  }),
  'bloomberg-margin': dynamic(() => import('../../charts/BloombergMarginChart'), {
    loading: () => <div>Loading Bloomberg margin chart...</div>,
    ssr: false
  })
};

// Export chart types for TypeScript support
export type ChartType = keyof typeof chartComponents;

interface ChartBlockProps {
  type: string;
  className?: string;
  title?: string;
  subtitle?: string;
  [key: string]: any; // For any additional props specific to chart types
}

const ChartBlock: React.FC<ChartBlockProps> = ({ type, className, ...rest }) => {
  const ChartComponent = chartComponents[type];

  if (!ChartComponent) {
    return <div className="p-4 text-red-500">Chart type "{type}" not found</div>;
  }

  // Add a default className if none is provided to ensure consistent sizing
  const chartClassName = className || 'h-96 w-full';

  return <ChartComponent className={chartClassName} {...rest} />;
};

export default ChartBlock; 