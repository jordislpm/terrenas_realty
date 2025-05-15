
import { userStore } from "global/auth/user";

const useUser = ()=>{
const user = userStore((state)=> state.user)
const setUser = userStore((state)=> state.setUser)
    return{
        user,
        setUser,
    }
}


export default useUser;