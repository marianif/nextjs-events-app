import Link from "next/link";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Music Events</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
