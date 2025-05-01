import React from 'react'
import styles from "./Home.module.scss"
import background_image from "../../assets/images/bg-lt.png"
import SearchBar from '../../components/share/SearchBar'
import { homeDescriptionData, homeDetailsData } from '../../constants/home'
import HomeImageSection from 'components/share/HomeImageSection'


function Home() {
    return (
        <HomeImageSection>

       
<h1 className={styles.title}>Find Real Estate & Get Your Dream Place</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo
        suscipit cum eius, iure est nulla animi consequatur facilis id pariatur
        fugit quos laudantium temporibus dolor ea repellat provident impedit!
      </p>
      <SearchBar />
      <div className={styles.boxes}>
        <div className={styles.box}>
          <h1>16+</h1>
          <h2>Years of Experience</h2>
        </div>
        <div className={styles.box}>
          <h1>200</h1>
          <h2>Award Gained</h2>
        </div>
        <div className={styles.box}>
          <h1>2000+</h1>
          <h2>Property Ready</h2>
        </div>
      </div>
        </HomeImageSection>
      );
}

export default Home