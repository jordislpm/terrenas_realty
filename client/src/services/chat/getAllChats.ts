

const API = process.env.REACT_APP_API_URL || "";

 export async function getAllChats() {
    const res = await fetch(`${API}/chats/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "get all chats failed");
      }
      return res.json();
}