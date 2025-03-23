import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/ThirdBridge.module.css';
import Tooltip from '@/components/thirdbridge/ui/Tooltip';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

interface ExpandedMenus {
  [key: string]: boolean;
}

/**
 * Sidebar component for navigation
 */
export default function Sidebar({ collapsed, setCollapsed, activeSection, setActiveSection }: SidebarProps) {
  const [expandedMenus, setExpandedMenus] = useState<ExpandedMenus>({
    featured: true,
    interviews: false,
    industry: false,
  });

  // Toggle submenu expansion
  const toggleSubmenu = (menu: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  // Handle navigation item click
  const handleNavClick = (section: string) => {
    setActiveSection(section);
    
    // On mobile, collapse sidebar after selection
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setCollapsed(true);
    }
  };

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.sidebarHeader}>
        <div className={styles.logo}>
          <img 
            src="/images/thirdbridge/nyree-hinton-headshot.png" 
            alt="Nyree Hinton" 
            className={styles.logoImage}
          />
          {!collapsed && <span className={styles.logoText}>ThirdBridge</span>}
        </div>
        <button 
          className={styles.collapseBtn} 
          onClick={() => setCollapsed(!collapsed)}
        >
          <i className={`fas fa-chevron-${collapsed ? 'right' : 'left'}`}></i>
        </button>
      </div>
      
      <div className={styles.sidebarContent}>
        <nav className={styles.sidebarNav}>
          <ul className={styles.navList}>
            {/* Overview */}
            <li className={`${styles.navItem} ${activeSection === 'overview' ? styles.active : ''}`}>
              <div 
                className={styles.navLink} 
                onClick={() => handleNavClick('overview')}
              >
                <i className="fas fa-home"></i>
                {!collapsed && <span>Overview</span>}
              </div>
            </li>
            
            {/* Featured Analysis */}
            <li className={`${styles.navItem} ${activeSection === 'featured' ? styles.active : ''}`}>
              <div className={styles.navLinkWithSubmenu}>
                <div 
                  className={styles.navLink} 
                  onClick={() => handleNavClick('featured')}
                >
                  <i className="fas fa-chart-line"></i>
                  {!collapsed && <span>Featured Analysis</span>}
                </div>
                
                {!collapsed && (
                  <button 
                    className={styles.submenuToggle}
                    onClick={() => toggleSubmenu('featured')}
                  >
                    <i className={`fas fa-chevron-${expandedMenus.featured ? 'down' : 'right'}`}></i>
                  </button>
                )}
              </div>
              
              {!collapsed && expandedMenus.featured && (
                <ul className={styles.submenu}>
                  <li className={styles.submenuItem}>
                    <Link href="/egg-price-surge-2025">
                      <div className={styles.submenuLink}>
                        <i className="fas fa-angle-right"></i>
                        <span>2025 Egg Price Surge</span>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.submenuItem}>
                    <Link href="#dairy-industry">
                      <div className={styles.submenuLink}>
                        <i className="fas fa-angle-right"></i>
                        <span>Dairy Industry Outlook</span>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.submenuItem}>
                    <Link href="#alternative-proteins">
                      <div className={styles.submenuLink}>
                        <i className="fas fa-angle-right"></i>
                        <span>Alternative Proteins</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            
            {/* Interview Library */}
            <li className={`${styles.navItem} ${activeSection === 'interviews' ? styles.active : ''}`}>
              <div className={styles.navLinkWithSubmenu}>
                <div 
                  className={styles.navLink} 
                  onClick={() => handleNavClick('interviews')}
                >
                  <i className="fas fa-microphone"></i>
                  {!collapsed && <span>Interview Library</span>}
                </div>
                
                {!collapsed && (
                  <button 
                    className={styles.submenuToggle}
                    onClick={() => toggleSubmenu('interviews')}
                  >
                    <i className={`fas fa-chevron-${expandedMenus.interviews ? 'down' : 'right'}`}></i>
                  </button>
                )}
              </div>
              
              {!collapsed && expandedMenus.interviews && (
                <ul className={styles.submenu}>
                  <li className={styles.submenuItem}>
                    <Link href="#executives">
                      <div className={styles.submenuLink}>
                        <i className="fas fa-angle-right"></i>
                        <span>Executives</span>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.submenuItem}>
                    <Link href="#industry-experts">
                      <div className={styles.submenuLink}>
                        <i className="fas fa-angle-right"></i>
                        <span>Industry Experts</span>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.submenuItem}>
                    <Link href="#regulators">
                      <div className={styles.submenuLink}>
                        <i className="fas fa-angle-right"></i>
                        <span>Regulators</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            
            {/* Industry Analysis */}
            <li className={`${styles.navItem} ${activeSection === 'industry' ? styles.active : ''}`}>
              <div className={styles.navLinkWithSubmenu}>
                <div 
                  className={styles.navLink} 
                  onClick={() => handleNavClick('industry')}
                >
                  <i className="fas fa-industry"></i>
                  {!collapsed && <span>Industry Analysis</span>}
                </div>
                
                {!collapsed && (
                  <button 
                    className={styles.submenuToggle}
                    onClick={() => toggleSubmenu('industry')}
                  >
                    <i className={`fas fa-chevron-${expandedMenus.industry ? 'down' : 'right'}`}></i>
                  </button>
                )}
              </div>
              
              {!collapsed && expandedMenus.industry && (
                <ul className={styles.submenu}>
                  <li className={styles.submenuItem}>
                    <Link href="#market-structure">
                      <div className={styles.submenuLink}>
                        <i className="fas fa-angle-right"></i>
                        <span>Market Structure</span>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.submenuItem}>
                    <Link href="#competitive-landscape">
                      <div className={styles.submenuLink}>
                        <i className="fas fa-angle-right"></i>
                        <span>Competitive Landscape</span>
                      </div>
                    </Link>
                  </li>
                  <li className={styles.submenuItem}>
                    <Link href="#regulatory-impacts">
                      <div className={styles.submenuLink}>
                        <i className="fas fa-angle-right"></i>
                        <span>Regulatory Impacts</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            
            {/* Methodology */}
            <li className={`${styles.navItem} ${activeSection === 'methodology' ? styles.active : ''}`}>
              <div 
                className={styles.navLink} 
                onClick={() => handleNavClick('methodology')}
              >
                <i className="fas fa-clipboard-list"></i>
                {!collapsed && <span>Methodology</span>}
              </div>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className={styles.sidebarFooter}>
        {collapsed ? (
          <>
            <Tooltip content="Settings" position="right">
              <div className={styles.footerIcon}>
                <i className="fas fa-cog"></i>
              </div>
            </Tooltip>
            <Tooltip content="Help" position="right">
              <div className={styles.footerIcon}>
                <i className="fas fa-question-circle"></i>
              </div>
            </Tooltip>
          </>
        ) : (
          <>
            <div className={styles.footerItem}>
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </div>
            <div className={styles.footerItem}>
              <i className="fas fa-question-circle"></i>
              <span>Help & Support</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}