import './Footer.css';
import footerLogo from '../../assets/footerLogo.png'
const Footer = () => {
    return (
        <footer className="w-100 bg-dark">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-3 col-sm-12 p-5 text-center">
                    <img src={footerLogo} className="p-3 footer-logo" alt="" />
                    <p className="text-wrap text-white p-3 fs-5">There are many variations of
                    passages of Lorem Ipsum
                    available, but the majority have
                    suffered alteration in some
                    form, by injected humour.</p>
                </div>
                <div className="col-md-3 col-sm-12 p-5 text-white">
                    <h3 className="p-3 ">Usefull Links</h3>
                    <ul className=" list-group-bg-dark p-3 fs-5">
                    <li className="list-group-item py-2">Home</li>
                    <li className="list-group-item py-2">About Us</li>
                    <li className="list-group-item py-2">Cases</li>
                    <li className="list-group-item py-2">Blog</li>
                    <li className="list-group-item py-2">Contact Us</li>
                    </ul>
                </div>
                
                <div className="col-md-3 col-sm-12 p-5 text-white">
                    <h3 className="p-3">Contact Now</h3>

                    <p className="text-wrap p-2 fs-5">555 4th 5t NW, Washington DC 20530, United States</p>
                    <p className="text-wrap p-2 fs-5">+88 01750 000 000 +88 01750 000 000</p>
                    <p className="text-wrap p-2 fs-5">nayemmh66@gmail.com info@gmail.com</p>

                </div>

                <div className="col-md-3 col-sm-12 p-5 text-white">
                    <h3 className="p-3">Subscribe Now</h3>

                    <p className="text-wrap p-2 fs-5">Subscribe for our latest & Articles. We Wont Give You Spam Mails</p>
                        <input type="text" className="form-control p-3 my-2" placeholder="Email Address"/>
                    <button className="footer-btn text-white p-3 rounded w-100 border-0">Send <i className="fas fa-paper-plane"></i> </button>
                </div>
                    <p className="text-center text-white">&copy; - <i>2008-2015</i></p>
                    <i className="text-center text-white">All Right Reserved. Powered By Mehedi Hasan Nayem</i>
                </div>
                
            </div>
            </footer>
    );
};

export default Footer;