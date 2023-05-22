import { ToastContainer } from 'react-toastify';
import './Update.css'
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useTitle } from '../../hooks/hooks';
const Update = () => {
    useTitle("Update Toy Info")
    const [category, SetCategory] = useState([]);
    const data = useLoaderData();
    useEffect(() => {
        fetch("http://localhost:3000/category")
        .then(response => response.json())
        .then(response=> SetCategory(response));
    },[]);
    const handleUpdate = () => {

    }
    return (
        <div className="container p-4 shadow">
            <ToastContainer />
             <h1 className="text-center my-2">Add Your Toy</h1>
             <form onSubmit={handleUpdate} className="form-control">
                <div className="row">
                    <h4 className="my-2"> <span className="text-danger">*</span> Seller Information</h4>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" defaultValue={data.name} className="form-control" name="name" disabled/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                         <div className="form-group my-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" defaultValue={data.email} className="form-control" name="email" disabled/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <h4 className="my-2"> <span className="text-danger">*</span> Product Information</h4>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="title">Title for this toy</label>
                            <input type="text" defaultValue={data.toy_title} className="form-control" name="title"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="price">Price</label>
                            <input type="text"  defaultValue={data.price} className="form-control" name="price"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="img">Image URL</label>
                            <input type="text"  defaultValue={data.img} className="form-control" name="img"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="rating">Rating</label>
                            <input type="text"  defaultValue={data.rating} className="form-control" name="rating"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="text"  defaultValue={data.quantity} className="form-control" name="quantity"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="category">Category</label>
                            <select name="category" className="form-control" id="">
                                {
                                    category.map(category=> <option key={category._id} value={category.title}>{category.title}</option> )
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="description">Description</label>
                    <textarea name="description"  defaultValue={data.description} className="form-control" id="" cols="30" rows="5"></textarea>
                </div> 
                <div className="form-group my-1">
                    <button className="form-control text-white add-btn">Update</button>
                </div> 
             </form>       
        </div>
    );
};

export default Update;