import { useContext } from 'react';
import './AddToy.css';
import { AuthContext } from '../../providers/AuthProvider';
const AddToy = () => {
    const {user} = useContext(AuthContext);
    const addToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const toy_title = form.title.value;
        const price = form.price.value;
        const img = form.img.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const description = form.description.value;
        const data = {name, email, toy_title,description , price,img, rating, quantity, category};
        console.log(data);
        
    }
    return (
        <div className="container my-2 p-4 shadow">
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
                            <input type="text" className="form-control" name="category"/>
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