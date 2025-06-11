import React, { useEffect } from 'react'
import Nav from './Nav'
import useSocketGlobal from 'hooks/globalState/useSocketGlobal'
import useUser from 'hooks/globalState/userLoggedState';
import useNotificationGlobalState from 'hooks/globalState/useNotificationGlobalState';
import styles from "./header.module.scss"

function Header() {

  const { connect, socket, disconnect } = useSocketGlobal();
  const { user } = useUser();
  const {fetchNotification}=useNotificationGlobalState();



  useEffect(() => {

    fetchNotification();
    if (!socket) {
      connect()
    }

    return () => {
      disconnect();
    }
  }, [])

  useEffect(() => {

    user && socket?.emit("user-connected", user.id)
  }, [user, socket])

  return (
    <div className={styles.header}>
      <Nav />
    </div>
  )
}

export default Header