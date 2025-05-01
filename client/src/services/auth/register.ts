import { RegisterUserDTO, UserDataType } from "types/types";


const API = process.env.REACT_APP_API_URL || "";


export async function registerUser(user:RegisterUserDTO) {
    const res = await fetch(`${API}/auth/register`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Login failed");
      }
    
      return res.json();
}