import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import styles from './Root.module.css';

const RootLayout = () => {
  return (
    <div>
      <Navigation />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
