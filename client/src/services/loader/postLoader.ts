import { LoaderFunctionArgs } from "react-router-dom";

export async function postLoader({ params }: LoaderFunctionArgs) {

    const postID = params.id;


    const API = process.env.REACT_APP_API_URL || "";

    const res = await fetch(`${API}/post/${postID}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });

    if (!res.ok) {
        throw new Response("Failed to load post", { status: res.status });
    }

    return res.json();
}