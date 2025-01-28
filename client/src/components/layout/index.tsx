import React, { ReactNode }  from 'react'
import styles from './layout.module.scss';
import Header from './Header';
import Footer from './Footer';
 

interface LayoutProps {
    children: ReactNode;
  }

function Layout({ children }:LayoutProps) {
  return (
    <div className={styles.layout}>
        <Header/>
      {children}
        <Footer/>
    </div>
  )
}

export default Layout