import React, { useEffect, useState } from 'react'
import styles from "./Nav.module.scss"
import logo from "../../../../assets/icons/logo.png";
import menu from "../../../../assets/icons/menu.png";
import { Link, useNavigate } from 'react-router-dom';
import OverlayComponent from 'components/share/OverlayComponent';
import useUser from 'hooks/globalState/userLoggedState';
import useNotificationGlobalState from 'hooks/globalState/useNotificationGlobalState';

function Nav() {
  const [open, setOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { number } = useNotificationGlobalState()

  const { user, setUser } = useUser();
  const navigate = useNavigate()

  const toggleModal = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false)
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const singOut = ()=>{
    setUser(null)
    toggleModal();
  }

  return (
    <>
      {/* ✅ Solo mostrar el overlay si es móvil */}
      {isMobile && <OverlayComponent isOpen={open} onClickOverlay={toggleModal} />}

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
          {
            user ? (
              <div className={styles.user}>
                <div className={styles.userImgContainer}>
                  <img onClick={() => navigate("/profile")} src={user.avatar} alt="user-photo" />
                  {number > 0 && <div className={`${styles.notification} ${styles.bouncing}`}>{number}</div>}
                </div>
                <span>{user.username}</span>
                <Link to="/profile" className={styles.profile}>
                  {number > 0 && <div className={`${styles.notification} ${styles.bouncing}`}>{number}</div>}
                  <span>Profile</span>
                </Link>
              </div>
            ) : (
              <>
                <a href='/login' className={styles.login}>Sign in</a>
                <a href='/register' className={styles.register}>Sign up</a>
              </>
            )
          }

          <div className={styles.menuIcon}>
            <img
              src={menu}
              alt='menu'
              onClick={toggleModal}
            />
          </div>

          <div className={`${styles.menu} ${open ? styles.active : ""}`}>
            <a href='/'>Home</a>
            <a href='/'>About</a>
            <a href='/'>Contract</a>
            <a href='/'>Agents</a>
            <a href='/login'>Sign in</a>
            <a href='/register'>Sign up</a>
            <a onClick={singOut} >Sign out</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;