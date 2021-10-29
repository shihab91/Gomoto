import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";


import initializeAuthentication from "../firebase/firebase.init"

initializeAuthentication();
const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(result => setUser(result.user))
  }
  const handleSingOut = () => {
    signOut(auth).then(() => { console.log("signOut successful"); })
  }
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      }
      else (setUser({}))
    })
  }, [])
  return { handleGoogleSignIn, handleSingOut, user, setUser }
}
export default useFirebase;