import { UserFromServerType, UserStateProps } from 'types/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import noAvatar from "../../assets/icons/noAvatar.png"

export const userStore = create<UserStateProps>()(
    persist(
        (set) => ({
            user: null,
            setUser: (newUser: UserFromServerType | null) => {
                if (newUser?.avatar === "" || newUser?.avatar === null){
                    set(() => ({
                        user: newUser ? { ...newUser, avatar: noAvatar} : null,
                    }));
                    return;
                } else {
                    set(() => ({
                        user: newUser ? { ...newUser } : null,
                    }));
                    return;
                }
             
       }
        }),
        {
            name: 'user-terrenas-realty',
        }
    )
);