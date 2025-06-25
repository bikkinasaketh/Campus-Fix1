// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import styles from "./StudentLogin.module.css"; // optional CSS module

// const StudentLogin = () => {
//   const [studentID, setStudentID] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!studentID || !password) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.post("http://localhost:5000/api/students/login", {
//         studentID,
//         password,
//       });

//       alert(response.data.message); // e.g., "Login successful"

//       // You can store user info if needed:
//       // localStorage.setItem("studentName", response.data.name);

//       navigate("/components/Body1"); // Redirect after login
//     } catch (err) {
//       if (err.response && err.response.status === 401) {
//         setError("Invalid Student ID or password.");
//       } else if (err.response && err.response.status === 404) {
//         setError("Student not found.");
//       } else {
//         setError("Server error. Please try again later.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={styles.container0}>
//       <div className={styles.container}>
//          {/* <img src="/1-512.webp" alt="Student Logo" className={styles.logo} /> */}
//                   <h2>Student Login</h2>
//         {error && <p className={styles.errorMsg}>{error}</p>}
//         <form onSubmit={handleSubmit} autoComplete="off" >
//            <label >Student Id:</label>
//           <input
//             type="text"
//             placeholder="Student ID"
//             value={studentID}
//             onChange={(e) => setStudentID(e.target.value)}
//             className={!studentID && error ? styles.errorField : ""}
//           />
//           <label >PassWord:</label>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className={!password && error ? styles.errorField : ""}
//           />
//           <button type="submit" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//                   <p className={styles.signupText}>
//           Don't have an account?{" "}
//           <span className={styles.signupLink}>
//             <Link to="/studentsignup">Sign up here</Link>
//           </span>
//         </p>
//         </form>


//       </div>
//     </div>
//   );
// };

// export default StudentLogin;





// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import styles from "./StudentLogin.module.css"; // optional CSS module

// const StudentLogin = () => {
//   const [studentID, setStudentID] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!studentID || !password) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.post("http://localhost:5000/api/students/login", {
//         studentID,
//         password,
//       });

//       alert(response.data.message); // e.g., "Login successful"

//       // Store a flag in localStorage to indicate the user is logged in
//       // Ideally, you'd store an authentication token from your backend
//       localStorage.setItem("authToken", response.data.token || "true"); // Store a token or just "true"

//       // You can store user info if needed:
//       // localStorage.setItem("studentName", response.data.name);

//       navigate("/components/Body1"); // Redirect after login
//     } catch (err) {
//       if (err.response && err.response.status === 401) {
//         setError("Invalid Student ID or password.");
//       } else if (err.response && err.response.status === 404) {
//         setError("Student not found.");
//       } else {
//         setError("Server error. Please try again later.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={styles.container0}>
//       <div className={styles.container}>
//           {/* <img src="/1-512.webp" alt="Student Logo" className={styles.logo} /> */}
//           <h2>Student Login</h2>
//         {error && <p className={styles.errorMsg}>{error}</p>}
//         <form onSubmit={handleSubmit} autoComplete="off" >
//            <label >Student Id:</label>
//           <input
//             type="text"
//             placeholder="Student ID"
//             value={studentID}
//             onChange={(e) => setStudentID(e.target.value)}
//             className={!studentID && error ? styles.errorField : ""}
//           />
//           <label >PassWord:</label>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className={!password && error ? styles.errorField : ""}
//           />
//           <button type="submit" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//             <p className={styles.signupText}>
//             Don't have an account?{" "}
//             <span className={styles.signupLink}>
//               <Link to="/studentsignup">Sign up here</Link>
//             </span>
//           </p>
//         </form>


//       </div>
//     </div>
//   );
// };

// export default StudentLogin;





import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './StudentLogin.module.css';

const StudentLogin = () => {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!studentID || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://192.168.57.239/api/students/login', {
        studentID,
        password,
      });

      alert(response.data.message);
      localStorage.setItem('authToken', response.data.token || 'true');
      window.dispatchEvent(new Event('authChanged')); // Notify Navbar

      navigate('/components/Body1');
    } catch (err) {
      if (err.response?.status === 401) {
        setError('Invalid Student ID or password.');
      } else if (err.response?.status === 404) {
        setError('Student not found.');
      } else {
        setError('Server error. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container0}>
      <div className={styles.container}>
        <h2>Student Login</h2>
        {error && <p className={styles.errorMsg}>{error}</p>}
        <form onSubmit={handleSubmit} autoComplete="off">
          <label>Student ID:</label>
          <input
            type="text"
            placeholder="Student ID"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
            className={!studentID && error ? styles.errorField : ''}
          />

          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={!password && error ? styles.errorField : ''}
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <p className={styles.signupText}>
            Don't have an account?{' '}
            <span className={styles.signupLink}>
              <Link to="/studentsignup">Sign up here</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
