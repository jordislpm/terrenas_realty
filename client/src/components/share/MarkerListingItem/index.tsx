import React from 'react';
import styles from "./markerListingItem.module.scss";
import { PostDataType, PropertyType } from 'types/types';
import { Link } from 'react-router-dom';
import useMapGlobalState from 'hooks/globalState/useMapGlobalState';


interface MarkerListingItemProps {
    item?: PropertyType  ;
    itemSingle?: PostDataType;
}

function MarkerListingItem({ item, itemSingle }: MarkerListingItemProps) {

    if (item){
        const { img, id, title, bedroom, price } = item;
    } else if(itemSingle){

    }

    
    const {isMarkerListingOpen, toggleIsMarkerListingOpen}= useMapGlobalState();

    const closeMarkerListing = ()=>{

        if(isMarkerListingOpen === true){
            toggleIsMarkerListingOpen()

            console.log("try to close")
        } else{
            toggleIsMarkerListingOpen()
        }

    }

    return (
        <div className={styles.item}>
            
       {  item &&   <>
            <img src={item.img} alt='Property Image' />
            <div className={styles.textContainer}>
                <h2 className={styles.title}>
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </h2>
                <span>{item.bedroom} bedroom</span>
                <b>$ {item.price}</b>
            </div>
            </>}

            {  itemSingle &&   <>
            <img src={itemSingle.images[0]} alt='Property Image' />
            <div className={styles.textContainer}>
                <h2 className={styles.title}>
                    <Link to={`/${itemSingle.id}`}>{itemSingle.title}</Link>
                </h2>
                <span>{itemSingle.bedroom} bedroom</span>
                <b>$ {itemSingle.price}</b>
            </div>
            </>}
            <div className={styles.close}
            onClick={closeMarkerListing}>
                X
            </div>
        </div>
    )
}

export default MarkerListingItem