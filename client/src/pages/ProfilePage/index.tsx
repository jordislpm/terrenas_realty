import React from 'react'
import styles from "./profilePage.module.scss"
import { userData } from 'lib/dummyData';
import List from 'components/share/List';
import Chat from 'components/share/Chat';
import { useLogoutUser } from 'hooks/auth/useLogoutUser';
import { useNavigate } from 'react-router-dom';
import useUser from 'hooks/globalState/userLoggedState';
import noAvatar from "../../assets/icons/noAvatar.png"

function ProfilePage() {

  const {user, setUser}=useUser();

 const {logout}= useLogoutUser()

 const navigate =  useNavigate()

 const avatarImg = user?.avatar !== null ? user?.avatar : noAvatar;

    return (
        
      <div className={styles.profilePage}>
        <div className={styles.details}>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <h1>User Information</h1>
              <button onClick={()=>navigate("/profile/update")}>Update Profile</button>
            </div>
            <div className={styles.info}>
              <span>
                Avatar:
                <img
                  src={avatarImg}
                  alt="user-avatar"
                />
              </span>
              <span>
                Username: <b>{user?.username}</b>
              </span>
              <span>
                E-mail: <b>{user?.email}</b>
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