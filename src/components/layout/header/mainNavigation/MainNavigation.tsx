import styles from "./MainNavigation.module.scss";
import Link from "next/link";

export default function MainNavigation() {
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
    </nav>
  );
}
