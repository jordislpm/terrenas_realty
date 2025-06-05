import { CreatePostDTO } from "types/types";


const API = process.env.REACT_APP_API_URL || "";


export async function getOneChat( chatID: string ) {
    const res = await fetch(`${API}/chats/${chatID}`,{
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "get chat failed");
      }
      return res.json();
}