import { socketStore } from '../../global/socket/index';


const useSocketGlobal = () => {
    const socket = socketStore((state) => state.socket)
    const connect = socketStore((state) => state.connect)
    const disconnect = socketStore((state) => state.disconnect)
    return {
        socket,
        connect,
        disconnect
    }
}


export default useSocketGlobal;