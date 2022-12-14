// import { useState } from 'react';
import useToggleState from "../../hooks/useToggleState";
import Register from "./register";
import styles from "./Account.module.scss";
import Login from "./login";

export default function Account() {
  const [loginRegister, loginRegisterToggle] = useToggleState(true);

  return (
    <main className={styles.container}>
      <section className={styles.formSection}>
        {loginRegister === true ? (
          <Login toggleRegister={loginRegisterToggle} />
        ) : (
          <Register toggleRegister={loginRegisterToggle} />
        )}
      </section>
    </main>
  );
}
