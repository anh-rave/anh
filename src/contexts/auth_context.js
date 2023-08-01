import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase/init";


const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const login = async () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        setCurrentUser(result.user);
        setLoading(false);
    }

    const value = {
        user: currentUser,
        login,
        loading,
    };


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);



    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}


