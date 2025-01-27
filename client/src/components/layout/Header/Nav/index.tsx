import React, { useState } from 'react'
import styles from "./Nav.module.scss"
import logo from "../../../../assets/icons/logo.png";
import menu from "../../../../assets/icons/menu.png";

function Nav() {


  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <a href='/' className={styles.logo}>
          <img src={logo} alt="Logo" />
          <span>Las Terrenas Realty</span>
        </a>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contract</a>
        <a href='/'>Agents</a>

      </div>
      <div className={styles.right}>
        <a href='/'>Sing in</a>
        <a href='/' className={styles.register}>Sing up</a>
        <div className={styles.menuIcon}>
          <img 
          src={menu} 
          alt='menu' 
          onClick={() => setOpen((prev)=> !prev)} />
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
  )
}

export default Nav