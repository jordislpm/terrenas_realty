import React, { useState } from 'react'
import styles from "./chat.module.scss"

function Chat() {
    const [chat, setChat] = useState<boolean| null>(true);


    return (
        <div className={styles.chat}>
          <div className={styles.messages}>
            <h1>Messages</h1>
            <div className={styles.message}>
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>John Doe</span>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className={styles.message}>
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>John Doe</span>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className={styles.message}>
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>John Doe</span>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className={styles.message}>
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>John Doe</span>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className={styles.message}>
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>John Doe</span>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className={styles.message}>
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>John Doe</span>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
          {chat && (
            <div className={styles.chatBox}>
              <div className={styles.top}>
                <div className={styles.user}>
                  <img
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                  John Doe
                </div>
                <span className={styles.close} onClick={() => setChat(null)}>
                  X
                </span>
              </div>
              <div className={styles.center}>
                <div className={styles.chatMessage}>
                  <p>Lorem ipsum dolor sit amet</p>
                  <span>1 hour ago</span>
                </div>
                <div className={`${styles.chatMessage} ${styles.own}`}>
                  <p>Lorem ipsum dolor sit amet</p>
                  <span>1 hour ago</span>
                </div>
                <div className={styles.chatMessage}>
                  <p>Lorem ipsum dolor sit amet</p>
                  <span>1 hour ago</span>
                </div>
                <div className={`${styles.chatMessage} ${styles.own}`}>
                  <p>Lorem ipsum dolor sit amet</p>
                  <span>1 hour ago</span>
                </div>
                <div className={styles.chatMessage}>
                  <p>Lorem ipsum dolor sit amet</p>
                  <span>1 hour ago</span>
                </div>
                <div className={`${styles.chatMessage} ${styles.own}`}>
                  <p>Lorem ipsum dolor sit amet</p>
                  <span>1 hour ago</span>
                </div>
                <div className={styles.chatMessage}>
                  <p>Lorem ipsum dolor sit amet</p>
                  <span>1 hour ago</span>
                </div>
                <div className={`${styles.chatMessage} ${styles.own}`}>
                  <p>Lorem ipsum dolor sit amet</p>
                  <span>1 hour ago</span>
                </div>
                <div className={styles.chatMessage}>
                  <p>Lorem ipsum dolor sit amet</p>
                  <span>1 hour ago</span>
                </div>
                <div className={`${styles.chatMessage} ${styles.own}`}>
                  <p>Lorem ipsum dolor sit amet</p>
                  <span>1 hour ago</span>
                </div>
              </div>
              <div className={styles.bottom}>
                <textarea></textarea>
                <button>Send</button>
              </div>
            </div>
          )}
        </div>
      );
  }
  
  export default Chat;