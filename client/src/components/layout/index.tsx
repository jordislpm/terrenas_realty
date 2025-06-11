import React, { ReactNode, use, useEffect } from 'react'
import styles from './layout.module.scss';
import Header from './Header';
import Footer from './Footer';
import { Navigate, Outlet } from 'react-router-dom';
import useUser from 'hooks/globalState/userLoggedState';


interface LayoutProps {
  children: ReactNode;
}

export function Layout() {
  return (
    <div className={styles.layout}>
        <Header />

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>

  )
}

export function RequireAuth() {

  const { user, setUser } = useUser();

  return !user ? (<Navigate to="/login" />
  ) : (
    user && (<div className={styles.layout}>
      <div className={styles.navbar}>
        <Header />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>)
  )
}