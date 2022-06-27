import Link from "next/link";
import styles from "@/styles/Header.module.css";
import { Search } from "..";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Music Events</a>
        </Link>
      </div>
      <Search />
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/events/add">Add Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
