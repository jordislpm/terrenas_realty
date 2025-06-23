// import { userStore } from "global/auth/user";

const API = process.env.REACT_APP_API_URL || "";

// const user = userStore((state) => state.user);
const token = localStorage.getItem("token");

export async function getOneUser(userId: string) {
  const res = await fetch(`${API}/users/search/${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" , Authorization: `Bearer ${token}` },
    credentials: "include",
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "getting notifications failed");
  }
  return res.json();
}