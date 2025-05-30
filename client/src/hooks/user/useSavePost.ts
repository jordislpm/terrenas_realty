import { userStore } from 'global/auth/user';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { savePost } from 'services/user/savePost';



type UseUpdateUserDTOUserResult = {
  save: (postId: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
};

export const useSavePost = (): UseUpdateUserDTOUserResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const navigate =  useNavigate();

  
  const setUser = userStore((state) => state.setUser);
  const user = userStore((state) => state.user);

  const save= async (postId: string) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    if (!user){
         navigate("/login")
         return;
    }
    try {
      const response = await savePost(user.id, postId);
        setSuccess(true);
       setUser(response);
      console.log('save post successfully:', response);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      console.error('Error during updating:', err);
    } finally {
      setIsLoading(false);
    }
  };

//   if (success){
//     navigate("/profile")
//    }

  return { save, isLoading, error, success };
};