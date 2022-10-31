import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config'

const auth=getAuth(app)
export const AuthContext=createContext()
 const AuthProvider = ({children}) => {
     const [user,setUser]=useState('')
     const[loading,setLoading]=useState(true);

    //  sign up new user
     const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
     }

    //  sign in user

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
     
    // google sign in
    const popUpSignIn=(googleProvider)=>{
        return signInWithPopup(auth, googleProvider)
    }

    // verify email
    const verifyEmail=()=>{
        return sendEmailVerification(auth.currentUser)

    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe();
    },[])

     const authInfo={
        user,
        loading,
        createUser,
        signIn,
        popUpSignIn,
        verifyEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;