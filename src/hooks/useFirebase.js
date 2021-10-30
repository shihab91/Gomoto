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
  const [isLoading, setIsLoading] = useState(true)
  const handleGoogleSignIn = () => {
    setIsLoading(true)
    return signInWithPopup(auth, googleAuthProvider)

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
      setIsLoading(false)
    })
  }, [])
  return { handleGoogleSignIn, handleSingOut, user, setUser, error, setError, isLoading, setIsLoading }
}
export default useFirebase;