import React from 'react';
import styles from './layout.module.scss';
import Header from './Header';
import Footer from './Footer';
import { Navigate, Outlet } from 'react-router-dom';
import useUser from 'hooks/globalState/userLoggedState';

export function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export function RequireAuth() {
  const { user } = useUser();

  return !user ? (
    <Navigate to="/login" />
  ) : (
    <div className={styles.layout}>
      <div className={styles.navbar}>
        <Header />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
