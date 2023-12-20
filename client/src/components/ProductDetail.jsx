import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Product Details</h3>
                <p className="card-text">Title: {product.title}</p>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Description: {product.description}</p>
                <Link to={`/product/edit/${product._id}`} className="btn btn-primary mr-2">
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={(e) => {
                    deleteProduct(product._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default ProductDetail;