import { createContext, useEffect, useState } from "react";
import { auth } from "../__firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,SetUser] = useState({});

    const register = (email,password) => createUserWithEmailAndPassword(auth, email, password);


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            SetUser(currentUser)
            console.log("Auth state changed");
        });
        //stop observing while unmounting
        return () => unsubscribe(); 
    },[]);

    const authInfo = {
        register,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;