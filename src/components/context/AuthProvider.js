import React, { createContext, useState } from 'react';


  export  const AuthContext = createContext();
 
const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null);
        const [loader, setLoader] = useState(true);
        

    const authInfo = {

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