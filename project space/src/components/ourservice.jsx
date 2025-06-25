import React from "react";
import styles from "./ourservies.module.css";
import Gallery from "./gallery";

const servicesData = [
  {
    title: "Fan Repair",
    icon: "🌀",
    description: "We diagnose and fix faulty fans, ensuring optimal airflow and performance to keep your space cool and comfortable.",
    //  darkBackground: true,
  },
  {
    title: "Light Repair",
    icon: "💡",
    description: "From flickering bulbs to faulty wiring, we troubleshoot and restore proper lighting for homes, offices, and commercial spaces.",
  },
  {
    title: "AC Repair",
    icon: "❄️",
    description: "Our AC specialists handle refrigerant issues, compressor failures, and airflow blockages to keep your cooling system running efficiently.",
    //  darkBackground: true,
  },
  {
    title: "Board Repair",
    icon: "🔌",
    description: "We repair damaged circuit boards, replacing faulty components to restore electrical stability and prevent further failures.",

  },
  {
    title: "Switches & Wires",
    icon: "🔧",
    description: "Expert wiring solutions including switch installations, fault corrections, and overall electrical safety enhancements.",

  },
  {
    title: "Current & Table",
    icon: "⚡",
    description: "We diagnose electrical fluctuations, stabilize power output, and ensure your workspace is safe from potential hazards.",
    //  darkBackground: true,
  },
  {
    title: "Laptop Repair",
    icon: "💻",
    description: "Specialized in hardware and software troubleshooting, including screen replacements, battery issues, and performance optimizations.",
  },
  {
    title: "Multi Media Repair",
    icon: "🎧",
    description: "We restore audio and visual equipment, fixing speakers, headsets, and entertainment systems for superior media experience.",

  },
];


const Services = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Our <span>Services</span>
        </h2>
        <div className={styles.grid}>
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`${styles.card} ${service.darkBackground ? styles.darkCard : ""}`}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Gallery />
    </>
  );
};

export default Services;
