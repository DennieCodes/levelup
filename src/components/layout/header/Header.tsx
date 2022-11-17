import Branding from "./branding";
import styles from "./Header.module.scss";
import MainNavigation from "./mainNavigation";

export default function Header() {
  return (
    <header className={styles.header}>
      <Branding />
      <MainNavigation />
    </header>
  );
}
