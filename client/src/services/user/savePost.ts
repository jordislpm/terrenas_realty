

const API = process.env.REACT_APP_API_URL || "";


export async function savePost(userID: string, postId: string): Promise<{message: string}> {
    const res = await fetch(`${API}/user/save/${userID}`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({postId:postId}),
        credentials: "include"
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Save post failed");
      }
      return res.json();
}