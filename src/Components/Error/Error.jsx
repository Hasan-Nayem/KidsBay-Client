import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    return (
        <div className="container text-center">
            <LazyLoadImage 
                src='https://i.ibb.co/3ynMBnT/error.jpg'
                width='100%'
            />
            {/* <p className='fw-bolder '>{error.statusText || error.message}</p> */}
            <a href="/" style={{textDecoration: "none"}} className=" shop-now-btn">Back to home</a>
        </div>
    );
};

export default Error;