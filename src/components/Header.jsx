import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Healthcare.</div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search" /> {/* Placeholder text matches image */}
        <span className={styles.searchIcon}>🔍</span> {/* Search Icon */}
      </div>
      <div className={styles.headerActions}>
        <button className={styles.userAvatarBtn}>
          <img src="/user-avatar.png" alt="User Avatar" className={styles.avatar} />
        </button>
        <button className={styles.addButton}>+</button>
        <div className={styles.notificationIcon}>
          🔔 {/* Notification Bell Icon */}
          <span className={styles.notificationBadge}></span> {/* For the red dot */}
        </div>
      </div>
    </header>
  );
}

export default Header;