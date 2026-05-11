import styles from "./Testimonial.module.css";

export default function Testimonial() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.stars} aria-label="Five star rating">
          ★★★★★
        </div>
        <h2>My favorite Thai place in Geneva!</h2>
        <blockquote>
          I love this restaurant because it's calm and authentic. The service is
          excellent and I've always enjoyed the variety of dishes they offer.
        </blockquote>
        <p>Mateusz Madura Geneva,</p>
        <p>Switzerland</p>
      </div>
    </section>
  );
}
