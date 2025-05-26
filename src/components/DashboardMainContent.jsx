import React from 'react';
import styles from './DashboardMainContent.module.css';
import DashboardOverview from './DashboardOverview'; // This will contain Anatomy, HealthCards, Calendar
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

function DashboardMainContent() {
  return (
    <main className={styles.dashboardMainContent}>
      <DashboardOverview />
      <div className={styles.bottomSection}>
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
    </main>
  );
}

export default DashboardMainContent;