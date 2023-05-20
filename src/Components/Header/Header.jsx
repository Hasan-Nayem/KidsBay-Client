import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ActiveLinks from '../ActiveLinks/ActiveLinks';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Header = () => {
    return (
        <div className="container p-4">
             <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', fontSize: '18px', fontWeight: '600' }}
                        navbarScroll
                    >
                        <ActiveLinks to="/">Home</ActiveLinks>
                        <ActiveLinks to="/">All Toys</ActiveLinks>
                        <ActiveLinks to="/">My Toys</ActiveLinks>
                        <ActiveLinks to="/">Add A New Toy</ActiveLinks>
                    </Nav>
                    <Nav className="d-flex align-items-center justify-content-between">
                        <a href="#" className="react-tooltip"><img className="user-img mx-2 " style={{width:"50px",height:"50px",borderRadius:"50px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWFXbd9hr7VcMQ63aguH1t5IEg3L2JdFoej8P7l4&s" alt="" /></a>
                        <Tooltip anchorSelect=".react-tooltip" place="bottom">
                            User Name
                        </Tooltip>
                        <ActiveLinks to='/logout'><i className="fa-solid fa-right-from-bracket fs-2"></i></ActiveLinks>
                        <ActiveLinks to='/login'><i className="fa-solid fa-user fs-2"></i></ActiveLinks>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;