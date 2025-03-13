import React from 'react';
import dynamic from 'next/dynamic';

// Import custom components
const BloombergClientScript = dynamic(() => import('./BloombergClientScript'), { ssr: false });
const ClientBloombergCharts = dynamic(() => import('./BloombergCharts'), { ssr: false });

// Map of component names to their implementations
export const customComponents = {
  'BloombergClientScript': BloombergClientScript,
  'ClientBloombergCharts': ClientBloombergCharts,
};

interface CustomComponentProps {
  type: string;
  [key: string]: any;
}

/**
 * CustomComponent renders a component based on the type prop
 */
const CustomComponent: React.FC<CustomComponentProps> = ({ type, ...props }) => {
  const Component = customComponents[type];
  
  if (!Component) {
    console.warn(`Component type "${type}" not found`);
    return null;
  }
  
  return <Component {...props} />;
};

export default CustomComponent; 