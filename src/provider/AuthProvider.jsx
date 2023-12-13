/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from './firebase.config';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);



    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile = (name,photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
        })
    }

    const loginUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    const userLogout = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            // if(currentUser){
            //     const userInfo = {email: currentUser.email}
            // }
        })
        return () => {
            unsubscribe ();
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleSignIn,
        updateUserProfile,
        userLogout,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;