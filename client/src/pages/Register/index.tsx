import styles from "./Register.module.scss";
import { Link } from "react-router-dom";
import bg from "../../assets/images/bg-lt.png";
import HomeImageSection from "components/share/HomeImageSection";

function Register() {
  return (
    <HomeImageSection>
    <div className={styles.register}>
      <div className={styles.formContainer}>
        <form>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit" className={styles.registerButton}>
            Register
          </button>
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
    </div>
    </HomeImageSection>
  );
}

export default Register;