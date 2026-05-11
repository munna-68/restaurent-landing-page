import cuisineImage from "../assets/thai-cuisine-plate.jpg";
import styles from "./CuisineSection.module.css";

export default function CuisineSection() {
  return (
    <section className={styles.section} id="menu">
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <img src={cuisineImage} alt="Thai noodles with lime on a black plate" />
        </div>
        <div className={styles.copy}>
          <h2>The Finest Thai Cuisine</h2>
          <p>
            At Thai Phuket we thrive at creating The best Thai dish. With over 50
            dishes to choose from, explore what our menu has to offer
          </p>
          <a href="#menu">Menu</a>
        </div>
      </div>
    </section>
  );
}
