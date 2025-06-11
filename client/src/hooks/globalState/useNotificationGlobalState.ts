import { mapStore } from "global/map";
import { notificationStore } from "global/notification";

const useNotificationGlobalState = ()=>{
const number = notificationStore((state)=> state.number);
const fetchNotification = notificationStore((state)=> state.fetchNotification);
const decrease = notificationStore((state)=> state.decrease);
const reset = notificationStore((state)=> state.reset);



    return{
number,
fetchNotification,
decrease,
reset
    }
}


export default useNotificationGlobalState;