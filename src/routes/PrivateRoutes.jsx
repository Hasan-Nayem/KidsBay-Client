import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loader from "../Components/Loader/Loader";
import { Navigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PrivateRoutes = ({children}) => {
    const {user,status} = useContext(AuthContext);
    const location = useLocation();
    if(status){
        <Loader></Loader>
    }
    if(user){
        return children;
    }

    return (
        <>
            {
                toast.info("You Have To Login First!")
            }
            <Navigate to="/login" state={{from: location}} replace></Navigate>
            <ToastContainer />
        </>
        
    );
};

export default PrivateRoutes;