import React from 'react';
import styles from './DashboardOverview.module.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';

function DashboardOverview() {
  return (
    <section className={styles.dashboardOverview}>
      <div className={styles.overviewHeader}>
        <h2 className={styles.sectionTitle}>Dashboard</h2>
        <div className={styles.thisWeekDropdown}>
          <span>This Week</span>
          <span className={styles.dropdownArrow}>▼</span> {/* Dropdown arrow */}
        </div>
      </div>
      <div className={styles.overviewGrid}>
        <div className={styles.leftColumn}> {/* New container for Anatomy + Health Cards */}
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <div className={styles.rightColumn}>
          <CalendarView />
        </div>
      </div>
    </section>
  );
}

export default DashboardOverview;