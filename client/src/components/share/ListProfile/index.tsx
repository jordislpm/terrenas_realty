import React from 'react'
import Card from '../Card'
import styles from "./listProfile.module.scss"
import { AllProfilePosts } from 'types/types';
import EmptyStateMessage from '../EmptyStateMessage';
import CardPostSaved from '../CardPostSaved';


interface ListProfileProps {
  allProfilePosts: Promise<AllProfilePosts>,
  list: "saved" | "my list"
}

function ListProfile({ allProfilePosts, list }: ListProfileProps) {
  const data: AllProfilePosts = React.use(allProfilePosts);

  console.log(data)



  if (list === "saved") {
    return <>
      {
        data.savedPosts.length === 0
          ?
          <div className={styles.empty}>
            You have not saved any Post
          </div>
          :
          <>
            {data.savedPosts.map((post) => (
              <CardPostSaved {...post} key={post.id} />
            ))}
          </>
      }
    </>
  } else if (list === "my list") {
    return <>
      {
        data.userPosts.length === 0
          ?
          <div className={styles.empty}>
            You dont have any post in your list
          </div>
          :
          <>
            {data.userPosts.map((post) => (
              <Card {...post} key={post.id} />
            ))}
          </>
      }
    </>
  }



  // return data === null ? (
  //   <EmptyStateMessage/>
  // ) : (
  //   <>
  //     {/* {data.map((post) => (
  //       <></>
  //       // <Card {...post} key={post.id} />
  //     ))} */}
  //   </>
  // );
}

export default ListProfile;