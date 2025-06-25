import React from "react";
import styles from "./FixIt.module.css";

const FixIt = () => {
  return (
    <>
      {/* <h1 className={styles.container} >WELCOME TO CAMPUSFIX</h1> */}
      <div className={styles.container1}>

        <div className={styles.imageContainer}>
          <img
            src="./Screenshot_2025-05-31_225354-removebg-preview.png"
            alt="Fixing a computer with tools"
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1>Leave Repairs to the Experts – Fast, Reliable, Hassle-Free!</h1>
          <p>
            Stop struggling with complicated fixes. Our skilled professionals ensure top-quality service and lasting solutions. Let us handle it while you focus on what matters!
          </p>


          <p>
            Our commitment goes beyond quick fixes. We use high-quality parts, follow industry-standard procedures, and offer transparent pricing so you always know what to expect.
          </p>

          <p>
            With Campus Fix, you're not just getting a repair — you're getting peace of mind.
          </p>

          <button className={styles.button1}>Get Started Today</button>
        </div>
      </div>
    </>
  );
};

export default FixIt;
