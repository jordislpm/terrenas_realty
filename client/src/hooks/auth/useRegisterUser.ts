import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from 'services/auth/register';
import { RegisterUserDTO} from 'types/types';
import noAvatar from "../../assets/icons/noAvatar.png"

type UseRegisterUserResult = {
  register: (user: RegisterUserDTO) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
};

export const useRegisterUser = (): UseRegisterUserResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const navigate =  useNavigate()

  const register = async (user: RegisterUserDTO) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await registerUser(user);
      setSuccess(true);
      console.log('User registered successfully:', response);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      console.error('Error during registration:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (success){
    navigate("/login")
   }

  return { register, isLoading, error, success };
};