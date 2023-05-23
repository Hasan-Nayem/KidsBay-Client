import { useLoaderData } from "react-router-dom";
import { useTitle } from "../../hooks/hooks";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Toy = () => {
    useTitle('Toy Details');
    const loaderData = useLoaderData();
    // console.log(loaderData);
    const showToast = () => {
        toast.success("A purchase request has been sended to seller!")
    }
    return (
        <div className="container my-5 p-4">
            <ToastContainer />
            <div className="row">
                <h1 className="text-center mb-5">{loaderData.toy_title}</h1>
                <div className="col-lg col-sm-12">
                    <img src={loaderData.img} style={{width: "500px"}} alt="" />
                </div>
                <div className="col-lg col-sm-12">
                    <h4>Seller - {loaderData.name}</h4>
                    <h4>Email - {loaderData.email}</h4>
                    <h4>Price - {loaderData.price}</h4>
                    <h4>Available Unit - {loaderData.quantity}</h4>
                    <button onClick={showToast} className="shop-now-btn">Purchase</button>
                </div>
            </div>
            <div className="col-lg col-sm-12 text-center">
                <h4>About</h4>
                <h4 className="text-start">{loaderData.description}</h4>
            </div>
        </div>
    );
};

export default Toy;