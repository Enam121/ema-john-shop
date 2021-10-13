import { useState, useEffect } from 'react'
import initializeAuthentication from '../Firebase/firebase-init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


initializeAuthentication()

const useFirebase = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
    // .then(result => {
    //   const user = result.user
    // })
  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
      })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
    });

  }, [])

  return { user, signInUsingGoogle, logOut, }

}

export default useFirebase;