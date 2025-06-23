import { userStore } from "global/auth/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "services/auth/register";
import { updateUser } from "services/user/updateUser";
import { UpdateUserDTO } from "types/types";

type UseUpdateUserDTOUserResult = {
  update: (user: UpdateUserDTO, id: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
};

export const useUpdateUser = (): UseUpdateUserDTOUserResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const setUser = userStore((state) => state.setUser);

  const update = async (user: UpdateUserDTO, id: string) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await updateUser(user, id);
      if (response) {
        setSuccess(true);
        setUser(response);
        console.log("User updated successfully:", response);
 navigate("/profile");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
      console.error("Error during updating:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    // navigate("/profile");
  }

  return { update, isLoading, error, success };
};
