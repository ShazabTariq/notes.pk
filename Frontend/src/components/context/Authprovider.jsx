import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export default function Authprovider({ children }) {
    const initialauthuser = localStorage.getItem("Users");
    const [authuser, setauthuser] = useState(
        initialauthuser ? JSON.parse(initialauthuser) : undefined
    );
    
    return (
        <AuthContext.Provider value={[authuser, setauthuser]}>
            {children}
        </AuthContext.Provider>
    );
}

// Make sure this export is correct
export const useauth = () => useContext(AuthContext);
