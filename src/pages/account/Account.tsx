import { useState } from "react";
import Register from "./register";
import styles from "./Account.module.scss";
import Login from "./login";

export default function Account() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <main className={styles.container}>
      <section className={styles.formSection}>
        {isLogin === false ? <Register /> : <Login />}
      </section>
    </main>
  );
}
