import React from 'react'
import styles from "./profilePage.module.scss"
import { useLogoutUser } from 'hooks/auth/useLogoutUser';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useUser from 'hooks/globalState/userLoggedState';
import noAvatar from "../../assets/icons/noAvatar.png"
import { Link } from 'react-router-dom';
import { AllProfilePosts, Chat, FullPost } from 'types/types';
import Loading from 'components/share/Loading';
import ListProfile from 'components/share/ListProfile';
import ChatComponent from 'components/share/ChatComponent';

function ProfilePage() {

  const { user, setUser } = useUser();

  const { logout } = useLogoutUser()

  const navigate = useNavigate()

  const { allProfilePosts } = useLoaderData() as { allProfilePosts: Promise<AllProfilePosts> };
  const { allProfileChats } = useLoaderData() as { allProfileChats: Promise<Chat[]> };

  return (
    <div className={styles.profilePage}>
      <div className={styles.details}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className={styles.info}>
            <span>
              Avatar:
              <img
                src={user?.avatar}
                alt="user-avatar"
              />
            </span>
            <span>
              Username: <b>{user?.username}</b>
            </span>
            <span>
              E-mail: <b>{user?.email}</b>
            </span>
            <button onClick={() => logout()}>Log out</button>
          </div>
          <div className={styles.title}>
            <h1>My List</h1>
            <Link to="/add">
              <button >Create New Post</button>
            </Link>
          </div>
          <React.Suspense fallback={<Loading />}>
            <ListProfile
              allProfilePosts={allProfilePosts}
              list="my list" />
          </React.Suspense>
          <div className={styles.title}>
            <h1>Saved List</h1>
          </div>
          <React.Suspense fallback={<Loading />}>
            <ListProfile
              allProfilePosts={allProfilePosts}
              list="saved" />
          </React.Suspense>
        </div>
      </div>
      <div className={styles.chatContainer}>
        <div className={styles.wrapper}>
          <ChatComponent />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;