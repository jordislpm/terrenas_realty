import React from 'react'
import styles from "./cardAgent.module.scss"
import { Agent } from '../../../types/types'
import noAvatar from "../../../assets/icons/noAvatar.png"


interface CardAgentTypes {
    agent: Agent
}

function CardAgent({ agent }: CardAgentTypes) {

    const {
        photo,
        name,
        bio,
        languages,
        contact
    } = agent
    return (
        <div className={styles.card}>
            <img src={photo === "" ? noAvatar : photo} alt={name} className={styles.image} />
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.bio}>{bio}</p>
            <p className={styles.languages}>Languages: {languages.join(", ")}</p>
            <a
                href={`mailto:${contact}?subject=Interested%20in%20a%20property&body=Hello%20${encodeURIComponent(name)},%0D%0A%0D%0AI%20found%20your%20profile%20on%20Las%20Terrenas%20Realty%20and%20I'm%20interested%20in%20working%20with%20you%20to%20find%20a%20property.%20Please%20let%20me%20know%20how%20to%20proceed.`}
                className={styles.contact}
            >
                {contact}
            </a>
        </div>
    )
}

export default CardAgent