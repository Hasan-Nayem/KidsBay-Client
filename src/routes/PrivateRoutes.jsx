import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loader from "../Components/Loader/Loader";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user,status} = useContext(AuthContext);
    const location = useLocation();
    if(status){
        <Loader></Loader>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;