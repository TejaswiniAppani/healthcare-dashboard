export const anatomicalHealth = [
  // Positions will be set in JSX inline style for pixel precision
  { part: 'Healthy Heart', status: 'Healthy', color: 'var(--green-status)', indicatorStyle: { top: '25%', left: 'calc(80% + 60px)' } },
  { part: 'Healthy Leg', status: 'Healthy', color: 'var(--green-status)', indicatorStyle: { top: '63%', left: 'calc(80% + 60px)' } },
];

export const healthStatusCards = [
  { id: 1, icon: '🫁', title: 'Lungs', date: '21 Oct 2021', status: 'Bad', progress: 30, color: 'var(--red-status)' },
  { id: 2, icon: '🦷', title: 'Teeth', date: '19 Oct 2021', status: 'Good', progress: 85, color: 'var(--green-status)' },
  { id: 3, icon: '🦴', title: 'Bone', date: '18 Oct 2021', status: 'Good', progress: 90, color: 'var(--green-status)' },
];