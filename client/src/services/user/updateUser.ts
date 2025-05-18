import { UpdateUserDTO} from "types/types";


const API = process.env.REACT_APP_API_URL || "";


export async function updateUser(user:UpdateUserDTO, id: string) {
    const res = await fetch(`${API}/user/${id}`,{
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
        credentials: "include"
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Delete user failed");
      }
      return res.json();
}