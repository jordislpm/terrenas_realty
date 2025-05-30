import React, { useEffect, useOptimistic, useState, useTransition } from 'react'
import styles from "./cardPostSaved.module.scss"
import { Link } from 'react-router-dom'
import pin from "../../../assets/icons/pin.png"
import bed from "../../../assets/icons/bed.png"
import bath from "../../../assets/icons/bath.png"
import saveImg from "../../../assets/icons/save.png"
import chat from "../../../assets/icons/chat.png"
import { FullPost, Post, PropertyType } from 'types/types'
import { formatPrice } from 'lib/format'
import { useSavePost } from 'hooks/user/useSavePost'

interface CardProps {
    property: PropertyType
}

function CardPostSaved(post:Post) {

    const {save, success, isLoading, error}= useSavePost()

    const {
        id,
        images,
        title,
        address,
        price,
        bedroom,
        bathroom,
    } = post;

    // const [saved, setSaved] = useState(false);
    // const[optimisticSaved, toggleOptimisticSaved] = useOptimistic(
    //   saved,
    //   (state: boolean, newValue: boolean)=> newValue
    // )


    //  const [isPending, startTransition] = useTransition();
    
    // const handleSave = async () => {
    //   const newValue = !optimisticSaved;
    //   toggleOptimisticSaved(newValue);
    
    //   startTransition(async () => {
    //     try {
    //       const newSavedStatus = await save(id);
          
    //       setSaved(newSavedStatus); 
    //     } catch (err) {
    //       toggleOptimisticSaved(saved);
    //     }
    //   });
    // };

    return (
        <div className={styles.card}>
            <Link to={`/post/${id}`} className={styles.imageContainer}>
                <img src={images[0]} alt='Property Image' />
            </Link>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>
                    <Link to={`/post/${id}`}>{title}</Link>
                </h2>
                <p className={styles.address}>
                    <img src={pin} alt="pin" />
                    <span>{address}</span>
                </p>
                <p className={styles.price}>{formatPrice(price)}</p>
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
                            <img src={saveImg}/>
                        </div>
                        <div className={styles.icon}>
                            <img src={chat}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPostSaved