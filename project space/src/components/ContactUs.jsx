import React from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';

import styles from './ContactUs.module.css';

// Define map container style for better control
const mapContainerStyle = {
  width: '100%',
  height: '400px', // Adjust height as needed
};

// Coordinates for Jogeshwari West, Mumbai
const center = {
  lat: 19.1375,
  lng: 72.8498,
};

const ContactUs = () => (
  <div className={styles.contactSection}>
    <h2 className={styles.sectionTitle}>
      Contact <span className={styles.titleHighlight}>Us</span>
    </h2>
    <div className={styles.contactGrid}>
      <div className={styles.mapContainer}>
        {/* LoadScript loads the Google Maps API script */}
        <LoadScript googleMapsApiKey="AIzaSyBeXLo-YHGp7Oqcv3eqH8PFP9x6NX8PJDc">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={14}
            options={{
              disableDefaultUI: false, // Set to true to hide default controls
              zoomControl: true,
              mapTypeControl: false,
              streetViewControl: false,
              fullscreenControl: true,
            }}
          />
        </LoadScript>
      </div>
      <div className={styles.formContainer}>
        <h3 className={styles.formTitle}>Get In Touch</h3>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Name" className={styles.inputField} />
          <input type="email" placeholder="Email" className={styles.inputField} />
          <input type="tel" placeholder="Phone" className={styles.inputField} />
          <input type="text" placeholder="Subject" className={styles.inputField} />
          <textarea placeholder="Message" className={styles.textareaField}></textarea>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </div>
  </div>
);

export default ContactUs;