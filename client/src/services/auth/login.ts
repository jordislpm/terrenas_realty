import { LoginUserDTO} from "types/types";


const API = process.env.REACT_APP_API_URL || "";


export async function loginUser(userToLoging:LoginUserDTO) {
    const res = await fetch(`${API}/auth/login`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
        body: JSON.stringify(userToLoging) 
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }
    
      return res.json();
}