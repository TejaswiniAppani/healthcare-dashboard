import React from 'react';
import styles from './ActivityFeed.module.css';

function ActivityFeed() {
  // Static data for the chart representation
  const activityData = [
    { label: 'Mon', value: 30 },
    { label: 'Tue', value: 70 },
    { label: 'Wed', value: 50 },
    { label: 'Thu', value: 90 },
    { label: 'Fri', value: 40 },
    { label: 'Sat', value: 60 },
    { label: 'Sun', value: 20 },
  ];

  return (
    <div className={styles.activityFeed}>
      <h3 className={styles.sectionTitle}>Activity</h3>
      <p className={styles.activitySummary}>3 appointments on this week</p>
      <div className={styles.chartContainer}>
        {activityData.map((day, index) => (
          <div key={index} className={styles.barWrapper}>
            <div className={styles.bar} style={{ height: `${day.value}%` }}></div>
            <span className={styles.barLabel}>{day.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;