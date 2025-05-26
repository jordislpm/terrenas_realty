import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from 'services/auth/register';
import { createPost } from 'services/post/createPost';
import { CreatePostDTO, PostDataType, RegisterUserDTO} from 'types/types';


type UseCreatePostResult = {
  newPost: (user: CreatePostDTO, userId: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
};

export const useCreatePost = (): UseCreatePostResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [postSaved, setPostSaved]= useState<PostDataType>()


  const navigate =  useNavigate()

  const newPost = async (post: CreatePostDTO, userId: string) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    let response

    try {
      response = await createPost(post, userId);
      setSuccess(true);
      console.log('Post Created successfully:', response);
      setPostSaved(response)
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      console.error('Error during creation of new post:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (success && postSaved){
    navigate(`/post/${postSaved.id}`)
   }

  return { newPost, isLoading, error, success };
};