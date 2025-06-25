import React from 'react';
import styles from './whychoose.module.css';

const features = [
  {
    title: "24/7 Support",
    icon: "🎧",
    description: "Our customer service team is available around the clock to assist you with any issues or inquiries, ensuring uninterrupted service and support whenever you need it.",
  },
  {
    title: "Quality Service",
    icon: "🛠️",
    description: "We take pride in providing top-tier repair and maintenance services, using high-quality tools and expert techniques to ensure lasting solutions for your needs.",
    // darkBackground: true
  },
  {
    title: "Quick Repair",
    icon: "⏰",
    description: "We understand the importance of efficiency, which is why we prioritize fast turnaround times, ensuring that your repairs are completed promptly without compromising quality.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Why <span>Choose Us?</span>
      </h2>
      <div className={styles.features}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${styles.card} ${feature.darkBackground ? styles.darkCard : ""}`}
          >
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
