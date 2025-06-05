import { useState } from 'react';
import { loginUser } from 'services/auth/login';
import { sendNewMessage } from 'services/chat/sendNewMessage';


import { Message, UserFromServerType } from 'types/types';

type UseSendNewMessageType = {
  sendMessage: (text: string, chatId: string) => Promise<Message | null>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
};

export const useSendNewMessage = (): UseSendNewMessageType => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);



  const sendMessage = async (text: string, chatId: string): Promise<Message |null> => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await sendNewMessage(text, chatId);
      setSuccess(true);
      return response;
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      console.error('Error during login:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage, isLoading, error, success };
};