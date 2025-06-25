import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./StudentSignup.module.css";

const StudentSignup = () => {
  const [formData, setFormData] = useState({
    studentID: "",
    name: "",
    email: "",
    rollNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.studentID.trim()) newErrors.studentID = "Student ID is required";
    else if (!/^[a-zA-Z0-9-]+$/.test(formData.studentID)) newErrors.studentID = "Invalid Student ID format";
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (formData.rollNumber && !/^[a-zA-Z0-9-]+$/.test(formData.rollNumber)) newErrors.rollNumber = "Invalid roll number format";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  const newErrors = validateForm();
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await axios.post("http://localhost:5000/api/students/register", {
      studentID: formData.studentID,
      name: formData.name,
      email: formData.email,
      rollNumber: formData.rollNumber,
      password: formData.password,
    });

    alert(response.data.message);
    setFormData({
      studentID: "",
      name: "",
      email: "",
      rollNumber: "",
      password: "",
      confirmPassword: "",
    });
  } catch (error) {
    console.error("Registration error:", error);
    alert(error.response?.data?.message || "Something went wrong during registration.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className={styles.formSection}>
      <Navbar />
      <div className={styles.container}>
        <h2>Create Student Account</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="studentID">Student ID</label>
            <input
              type="text"
              name="studentID"
              id="studentID"
              placeholder=" ABC123"
              value={formData.studentID}
              onChange={handleChange}
              className={errors.studentID ? styles.errorField : ""}
              tabIndex="1"
            />
            {errors.studentID && <span className={styles.error}>{errors.studentID}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Mahesh Dhulipudi"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? styles.errorField : ""}
              tabIndex="2"
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="student@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.errorField : ""}
              tabIndex="3"
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="rollNumber">Roll Number (Optional)</label>
            <input
              type="text"
              name="rollNumber"
              id="rollNumber"
              placeholder=" R12345"
              value={formData.rollNumber}
              onChange={handleChange}
              className={errors.rollNumber ? styles.errorField : ""}
              tabIndex="4"
            />
            {errors.rollNumber && <span className={styles.error}>{errors.rollNumber}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="At least 6 characters"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? styles.errorField : ""}
                tabIndex="5"
              />
              <button
                type="button"
                className={styles.togglePassword}
                onClick={() => setShowPassword(!showPassword)}
                tabIndex="6"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <span className={styles.error}>{errors.password}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? styles.errorField : ""}
                tabIndex="7"
              />
              <button
                type="button"
                className={styles.togglePassword}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                tabIndex="8"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
          </div>
          <button
            type="submit"
            className={`${styles.submitButton} ${isSubmitting ? styles.sending : ""}`}
            disabled={isSubmitting}
            tabIndex="9"
          >
            {isSubmitting ? <span className={styles.spinner}></span> : "Create Account"}
          </button>
        </form>
        <p className={styles.loginText}>
          Already have an account?{" "}
          <Link to="/studentlogin" className={styles.loginLink}>
            Login here
          </Link>
        </p>
      </div>
      {/* <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2025 CampusFix. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <Link to="/contactus" className={styles.footerLink}>Contact Us</Link>
            <Link to="/ourteam" className={styles.footerLink}>Our Team</Link>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default StudentSignup;
