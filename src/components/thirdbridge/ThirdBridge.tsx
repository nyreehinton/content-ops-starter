'use client';

import React from 'react';
import ThirdBridgePage from './ThirdBridgePage';

/**
 * ThirdBridge component
 * This is a compatibility wrapper that redirects to the new ThirdBridgePage component
 */
const ThirdBridge: React.FC = () => {
  return <ThirdBridgePage />;
};

export default ThirdBridge;