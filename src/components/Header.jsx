import logo from "../assets/logo.jpg";
import styles from "./Header.module.css";

const navItems = ["Menu", "About us", "Contact"];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.logoLink} href="#home" aria-label="Thai Phuket Restaurant home">
          <img className={styles.logo} src={logo} alt="Thai Phuket Restaurant" />
        </a>
        <nav className={styles.nav} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>
              {item}
            </a>
          ))}
          <a className={styles.bookButton} href="#contact">
            Book a Table
          </a>
        </nav>
      </div>
    </header>
  );
}
