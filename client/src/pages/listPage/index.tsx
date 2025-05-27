import React from 'react'
import styles from "./listPage.module.scss"
import { listData } from '../../lib/dummyData'
import Filter from '../../components/share/Filter'
import Card from '../../components/share/Card'
import GoogleMapComponent from 'components/share/GoogleMap'
import { useLoaderData } from 'react-router-dom'
import { FullPost } from 'types/types'
import EmptyStateMessage from 'components/share/EmptyStateMessage'

function ListPage() {

    const posts = useLoaderData() as FullPost[]
    return (
        <div className={styles.listPage}>
            <div className={styles.listContainer}>
                <div className={styles.wrapper}>
                    <Filter />
                    {posts.length < 1
                        ?
                        <EmptyStateMessage/>
                        :
                        <>{posts.map((data) => (
                            <Card {...data} key={data.id} />
                        ))}</>
                    }

                </div>
            </div>
            <div className={styles.mapContainer}>
                <GoogleMapComponent mapaData={posts} />
            </div>
        </div>
    )
}

export default ListPage