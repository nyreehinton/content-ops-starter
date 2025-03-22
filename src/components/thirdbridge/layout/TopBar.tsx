'use client';

import styles from '../../../styles/thirdbridge-new/ThirdBridge.module.css';
import Tooltip from '../ui/Tooltip';

/**
 * Top navigation bar component
 */
export default function TopBar({ toggleMobileSidebar }) {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbarLeft}>
        <button className={styles.menuToggle} onClick={toggleMobileSidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <div className={styles.searchBar}>
          <i className="fas fa-search"></i>
          <input type="text" className={styles.searchInput} placeholder="Search for insights..." />
        </div>
      </div>
      <div className={styles.topbarRight}>
        <Tooltip content="Notifications" position="bottom">
          <div className={styles.topbarIcon}>
            <i className="fas fa-bell"></i>
          </div>
        </Tooltip>
        <Tooltip content="Messages" position="bottom">
          <div className={styles.topbarIcon}>
            <i className="fas fa-envelope"></i>
          </div>
        </Tooltip>
        <div className={styles.userMenu}>
          <div className={styles.userAvatar}>
            <img src="/images/thirdbridge/nyree-hinton-headshot.png" alt="Nyree Hinton" />
          </div>
          <div className={styles.userInfo}>
            <div className={styles.userName}>Nyree Hinton</div>
            <div className={styles.userRole}>Sector Analyst - Consumer Staples</div>
          </div>
        </div>
      </div>
    </div>
  );
}