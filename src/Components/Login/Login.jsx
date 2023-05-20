import { Link } from 'react-router-dom';
import './Login.css';
import { useTitle } from '../../hooks/hooks';
const Login = () => {
    useTitle("Login");
    return (
        <div className="container my-5 p-4 shadow">
            <h1 className="text-center fw-bolder mb-4">Login to <span style={{ color:"#ff8441"}}>KidsBay</span></h1>
            <form className="form-control">
                <div className="form-group my-2">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" className="form-control" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="password">Your Password</label>
                    <input type="password" name="Password" className="form-control" />
                    <div className="d-flex align-items-center my-2">
                        <span className="me-2">show password</span>
                        <input type="checkbox" placeholder='' />
                    </div>
                </div>
                <div className="form-group my-1 text-center">
                    <button className="shop-now-btn form-control">Login</button>
                </div>
            </form>
            <p className="text-center mt-3 fs-3">OR</p>
            <div className="d-flex justify-content-center align-items-center my-2">
                <div className="google-btn">
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