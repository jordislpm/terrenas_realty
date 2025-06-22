import React from 'react'
import styles from "./contact.module.scss"
import HomeImageSection from '../../components/share/HomeImageSection'


function Contact() {
  return (
    <HomeImageSection>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>📞 Contact Us</h1>
          <p className={styles.description}>
            We’re here to help you find your perfect property in Las Terrenas. Whether you have a question, want to list your property, or need support — feel free to reach out!
          </p>
        </div>
        <div className={styles.details}>
          <div className={styles.details_list}>
            <h1>🧭 Our Location</h1>
            <p className={styles.description}>
              Las Terrenas, Samaná
              Dominican Republic
            </p>
          </div>
          <div className={styles.details_list}>
            <h1>📬 Email</h1>
            <p className={styles.description}>
              <a href="mailto:info@lasterrenasrealty.com">info@lasterrenasrealty.com</a>
            </p>
          </div>
          <div className={styles.details_list}>
            <h1>📱 WhatsApp / Phone</h1>
            <p className={styles.description}>
              <a href="tel:+18290000000">+1 (829) 000-0000</a>
            </p>
          </div>
          <div className={styles.details_list}>
            <h1>📩 Message Us</h1>
            <p className={styles.description}>
              You can also contact us directly using the chat feature inside the platform — just log in and send a message!
            </p>
          </div>
          <div className={styles.details_list}>
            <h1>⏰ Support Hours</h1>
            <p className={styles.description}>
              Monday to Saturday
              9:00 AM – 6:00 PM (AST)
            </p>
          </div>
        </div>
      </div>
    </HomeImageSection>
  )
}

export default Contact