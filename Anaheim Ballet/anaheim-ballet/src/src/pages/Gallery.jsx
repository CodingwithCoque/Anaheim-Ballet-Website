import { useState } from "react";
import "../styles/gallery.css";
import galleryHero from "../assets/images/gallery-hero.jpg";

/* 🔥 Auto-import ALL images */
const galleryImages = import.meta.glob(
  "../assets/images/gallery/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const images = Object.entries(galleryImages).map(([path, img]) => {
  let category = "Other";

  if (path.includes("performance")) category = "Performance";
  else if (path.includes("school")) category = "School";
  else if (path.includes("outreach")) category = "Outreach";
  else if (path.includes("events")) category = "Events";


  return { src: img.default, category };
});

const categories = ["All", "Performance", "School", "Outreach", "Events"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="gallery-page">

      {/* HERO */}
      <section className="gallery-hero">
        <img src={galleryHero} alt="Anaheim Ballet Gallery" />
        <div className="gallery-hero-text">
          <h1>Gallery</h1>
          <p>Moments from the stage, studio, and community</p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="gallery-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* GRID */}
      <section className="gallery-grid">
        {filteredImages.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img.src} alt={img.category} />
            <div className="gallery-overlay">
              <span>{img.category}</span>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
