import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // Creating user
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login user
    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Login with Google
    const google = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    // Logout user
    const logout = () => {
        setLoader(true)
        return signOut(auth)
    }
    // Manage User
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
        });
        return unsubscribed();
    }, []);

    const authInfo = {
        user,
        loader,
        createUser,
        loginUser,
        logout,
        google

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;