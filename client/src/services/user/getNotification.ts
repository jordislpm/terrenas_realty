// import { userStore } from "global/auth/user";

const API = process.env.REACT_APP_API_URL || "";

  // const user = userStore((state) => state.user);

export async function getNotification() {
    
    const res = await fetch(`${API}/users/notification`,{
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
    });
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "getting notifications failed");
      }
      return res.json();
}