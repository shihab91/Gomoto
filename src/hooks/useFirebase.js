import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";


import initializeAuthentication from "../firebase/firebase.init"

initializeAuthentication();
const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(result => setUser(result.user))
      .catch(err => setError(err))
  }
  const handleSingOut = () => {
    signOut(auth).then(() => { setUser({}) })
  }
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      }
      else (setUser({}))
    })
  }, [])
  return { handleGoogleSignIn, handleSingOut, user, setUser, error }
}
export default useFirebase;