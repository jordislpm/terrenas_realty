import React from 'react'
import styles from "./listPage.module.scss"
import { listData } from '../../lib/dummyData'
import Filter from '../../components/share/Filter'
import Card from '../../components/share/Card'

function ListPage() {

    const data = listData
    return (
        <div className={styles.list_page}>
            <div className={styles.list_container}>
                <div className={styles.wrapper}>
                    <Filter />
                    {listData.map((data)=>(
                        <Card {...data} key={data.id}/>
                    ))}
                </div>
            </div>
            <div className={styles.map_container}></div>
        </div>
    )
}

export default ListPage