import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewChat } from "../../services/chat/createNewChat";
import { Chat, UserType } from "../../types/types";
import { getOneUser } from "../../services/user/getOneUser";
import { userStore } from "../../global/auth/user";

type UseCreateNewChat = {
  createChat: (receiverId: string) => Promise<Chat | null>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
  newChatCreated: Chat | null;
  setNewChatCreated: Dispatch<SetStateAction<Chat | null>>;
  getUserReceiver: (receiverId: string) => Promise<UserType | null>;
  userReceiver: UserType | null;

};

export const useCreateNewChat = (): UseCreateNewChat => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [newChatCreated, setNewChatCreated] = useState<Chat | null>(null);
  const [userReceiver, setUserReceiver] = useState<UserType | null>(null);

  const user = userStore((state) => state.user);

  const getUserReceiver = async (
    receiverId: string
  ): Promise<UserType | null> => {
    try {
      const response = await getOneUser(receiverId);
setUserReceiver(response);
      return response;
    } catch (err: any) {
      setError(err.message || "An error occurred");
      console.error("Error getting userReceiver:", err);
      return null;
    }
  };

  const createChat = async (receiverId: string): Promise<Chat | null> => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await createNewChat(receiverId);
      setNewChatCreated({
        ...response,
        receiver: userReceiver,
        seenBy: [user?.id],
      });
      setSuccess(true);
      return response;
    } catch (err: any) {
      setError(err.message || "An error occurred");
      console.error("Error during creating chat:", err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
  }

  return {
    createChat,
    isLoading,
    error,
    success,
    newChatCreated,
    setNewChatCreated,
    getUserReceiver,
    userReceiver
  };
};
