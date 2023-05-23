import { ToastContainer, toast } from 'react-toastify';
import './Update.css'
import { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useTitle } from '../../hooks/hooks';
import { AuthContext } from '../../providers/AuthProvider';
const Update = () => {
    useTitle("Update Toy Info");
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const [category, SetCategory] = useState([]);
    const loaderData = useLoaderData();
    useEffect(() => {
        fetch("https://p-hero-assignment11.vercel.app/category")
        .then(response => response.json())
        .then(response=> SetCategory(response));
    },[]);
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const seller_id = user.uid;
        const name = form.name.value;
        const email = form.email.value;
        const toy_title = form.title.value;
        const price = parseInt(form.price.value);
        const img = form.img.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const description = form.description.value;
        const data = {seller_id,name, email, toy_title,description , price,img, rating, quantity, category};
        // console.log(data);\
        fetch(`https://p-hero-assignment11.vercel.app/toy/${loaderData._id}`,{
            method : 'PUT',
            headers : {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if(data.modifiedCount > 0){
                navigate(`/my-toy/${user.uid}`)
                toast.success("Products Data Updated Successful");
            }
        });
    }
    return (
        <div className="container p-4 shadow">
            <ToastContainer />
             <h1 className="text-center my-2">Update Products Info</h1>
             <form onSubmit={handleUpdate} className="form-control">
                <div className="row">
                    <h4 className="my-2"> <span className="text-danger">*</span> Seller Information</h4>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" defaultValue={loaderData.name} className="form-control" name="name" disabled/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                         <div className="form-group my-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" defaultValue={loaderData.email} className="form-control" name="email" disabled/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <h4 className="my-2"> <span className="text-danger">*</span> Product Information</h4>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="title">Title for this toy</label>
                            <input type="text" defaultValue={loaderData.toy_title} className="form-control" name="title"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="price">Price</label>
                            <input type="text"  defaultValue={loaderData.price} className="form-control" name="price"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="img">Image URL</label>
                            <input type="text"  defaultValue={loaderData.img} className="form-control" name="img"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="rating">Rating</label>
                            <input type="text"  defaultValue={loaderData.rating} className="form-control" name="rating"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="text"  defaultValue={loaderData.quantity} className="form-control" name="quantity"/>
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
                    <textarea name="description"  defaultValue={loaderData.description} className="form-control" id="" cols="30" rows="5"></textarea>
                </div> 
                <div className="form-group my-1">
                    <button className="form-control text-white add-btn">Update</button>
                </div> 
             </form>       
        </div>
    );
};

export default Update;