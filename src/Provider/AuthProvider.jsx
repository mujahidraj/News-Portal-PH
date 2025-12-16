import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [user , setUser] = useState(null)

  const [loading , setLoading] = useState(true)

  const auth = getAuth(app);

  const createUser =(email , password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth , email , password)
  };


  const signOutUser = ()=>{
    return signOut(auth)
  }


  useEffect(()=>{
    
    const unSubscribe = onAuthStateChanged (auth , (currentUser)=>{
      setUser(currentUser)
      setLoading(false)
    });
    return ()=>{
      unSubscribe();
    }
  },[auth])

  
  const loginUser =(email , password) =>{
    return signInWithEmailAndPassword(auth , email, password)
  }

  const userUpdate =(updatedUser)=>{
    return updateProfile(auth.currentUser , updatedUser)
  }


  const authData = {
    user,
    setUser,
    loading,
    createUser,
    signOutUser,
    loginUser,
    userUpdate

  }


  return (
    <div>
      <AuthContext value={authData}>
        {children}
      </AuthContext>
    </div>
  );
};

export default AuthProvider;