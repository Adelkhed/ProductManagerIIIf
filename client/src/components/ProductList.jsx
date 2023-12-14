import React, {useState, useEffect} from 'react'
import {Link,useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';
const ProductList = (props) => {
    const {removeFromDom,product, setProduct} = props;
    const {id} = useParams(); 
    // const navigate = useNavigate();
    const deleteProduct = (id)=>{
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
        .then(res => {
            removeFromDom(id)
            
            console.log("ProductList Delete Successful")
            
        })
        .catch(err => console.log(err))
    }

    useEffect(()=>{
    	axios.get("http://localhost:8000/api/product")
    	.then((res)=>{
	    console.log(res.data);
            setProduct(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    
    return (
        <div>
        <h1> List of Products</h1>
        <table className="table"></table>
            {
                product.map((product, index)=>{
                return (
                <div key={index}>
                    <p>{product.firstName}</p> 
                    <p>{product.lastName}</p>
                    <Link to={`/product/${product._id}`}>{product.title} click to view</Link> 
                    | 
                    <Link to={"/product/edit/" + product._id}>Edit</Link> 
                    | 
                    <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                </div>
                )})
            }
        </div>
    );
        
}
export default ProductList;
