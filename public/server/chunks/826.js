"use strict";exports.id=826,exports.ids=[826],exports.modules={7826:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});var o=n(997);n(6689);var a=n(7314);let i=({className:t})=>o.jsx(a.Z,{children:o.jsx("script",{dangerouslySetInnerHTML:{__html:`
        // Function to handle tab switching
        function switchTab(tabId) {
          console.log('Switching to tab:', tabId);
          // Get all tab contents and buttons
          const allContents = document.querySelectorAll('.bloomberg-tab-content');
          const allButtons = document.querySelectorAll('.bloomberg-tab-button');

          // First hide all contents and deactivate all buttons
          allContents.forEach(content => {
              content.style.display = 'none';
              content.classList.remove('active');
              content.style.opacity = '0';
          });

          allButtons.forEach(button => {
              button.classList.remove('active');
          });

          // Show the selected content and activate the button
          const selectedContent = document.getElementById(tabId);
          const selectedButton = document.querySelector(\`[data-tab="\${tabId}"]\`);

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
              const firstButton = document.querySelector('.bloomberg-tab-button');
              if (firstButton) {
                  const firstTabId = firstButton.getAttribute('data-tab');
                  if (firstTabId !== tabId) {
                      switchTab(firstTabId);
                  }
              }
          }
        }

        // Function to initialize tabs
        function initializeTabs() {
          console.log('Initializing tabs');
          const tabButtons = document.querySelectorAll('.bloomberg-tab-button');
          console.log('Found tab buttons:', tabButtons.length);

          // Add click event listeners to all tab buttons
          tabButtons.forEach(button => {
              button.addEventListener('click', function(e) {
                  e.preventDefault();
                  const tabId = this.getAttribute('data-tab');
                  switchTab(tabId);
              });
          });

          // Set initial active tab
          const activeTab = document.querySelector('.bloomberg-tab-content.active');
          if (!activeTab) {
              const firstButton = tabButtons[0];
              if (firstButton) {
                  const firstTabId = firstButton.getAttribute('data-tab');
                  switchTab(firstTabId);
              }
          }
        }

        // Initialize tabs when DOM is ready
        function tryInitialize() {
          if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initializeTabs);
          } else {
              initializeTabs();
          }
        }

        // Try to initialize immediately
        tryInitialize();

        // Fallback: try again after a short delay
        setTimeout(tryInitialize, 500);
      `}})})},7314:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(997),a=n(6689);function i({children:t,fallback:e=null}){let[n,i]=(0,a.useState)(!1);return n?o.jsx(o.Fragment,{children:t}):o.jsx(o.Fragment,{children:e})}}};