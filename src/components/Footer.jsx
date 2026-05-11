import logo from "../assets/logo.jpg";
import styles from "./Footer.module.css";

const links = ["Menu", "About us", "Gallery", "Contact"];

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <img className={styles.logo} src={logo} alt="Thai Phuket Restaurant" />
        <address className={styles.contact}>
          <h2>Come say Hello</h2>
          <a href="tel:+41127443200">! +41 12 744 3200</a>
          <p>! Avenue de France 33, Geneva 1202 Switzerland</p>
        </address>
        <div className={styles.meta}>
          <nav aria-label="Footer navigation">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                {link}
              </a>
            ))}
          </nav>
          <p>Copyright © 2023. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
