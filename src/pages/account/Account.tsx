import useToggleState from "../../hooks/useToggleState";
import { useSession } from "next-auth/react";

import styles from "./Account.module.scss";
import Profile from "./profile";
import Register from "./register";
import Login from "./login";

export default function Account() {
  const { data: session } = useSession();
  const [loginRegister, loginRegisterToggle] = useToggleState(true);

  return (
    <main className={styles.container}>
      {session ? (
        <Profile />
      ) : (
        <section className={styles.formSection}>
          {loginRegister === true ? (
            <Login toggleRegister={loginRegisterToggle} />
          ) : (
            <Register toggleRegister={loginRegisterToggle} />
          )}
        </section>
      )}
    </main>
  );
}
