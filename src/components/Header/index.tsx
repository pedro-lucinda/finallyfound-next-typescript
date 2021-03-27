import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import styles from "./styles.module.scss";
import { SigninButton } from "../SigninButton/Index";
import { ActiveLink } from "../ActiveLink";

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Finally Found" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink href="/posts" prefetch activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SigninButton />
      </div>
    </header>
  );
}
