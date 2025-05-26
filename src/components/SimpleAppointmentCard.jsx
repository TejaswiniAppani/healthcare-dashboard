import React from 'react';
import styles from './SimpleAppointmentCard.module.css';

function SimpleAppointmentCard({ appointment }) {
  return (
    <div className={styles.appointmentCard}>
      <div className={styles.iconContainer}>
        <span className={styles.appointmentIcon}>{appointment.icon}</span>
      </div>
      <div className={styles.appointmentDetails}>
        <p className={styles.appointmentTitle}>{appointment.title}</p>
        <p className={styles.appointmentTime}>{appointment.time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;