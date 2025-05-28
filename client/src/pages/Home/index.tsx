import React from 'react'
import styles from "./Home.module.scss"
import SearchBar from '../../components/share/SearchBar'
import HomeImageSection from 'components/share/HomeImageSection'


function Home() {
  return (
    <HomeImageSection>


      <h1 className={styles.title}>Find Real Estate & Get Your Dream Place</h1>
      <p className={styles.description}>
        Whether you're looking for a peaceful retirement spot, a remote work paradise,
        a smart investment, or a family getaway—Las Terrenas has something for everyone.
        Let us help you find a place that truly feels like home.
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