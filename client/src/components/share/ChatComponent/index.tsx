import React, { FormEvent, useEffect, useRef, useState } from 'react'
import styles from "./chatComponent.module.scss"
import { Chat, Message, UserType } from 'types/types';
import noAvatar from "../../../assets/icons/noAvatar.png"
import useUser from 'hooks/globalState/userLoggedState';
import { useGetOneChat } from 'hooks/chat/useGetOneChat';
import { format } from 'timeago.js';
import { useSendNewMessage } from 'hooks/chat/useSendNewMessage';
import useSocketGlobal from 'hooks/globalState/useSocketGlobal';


interface ChatComponentType {
  allProfileChats: Promise<Chat[]>
}

function ChatComponent({ allProfileChats }: ChatComponentType) {
  const [chats, setChats] = useState<Chat[]>([]);
  const { chat, getChatWithReceiver, isLoading, setChat } = useGetOneChat();
  const { user } = useUser();

  const { sendMessage } = useSendNewMessage()
  const {socket, connect, disconnect}= useSocketGlobal()

  const ChatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
  console.log(socket)
  },[socket])

  useEffect(() => {
    const container = ChatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [chat?.messages?.length]);

  useEffect(() => {
    allProfileChats.then(setChats);
     // wait and store once
  }, [allProfileChats]);

  const handleOpenChat = async (id: string, receiver: UserType | undefined) => {
    if (receiver) await getChatWithReceiver(id, receiver);
  };

  const handleSubmitMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const text = formData.get("text") as string;

    if (chat) {
      const newMessage = await sendMessage(text, chat.id);

      if (newMessage) {
        setChat((prev) =>
          prev
            ? {
              ...prev,
              messages: [...(prev.messages || []), newMessage],
            }
            : prev
        );

        form.reset();
      }
    }
  };

  if (!user) return null;

  return (
    <div className={styles.chat}>
      <div className={styles.messages}>
        <h1>Messages</h1>
        {chats.map((c) => (
          <div
            key={c.id}
            className={styles.message}
            style={{
              backgroundColor: c.seenBy?.includes(user.id) ? "white" : "#fecd514e",
            }}
            onClick={() => handleOpenChat(c.id, c.receiver)}
          >
            <img src={c.receiver?.avatar || noAvatar} alt="receiver img" />
            <span>{c.receiver?.username}</span>
            <p>{c.lastMessage?.slice(0, 25)}...</p>
          </div>
        ))}
      </div>

      {isLoading && <div> Loading Message...</div>}

      {chat && (
        <div className={styles.chatBox}>
          <div className={styles.top}>
            <div className={styles.user}>
              <img src={chat.receiver?.avatar || noAvatar} alt="receiver avatar" />
              {chat.receiver?.username}
            </div>
            <span className={styles.close} onClick={() => setChat(null)}>
              X
            </span>
          </div>

          <div ref={ChatContainerRef} className={styles.center}>
            {chat.messages?.map((message) => (
              <div
                className={`${styles.chatMessage} ${message.userId === user.id ? styles.own : ""}`}
                key={message.id}
              >
                <img src={message.userId !== user.id ? chat.receiver?.avatar : user.avatar}
                  alt="receiver avatar" />
                <div className={styles.text}>
                  <p>{message.text}</p>
                  <span>{format(message.createdAt)}</span>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmitMessage} className={styles.bottom}>
            <textarea
              name='text'
              required
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault(); 
                  const form = e.currentTarget.form;
                  if (form) form.requestSubmit();
                }
              }}
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatComponent;