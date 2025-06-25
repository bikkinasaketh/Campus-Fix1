
import React from "react";
import { motion } from "framer-motion";
import styles from "./Bestrepair.module.css";

const Bestrepair = () => {
  return (
    <motion.div className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >


      <motion.div className={styles.textContainer}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Campus Fix – Your Trusted Repair Experts</h1>

        <p>
          Get the best repairs for electronics, electrical systems, and more. Fast, reliable, and handled by professionals so you don’t have to worry!
        </p>

        <p>
          At Campus Fix, we specialize in providing top-quality repair services for students, faculty, and residents alike. Whether it’s a cracked phone screen, a faulty laptop, or a broken electrical outlet in your dorm, our certified technicians are here to help.
        </p>


        <p>
          Don’t let broken tech slow you down. Contact Campus Fix today and get back to what matters most — hassle-free.
        </p>

        <button className={styles.button1}
          // whileHover={{ scale: 1.05, backgroundColor: "#084177" }}
        >
          Get Started
        </button>
      </motion.div>
      <motion.div className={styles.imageContainer}
        whileHover={{ scale: 1.05 }}
      >
        <img src="./Screenshot_2025-05-31_230747-removebg-preview.png" alt="Animated Image" className={styles.image} />
      </motion.div>
    </motion.div>
  );
};

export default Bestrepair;
