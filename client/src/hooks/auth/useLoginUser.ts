import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'services/auth/login';
import { userStore } from 'global/auth/user';

import { LoginUserDTO, UserFromServerType } from 'types/types';

type UseLoginUserResult = {
  login: (user: LoginUserDTO) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
  userLogged: UserFromServerType;
};

export const useLoginUser = (): UseLoginUserResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [userLogged, setUserLogged] = useState<UserFromServerType>({
    id: "",
    username: "",
    email: "",
    avatar: "",
    createdAt: new Date(),
  });

  const setUser = userStore((state) => state.setUser);
  const navigate = useNavigate();

  const login = async (user: LoginUserDTO) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await loginUser(user);
      setSuccess(true);
      setUserLogged(response);
      setUser(response);
      navigate("/");
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      console.error('Error during login:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error, success, userLogged };
};