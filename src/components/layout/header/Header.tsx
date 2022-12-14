import Branding from "./branding";
import styles from "./Header.module.scss";
import MainNavigation from "./mainNavigation";
import User from "./user";

export default function Header() {
  return (
    <header className={styles.header}>
      <Branding />
      <MainNavigation />
      <User />
    </header>
  );
}
