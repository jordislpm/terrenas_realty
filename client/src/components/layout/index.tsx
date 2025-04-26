import React, { ReactNode } from 'react'
import styles from './layout.module.scss';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


interface LayoutProps {
  children: ReactNode;
}

function Layout() {
  return (
    <div className={styles.layout}>
 <Header />

  <Outlet />
{/* 
<Footer /> */}
    </div>
  )
}

export default Layout