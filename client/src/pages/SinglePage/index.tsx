import React from 'react'
import styles from "./singlePage.module.scss"
import Slider from 'components/share/Slider'
import { singlePostData, userData } from 'lib/dummyData'

import pin from "./../../assets/icons/pin.png"




function SinglePage() {

  const { title, address, price, description, images } = singlePostData;
  const { name, img } = userData;

  return (
    <div className={styles.singlePage}>
      <div className={styles.details}>
        <div className={styles.wrapper}>
          <Slider images={images}/>
          <div className={styles.info}>
            <div className={styles.top}>
              <div className={styles.post}>
                <h1>{title}</h1>
                <div className={styles.address}>
                  <img src={pin} alt="pin" />
                  <span>{address}</span>
                </div>
                <div className={styles.price}>$ {price}</div>
              </div>
              <div className={styles.user}>
                <img src={img} />
                <span>{name}</span>

              </div>

            </div>
            <div className={styles.bottom}>
{description}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.wrapper}>

        </div>
      </div>
    </div>
  )
}

export default SinglePage