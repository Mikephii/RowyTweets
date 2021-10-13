import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  //login function
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      (credential) => {
        console.log(credential);
        setCurrentUser(credential.user);
      }
    );
  };

  const signout = () => {
    signOut(auth)
      .then(() => setCurrentUser(null))
      .catch((err) => console.log(err));
  };

  //mounts auth watcher on load
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  //values provided in context
  const value = {
    currentUser,
    login,
    signout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
