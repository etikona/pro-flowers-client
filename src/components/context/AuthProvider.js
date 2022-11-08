import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

  export  const AuthContext = createContext();
  const auth = getAuth();
const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null);
        const [loader, setLoader] = useState(true);
        
        // Creating user
        const createUser= (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
        }

    const authInfo = {
        user, 
        loader,
        createUser,
        
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