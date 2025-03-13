import React, { useEffect, useRef } from 'react';
import ClientOnly from './ClientOnly';

interface BloombergChartsProps {
  className?: string;
}

/**
 * BloombergCharts component handles the initialization of charts in the Bloomberg page.
 * It ensures that chart initialization only happens on the client side.
 */
const BloombergCharts: React.FC<BloombergChartsProps> = ({ className }) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Initialize tabs
    const initializeTabs = () => {
      const tabButtons = document.querySelectorAll('.bloomberg-tab-button');
      
      if (tabButtons.length === 0) {
        console.warn('No tab buttons found');
        return;
      }

      console.log('Initializing tabs, found', tabButtons.length, 'buttons');
      
      // Add click event listeners to all tab buttons
      tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
          e.preventDefault();
          const tabId = (this as HTMLElement).getAttribute('data-tab');
          if (tabId) switchTab(tabId);
        });
      });

      // Set initial active tab
      const activeTab = document.querySelector('.bloomberg-tab-content.active');
      if (!activeTab) {
        const firstButton = tabButtons[0] as HTMLElement;
        if (firstButton) {
          const firstTabId = firstButton.getAttribute('data-tab');
          if (firstTabId) switchTab(firstTabId);
        }
      }
    };

    // Function to handle tab switching
    const switchTab = (tabId: string) => {
      console.log('Switching to tab:', tabId);
      
      // Get all tab contents and buttons
      const allContents = document.querySelectorAll('.bloomberg-tab-content');
      const allButtons = document.querySelectorAll('.bloomberg-tab-button');

      // First hide all contents and deactivate all buttons
      allContents.forEach(content => {
        (content as HTMLElement).style.display = 'none';
        content.classList.remove('active');
        (content as HTMLElement).style.opacity = '0';
      });

      allButtons.forEach(button => {
        button.classList.remove('active');
      });

      // Show the selected content and activate the button
      const selectedContent = document.getElementById(tabId);
      const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);

      if (selectedContent && selectedButton) {
        console.log('Found tab content and button');
        selectedContent.style.display = 'block';
        // Force a reflow
        selectedContent.offsetHeight;
        selectedContent.style.opacity = '1';
        selectedContent.classList.add('active');
        selectedButton.classList.add('active');
      } else {
        console.log('Tab content or button not found');
        // Fallback to first tab if the requested tab doesn't exist
        const firstButton = document.querySelector('.bloomberg-tab-button') as HTMLElement;
        if (firstButton) {
          const firstTabId = firstButton.getAttribute('data-tab');
          if (firstTabId && firstTabId !== tabId) {
            switchTab(firstTabId);
          }
        }
      }
    };

    // Initialize tabs
    initializeTabs();

    // Fallback: try again after a short delay in case DOM isn't fully loaded
    setTimeout(initializeTabs, 500);
  }, []);

  return null; // This component doesn't render anything, it just initializes the charts
};

/**
 * Wrapper component that ensures BloombergCharts only runs on the client side
 */
const ClientBloombergCharts: React.FC<BloombergChartsProps> = (props) => {
  return (
    <ClientOnly>
      <BloombergCharts {...props} />
    </ClientOnly>
  );
};

export default ClientBloombergCharts; 