import React from 'react'
import styles from "./singlePage.module.scss"
import { listData } from '../../lib/dummyData'


function SinglePage() {

    const data = listData;

  return (
    <div className={styles.list_page}>SinglePage
        <div className={styles.list_container}>
List
        </div>
        <div className={styles.map_container}>
            Map
        </div>
    </div>
  )
}

export default SinglePage