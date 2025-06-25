// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    console.log('AuthContext: Initializing isLoggedIn from localStorage:', storedLoginStatus === 'true');
    return storedLoginStatus === 'true';
  });

  useEffect(() => {
    console.log('AuthContext: isLoggedIn state changed to', isLoggedIn, '. Updating localStorage.');
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
  }, [isLoggedIn]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'isLoggedIn') {
        const newStatus = event.newValue === 'true';
        if (isLoggedIn !== newStatus) {
          console.log('AuthContext: Storage event detected, updating isLoggedIn to', newStatus);
          setIsLoggedIn(newStatus);
        }
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [isLoggedIn]);

  const login = () => {
    console.log('AuthContext: Calling login() - setting isLoggedIn to true.');
    setIsLoggedIn(true);
  };

  const logout = () => {
    console.log('AuthContext: Calling logout() - setting isLoggedIn to false and clearing localStorage.');
    setIsLoggedIn(false);
    localStorage.removeItem('studentID');
    localStorage.removeItem('authToken'); // Assuming you use an authToken
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};