import React from 'react'
import styles from "./singlePage.module.scss"
import Slider from 'components/share/Slider'
import { listData} from 'lib/dummyData'
import GoogleMapComponent from 'components/share/GoogleMap'

// start images
import chatIcon from "./../../assets/icons/chat.png"
import saveIcon from "./../../assets/icons/save.png"
import pin from "./../../assets/icons/pin.png"
import utility from "./../../assets/icons/utility.png"
import pet from "./../../assets/icons/pet.png"
import fee from "./../../assets/icons/fee.png"
import size from "./../../assets/icons/size.png"
import bed from "./../../assets/icons/bed.png"
import bath from "./../../assets/icons/bath.png"
import school from "./../../assets/icons/school.png"
import bus from "./../../assets/icons/bus.png"
import restaurant from "./../../assets/icons/restaurant.png"
import useUser from 'hooks/globalState/userLoggedState'
import { useLoaderData } from 'react-router-dom'
import { FullPost, Post } from 'types/types'
//images end





function SinglePage() {

  const post = useLoaderData() as FullPost
  console.log("singlePage",post)



    const {
      images, 
      title, 
      address, 
      price, 
      postDetail, 
      bathroom, 
      bedroom,
      user
      }=post

  return (
    <div className={styles.singlePage}>
      <div className={styles.details}>
        <div className={styles.wrapper}>
          <Slider images={images} />
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
                <img src={user?.avatar} alt="avatar"/>
                <span>{user?.username}</span>
              </div>
            </div>
            <div className={styles.bottom}>
              {postDetail?.desc}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.wrapper}>
          <p className={styles.title}>General</p>
          <div className={styles.listVertical}>
            <div className={styles.feature}>
              <img src={utility} alt='utility' />
              <div className={styles.featureText}>
                <span>Utilities</span>
                <p>{postDetail?.utilities} is responsible</p>
              </div>
            </div>
            <div className={styles.feature}>
              <img src={pet} alt='pet' />
              <div className={styles.featureText}>
                <span>Pet Policy</span>
                <p>{postDetail?.pet}</p>
              </div>
            </div>
            <div className={styles.feature}>
              <img src={fee} alt='fee' />
              <div className={styles.featureText}>
                <span>Renter is responsible</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className={styles.title}>Sizes</p>
          <div className={styles.sizes}>
            <div className={styles.size}>
              <img src={size} alt='size' />
              <span> {postDetail?.size} mts2</span>
            </div>
            <div className={styles.size}>
              <img src={bed} alt='size' />
              <span> {bedroom} bedrooms</span>
            </div>
            <div className={styles.size}>
              <img src={bath} alt='bath' />
              <span> {bathroom} bathroom</span>
            </div>
          </div>
          <p className={styles.title}>Nearby Places</p>
          <div className={`${styles.listHorizontal} ${styles.nearbySm}`}>
            <div className={styles.feature}>
              <img src={school} alt="school" />
              <div className={styles.featureText}>
                <span>School</span>
                <p>{postDetail?.school}m away</p>
              </div>
            </div>
            <div className={styles.feature}>
              <img src={bus} alt="bus" />
              <div className={styles.featureText}>
                <span>Bus Stop</span>
                <p>{postDetail?.bus}m away</p>
              </div>
            </div>
            <div className={styles.feature}>
              <img src={restaurant} alt="restaurant" />
              <div className={styles.featureText}>
                <span>Restaurant</span>
                <p>{postDetail?.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className={styles.title}>Location</p>
          <div className={styles.mapContainer}>
            <GoogleMapComponent singleMapaData={post}/>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button}>
              <img src={chatIcon} alt='chat' />
              Send a Message
            </button>
            <button className={styles.button}>
              <img src={saveIcon} alt='save' />
              Save the Place
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage