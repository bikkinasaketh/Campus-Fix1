import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({ loginId: "", password: "" });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    try {
      const response = await axios.post("http://localhost:5000/api/login", formData);
      setMessage("Login successful!");
      setIsError(false);
      // You can also save token or redirect user here
    } catch (error) {
      setMessage("Invalid email or phone number or password!");
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Login</h2>

      <label>Email or Phone:</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Enter email or phone"
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        placeholder="Enter password"
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <button type="submit" style={{ width: "100%", padding: "10px" }}>Login</button>

      {message && (
        <p style={{ color: isError ? "red" : "green", marginTop: "15px" }}>
          {message}
        </p>
      )}
    </form>
  );
};

export default LoginForm;
