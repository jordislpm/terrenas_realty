import { SocketStoreProps } from 'types/types';
import { create } from 'zustand';
import { io } from 'socket.io-client';


const socketPort = process.env.REACT_APP_VITE_SOCKET_URL;

export const socketStore = create<SocketStoreProps>((set) => ({
  socket: null,

  connect: () => {
    const socket = io(socketPort, {
      withCredentials: true,
    })

    socket.on("connect", () => {
      //console.log("🟢 Connected to socket:", socket.id)
    })

    socket.on("disconnect", () => {
     // console.log("🔴 Disconnected from socket")
    })

    set({ socket })
  },

  disconnect: () => {
    set((state) => {
      state.socket?.disconnect()
      return { socket: null }
    })
  },
}))