import React from 'react';
import styles from './Sidebar.module.css';
import { navLinks, bottomNavLinks } from '../data/navigation';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.generalHeading}>General</h3>
      <nav className={styles.navbarNav}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index} className={`${styles.navItem} ${link.name === 'Dashboard' ? styles.active : ''}`}>
              <a href="#" className={styles.navLink}>
                <span className={styles.navIcon}>{link.icon}</span>
                <span className={styles.navText}>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className={styles.bottomNav}>
        <ul>
          {bottomNavLinks.map((link, index) => (
            <li key={index} className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                <span className={styles.navIcon}>{link.icon}</span>
                <span className={styles.navText}>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;