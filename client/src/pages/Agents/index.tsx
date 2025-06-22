import React from 'react'
import styles from "./agents.module.scss"
import HomeImageSection from '../../components/share/HomeImageSection'
import { Link } from 'react-router-dom'


// temporal data
import { agents } from '../../lib/dummyData'
import CardAgent from '../../components/share/CardAgent'



function Agents() {
    return (
        <HomeImageSection>
            <div className={styles.content}>
                <h1 className={styles.title}>👥 Meet Our Agents</h1>
                <p className={styles.description}>
                    At Las Terrenas Realty, we work with a network of trusted agents who know the area, understand the market, and are committed to helping you find the right property — whether you're buying, selling, or renting.
                </p>
                <h2 className={styles.title}>💼 Agents</h2>
                <div className={styles.agents_list}>
                    {agents.map((agent, i) => (
                        <CardAgent key={`${i}:${agent.name}`} agent={agent} />
                    ))}
                </div>
                <div className={styles.details}>
                    <div className={styles.details_list}>
                        <h3>🔑 Why Work with Our Agents?</h3>
                        <ul>
                            <li>🏝️ Local Experts: Our agents live and work in Las Terrenas, so they know every beach, neighborhood, and hidden gem.</li>
                            <li>📋 Verified Listings: All properties are reviewed and validated for accuracy and transparency.</li>
                            <li>🤝 Personalized Assistance: Agents are here to guide you every step of the way — from viewing to closing the deal.</li>
                            <li>🌎 Multilingual Support: Many of our agents speak English, Spanish, French, and more.</li>
                        </ul>
                    </div>
                    <div className={styles.details_list}>
                        <h1>Want to Become an Agent?</h1>
                        <p className={styles.description}>
                            Are you a real estate agent working in Las Terrenas? Join our platform to expand your reach and connect with more clients.
                        </p>
                        <a
                            href="mailto:jordislpm@gmail.com?subject=Agent%20Application%20for%20Las%20Terrenas%20Realty&body=Hello..."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            👉 Apply to be an agent
                        </a>
                    </div>
                </div>
            </div>
        </HomeImageSection>
    )
}

export default Agents