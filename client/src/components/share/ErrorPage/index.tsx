import HomeImageSection from "../HomeImageSection";
import styles from "./error.module.scss"


export default function ErrorPage() {
  return (
    <HomeImageSection>
    <div className={styles.container}>
      <h1>😢 Oops!</h1>
      <p>We couldn’t find the result you're looking for.</p>
      <a href="/">← Go back home</a>
    </div>
    </HomeImageSection>
  );
}