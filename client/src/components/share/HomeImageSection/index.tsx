import React, { ReactNode } from 'react'
import styles from "./HomeImageSection.module.scss"
import bg from "../../../assets/images/bg-lt.png"
import { Link } from 'react-router-dom';

interface HomeImageSectionProps {
    children: ReactNode;
}

function HomeImageSection({ children }: HomeImageSectionProps) {
    return (
        <div className={styles.homePage}>
          <div className={styles.textContainer}>
            <div className={styles.wrapper}>
              {children}
            </div>
          </div>
          <div className={styles.imgContainer}>
            <img src={bg} alt="Real estate background" />
          </div>
        </div>
      );
}

export default HomeImageSection