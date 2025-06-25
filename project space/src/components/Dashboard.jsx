import React from "react";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
      <h1><span>Welcome to</span> Campus Fix  🎉</h1>
      <p>Your one-stop solution for fast, reliable, and professional repairs.</p>
      {/* <div className={styles.features}>
        <div className={styles.card}>
          <h3>🔧 Track Your Repairs</h3>
          <p>Stay updated on your repair status in real time.</p>
        </div>
        <div className={styles.card}>
          <h3>📅 Book an Appointment</h3>
          <p>Schedule a hassle-free repair session with our experts.</p>
        </div>
        <div className={styles.card}>
          <h3>🛠 Explore Services</h3>
          <p>From electronics to electrical fixes, find exactly what you need.</p>
        </div>
        <div className={styles.card}>
          <h3>💬 Get Support</h3>
          <p>Have questions? Our 24/7 helpdesk is ready to assist you.</p>
        </div>
      </div> */}
      {/* <button className={styles.ctaButton}>Get Started Now</button> */}
      </div>
    </div>
  );
};

export default Dashboard;
