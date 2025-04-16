import React from 'react';
import styles from "./markerListingItem.module.scss";
import { PropertyType } from 'types/types';
import { Link } from 'react-router-dom';


interface MarkerListingItemProps {
    item: PropertyType
}

function MarkerListingItem({ item }: MarkerListingItemProps) {

    const { img, id, title, bedroom, price } = item;

    return (
        <div className={styles.item}>
            <img src={img} alt='Property Image' />
            <div className={styles.textContainer}>
                <h2 className={styles.title}>
                    <Link to={`/${id}`}>{title}</Link>
                </h2>
                <span>{bedroom} bedroom</span>
                <b>$ {price}</b>
            </div>
        </div>
    )
}

export default MarkerListingItem