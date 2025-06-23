

const API = process.env.REACT_APP_API_URL || "";
const token = localStorage.getItem("token");

export async function savePost(userID: string, postId: string): Promise<{message: string}> {
    const res = await fetch(`${API}/users/save/${userID}`,{
        method: "POST",
        headers: { "Content-Type": "application/json" , Authorization: `Bearer ${token}` },
        body: JSON.stringify({postId:postId}),
        credentials: "include"
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Save post failed");
      }
      return res.json();
}