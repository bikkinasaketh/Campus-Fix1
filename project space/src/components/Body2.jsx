import { useNavigate } from "react-router-dom";

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Body1.module.css";

const Body2 = () => {
    const navigate = useNavigate();

    // const Register = () => {
    //     navigate('/components/adminpanel');
    // };
     const Register1= () => {
      navigate('/components/adminComplaintlist');
    };
    return (
        <div className={styles.page}>

            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1>Welcome to CampusFix</h1>
                        <p>Your solution for managing campus electrical issues efficiently.</p>
                    </div>
                </section>
                <section className={styles.features}>
                    <div className={styles.featuresContainer}>
                        <div className={styles.featureCard}>
                            <svg className={styles.featureIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.36L18.87 7 12 9.64 5.13 7 12 4.36zM4 8.64l8 4v6.72l-8-4V8.64zm16 6.72l-8 4v-6.72l8-4v6.72z" />
                            </svg>
                            <p>Easily report electrical issues with our user-friendly form.</p>
                            <h3><button onClick={Register1}>Submit Complaints</button></h3>

                        </div>
                        {/* <div className={styles.featureCard}>
                          <svg className={styles.featureIcon2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-9h2v6h-2v-6zm0-4h2v2h-2V7z" />
                          </svg>
                          <h3><button onClick={Register1}>Track Status</button></h3>
                          <p>Monitor the progress of your complaints in real-time.</p>
                        </div>
           
            <div className={styles.featureCard}>
              <svg className={styles.featureIcon3} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zM12 11L4 6h16l-8 5z" />
              </svg>
              <h3>Contact Support</h3>
              <p>Reach out to our team for assistance anytime.</p>
            </div> */}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Body2;
