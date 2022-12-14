import styles from "./MainNavigation.module.scss";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function MainNavigation() {
  const { data: session } = useSession();

  return (
    <nav className={styles.mainNav}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/goals">Goals</Link>
      </li>
      <li>
        <Link href="/habits">Habits</Link>
      </li>
      <li>
        <Link href="/account">Account</Link>
      </li>
      {session && session.user !== undefined ? (
        <p>Welcome, {session.user.name}</p>
      ) : (
        ""
      )}
    </nav>
  );
}
