import React from 'react';
import styles from './AnatomySection.module.css';
import { anatomicalHealth } from '../data/healthData';

function AnatomySection() {
  return (
    <div className={styles.anatomySection}>
      <div className={styles.anatomyContent}>
        <div className={styles.anatomicalIllustration}>
          
          <img
            src="/human-body.png" 
            alt="Human Body Anatomy"
            className={styles.bodyImage}
          />
          {anatomicalHealth.map((item, index) => (
            <div
              key={index}
              className={styles.healthIndicator}
              style={{
                top: item.indicatorStyle.top,
                left: item.indicatorStyle.left,
                '--indicator-color': item.color,
              }}
            >
              <span className={styles.indicatorDot}></span>
              <span className={styles.indicatorText}>{item.part}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnatomySection;