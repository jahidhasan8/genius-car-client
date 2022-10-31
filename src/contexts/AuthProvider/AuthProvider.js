import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
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
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;