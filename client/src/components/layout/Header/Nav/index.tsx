import React, { useState } from 'react'
import styles from "./Nav.module.scss"
import logo from "../../../../assets/icons/logo.png";
import menu from "../../../../assets/icons/menu.png";
import { Link } from 'react-router-dom';
import OverlayComponent from 'components/share/OverlayComponent';

function Nav() {


  const [open, setOpen] = useState<boolean>(false);


  const toggleModal = () => {
    setOpen(!open);
};


  return (
    <>
    <OverlayComponent isOpen={open} onClickOverlay={toggleModal}/>
    <nav className={styles.nav}>
      
      <div className={styles.left}>
        <Link to='/' className={styles.logo}>
          <img src={logo} alt="Logo" />
          <span>Las Terrenas Realty</span>
        </Link>
        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contract</Link>
        <Link to='/'>Agents</Link>

      </div>
      <div className={styles.right}>
        <a href='/'>Sing in</a>
        <a href='/' className={styles.register}>Sing up</a>
        <div className={styles.menuIcon}>
          <img 
          src={menu} 
          alt='menu' 
          onClick={toggleModal} />
        </div>
        <div className={`${styles.menu} ${open ? styles.active : ""}`}>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Contract</a>
          <a href='/'>Agents</a>
          <a href='/'>Sing in</a>
          <a href='/'>Sing up</a>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Nav