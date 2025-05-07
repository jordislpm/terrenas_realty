import React from 'react'
import styles from "./profilePage.module.scss"
import { userData } from 'lib/dummyData';
import List from 'components/share/List';
import Chat from 'components/share/Chat';
import { useLogoutUser } from 'hooks/auth/useLogoutUser';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {

 const {logout}= useLogoutUser()

 const navigate =  useNavigate()



    return (
        
      <div className={styles.profilePage}>
        <div className={styles.details}>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <h1>User Information</h1>
              <button>Update Profile</button>
            </div>
            <div className={styles.info}>
              <span>
                Avatar:
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              </span>
              <span>
                Username: <b>John Doe</b>
              </span>
              <span>
                E-mail: <b>john@gmail.com</b>
              </span>
              <button onClick={()=>logout()}>Log out</button>
            </div>
            <div className={styles.title}>
              <h1>My List</h1>
              <button>Create New Post</button>
            </div>
            <List />
            <div className={styles.title}>
              <h1>Saved List</h1>
            </div>
            <List />
          </div>
        </div>
        <div className={styles.chatContainer}>
          <div className={styles.wrapper}>
            <Chat/>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProfilePage;