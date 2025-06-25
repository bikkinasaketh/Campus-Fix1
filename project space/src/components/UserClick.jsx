
// import React from "react";
// import styles from "./UserClick.module.css";

// const UserClick = () => {
//   return (
//     <div className={styles.container}>
//       <h1>Welcome to Campus Fix Dashboard</h1>
//       <p className={styles.subtitle}>
//         Select your role to access personalized services.
//       </p>

//       <div className={styles.roles}>
//         <div className={styles.card}>
//           <h2>Student Login</h2>
//           <p>Manage complaints, track progress, and stay updated.</p>
//         </div>
//         <div className={styles.card}>
//           <h2>Admin Login</h2>
//           <p>Review complaints, assign tasks, and oversee resolutions.</p>
//         </div>
//       </div>

//       <div className={styles.helpSection}>
//         <p>Need help? <span className={styles.helpLink}>Contact Support</span></p>
//       </div>
//     </div>
//   );
// };

// export default UserClick;

import React from "react";
import styles from "./UserClick.module.css";
import { Link } from "react-router-dom";

const UserClick = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Campus Fix Dashboard</h1>
      <p className={styles.subtitle}>
        Select your role to access personalized services.
      </p>

      <div className={styles.roles}>
        {/* Student Login Section */}
        <div className={styles.card}>
          <img src="/1-512.webp" alt="Student Logo" className={styles.logo} />
          <h2>Student Login</h2>
          <p>Manage complaints, track progress, and stay updated.</p>
          <Link to="/studentlogin">
            <button className={styles.loginButton}>Login as Student</button>
          </Link>
        </div>

        {/* Admin Login Section */}
        <div className={styles.card}>
          <img src="12970220.png" alt="Admin Logo" className={styles.logo} />
          <h2>Admin Login</h2>
          <p>Review complaints, assign tasks, and oversee resolutions.</p>
          <Link to="/login">
            <button className={styles.loginButton}>Login as Admin</button>
          </Link>
        </div>
      </div>

      <div className={styles.helpSection}>
        <p>Need help? <span className={styles.helpLink}>Contact Support</span></p>
      </div>
    </div>
  );
};

export default UserClick;
