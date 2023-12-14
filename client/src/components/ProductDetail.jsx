import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate, Link} from "react-router-dom";
const ProductDetail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
 
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id )
        .then( res => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch( err => console.log(err) );
    }, [id]);

    const deleteProduct = (id)=>{
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
        .then((res) => {
          
            console.log("Product Detail Delete Successful")
            navigate("/product");
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="col-6 mx-auto">
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/product/edit/" + product._id}>Edit</Link> 
            <button className="btn btn-danger" onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
        </div>
    );
}
export default ProductDetail;