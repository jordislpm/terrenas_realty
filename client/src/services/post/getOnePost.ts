import { CreatePostDTO } from "types/types";


const API = process.env.REACT_APP_API_URL || "";


export async function getOnePost(post:CreatePostDTO, userID: string) {
    const res = await fetch(`${API}/post/${userID}`,{
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "create post failed");
      }
      return res.json();
}