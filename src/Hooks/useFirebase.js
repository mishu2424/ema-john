import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initialAuthentication from "../Firebase/Firebase.inital";
initialAuthentication();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const auth=getAuth();
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn=()=>{
        return signInWithPopup(auth, googleProvider)


    }
    
    
    const logOut=()=>{
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message)
          });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user);
            } else {
              // User is signed out
              // ...
            }
          });
    },[]);
    
   return{
       user,
       error,
       googleSignIn,
       logOut
   }
}
export default useFirebase;