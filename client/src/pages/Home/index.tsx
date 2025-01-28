import React from 'react'
import styles from "./Home.module.scss"
import background_image from "../../assets/images/bg.png"

function Home() {
    return (
        <div className={styles.home_page}>
            <div className={styles.text_container}>
                text
            </div>
            <div className={styles.img_container}>
                <img src={background_image} alt="background_image" />
            </div>
        </div>
    )
}

export default Home