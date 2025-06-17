import { create } from 'zustand';
import { ChatsStoreProps,} from 'types/types';


export const chatsStore = create<ChatsStoreProps>((set) => ({
    chatsGlobal: [],
    updateChatsGlobal: (newChats) => {

        if (newChats) {
            set({ chatsGlobal: newChats })
        }
    },
}))