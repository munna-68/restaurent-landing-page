import nasiGoreng from "../assets/nasi-goreng.jpg";
import styles from "./FeaturedDishes.module.css";

export default function FeaturedDishes() {
  return (
    <section className={styles.section} id="about-us">
      <div className={styles.inner}>
        <div className={styles.story}>
          <h2>Tradition &amp; Family Recipes</h2>
          <p>
            Praesent suscipit in erat et pretium. Nulla quis orci feugiat,
            fermentum ex sed, placerat mi. Integer luctus ultrices nulla a
            ullamcorper.
          </p>
          <a href="#menu">View Menu</a>
        </div>
        <article className={styles.feature}>
          <img src={nasiGoreng} alt="Nasi goreng topped with a fried egg" />
          <h3>Nasi Goreng</h3>
          <p>
            My Nasi Goreng (or Indonesian Fried Rice) is a spicy rice dish
            that's way more flavourful than regular fried rice. Topped with a
            fried egg (with crispy edges!) it's street food heaven.
          </p>
        </article>
      </div>
    </section>
  );
}
