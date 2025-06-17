// useGetOneChat.ts
import { Dispatch, SetStateAction, useState } from 'react';
import { getAllChats } from 'services/chat/getAllChats';
import { getOneChat } from 'services/chat/getOneChat';
import { Chat, UserType } from 'types/types';
import { chatsStore } from '../../global/messages';

type UseGetAllChats = {
    getChats: () => Promise<void>;
    allChats: Chat[] | null;
    isLoadingAllChats: boolean;
    errorAllChats: string | null;
    setAllChats: Dispatch<SetStateAction<Chat[] | null>>;
};



export const useGetAllChats = (): UseGetAllChats => {
    const [allChats, setAllChats] = useState<Chat[] | null>(null);
    const [isLoadingAllChats, setIsLoadingAllChats] = useState(false);
    const [errorAllChats, setErrorAllChats] = useState<string | null>(null);

    const updateChatsGlobal = chatsStore((state) => state.updateChatsGlobal);
    const chatsGlobal = chatsStore((state) => state.chatsGlobal);
    
    const getChats = async () => {
        setIsLoadingAllChats(true);
        setErrorAllChats(null);
        try {
            const response = await getAllChats();
            let newChats = [...response].reverse()
            setAllChats(newChats); // full chat ready for UI
            updateChatsGlobal(newChats);
        } catch (err: any) {
            setErrorAllChats(err.message || 'An error occurred');
            console.error('Error getting all chats:', err);
        } finally {
            setIsLoadingAllChats(false);
        }
    };

    return { getChats, allChats, isLoadingAllChats, errorAllChats, setAllChats };
};