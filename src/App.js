import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.mainContentArea}>
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;