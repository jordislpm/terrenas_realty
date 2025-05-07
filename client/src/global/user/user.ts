import { UserFromServerType, UserStateProps } from 'types/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const userStore = create<UserStateProps>()(
    persist(
        (set) => ({
            user:null,
            setUser: (newUser: UserFromServerType | null) =>
                set(() => ({
                    user: newUser ? { ...newUser } : null,
                })),
        }),
        {
            name: 'user-terrenas-realty',
        }
    )
);