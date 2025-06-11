// useGetOneChat.ts
import { userStore } from 'global/auth/user';
import { notificationStore } from 'global/notification';
import { Dispatch, SetStateAction, useState } from 'react';
import { getOneChat } from 'services/chat/getOneChat';
import { Chat, UserType } from 'types/types';

type UseGetOneChat = {
  getChatWithReceiver: (id: string, receiver: UserType) => Promise<void>;
  chat: Chat | null;
  isLoadingOneChat: boolean;
  errorOneChat: string | null;
  setChat: Dispatch<SetStateAction<Chat | null>>;
};

export const useGetOneChat = (): UseGetOneChat => {
  const [chat, setChat] = useState<Chat | null>(null);
  const [isLoadingOneChat, setIsLoadingOneChat] = useState(false);
  const [errorOneChat, setErrorOneChat] = useState<string | null>(null);

  const user = userStore((state)=> state.user);
  const decrease = notificationStore((state)=> state.decrease);

  const getChatWithReceiver = async (id: string, receiver: UserType) => {
    setIsLoadingOneChat(true);
    setErrorOneChat(null);
    try {
      const response = await getOneChat(id);
      setChat({ ...response, receiver });

      if (!response.seenBy.includes(user?.id)){
        decrease()
      }
    } catch (err: any) {
      setErrorOneChat(err.message || 'An error occurred');
      console.error('Error getting chat:', err);
    } finally {
      setIsLoadingOneChat(false);
    }
  };

  return { getChatWithReceiver, chat, isLoadingOneChat, errorOneChat, setChat };
};