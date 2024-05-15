import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const GoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const GitHubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // token code
      // console.log(currentUser);
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };

      // token code end
      setUser(currentUser);
      setLoading(false);

      // if user exist then create a token
      if (currentUser) {
        axios
          .post("https://food-web-server-side.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then(() => {
            // console.log("token res", res.data);
          });
      } else {
        axios
          .post("https://food-web-server-side.vercel.app/logout", loggedUser, {
            withCredentials: true,
          })
          .then(() => {
            // console.log(res.data);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user?.email]);

  const authInfo = {
    user,
    loading,
    createUser,
    logOut,
    signIn,
    GoogleSignIn,
    GitHubSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
