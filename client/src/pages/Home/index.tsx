import React from 'react'
import styles from "./Home.module.scss"
import background_image from "../../assets/images/bg-lt.png"
import SearchBar from '../../components/share/SearchBar'
import { homeDescriptionData, homeDetailsData } from '../../constants/home'
import HomeImageSection from 'components/share/HomeImageSection'


function Home() {
    return (
        <HomeImageSection>
            <div className={styles.homePage}>
                <h1 className={styles.title}>Find Real Estate & Get Your Dream PlaceFind Real Estate & Get Your Dream Place</h1>
                <p className={styles.description}>
                    {homeDescriptionData}
                </p>
                <SearchBar />
                <div className={styles.boxes}>
                    {homeDetailsData.map((detail, index) => (
                        <div key={`${detail.title}:${index}`} className={styles.box}>
                            <h1>{detail.title}</h1>
                            <h2>{detail.description}</h2>
                        </div>
                    ))}

                </div>
            </div>
        </HomeImageSection>
    )
}

export default Home