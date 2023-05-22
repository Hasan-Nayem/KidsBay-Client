import { useState } from 'react';
import './MyToy.css';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useTitle } from '../../hooks/hooks';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const MyToy = () => {
    useTitle("My Toys");
    const myToys = useLoaderData();
    const [toys,SetToys] = useState(myToys);

    const handleDelete = (_id) => {
        const url = `http://localhost:3000/my-toy/${_id}`;
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(url,{
                    method: 'DELETE',
                })
                .then(result => result.json())
                .then(data => {
                    if(data.deletedCount === 1){
                          Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          const remaining = toys.filter(toy => toy._id !== _id);
                          SetToys(remaining)
                    }else{
                        console.log(data);
                    }
                })
            }
          })
    }
    if(toys.length === 0 ){
        return (
            <div className="container my-5 p-4">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="">
                        <LazyLoadImage 
                            src='https://i.ibb.co/vcSKFYY/confused.png'
                            width='500px'

                        />
                        {/* <img src={image} style={{width: "500px"}} alt="" /> */}
                    </div>
                    <div className="text-center">
                        <h1 className=" text-danger fw-bolder fs-1">OPPS!!!</h1>
                        <p className="">Looks like you haven&apos;t added any toy yet</p>
                        <a href="/add-toy" style={{textDecoration: "none"}} className=" shop-now-btn">Click to add now!</a>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="container shadow my-5 p-4">
            <h1 className="text-center my-3">My Toys</h1>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Rating</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => 
                            <tr key={toy._id}>
                                <td>#</td>
                                <td>
                                    {
                                        toy.img?
                                        <img src={toy.img} style={{ width:"50px" }} alt="" />
                                        : <span className="badge bg-info">Image Not Uploaded</span>
                                    }
                                </td>
                                <td>{toy.toy_title}</td>
                                <td>{toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td>{toy.rating}</td>
                                <td>{toy.category}</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <a href={`/update-toy/${toy._id}`}><i className="fa-solid fa-pen-to-square ms-3 text-success"></i></a>
                                        <i onClick={()=>{handleDelete(toy._id)}} className="fa-solid fa-trash ms-3 text-danger"></i>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>            
        </div>
    );
};

export default MyToy;