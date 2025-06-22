import React from 'react'
import styles from "./about.module.scss"
import HomeImageSection from '../../components/share/HomeImageSection'

function About() {
  return (
    <HomeImageSection>
      <div className={styles.content}>
        <h1 className={styles.title}>🏝️ About Us</h1>
        <p className={styles.description}>
          Welcome to Las Terrenas Realty, your trusted platform for discovering and listing properties in one of the most beautiful and vibrant areas of the Dominican Republic.
        </p>
        <p className={styles.description}>
          Whether you're searching for a beachside villa, a cozy apartment, or a lot to build your dream home, our platform connects property owners and seekers with ease, security, and transparency.
        </p>
        <div className={styles.details}>
          <div className={styles.details_list}>
            <h1>🏡 What We Offer</h1>
            <ul>
              <li>✅ Verified listings with real details from Las Terrenas</li>
              <li>💬 Real-time chat to connect directly with property owners or agents</li>
              <li>📍 Interactive maps to explore property locations</li>
              <li>📸 Detailed photos, descriptions, and pricing</li>
              <li>🔐 Secure and user-friendly experience</li>
            </ul>
          </div>
          <div className={styles.details_list}>
            <h1>🌴 Why Las Terrenas?</h1>
            <p className={styles.description}>
              Las Terrenas is a unique blend of natural beauty, international community, and growing investment potential. Our mission is to make property discovery and transactions easier for everyone — locals, expats, and investors alike.    </p>
          </div>
        </div>
      </div>
    </HomeImageSection>
  )
}

export default About