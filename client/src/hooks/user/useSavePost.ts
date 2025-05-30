import { userStore } from 'global/auth/user';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { savePost } from 'services/user/savePost';



type UseUpdateUserDTOUserResult = {
  save: (postId: string) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
};

export const useSavePost = (): UseUpdateUserDTOUserResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [finalresponse, setFinalResponse] = useState({})

  const navigate = useNavigate();
  const user = userStore((state) => state.user);

  const save = async (postId: string) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    if (!user) {
      navigate("/login")
      return false;
    }
    try {
      const response = await savePost(user.id, postId);
      setSuccess(true);
      setFinalResponse(response)


      if (response.message === "Post saved") {
         return true
      } else {
         return false
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      console.error('Error during updating:', err);
      return false
    } finally {
      setIsLoading(false);
    }
  };

  //   if (success){
  //     navigate("/profile")
  //    }

  return { save, isLoading, error, success };
};