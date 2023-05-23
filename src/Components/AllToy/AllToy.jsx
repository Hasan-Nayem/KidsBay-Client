import { useState } from 'react';
import { useTitle } from '../../hooks/hooks';
import './AllToy.css';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AllToy = () => {
    useTitle("All Toys");
    const loaderData = useLoaderData();
    const [toys,SetToys] = useState(loaderData);
    // console.log(toys);
    // const handleSort = () => {
    //     fetch(`http://localhost:3000/allToysSortBy`)
    //     .then(response => response.json())
    //     .then(data => SetToys(data))
    //     toast.info('Data sorted by - Price')
    // }
    const handleSort = (event) =>{
        event.preventDefault();
        const sortBy = event.target.sortBy.value;
        console.log(sortBy);
        fetch(`http://localhost:3000/allToysSortBy/${sortBy}`)
        .then(response => response.json())
        .then(data => SetToys(data))
        toast.info('Data sorted by - Price')
    }
    return (
        <div className="container my-5 p-4 shadow">
            <ToastContainer />
            <h1 className="text-center">All Toys</h1>
            <form onSubmit={handleSort} className="my-4 text-center">
                <div className="row">
                    <div className="col-lg-4">
                        <h3>Sort By - </h3>
                    </div>
                    <div className="col-lg-4">
                        <select name="sortBy" id="" className="form-control">
                            <option value="1">Ascending</option>
                            <option value="-1">Descending</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <button className="shop-now-btn">Submit</button>
                    </div>
                </div>
            </form>
            {/* <button onClick={handleSort} className="btn btn-primary my-3 text-right">Short By - Price</button> */}
            <table>
                <thead>
                    <tr>
                        <th scope="col">Seller Name</th>
                        <th scope="col">Toy Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">Available Unit</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => 
                            <tr key={toy._id}>
                                <td data-label="Seller Name">
                                    {
                                        toy.name?
                                        toy.name
                                        : <p className="badge bg-info">Seller Name Not Available</p>
                                    }
                                </td>
                                <td data-label="Toy Name"> {toy.toy_title} </td>
                                <td data-label="Category">{toy.category}</td>
                                <td data-label="Price">{toy.price}</td>
                                <td data-label="Available Unit">{toy.quantity}</td>
                                <td data-label="Action">
                                    <a href="#">
                                        <i className="fa-solid fa-eye"></i>
                                    </a>
                                </td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToy;