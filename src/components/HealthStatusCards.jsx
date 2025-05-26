import React from 'react';
import styles from './HealthStatusCards.module.css';
import { healthStatusCards } from '../data/healthData';

function HealthStatusCards() {
  return (
    <div className={styles.healthStatusCards}>
      {healthStatusCards.map((card) => (
        <div key={card.id} className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>{card.icon}</span> {/* New icon */}
            <span className={styles.cardTitle}>{card.title}</span>
            <span className={styles.cardDate}>{card.date}</span>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${card.progress}%`, backgroundColor: card.color }}
              ></div>
            </div>
            <span
              className={styles.cardStatus}
              style={{ color: card.color }}
            >
              {card.status}
            </span>
          </div>
          <a href="#" className={styles.detailsLink}>Details &rarr;</a> {/* New details link */}
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;