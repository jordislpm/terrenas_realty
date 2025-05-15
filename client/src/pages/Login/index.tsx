import styles from "./Login.module.scss";
import { Link, Navigate } from "react-router-dom";
import HomeImageSection from "components/share/HomeImageSection";
import { useLoginUser } from "hooks/auth/useLoginUser";
import { FormEvent, useEffect } from "react";
import { LoginUserDTO } from "types/types";

import useUser from "hooks/globalState/userLoggedState";

function Login() {

     const { login, isLoading, error, success, userLogged } = useLoginUser();
     const {user, setUser}=useUser();


     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         const formData = new FormData(e.currentTarget);
         const username = formData.get("username") as string;
         const password = formData.get("password") as string;
     
         const user: LoginUserDTO = { username, password};
     
         await login(user) 
         
         if (success){
            setUser(userLogged);
         }
       };

  return  user ? (<Navigate to="/" />) : (
    <HomeImageSection>
    <div className={styles.login}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username" />
          <input name="password" required type="password" placeholder="Password" />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          {isLoading && <span className={styles.loading}>verifying user...</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
    </div>
    </HomeImageSection>
  );
}

export default Login;