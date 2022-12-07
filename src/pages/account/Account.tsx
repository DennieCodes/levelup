import Register from "./register";
import styles from "./Account.module.scss";

export default function Account() {
  return (
    <main className={styles.container}>
      <section className={styles.formSection}>
        <Register />
      </section>
    </main>
  );
}
