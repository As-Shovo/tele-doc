import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContaxt = createContext();

const AuthProvider = ({children}) => {
    const allContaxt = useFirebase();
    return (
        <AuthContaxt.Provider value={allContaxt}>
            {children}
        </AuthContaxt.Provider>
        
    );
};

export default AuthProvider;