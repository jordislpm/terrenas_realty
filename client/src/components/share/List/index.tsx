import React from 'react'
import Card from '../Card'
import styles from "./list.module.scss"
import { listData } from 'lib/dummyData'


function List(){
  return (
    <div className={styles.list}>
      {listData.map(item=>(
        <Card  key={item.id} {...item}/>
      ))}
    </div>
  )
}

export default List