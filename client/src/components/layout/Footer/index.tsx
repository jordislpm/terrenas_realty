import React from 'react';
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Terrenas Realty. All rights reserved.</p>
      <p className={styles.attribution}>
        Developed by{" "}
        <a
          href="https://www.jordisdev.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          jordisdev.com
        </a>
      </p>
    </footer>
  );
}

export default Footer;
