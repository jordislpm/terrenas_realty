import React from 'react'
import styles from "./Home.module.scss"
import background_image from "../../assets/images/bg.png"
import SearchBar from '../../components/share/SearchBar'
import { homeDescriptionData, homeDetailsData } from '../../constants/home'


function Home() {
    return (
        <div className={styles.home_page}>
            <div className={styles.text_container}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Find Real Estate & Get Your Dream PlaceFind Real Estate & Get Your Dream Place</h1>
                    <p className={styles.description}>
                        {homeDescriptionData}
                    </p>
                    <SearchBar />
                    <div className={styles.hero_details}>
                        {homeDetailsData.map((detail, index) => (
                            <div key={`${detail.title}:${index}`}>
                                <h1>{detail.title}</h1>
                                <h2>{detail.description}</h2>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
            <div className={styles.img_container}>
                <img src={background_image} alt="background_image" />
            </div>
        </div>
    )
}

export default Home