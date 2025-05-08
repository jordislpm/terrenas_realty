import styles from "./ProfileUpdatePage.module.scss"
import noAvatar from "../../assets/icons/noAvatar.png"
import useUser from "hooks/globalState/userLoggedState";
import { useLogoutUser } from "hooks/auth/useLogoutUser";
import { useNavigate } from "react-router-dom";

function ProfileUpdatePage() {


    const {user, setUser}=useUser();

    const {logout}= useLogoutUser()
   
    const navigate =  useNavigate()
   
    const avatarImg = user?.avatar !== null ? user?.avatar : noAvatar;
    return (
      <div className={styles.profileUpdatePage}>
        <div className={styles.formContainer}>
          <form>
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
          </form>
        </div>
        <div className={styles.sideContainer}>
          <img
            src={avatarImg}
            alt="User avatar"
            className={styles.avatar}
          />
        </div>
      </div>
    );
  }
  
  export default ProfileUpdatePage;