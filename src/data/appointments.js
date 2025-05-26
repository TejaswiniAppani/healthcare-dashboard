export const calendarAppointments = [
  // October 2021: 1st is Friday (Day 5 of week, assuming Monday=1)
  // Example dates with appointments
  { day: 26, monthOffset: -1, times: ['08:00', '11:00'] }, // Sep 26
  { day: 27, monthOffset: -1, times: ['09:00', '12:00'] }, // Sep 27
  { day: 28, monthOffset: -1, times: ['10:00', '13:00'] }, // Sep 28
  { day: 29, monthOffset: -1, times: ['11:00', '14:00'] }, // Sep 29
  { day: 30, monthOffset: -1, times: ['12:00', '15:00'] }, // Sep 30
  { day: 31, monthOffset: -1, times: ['09:00', '16:00'] }, // Sep 31
  { day: 1, monthOffset: 0, times: ['09:00', '10:00'] },   // Oct 1
  { day: 2, monthOffset: 0, times: ['12:00', '15:00'] },   // Oct 2
  // ... add more for October as seen in image ...
  { day: 5, monthOffset: 0, times: ['09:00'] },
  { day: 10, monthOffset: 0, times: ['11:00'] },
  { day: 15, monthOffset: 0, times: ['13:00'] },
];

export const detailedAppointments = [
  { id: 1, icon: '🦷', type: 'Dentist', name: 'Dr. Cameron Williamson', time: '09:00-11:00 AM', progress: 80 },
  { id: 2, icon: '🧘', type: 'Physiotherapy Appointment', name: 'Dr. Kevin Djones', time: '11:00-12:00 AM', progress: 60 },
];

export const upcomingSchedule = [
  {
    day: 'On Thursday',
    appointments: [
      { id: 1, icon: '✅', title: 'Health checkup complete', time: '11:00 AM' },
      { id: 2, icon: '👁️', title: 'Ophthalmologist', time: '14:00 PM' },
    ],
  },
  {
    day: 'On Saturday',
    appointments: [
      { id: 3, icon: '❤️', title: 'Cardiologist', time: '12:00 AM' },
      { id: 4, icon: '🧠', title: 'Neurologist', time: '16:00 PM' },
    ],
  },
];