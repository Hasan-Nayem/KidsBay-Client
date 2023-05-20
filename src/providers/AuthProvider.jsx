import { createContext, useEffect, useState } from "react";
import { auth } from "../__firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Loader from "../Components/Loader/Loader";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [status,SetStatus] = useState(true);
    const [user,SetUser] = useState({});

    const register = (email,password) => createUserWithEmailAndPassword(auth, email, password);


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            SetStatus(false);
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
            {status? 
                <Loader></Loader>
                :children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;