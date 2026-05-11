import heroImage from "../assets/hero-dining-room.jpg";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1>An Ambient Dining Experience</h1>
          <p>
            Join us at the table as you dine for the perfect meal. we treat all of
            our customers with the utmost care and service
          </p>
          <p>Have a toast and enjoy our fine drinks while youre at it</p>
          <div className={styles.actions}>
            <a className={styles.goldButton} href="#about-us">
              About us
            </a>
            <a className={styles.wineButton} href="#menu">
              Menu
            </a>
          </div>
        </div>
        <div className={styles.imageWrap}>
          <img src={heroImage} alt="Dining room with tall windows and colorful chairs" />
        </div>
      </div>
    </section>
  );
}
