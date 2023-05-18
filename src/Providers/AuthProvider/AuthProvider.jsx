import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from "../../FirebaseConfig/FirebaseConfig";

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider()

    const createNewUser =(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const loginWithGoogle =()=>{
        return signInWithPopup(auth,googleProvider);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setLoader(false)
            setUser(currentUser);
        })
        return unsubscribe;
    },[])
    const logOut = ()=>{
        return signOut(auth);
    }

    const userInfo = {
        user,
        createNewUser,
        loginUser,
        loginWithGoogle,
        logOut,
        loader

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;