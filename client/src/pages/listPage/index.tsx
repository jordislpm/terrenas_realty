import React from 'react'
import styles from "./listPage.module.scss"
import { listData } from '../../lib/dummyData'
import Filter from '../../components/share/Filter'
import Card from '../../components/share/Card'
import GoogleMapComponent from 'components/share/GoogleMap'
import { useLoaderData } from 'react-router-dom'
import { FullPost } from 'types/types'

function ListPage() {

    const posts = useLoaderData() as FullPost[]
    return (
        <div className={styles.listPage}>
            <div className={styles.listContainer}>
                <div className={styles.wrapper}>
                    <Filter />
                    {posts.map((data)=>(
                        <Card {...data} key={data.id}/>
                    ))}
                </div>
            </div>
            <div className={styles.mapContainer}>
                {/* <Map mapaData={data}/> */}
                <GoogleMapComponent mapaData={posts}/>
            </div>
        </div>
    )
}

export default ListPage