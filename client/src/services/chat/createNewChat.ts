import { CreatePostDTO } from "types/types";

const API = process.env.REACT_APP_API_URL || "";

const token = localStorage.getItem("token");

export async function createNewChat(receiverId: string) {
  const res = await fetch(`${API}/chats`, {
    method: "POST",
    headers: { "Content-Type": "application/json",  Authorization: `Bearer ${token}`,},
    credentials: "include",
    body: JSON.stringify({ receiverId: receiverId }),
    
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "create new chat failed");
  }
  return res.json();
}
