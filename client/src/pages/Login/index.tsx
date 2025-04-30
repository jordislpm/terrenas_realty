import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import bg from "../../assets/images/bg-lt.png";
import HomeImageSection from "components/share/HomeImageSection";

function Login() {
  return (
    <HomeImageSection>
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
    </div>
    </HomeImageSection>
  );
}

export default Login;