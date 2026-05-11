import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CuisineSection from "./components/CuisineSection";
import FeaturedDishes from "./components/FeaturedDishes";
import DishGallery from "./components/DishGallery";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <HeroSection />
        <CuisineSection />
        <FeaturedDishes />
        <DishGallery />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
