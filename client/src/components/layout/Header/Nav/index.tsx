import React, { useEffect, useState } from 'react';
import styles from "./Nav.module.scss";
import logo from "../../../../assets/icons/logo.png";
import menu from "../../../../assets/icons/menu.png";
import noAvatar from "../../../../assets/icons/noAvatar.png";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useUser from 'hooks/globalState/userLoggedState';
import useNotificationGlobalState from 'hooks/globalState/useNotificationGlobalState';

function Nav() {
  const [open, setOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { number } = useNotificationGlobalState();
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeModal();
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    closeModal();
    navigate('/');
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Link to='/' className={styles.logo}>
            <img src={logo} alt="Logo" />
            <span>Las Terrenas Realty</span>
          </Link>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/agents'>Agents</Link>
        </div>

        <div className={styles.right}>
          {user ? (
            <div className={styles.user}>
              <div className={styles.userImgContainer}>
                <img
                  onClick={() => navigate("/profile")}
                  src={user.avatar || noAvatar}
                  alt="user-photo"
                />
                {number > 0 && (
                  <div className={`${styles.notification} ${styles.bouncing}`}>
                    {number}
                  </div>
                )}
              </div>
              <span>{user.username}</span>
              <Link to="/profile" className={styles.profile}>
                {number > 0 && (
                  <div className={`${styles.notification} ${styles.bouncing}`}>
                    {number}
                  </div>
                )}
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            <>
              <Link to='/login' className={styles.login}>Sign in</Link>
              <Link to='/register' className={styles.register}>Sign up</Link>
            </>
          )}

          <div className={styles.menuIcon} onClick={toggleModal}>
            <img src={menu} alt='menu' />
          </div>
        </div>
      </nav>

      {/* Mobile Drawer & Backdrop Container */}
      {isMobile && (
        <div className={`${styles.mobileDrawerWrapper} ${open ? styles.drawerOpen : ""}`}>
          <div className={styles.backdrop} onClick={closeModal} />
          <div className={styles.drawer}>
            <div className={styles.drawerHeader}>
              <div className={styles.drawerLogo}>
                <img src={logo} alt="Logo" />
                <span>Las Terrenas Realty</span>
              </div>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={closeModal}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {user ? (
              <div className={styles.drawerUserSection}>
                <img
                  src={user.avatar || noAvatar}
                  alt="avatar"
                  className={styles.drawerAvatar}
                />
                <div className={styles.drawerUserInfo}>
                  <span className={styles.drawerUsername}>{user.username}</span>
                  <span className={styles.drawerUserStatus}>Active member</span>
                </div>
              </div>
            ) : null}

            <div className={styles.drawerLinks}>
              <Link
                to='/'
                className={location.pathname === '/' ? styles.activeLink : ''}
                onClick={closeModal}
              >
                Home
              </Link>
              <Link
                to='/list'
                className={location.pathname === '/list' ? styles.activeLink : ''}
                onClick={closeModal}
              >
                Properties
              </Link>
              <Link
                to='/about'
                className={location.pathname === '/about' ? styles.activeLink : ''}
                onClick={closeModal}
              >
                About Us
              </Link>
              <Link
                to='/contact'
                className={location.pathname === '/contact' ? styles.activeLink : ''}
                onClick={closeModal}
              >
                Contact
              </Link>
              <Link
                to='/agents'
                className={location.pathname === '/agents' ? styles.activeLink : ''}
                onClick={closeModal}
              >
                Agents
              </Link>
              {user && (
                <Link
                  to='/profile'
                  className={location.pathname === '/profile' ? styles.activeLink : ''}
                  onClick={closeModal}
                >
                  My Profile {number > 0 && `(${number})`}
                </Link>
              )}
            </div>

            <div className={styles.drawerAuthSection}>
              {user ? (
                <button
                  type="button"
                  className={styles.drawerSignOutBtn}
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              ) : (
                <div className={styles.drawerAuthButtons}>
                  <Link
                    to='/login'
                    className={styles.drawerSignInBtn}
                    onClick={closeModal}
                  >
                    Sign In
                  </Link>
                  <Link
                    to='/register'
                    className={styles.drawerSignUpBtn}
                    onClick={closeModal}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
