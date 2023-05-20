import { Link, useNavigate } from 'react-router-dom';
import './Registration.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useTitle } from '../../hooks/hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from 'firebase/auth';
const Registration = () => {
    useTitle("Register")
    const navigate = useNavigate();
    const [show, SetShow] = useState(false);
    const {register} = useContext(AuthContext);
    const handleShow = () => SetShow(!show);
    const handleRegister = (event) => {
        event.preventDefault();
        const regex = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/;
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.email.photoURL;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if(password !== confirmPassword){
            return toast.error("Password doesn't match!!");
        }
        if(password < 6){
            return toast.error("Password must be at least 6 characters");
        }
        if(!regex.test(password)){
            return toast.error("Password must contain at least 1 uppercase & 1 special character");
        }
        
        register(email,password)
        .then(result => {
            updateProfile(result.user, {
                displayName: name, photoURL: photoURL
            }).then(()=> {
                form.clear();
            })
            .catch(err => console.log(err));
            navigate('/');
        })
        .catch(err=> console.log(err));

    }
    return (
        <div className="container my-5 p-4 shadow">
            <ToastContainer />
            <h1 className="text-center fw-bolder mb-4">Register to <span style={{ color:"#ff8441"}}>KidsBay</span></h1>
            <form onSubmit={handleRegister} className="form-control">
                <div className="form-group my-2">
                    <label htmlFor="name">Your Name</label>
                    <input type="name" name="name" className="form-control" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" className="form-control" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="photoUrl">Photo URL</label>
                    <input type="text" name="photoURL" className="form-control" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="password">Your Password</label>
                    <input type={ show? "text" : "password" } name="password" className="form-control" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="password">Confirm Password</label>
                    <input type={ show? "text" : "password" } name="confirmPassword" className="form-control" />
                    <div className="d-flex align-items-center my-2">
                        <span className="me-2">show password</span>
                        <input onClick={handleShow} type="checkbox" placeholder='' />
                    </div>
                </div>
                <div className="form-group my-1 text-center">
                    <button className="shop-now-btn form-control">Register</button>
                </div>
            </form>
            <small>Already registered!! <Link to="/login">Login Here</Link> </small>
        </div>
    );
};

export default Registration;