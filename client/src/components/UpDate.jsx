import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
const Update = (props) => {
    const { id } = useParams(); 
    const {product,setProduct}= props
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [id])
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/edit/' + id, {
            title,    
            price,
            description      
        })
            .then(res => {
                console.log(res);
                navigate("/product"); 
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form className="col-6 mx-auto" onSubmit={updateProduct}>
                <label className="form-label">Title</label><br />
                <input type="text" className="form-control" name="title" 
                value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <label className="form-label">Price</label><br />
                <input type="text"  className="form-control" name="price"
                value={price} onChange={(e) => { setPrice(e.target.value) }} />
                <label className="form-label">Description</label><br />
                <input type="text"  className="form-control" name="description"
                value={description} onChange={(e) => { setDescription(e.target.value) }} />
                <button type="submit" className="btn btn-info mt-3"> Submit</button>
            </form>
        </div>
    )
}
export default Update;