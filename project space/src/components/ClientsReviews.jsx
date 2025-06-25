import React from 'react';
import styles from './ClientsReviews.module.css';

const reviews = [
  {
    name: "Rahul Sharma",
    rating: 5,
    text: "Campus Fix provided an outstanding service! My laptop was repaired quickly, and now it works like new. Highly recommend their expertise!",
    image: "istockphoto-1587315781-612x612.jpg",
  },
  {
    name: "Meera Patel",
    rating: 4,
    text: "Professional, reliable, and fast! The electrical issue in my home was fixed in no time. Campus Fix is my go-to for any repairs!",
    image: "istockphoto-1135381173-612x612.jpg",
    highlighted: true,
  },
  {
    name: "Amit Verma",
    rating: 3,
    text: "Incredible service from start to finish. The team was knowledgeable, friendly, and efficient. I won’t hesitate to use Campus Fix again!",
    image: "istockphoto-1587315781-612x612.jpg",
  },
];

const ClientsReviews = () => (
  <div className={styles.reviewsSection}>
    <h2 className={styles.sectionTitle}>
      Clients <span className={styles.titleHighlight}>Reviews</span>
    </h2>
    <div className={styles.reviewsGrid}>
      {reviews.map((review, index) => (
        <div
          key={index}
          className={`${styles.reviewCard} ${review.highlighted ? styles.highlighted : ''}`}
          style={{ '--index': index }}
        >
          <div className={styles.stars}>
            {[...Array(review.rating)].map((_, i) => (
              <span key={i} className={styles.star}>★</span>
            ))}
          </div>
          <p className={styles.reviewText}>{review.text}</p>
          <div className={styles.userInfo}>
            <img src={review.image} alt={review.name} className={styles.userImage} />
            <span className={styles.userName}>{review.name}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ClientsReviews;