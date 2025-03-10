import React from 'react';
import dynamic from 'next/dynamic';

interface ChartBlockProps {
  type: string;
  className?: string;
}

const ChartBlock: React.FC<ChartBlockProps> = ({ type, className }) => {
  const chartComponents = {
    'egg-price': dynamic(() => import('../../charts/EggPriceChart'), {
      loading: () => <div>Loading chart...</div>,
      ssr: false
    })
  };

  const ChartComponent = chartComponents[type];

  if (!ChartComponent) {
    return <div>Chart type not found</div>;
  }

  return (
    <div className={className}>
      <ChartComponent />
    </div>
  );
};

export default ChartBlock; 