import React from 'react';
import styles from './UpcomingSchedule.module.css';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { upcomingSchedule } from '../data/appointments';

function UpcomingSchedule() {
  return (
    <div className={styles.upcomingSchedule}>
      <h3 className={styles.sectionTitle}>The Upcoming Schedule</h3>
      {upcomingSchedule.map((dayData, index) => (
        <div key={index} className={styles.daySection}>
          <p className={styles.dayHeading}>{dayData.day}</p>
          <div className={styles.appointmentsList}>
            {dayData.appointments.map(appointment => (
              <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;