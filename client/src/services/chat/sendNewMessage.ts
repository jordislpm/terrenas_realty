const API = process.env.REACT_APP_API_URL || "";

const token = localStorage.getItem("token");

export async function sendNewMessage(text: string, chatId: string) {
    const res = await fetch(`${API}/messages/${chatId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json",  Authorization: `Bearer ${token}`,},
        credentials: 'include',
        body: JSON.stringify({text})
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
    }
    return res.json();
}