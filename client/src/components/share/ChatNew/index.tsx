import React, { FormEvent, useEffect, useRef, useState } from 'react'
import styles from "./ChatNew.module.scss"
import { Chat, Message, UserType } from '../../../types/types';
import noAvatar from "../../../assets/icons/noAvatar.png"
import { format } from 'timeago.js';
import useUser from '../../../hooks/globalState/userLoggedState';
import useSocketGlobal from '../../../hooks/globalState/useSocketGlobal';
import { useSendNewMessage } from '../../../hooks/chat/useSendNewMessage';
import { sendNewMessage } from '../../../services/chat/sendNewMessage';
import { useGetOneChat } from '../../../hooks/chat/useGetOneChat';
import Loading from '../Loading';
import useNotificationGlobalState from '../../../hooks/globalState/useNotificationGlobalState';
import { useGetAllChats } from '../../../hooks/chat/useGetAllChats';
import { useCreateNewChat } from '../../../hooks/chat/useCreateNewChat';
import { getOneUser } from '../../../services/user/getOneUser';


const API = process.env.REACT_APP_API_URL || "";

interface ChatNewProps {
  userId: string;
  receiver: UserType | undefined;
}

function ChatNew({ userId, receiver }: ChatNewProps) {
  const { chat, getChatWithReceiver, isLoadingOneChat, setChat } = useGetOneChat();
  const { user } = useUser();
  const { getChats, allChats, isLoadingAllChats, errorAllChats } = useGetAllChats()
  const {
    createChat,
    isLoading,
    error,
    newChatCreated,
    setNewChatCreated,
    getUserReceiver,
    userReceiver
  } = useCreateNewChat();



  const { sendMessage } = useSendNewMessage();
  const { socket } = useSocketGlobal();

  const ChatContainerRef = useRef<HTMLDivElement | null>(null);



  // const read = async (id: string) => {
  //   try {
  //     const res = await fetch(`${API}/chats/read/${id}`, {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       credentials: "include"
  //     });
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // useEffect(() => {
  //   if (!socket || !chat?.id) return;

  //   const handleMessage = (data: Message) => {
  //     // if (chat.id === data.id) {
  //       setChat((prev) => {
  //         const alreadyExists = prev?.messages?.some((m) => m.id === data.id);
  //         if (alreadyExists) return prev;
  //         return prev
  //           ? {
  //             ...prev,
  //             messages: [...(prev.messages || []), data],
  //           }
  //           : prev;
  //       });
  //       read(chat?.id)
  //       decrease()
  //     // }
  //   };
  //   socket.on("getMessage", handleMessage);

  //   return () => {
  //     socket.off("getMessage", handleMessage);
  //   };
  // }, [socket, chat?.id]);


  ////



  useEffect(() => {
    getUserReceiver(userId)

    return () => {
      setNewChatCreated(null)
      getChats();
      console.log("closing new chat")
    }
  }, [])

  ///

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

    if (newChatCreated) {
      const newMessage = await sendMessage(text, newChatCreated);
      getChats();
      if (newMessage) {
        setNewChatCreated((prev) =>
          prev
            ? {
              ...prev,
              messages: [...(prev.messages || []), newMessage], receiver,
            }
            : prev
        );
        form.reset();
        socket?.emit("sendMessage", {
          receiverId: newChatCreated.receiver?.id,
          data: newMessage
        })
      }
    } else {
      const chatCreatedInsideSubmitMessage = await createChat(userId);

      if (chatCreatedInsideSubmitMessage) {
        const newMessage = await sendMessage(text, chatCreatedInsideSubmitMessage);

        if (newMessage) {
          setNewChatCreated((prev) =>
            prev
              ? {
                ...prev,
                messages: [...(prev.messages || []), newMessage], receiver,
              }
              : prev
          );
          form.reset();
          socket?.emit("sendMessage", {
            receiverId: chatCreatedInsideSubmitMessage.receiver?.id,
            data: newMessage
          })
        }
      }
    }
  };

  // const closeChat = (chatId: string, userId: string) => {
  // //   setChats((prev) =>
  // //     prev
  // //       ? prev.map((c) => {
  // //           if (c.id === chatId) {
  // //             let newSeenBy: string[] = c.seenBy ? [...c.seenBy] : [];


  // //               newSeenBy.push(userId);


  // //             return { ...c, seenBy: newSeenBy };
  // //           } else {
  // //             return c;
  // //           }
  // //         })
  // //       : prev
  // //   );
  // //   read(chatId)

  // //   setChat(null);
  // };




  if (!user) return <div>Please Log in Fisrt</div>;

  return (
    <div className={styles.chat}>
      <div className={styles.messages}>
        <h1>New chat</h1>
        {error && <span> We had a problem creating a new chat, please save the property and try later</span>}
      </div>
      {isLoadingOneChat && <div> Loading Message...</div>}
      {userReceiver && (
        <div className={styles.chatBox}>
          <div className={styles.top}>
            <div className={styles.user}>
              <img src={userReceiver.avatar || noAvatar} alt="receiver avatar" />
              {userReceiver.username}
            </div>
            {/* <span className={styles.close} onClick={() => closeChat(newChatCreated.id, user.id)}>
              X
            </span> */}
          </div>
          <div ref={ChatContainerRef} className={styles.center}>
            {newChatCreated && <>
              {newChatCreated.messages?.map((message) => (
                <div
                  className={`${styles.chatMessage} ${message.userId === user.id ? styles.own : ""}`}
                  key={message.id}
                >
                  <img src={message.userId !== user.id ? newChatCreated.receiver?.avatar : user.avatar}
                    alt="receiver avatar" />
                  <div className={styles.text}>
                    <p>{message.text}</p>
                    <span>{format(message.createdAt)}</span>
                  </div>
                </div>
              ))} </>}
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

export default ChatNew