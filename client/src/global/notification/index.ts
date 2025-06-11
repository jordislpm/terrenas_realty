import { create } from 'zustand';
import { NotificationStoreProps } from 'types/types';
import { getNotification } from 'services/user/getNotification';


export const notificationStore = create<NotificationStoreProps>((set) => ({
    number: 0,
    fetchNotification: async () => {
        const res = await getNotification();

        if (res) {
            set({ number: res })
        }
    },
    decrease: () => {
        set((prev) => ({ number: prev.number - 1 }))
    },
    reset: () => {
        set({ number: 0 })
    }
}))