import styles from "./ProfileUpdatePage.module.scss"
import noAvatar from "../../assets/icons/noAvatar.png"
import useUser from "hooks/globalState/userLoggedState";
import { useLogoutUser } from "hooks/auth/useLogoutUser";
import { useNavigate } from "react-router-dom";
import { useUpdateUser } from "hooks/user/useUpdateUser";
import { UpdateUserDTO } from "types/types";
import { FormEvent } from "react";

function ProfileUpdatePage() {


  const { user, setUser } = useUser();

  const userID = user ? user.id : ""


  const { update, error, isLoading } = useUpdateUser()

  const { logout } = useLogoutUser()

  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const formData = new FormData(e.currentTarget);
    const rawData = Object.fromEntries(formData);

 const user: UpdateUserDTO = Object.fromEntries(
    Object.entries(rawData).filter(([_, value]) => value !== "")
  ) as UpdateUserDTO;

  await update(user, userID);
 

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
          src={user?.avatar}
          alt="User avatar"
          className={styles.avatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;