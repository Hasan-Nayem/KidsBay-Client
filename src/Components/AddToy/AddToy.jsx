import { useContext, useEffect, useState } from 'react';
import './AddToy.css';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
import { useTitle } from '../../hooks/hooks';
const AddToy = () => {
    useTitle('Add A Toy');
    const {user} = useContext(AuthContext);
    const [category, SetCategory] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/category")
        .then(response => response.json())
        .then(response=> SetCategory(response));
    },[]);
    const addToy = (event) => {
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
        // console.log(data);
        fetch('http://localhost:3000/addToy',{
            method: 'POST',
            headers: { 
                "Content-type" : "application/json",
            },
            body : JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if(data.insertedId){
                form.reset();
                <Navigate to={`/my-toy/${user.uid}`}></Navigate>
                toast.success("Toy Added successfully");
            }
        });
    }

    return (
        <div className="container p-4 shadow">
            <ToastContainer />
             <h1 className="text-center my-2">Add Your Toy</h1>
             <form onSubmit={addToy} className="form-control">
                <div className="row">
                    <h4 className="my-2"> <span className="text-danger">*</span> Seller Information</h4>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" defaultValue={user.displayName} className="form-control" name="name" disabled/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                         <div className="form-group my-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" defaultValue={user.email} className="form-control" name="email" disabled/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <h4 className="my-2"> <span className="text-danger">*</span> Product Information</h4>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="title">Title for this toy</label>
                            <input type="text" className="form-control" name="title"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="price">Price</label>
                            <input type="text" className="form-control" name="price"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="img">Image URL</label>
                            <input type="text" className="form-control" name="img"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="rating">Rating</label>
                            <input type="text" className="form-control" name="rating"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="text" className="form-control" name="quantity"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-3">
                            <label htmlFor="category">Category</label>
                            {/* <input type="text" className="form-control" name="category"/> */}
                            <select name="category" className="form-control" id="">
                                <option> Please select the category</option>
                                {
                                    category.map(category=> <option key={category._id} value={category.title}>{category.title}</option> )
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" className="form-control" id="" cols="30" rows="5"></textarea>
                </div> 
                <div className="form-group my-1">
                    <button className="form-control text-white add-btn">Add</button>
                </div> 
             </form>       
        </div>
    );
};

export default AddToy;