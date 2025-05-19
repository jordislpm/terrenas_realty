const API = process.env.REACT_APP_API_URL || "";


export async function logoutUser() {
    const res = await fetch(`${API}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }
    
      return res.json();
}