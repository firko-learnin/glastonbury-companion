import React, { createContext, ReactElement, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebase = initializeApp(firebaseConfig);
const auth = getAuth();

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      try {
        user ? setUser(user) : setUser(null);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    });
    return unsubscribeAuth;
  }, []);

  return <AuthContext.Provider value={{ user, isLoading }}>{children}</AuthContext.Provider>;
};
