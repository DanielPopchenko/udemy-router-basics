import React from 'react';
import styles from './Error.module.css';
import Navigation from '../components/Navigation';

const ErrorPage = () => {
  return (
    <>
      <Navigation />
      <main className={styles.errorContainer}>
        <h1>An error occured!</h1>
      </main>
    </>
  );
};

export default ErrorPage;
