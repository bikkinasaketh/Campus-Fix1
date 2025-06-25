// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom"; // Combined imports
// import Loginform1 from "./login.module.css";

// const LoginForm = () => {
//   const [formData, setFormData] = useState({ identifier: "", password: "" });
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//     if (e.target.name === "identifier") setEmailError("");
//     if (e.target.name === "password") setPasswordError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let valid = true;
//     setMessage("");

//     if (!formData.identifier) {
//       setEmailError("Enter Email or Phone Number!");
//       valid = false;
//     }

//     if (!formData.password) {
//       setPasswordError("Enter Password!");
//       valid = false;
//     }

//     if (!valid) return;

//     try {
//       const res = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: formData.identifier,
//           password: formData.password,
//         }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setMessage("Login successful ✅");
//         navigate("/components/Body2");
//       } else {
//         setMessage(data.message || "Login failed ❌");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setMessage("Something went wrong ❌");
//     }
//   };

//   return (
//     <div className={Loginform1.loginform0}>
//       <div className={Loginform1.loginform1}>
//                   <h1>Admin  Login</h1>
//         <form onSubmit={handleSubmit}>

//           <label className={Loginform1.label}>Email or Phone:</label>
//           <input
//             type="text"
//             name="identifier"
//             value={formData.identifier}
//             onChange={handleChange}
//             className={Loginform1.input}
//             placeholder="Enter email or phone number"
//           />
//           {emailError && <h6 className={Loginform1.para1}>{emailError}</h6>}

//           <label className={Loginform1.label}>Password:</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter Password"
//             value={formData.password}
//             onChange={handleChange}
//             className={Loginform1.input}
//           />
//           {passwordError && <h6 className={Loginform1.para2}>{passwordError}</h6>}

//           <button type="submit" className={Loginform1.button}>Login</button>

//           <p className={Loginform1.signuppara}>
//             Don't have an account?{" "}
//             <Link to="/adminsignup" className={Loginform1.linkspan}>
//               Sign up.
//             </Link>
//           </p>

//           <p className={Loginform1.message}>{message}</p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;









import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Loginform1 from "./login.module.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "identifier") setEmailError("");
    if (e.target.name === "password") setPasswordError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    setMessage("");

    if (!formData.identifier) {
      setEmailError("Enter Email or Phone Number!");
      valid = false;
    }

    if (!formData.password) {
      setPasswordError("Enter Password!");
      valid = false;
    }

    if (!valid) return;

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.identifier,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Login successful ✅");
        localStorage.setItem("authToken", data.token || "true");
        window.dispatchEvent(new Event("authChanged")); // sync with Navbar
        navigate("/components/Body2");
      } else {
        setMessage(data.message || "Login failed ❌");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Something went wrong ❌");
    }
  };

  return (
    <div className={Loginform1.loginform0}>
      <div className={Loginform1.loginform1}>
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <label className={Loginform1.label}>Email or Phone:</label>
          <input
            type="text"
            name="identifier"
            value={formData.identifier}
            onChange={handleChange}
            className={Loginform1.input}
            placeholder="Enter email or phone number"
          />
          {emailError && <h6 className={Loginform1.para1}>{emailError}</h6>}

          <label className={Loginform1.label}>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className={Loginform1.input}
          />
          {passwordError && <h6 className={Loginform1.para2}>{passwordError}</h6>}

          <button type="submit" className={Loginform1.button}>Login</button>

          <p className={Loginform1.signuppara}>
            Don't have an account?{" "}
            <Link to="/adminsignup" className={Loginform1.linkspan}>
              Sign up.
            </Link>
          </p>

          <p className={Loginform1.message}>{message}</p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
