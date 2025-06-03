import React, { useOptimistic, useState, useTransition } from 'react'
import styles from "./singlePage.module.scss"
import Slider from 'components/share/Slider'
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
import { useLoaderData } from 'react-router-dom'
import { FullPost } from 'types/types'
import { formatDistances, formatPrice } from 'lib/format'
import { useSavePost } from 'hooks/user/useSavePost'
import useUser from 'hooks/globalState/userLoggedState'
//images end





function SinglePage() {

  const post = useLoaderData() as FullPost

  const { save, success, isLoading, error } = useSavePost()
  const { user } = useUser()

  const {
    images,
    title,
    address,
    price,
    postDetail,
    bathroom,
    bedroom,
    id,
    isSaved,
    userId
  } = post;

  const [saved, setSaved] = useState(isSaved);

  const [optimisticSaved, toggleOptimisticSaved] = useOptimistic(
    saved,
    (state: boolean, newValue: boolean) => newValue
  )
  const [isPending, startTransition] = useTransition();

  const handleSave = async () => {
    if (user?.id === userId) {
      alert("you can't save your own posts")

    } else {


      const newValue = !optimisticSaved;
      toggleOptimisticSaved(newValue);

      startTransition(async () => {
        try {
          const newSavedStatus = await save(id);

          setSaved(newSavedStatus);
        } catch (err) {
          toggleOptimisticSaved(saved);
        }
      });
    }
  };

  const handleMessage = async () => {

    if (user?.id === userId) {
      alert("you can't send a message to yourself")

    } else {
      // const newValue = !optimisticSaved;
      // toggleOptimisticSaved(newValue);

      // startTransition(async () => {
      //     try {
      //         const newSavedStatus = await save(id);

      //         setSaved(newSavedStatus);
      //     } catch (err) {
      //         toggleOptimisticSaved(saved);
      //     }
      // });
    }
  };


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
                <div className={styles.price}>{formatPrice(price)}</div>
              </div>
              <div className={styles.user}>
                <img src={post.user?.avatar} alt="avatar" />
                <span>{post.user?.username}</span>
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
                {postDetail?.utilities === "owner"
                  ?
                  <p>Owner is responsible</p>
                  :
                  <p>Tenant is responsible</p>
                }
              </div>
            </div>
            <div className={styles.feature}>
              <img src={pet} alt='pet' />
              <div className={styles.featureText}>
                <span>Pet Policy</span>
                {postDetail?.pet === "allowed"
                  ?
                  <p>Pets Allowed</p>
                  :
                  <p>Pets not Allowed</p>
                }
              </div>
            </div>
            <div className={styles.feature}>
              <img src={fee} alt='fee' />
              <div className={styles.featureText}>
                <span>Income Policy</span>
                <p>{postDetail?.income}</p>
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
                <p>{formatDistances(postDetail?.school)} away</p>
              </div>
            </div>
            <div className={styles.feature}>
              <img src={bus} alt="bus" />
              <div className={styles.featureText}>
                <span>Bus Stop</span>
                <p>{formatDistances(postDetail?.bus)} away</p>
              </div>
            </div>
            <div className={styles.feature}>
              <img src={restaurant} alt="restaurant" />
              <div className={styles.featureText}>
                <span>Restaurant</span>
                <p>{formatDistances(postDetail?.restaurant)} away</p>
              </div>
            </div>
          </div>
          <p className={styles.title}>Location</p>
          <div className={styles.mapContainer}>
            <GoogleMapComponent singleMapaData={post} />
          </div>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={handleMessage}>
              <img src={chatIcon} alt='chat' />
              Send a Message
            </button>
            <button onClick={handleSave} className={styles.button}
              style={{ backgroundColor: saved ? "#fece51" : "white" }}>
              <img src={saveIcon} alt='save' />
              {saved ? "Place Saved " : "Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage