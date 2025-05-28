import React from 'react'
import styles from "./listPage.module.scss"
import { listData } from '../../lib/dummyData'
import Filter from '../../components/share/Filter'
import Card from '../../components/share/Card'
import GoogleMapComponent from 'components/share/GoogleMap'
import { useLoaderData } from 'react-router-dom'
import { FullPost } from 'types/types'
import EmptyStateMessage from 'components/share/EmptyStateMessage'
import ListContent from 'components/share/ListContent'
import LoadingGoogleMap from 'components/share/LoadingGoogleMap'

function ListPage() {
  const { posts } = useLoaderData() as { posts: Promise<FullPost[]> };

  return (
    <div className={styles.listPage}>
      <div className={styles.listContainer}>
        <div className={styles.wrapper}>
          <Filter />
          <React.Suspense fallback={<div>Loading properties...</div>}>
            <ListContent posts={posts} />
          </React.Suspense>
        </div>
      </div>
      <div className={styles.mapContainer}>
        <React.Suspense fallback={<LoadingGoogleMap/>}>
          <GoogleMapComponent mapaDataPromise={posts} />
        </React.Suspense>
      </div>
    </div>
  );
}

export default ListPage