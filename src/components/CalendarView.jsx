import React from 'react';
import styles from './CalendarView.module.css';
import { calendarAppointments, detailedAppointments } from '../data/appointments';

function CalendarView() {
  const daysInMonth = 31; // October has 31 days
  const firstDayOfMonth = 5; // Oct 1st, 2021 was a Friday (0=Sun, 1=Mon... 5=Fri)
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Helper to get day data for a given month and day number
  const getCalendarDayData = (dayNum, monthOffset = 0) => {
    const apps = calendarAppointments.filter(
      app => app.day === dayNum && app.monthOffset === monthOffset
    );
    return {
      day: dayNum,
      isCurrentMonth: monthOffset === 0,
      hasAppointments: apps.length > 0,
      appointmentTimes: apps.flatMap(app => app.times),
    };
  };

  const calendarDays = [];
  // Add leading days from previous month (September had 30 days)
  const prevMonthDays = 30;
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    calendarDays.push(getCalendarDayData(prevMonthDays - i, -1));
  }

  // Add current month days (October)
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(getCalendarDayData(i, 0));
  }

  // Add trailing days for next month (November) to fill the grid
  // Assuming a total of 5 weeks displayed (35 cells) for simplicity if needed
  while (calendarDays.length < 35) {
    calendarDays.push(getCalendarDayData(calendarDays.length - daysInMonth - (firstDayOfMonth -1) + 1, 1));
  }


  return (
    <div className={styles.calendarView}>
      <div className={styles.calendarControls}>
        <button className={styles.navArrow}>&larr;</button>
        <h3 className={styles.calendarHeader}>October 2021</h3>
        <button className={styles.navArrow}>&rarr;</button>
      </div>

      <div className={styles.daysOfWeek}>
        {daysOfWeek.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </div>
      <div className={styles.calendarGrid}>
        {calendarDays.map((dayData, index) => {
          const isHighlighted = (dayData.isCurrentMonth && dayData.day >= 1 && dayData.day <= 2) ||
                                (!dayData.isCurrentMonth && dayData.day >= 25 && dayData.day <= 31); // Matching screenshot
          return (
            <div
              key={index}
              className={`${styles.dayCell} ${dayData.isCurrentMonth ? styles.currentMonth : styles.otherMonth}
                          ${isHighlighted ? styles.highlightedDay : ''}
              `}
            >
              <span className={styles.dayNumber}>{dayData.day}</span>
              {dayData.hasAppointments && (
                <div className={styles.appointmentTimes}>
                  {dayData.appointmentTimes.map((time, appIndex) => (
                    <span key={appIndex} className={styles.appointmentTime}>{time}</span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.detailedAppointments}>
        {detailedAppointments.map(app => (
          <div key={app.id} className={styles.appointmentCard}>
            <div className={styles.appointmentIconWrapper}>
              <span className={styles.appointmentIcon}>{app.icon}</span>
            </div>
            <div className={styles.appointmentInfo}>
              <p className={styles.appointmentType}>{app.type}</p>
              <p className={styles.appointmentName}>{app.name}</p>
              <div className={styles.progressBarWrapper}>
                <div className={styles.progressBar} style={{ width: `${app.progress}%` }}></div>
              </div>
            </div>
            <span className={styles.appointmentCardTime}>{app.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;