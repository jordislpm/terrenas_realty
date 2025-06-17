import React, { FormEvent, useEffect, useRef, useState } from 'react'
import styles from "./chatComponent.module.scss"
import { Chat, Message, UserType } from 'types/types';
import noAvatar from "../../../assets/icons/noAvatar.png"
import useUser from 'hooks/globalState/userLoggedState';
import { useGetOneChat } from 'hooks/chat/useGetOneChat';
import { format } from 'timeago.js';
import { useSendNewMessage } from 'hooks/chat/useSendNewMessage';
import useSocketGlobal from 'hooks/globalState/useSocketGlobal';
import useNotificationGlobalState from 'hooks/globalState/useNotificationGlobalState';
import { useGetAllChats } from 'hooks/chat/useGetAllChats';
import Loading from '../Loading';
import useChatsStore from '../../../hooks/globalState/useChatsGlobal';



const API = process.env.REACT_APP_API_URL || "";

function ChatComponent() {
  const { chat, getChatWithReceiver, isLoadingOneChat, setChat } = useGetOneChat();
  const { user } = useUser();
  const { decrease } = useNotificationGlobalState()
  const { getChats, allChats, isLoadingAllChats, errorAllChats } = useGetAllChats();

  const { chatsGlobal, updateChatsGlobal } = useChatsStore()

  const { sendMessage } = useSendNewMessage();
  const { socket } = useSocketGlobal();

  const ChatContainerRef = useRef<HTMLDivElement | null>(null);

  const read = async (id: string) => {
    try {
      const res = await fetch(`${API}/chats/read/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!socket || !chat?.id) return;

    const handleMessage = (data: Message) => {
      // if (chat.id === data.id) {


      setChat((prev) => {
        const alreadyExists = prev?.messages?.some((m) => m.id === data.id);
        if (alreadyExists) return prev;
        return prev
          ? {
            ...prev,
            messages: [...(prev.messages || []), data],
          }
          : prev;
      });

      read(chat?.id)
      decrease()
      // }
    };
    socket.on("getMessage", handleMessage);

    return () => {
      socket.off("getMessage", handleMessage);
    };
  }, [socket, chat?.id]);


  ////


  useEffect(() => {
    console.log(allChats)
    if (allChats !== null) {
      updateChatsGlobal(allChats)
    }
  }, [allChats])

  useEffect(() => {
    const container = ChatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [chat?.messages?.length]);

  const handleOpenChat = async (id: string, receiver: UserType | undefined) => {
    if (receiver) await getChatWithReceiver(id, receiver)
  };

  const handleSubmitMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const text = formData.get("text") as string;

    if (chat) {
      const newMessage = await sendMessage(text, chat);
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
        socket?.emit("sendMessage", {
          receiverId: chat.receiver?.id,
          data: newMessage
        })
      }
    }
  };

  const closeChat = (chatId: string, userId: string) => {
  
    const newChatsGlobal = chatsGlobal.map((c) => {
      if (c.id === chatId) {
        let newSeenBy: string[] = c.seenBy ? [...c.seenBy] : [];


        newSeenBy.push(userId);


        return { ...c, seenBy: newSeenBy };
      } else {
        return c;
      }
    })
    updateChatsGlobal(newChatsGlobal)
    read(chatId)
    setChat(null);
    getChats();
  };



  if (!user) return <div>Please Log in Fisrt</div>;
  return (
    <div className={styles.chat}>
      <div className={styles.messages}>
        <h1>Messages</h1>
        {isLoadingAllChats && <Loading />}
        {chatsGlobal.length < 1 && <div> You Don't Have New Messages</div>}
        {errorAllChats && <div> There was a problem loading chats, please try later</div>}

        {chatsGlobal.map((c) => (
          <div
            key={c.id}
            className={styles.message}
            style={{
              backgroundColor: c.seenBy?.includes(user.id) || chat?.id === c.id ?
                "white" : "#fecd514e",
            }}
            onClick={() => handleOpenChat(c.id, c.receiver)}
          >
            <img src={c.receiver?.avatar || noAvatar} alt="receiver img" />
            <span>{c.receiver?.username}</span>
            <p>{c.lastMessage?.slice(0, 25)}...</p>
          </div>
        ))}
      </div>
      {isLoadingOneChat && <div> Loading Message...</div>}
      {chat && (
        <div className={styles.chatBox}>
          <div className={styles.top}>
            <div className={styles.user}>
              <img src={chat.receiver?.avatar || noAvatar} alt="receiver avatar" />
              {chat.receiver?.username}
            </div>
            <span className={styles.close} onClick={() => closeChat(chat.id, user.id)}>
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