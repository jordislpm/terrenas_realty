import styles from "./Register.module.scss";
import { Link} from "react-router-dom";
import HomeImageSection from "components/share/HomeImageSection";
import { FormEvent} from "react";
import { RegisterUserDTO } from "types/types";
import { useRegisterUser } from "hooks/auth/useRegisterUser";

function Register() {

    const { register, isLoading, error, success } = useRegisterUser();


const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const user: RegisterUserDTO = { username, email, password};

    await register(user)

 

  };

  return (
    <HomeImageSection>
    <div className={styles.register}>
      <div className={styles.formContainer}>
        <form  onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit" className={styles.registerButton}>
            Register
          </button>
          {error && <span>{error}</span>}
          {isLoading && <span className={styles.loading}>Creating a new user...</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
    </div>
    </HomeImageSection>
  );
}

export default Register;