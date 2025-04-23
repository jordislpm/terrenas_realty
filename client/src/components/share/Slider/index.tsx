import React, { useState } from 'react'
import styles from "./slider.module.scss"
import arrow from "./../../../assets/icons/arrow.png"

interface SliderProps {
    images: string[]
}

function Slider({ images }: SliderProps) {

    const [imageIndex, setImageIndex] = useState<null | number>(null);

    const changeSlide = (direction: "right" | "left") => {

        if (imageIndex !== null) {

            if (direction === "left") {
                if (imageIndex === 0) {
                    setImageIndex(images.length - 1)
                } else {
                    setImageIndex(imageIndex - 1)
                }
            } else {
                if (imageIndex === images.length - 1) {
                    setImageIndex(0)
                } else {
                    setImageIndex(imageIndex + 1)
                }
            }
        }
    }


    return (
        <div className={styles.slider}>

            {imageIndex !== null &&
                (
                    <div className={styles.fullSlider}>
                        <div className={styles.arrow} onClick={() => changeSlide("left")}>
                            <img src={arrow} alt='arrow' />
                        </div>
                        <div className={styles.imgContainer}>
                            <img src={images[imageIndex ? imageIndex : 0]} alt={images[0]} />
                        </div>
                        <div className={styles.arrow} onClick={() => changeSlide("right")}>
                            <img src={arrow} alt='arrow' className={styles.right} />
                        </div>
                        <div className={styles.close}
                            onClick={() => setImageIndex(null)}>X</div>
                    </div>
                )
            }

            <div className={styles.bigImage}>
                <img src={images[0]} alt={images[0]} onClick={() => setImageIndex(0)} />
            </div>
            <div className={styles.smallImages}>
                {images.slice(1, 4).map((image, index) => (
                    <img onClick={() => setImageIndex(index + 1)} src={image} key={`slice: ${image},${index}`} />
                ))}
            </div>
        </div>
    )
}

export default Slider