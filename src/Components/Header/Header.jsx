import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ActiveLinks from '../ActiveLinks/ActiveLinks';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
    const {user,logout} = useContext(AuthContext);
    const handleLogout = () =>{
        logout()
        .then(() =>{
            toast.success("Logged Out, See you soon");
        })
    }
    return (
        <div className="container p-4">
            <ToastContainer />
             <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src={logo} style={{width : "5rem"}} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', fontSize: '18px', fontWeight: '600' }}
                        navbarScroll
                    >
                        <ActiveLinks to="/">Home</ActiveLinks>
                        <ActiveLinks to="/blog">Blog</ActiveLinks>
                        <ActiveLinks to="/all-toys">All Toys</ActiveLinks>
                        <ActiveLinks to="/add-toy">Add A New Toy</ActiveLinks>
                        {
                            user && <ActiveLinks to={`/my-toy/${user.uid}`}>My Toys</ActiveLinks>
                        }
                    </Nav>
                    <Nav className="d-flex align-items-center justify-content-between">
                        {
                            user? 
                            <>
                                <a href="#" className="react-tooltip">
                                    {
                                        user.photoURL ?
                                        <img className="user-img mx-2 " style={{width:"50px",height:"50px",borderRadius:"50px"}} src={user.photoURL} alt="" />
                                        :
                                        <img className="user-img mx-2 " style={{width:"50px",height:"50px",borderRadius:"50px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWFXbd9hr7VcMQ63aguH1t5IEg3L2JdFoej8P7l4&s" alt="" />
                                    }
                                    </a>
                                <Tooltip anchorSelect=".react-tooltip" place="bottom">
                                    {user.displayName}
                                </Tooltip>
                                <Link className="nav-link" onClick={handleLogout}> <i className="fa-solid fa-right-from-bracket fs-2"></i> </Link>
                                </>:
                                <ActiveLinks to='/login'><i className="fa-solid fa-user fs-2"></i></ActiveLinks>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;