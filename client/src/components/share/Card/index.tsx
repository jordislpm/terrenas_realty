import React from 'react'
import styles from "./card.module.scss"
import { Link } from 'react-router-dom'
import pin from "../../../assets/icons/pin.png"
import bed from "../../../assets/icons/bed.png"
import bath from "../../../assets/icons/bath.png"
import save from "../../../assets/icons/save.png"
import chat from "../../../assets/icons/chat.png"
import { PropertyType } from 'types/types'

interface CardProps {
    property: PropertyType
}

function Card(property: PropertyType) {

    const {
        id,
        img,
        title,
        address,
        price,
        bedroom,
        bathroom
    } = property;

    console.log(id)

    return (
        <div className={styles.card}>
            <Link to={`/${id}`} className={styles.imageContainer}>
                <img src={img} alt='Property Image' />
            </Link>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>
                    <Link to={`/${id}`}>{title}</Link>
                </h2>
                <p className={styles.address}>
                    <img src={pin} alt="pin" />
                    <span>{address}</span>
                </p>
                <p className={styles.price}>$ {price}</p>
                <div className={styles.bottom}>
                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <img src={bed} alt="bed" />
                            <span>{bedroom} bedroom</span>
                        </div>
                        <div className={styles.feature}>
                            <img src={bath} alt="bath" />
                            <span>{bathroom} bathroom</span>
                        </div>
                    </div>
                    <div className={styles.icons}>
                        <div className={styles.icon}>
                            <img />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card