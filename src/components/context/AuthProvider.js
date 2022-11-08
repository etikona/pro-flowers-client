import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'

  export  const AuthContext = createContext();
  const auth = getAuth();
const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null);
        const [loader, setLoader] = useState(true);
        
        // Creating user
        const createUser= (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
        }

        // Login user
        const loginUser = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password)
        }
        // Logout user
        const logout = () => {
            return signOut(auth)
        }

    const authInfo = {
        user, 
        loader,
        createUser,
        loginUser,
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