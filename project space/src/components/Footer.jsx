
import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>Campus Fix</h1>
          <p>Your trusted platform <br></br> for seamless campus <br/>solutions.</p>
        </div>

        <div className={styles.links}>
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <p>Email: support@campusfix.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: Andhra Pradesh, India</p>
        </div>

        <div className={styles.social}>
          <h3>Follow Us</h3>
          <div className={styles.icons}>
            <a href="#" className={`${styles.icon1} ${styles.facebook}`}>
              <FaFacebookF />
            </a>
            <a href="#" className={`${styles.icon2} ${styles.twitter}`}>
              <FaTwitter />
            </a>
            <a href="#" className={`${styles.icon3} ${styles.instagram}`}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Campus Fix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
