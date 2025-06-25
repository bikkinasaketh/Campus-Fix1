import React from "react";
import styles from "./gallery.module.css";

const galleryImages = [
  {
    src: "fan1.jpg",
    alt: "Technician working on a desktop PC",
  },
  {
    src: "board1.jpg",
    alt: "Technician opening a laptop for repair",
  },
  {
    src: "ac.jpg",
    alt: "Technician repairing a motherboard",
  },
  {
    src: "laptop.avif",
    alt: "Technician fixing a smartphone",
  },
  {
    src: "repairs12.avif",
    alt: "Technician testing laptop performance",
  },
  {
    src: "bords12.avif",
    alt: "Technician handling motherboard with gloves",
  },
  {
    src: "repairs567.avif",
    alt: "Technician handling motherboard with gloves",
  },
  {
    src: "repairs890.avif",
    alt: "Technician handling motherboard with gloves",
  },
];

const Gallery = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Our <span>Gallery</span>
      </h2>
      <div className={styles.grid}>
        {galleryImages.map((image, index) => (
          <div key={index} className={styles.imageCard}>
            <img src={image.src} alt={image.alt} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
