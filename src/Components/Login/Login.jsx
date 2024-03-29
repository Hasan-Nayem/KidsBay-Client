import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useTitle } from '../../hooks/hooks';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    useTitle("Login");
    const {login,googleLogin} = useContext(AuthContext);
    const [show,SetShow] = useState(false);
    const handleShow = () => SetShow(!show);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password)
        .then(result => {
            console.log(result);
            form.reset();
            navigate(from, {replace : true});
        })
        .catch(() => toast.error("Invalid email or password"));
    }
    const handleGoogleLogin = () => {
        googleLogin()
        .then(() =>{
            // console.log(result);
            navigate(from, {replace : true});
        })
        .catch(() => toast.error("Error Occured!! Try Again Later"));
    }
    return (
        <div className="container my-5 p-4 shadow">
            <ToastContainer />
            <h1 className="text-center fw-bolder mb-4">Login to <span style={{ color:"#ff8441"}}>KidsBay</span></h1>
            <form onSubmit={handleLogin} className="form-control">
                <div className="form-group my-2">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" className="form-control" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="password">Your Password</label>
                    <input type={show? "text" : "password"} name="password" className="form-control" />
                    <div className="d-flex align-items-center my-2">
                        <span className="me-2">show password</span>
                        <input onClick={handleShow} type="checkbox" placeholder='' />
                    </div>
                </div>
                <div className="form-group my-1 text-center">
                    <button className="shop-now-btn form-control">Login</button>
                </div>
            </form>
            <p className="text-center mt-3 fs-3">OR</p>
            <div className="d-flex justify-content-center align-items-center my-2">
                <div onClick={handleGoogleLogin} className="google-btn">
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </div>
                    <p className="btn-text" style={{fontSize: "12px"}}><b>Sign in with google</b></p>
                </div>
            </div>
            <small>Still not registered?? <Link to="/registration">Register Here</Link> </small>
        </div>
    );
};

export default Login;