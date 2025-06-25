
// import React, { useState } from 'react';
// import styles from './Navbar.module.css';
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.container}>
//         <div className={styles.logo}>
//           {/* <img src="\Copilot_20250531_130959.png"></img> */}
//           <h2>Campus Fix</h2>
//         </div>
//         <div className={styles.desktopMenu}>
//           <a href="/" className={styles.navLink}>Home</a>
//           <a href="ourservices" className={styles.navLink}>Our Services</a>
//           <a href="ourteam" className={styles.navLink}>Our Team</a>
//           <a href="contactus" className={styles.navLink}>Contact Us</a>
//           <a href="userclick" className={styles.loginIcon}>
//             <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="12" cy="8" r="4"></circle>
//               <path d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2"></path>
//             </svg>
//           </a>
//         </div>
//         <button className={styles.mobileToggle} onClick={toggleMenu}>
//           <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
//           </svg>
//         </button>
//       </div>
//       {isOpen && (
//         <div className={styles.mobileMenu}>
//           <a href="/" className={styles.navLink}>Home</a>
//           <a href="ourservices" className={styles.navLink}>Our Services</a>
//           <a href="ourteam" className={styles.navLink}>Our Team</a>
//           <a href="addcomplaint" className={styles.navLink}>AddComplaint</a>
//           <a href="contactus" className={styles.navLink}>Contact Us</a>
//           <a href="userclick" className={styles.loginIcon}>
//             <svg className={styles.icon} viewBox="0 0 24 24">
//               <circle cx="12" cy="8" r="4"></circle>
//               <path d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2"></path>
//             </svg>
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;




// import React, { useState, useEffect } from 'react';
// import styles from './Navbar.module.css';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
//       <div className={styles.container}>
//         <div className={styles.logo}>
//           <Link to="/" className={styles.logoText}>
//             <h2>Campus Fix</h2>
//           </Link>
//         </div>
//         <div className={styles.desktopMenu}>
//           <Link to="/" className={styles.navLink}>Home</Link>
//           <Link to="/ourservices" className={styles.navLink}>Our Services</Link>
//           <Link to="/ourteam" className={styles.navLink}>Our Team</Link>
//           <Link to="/addcomplaint" className={styles.navLink}>Add Complaint</Link>
//           <Link to="/contactus" className={styles.navLink}>Contact Us</Link>
//           <Link to="/userclick" className={styles.loginIcon} aria-label="User Profile">
//             <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="12" cy="8" r="4"></circle>
//               <path d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2"></path>
//             </svg>
//           </Link>
//         </div>
//         <button
//           className={styles.mobileToggle}
//           onClick={toggleMenu}
//           aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
//           aria-expanded={isOpen}
//         >
//           <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
//             ></path>
//           </svg>
//         </button>
//       </div>
//       {isOpen && <div className={`${styles.overlay} ${isOpen ? styles.active : ''}`} onClick={toggleMenu}></div>}
//       <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
//         <Link to="/" className={styles.navLink} onClick={toggleMenu}>Home</Link>
//         <Link to="/ourservices" className={styles.navLink} onClick={toggleMenu}>Our Services</Link>
//         <Link to="/ourteam" className={styles.navLink} onClick={toggleMenu}>Our Team</Link>
//         <Link to="/addcomplaint" className={styles.navLink} onClick={toggleMenu}>Add Complaint</Link>
//         <Link to="/contactus" className={styles.navLink} onClick={toggleMenu}>Contact Us</Link>
//         <Link to="/userclick" className={styles.loginIcon} onClick={toggleMenu} aria-label="User Profile">
//           <svg className={styles.icon} viewBox="0 0 24 24">
//             <circle cx="12" cy="8" r="4"></circle>
//             <path d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2"></path>
//           </svg>
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;













// import React, { useState, useEffect } from 'react';
// import styles from './Navbar.module.css';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
//       <div className={styles.container}>
//         <div className={styles.logo}>
//           <Link to="" className={styles.logoText}>
//             <h2>Campus Fix</h2>
//           </Link>
//         </div>
//         <div className={styles.desktopMenu}>
//           <Link to="/" className={styles.navLink}>Home</Link>
//           <Link to="/ourservices" className={styles.navLink}>Our Services</Link>
//           <Link to="/ourteam" className={styles.navLink}>Our Team</Link>
//           <Link to="/about" className={styles.navLink}>About Us</Link>
//           <Link to="/contactus" className={styles.navLink}>Contact Us</Link>
//           {/* Replaced icon with a login button */}
//           <Link to="/userclick" className={styles.loginButton}>Login</Link>
//         </div>
//         <button
//           className={styles.mobileToggle}
//           onClick={toggleMenu}
//           aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
//           aria-expanded={isOpen}
//         >
//           <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
//             ></path>
//           </svg>
//         </button>
//       </div>
//       {isOpen && <div className={`${styles.overlay} ${isOpen ? styles.active : ''}`} onClick={toggleMenu}></div>}
//       <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
//         <Link to="/" className={styles.navLink} onClick={toggleMenu}>Home</Link>
//         <Link to="/ourservices" className={styles.navLink} onClick={toggleMenu}>Our Services</Link>
//         <Link to="/ourteam" className={styles.navLink} onClick={toggleMenu}>Our Team</Link>
//         <Link to="/about" className={styles.navLink} onClick={toggleMenu}>About Us</Link>
//         <Link to="/contactus" className={styles.navLink} onClick={toggleMenu}>Contact Us</Link>
//         {/* Replaced icon with a login button */}
//         <Link to="/userclick" className={styles.loginButton} onClick={toggleMenu}>Login</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;







// import React, { useState, useEffect } from 'react';
// import styles from './Navbar.module.css';
// import { Link, useNavigate } from 'react-router-dom';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     setIsLoggedIn(!!token);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);

//     const updateAuth = () => {
//       const token = localStorage.getItem('authToken');
//       setIsLoggedIn(!!token);
//     };
//     window.addEventListener('authChanged', updateAuth);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('authChanged', updateAuth);
//     };
//   }, []);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const handleAuth = () => {
//     if (isLoggedIn) {
//       localStorage.removeItem('authToken');
//       setIsLoggedIn(false);
//       navigate('/');
//     } else {
//       navigate('/userclick');
//     }
//   };

//   return (
//     <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
//       <div className={styles.container}>
//         <div className={styles.logo}>
//           <Link to="/" className={styles.logoText}>
//             <h2>Campus Fix</h2>
//           </Link>
//         </div>

//         <div className={styles.desktopMenu}>
//           <Link to="/" className={styles.navLink}>Home</Link>
//           <Link to="/ourservices" className={styles.navLink}>Our Services</Link>
//           <Link to="/ourteam" className={styles.navLink}>Our Team</Link>
//           <Link to="/about" className={styles.navLink}>About Us</Link>
//           <Link to="/contactus" className={styles.navLink}>Contact Us</Link>
//           <button onClick={handleAuth} className={styles.loginButton}>
//             {isLoggedIn ? 'Logout' : 'Login'}
//           </button>
//         </div>

//         <button
//           className={styles.mobileToggle}
//           onClick={toggleMenu}
//           aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
//         >
//           <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
//             />
//           </svg>
//         </button>
//       </div>

//       {isOpen && <div className={`${styles.overlay} ${styles.active}`} onClick={toggleMenu}></div>}

//       <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
//         <Link to="/" className={styles.navLink} onClick={toggleMenu}>Home</Link>
//         <Link to="/ourservices" className={styles.navLink} onClick={toggleMenu}>Our Services</Link>
//         <Link to="/ourteam" className={styles.navLink} onClick={toggleMenu}>Our Team</Link>
//         <Link to="/about" className={styles.navLink} onClick={toggleMenu}>About Us</Link>
//         <Link to="/contactus" className={styles.navLink} onClick={toggleMenu}>Contact Us</Link>
//         <button onClick={() => { handleAuth(); toggleMenu(); }} className={styles.loginButton}>
//           {isLoggedIn ? 'Logout' : 'Login'}
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const updateAuth = () => {
      const token = localStorage.getItem("authToken");
      setIsLoggedIn(!!token);
    };

    window.addEventListener("authChanged", updateAuth);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener("authChanged", updateAuth);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleAuth = () => {
    if (isLoggedIn) {
      localStorage.removeItem("authToken");
      setIsLoggedIn(false);
      navigate('/');
    } else {
      navigate('/userclick');
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoText}>
            <h2>Campus Fix</h2>
          </Link>
        </div>

        <div className={styles.desktopMenu}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/ourservices" className={styles.navLink}>Our Services</Link>
          <Link to="/ourteam" className={styles.navLink}>Our Team</Link>
          {!isLoggedIn && (
            <>
              <Link to="/about" className={styles.navLink}>About Us</Link>
              <Link to="/contactus" className={styles.navLink}>Contact Us</Link>
            </>
          )}
          <button onClick={handleAuth} className={styles.loginButton}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>

        <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
          <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {isOpen && <div className={`${styles.overlay} ${styles.active}`} onClick={toggleMenu}></div>}

      <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
        <Link to="/" className={styles.navLink} onClick={toggleMenu}>Home</Link>
        <Link to="/ourservices" className={styles.navLink} onClick={toggleMenu}>Our Services</Link>
        <Link to="/ourteam" className={styles.navLink} onClick={toggleMenu}>Our Team</Link>
        {!isLoggedIn && (
          <>
            <Link to="/about" className={styles.navLink} onClick={toggleMenu}>About Us</Link>
            <Link to="/contactus" className={styles.navLink} onClick={toggleMenu}>Contact Us</Link>
          </>
        )}
        <button onClick={() => { handleAuth(); toggleMenu(); }} className={styles.loginButton}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
