
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from 'services/auth/logout';
import { userStore } from 'global/auth/user';


type UseLogoutUserResult = {
  logout: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
  success: boolean;

};

export const useLogoutUser = (): UseLogoutUserResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

   const setUser = userStore((state) => state.setUser);

  const navigate =  useNavigate()

  const logout = async () => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await logoutUser();
      setSuccess(true);
      console.log('User Logout successfully:', response);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      console.error('Error during logout:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (success){
    localStorage.removeItem("user-terrenas-realty")
    setUser(null)
    navigate("/login")
   }

  return { logout, isLoading, error, success };
};