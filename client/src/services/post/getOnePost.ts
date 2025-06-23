import { CreatePostDTO } from "types/types";


const API = process.env.REACT_APP_API_URL || "";

const token = localStorage.getItem("token");

export async function getOnePost(userID: string) {
    const res = await fetch(`${API}/posts/${userID}`,{
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`, },
        credentials: "include"
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "create post failed");
      }
      return res.json();
}