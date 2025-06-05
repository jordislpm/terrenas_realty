// useGetOneChat.ts
import { Dispatch, SetStateAction, useState } from 'react';
import { getOneChat } from 'services/chat/getOneChat';
import { Chat, UserType } from 'types/types';

type UseGetOneChat = {
  getChatWithReceiver: (id: string, receiver: UserType) => Promise<void>;
  chat: Chat | null;
  isLoading: boolean;
  error: string | null;
  setChat : Dispatch<SetStateAction<Chat | null>>;
};

export const useGetOneChat = (): UseGetOneChat => {
  const [chat, setChat] = useState<Chat | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getChatWithReceiver = async (id: string, receiver: UserType) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getOneChat(id);
      setChat({ ...response, receiver }); // full chat ready for UI
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      console.error('Error getting chat:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return { getChatWithReceiver, chat, isLoading, error, setChat };
};