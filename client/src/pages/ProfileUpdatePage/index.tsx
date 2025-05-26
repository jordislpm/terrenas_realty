import styles from "./ProfileUpdatePage.module.scss"
import useUser from "hooks/globalState/userLoggedState";
import { useLogoutUser } from "hooks/auth/useLogoutUser";
import { useNavigate } from "react-router-dom";
import { useUpdateUser } from "hooks/user/useUpdateUser";
import { UpdateUserDTO } from "types/types";
import { FormEvent, useState } from "react";
import UploadWidget from "components/share/UploadWidget";
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';
import { uwConfig } from "constants/uploadWidget";

function ProfileUpdatePage() {

  // hooks
  const { user, setUser } = useUser();
  const { update, error, isLoading } = useUpdateUser()
  const { logout } = useLogoutUser()
  const navigate = useNavigate()

  // states 
  const [avatar, setAvatar] = useState<string[]>([]);
   const [publicId, setPublicId] = useState('');

  
  // consts and variables
  const userID = user ? user.id : ""



// functions
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const rawData = Object.fromEntries(formData);
    const user: UpdateUserDTO = Object.fromEntries(
      Object.entries(rawData).filter(([_, value]) => value !== "")
    ) as UpdateUserDTO;
    await update({...user, avatar: avatar[0]}, userID ? userID : "");
  };

  return (
    <div className={styles.profileUpdatePage}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className={styles.item}>
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" />
          </div>
          <div className={styles.item}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
          </div>
          <div className={styles.item}>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button type="submit" className={styles.updateButton}>Update</button>
          {error && <span>{error}</span>}
          {isLoading && <span className={styles.loading}>verifying user...</span>}
        </form>
      </div>
      <div className={styles.sideContainer}>
        <img
          src={avatar[0] ? avatar[0]: user?.avatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <UploadWidget
          uwConfig={uwConfig} setPublicId={setPublicId}
          setState={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;