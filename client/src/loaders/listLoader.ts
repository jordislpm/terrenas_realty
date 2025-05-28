import { LoaderFunctionArgs } from "react-router-dom";


export async function listLoader({ request }: LoaderFunctionArgs) {
  const query = request.url.split("?")[1];
  const API = process.env.REACT_APP_API_URL || "";

  const posts = new Promise(async (resolve, reject) => {
    try {
     // await new Promise((r) => setTimeout(r, 2000)); // optional delay
      const res = await fetch(`${API}/post?${query}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!res.ok) {
        reject(new Response("Failed to load posts", { status: res.status }));
        return;
      }

      const data = await res.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

  return { 
    posts 
}; // ✅ MUST RETURN AN OBJECT
}