import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import bg from "../../assets/images/bg-lt.png";

function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.formContainer}>
        <form>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button>Login</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className={styles.imgContainer}>
        <img src={bg} alt="backgroundImage" />
      </div>
    </div>
  );
}

export default Login;