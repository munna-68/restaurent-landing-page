import khaoPad from "../assets/khao-pad.jpg";
import padThai from "../assets/pad-thai.jpg";
import tomYumGoong from "../assets/tom-yum-goong.jpg";
import styles from "./DishGallery.module.css";

const dishes = [
  { name: "Khao Pad", image: khaoPad, alt: "Khao pad fried rice with lime" },
  { name: "Pad Thai", image: padThai, alt: "Pad Thai noodles with shrimp" },
  { name: "Tom Yum Goong", image: tomYumGoong, alt: "Tom yum goong soup with shrimp" },
];

export default function DishGallery() {
  return (
    <section className={styles.section} aria-label="Dish gallery">
      <div className={styles.grid}>
        {dishes.map((dish) => (
          <article className={styles.card} key={dish.name}>
            <img src={dish.image} alt={dish.alt} />
            <h2>{dish.name}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}
