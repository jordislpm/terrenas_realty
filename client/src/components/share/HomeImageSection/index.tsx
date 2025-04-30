import React, { ReactNode } from 'react'
import styles from "./HomeImageSection.module.scss"
import bg from "../../../assets/images/bg-lt.png"
import { Link } from 'react-router-dom';

interface HomeImageSectionProps {
    children: ReactNode;
}

function HomeImageSection({ children }: HomeImageSectionProps) {
    return (
        <section className={styles.section}>
            <div className={styles.contentContainer}>
                <div className={styles.wrapper}>
                        {children}
                </div>
            </div>
            <div className={styles.imgContainer}>
                <img src={bg} alt="Background" />
            </div>
        </section>
    )
}

export default HomeImageSection