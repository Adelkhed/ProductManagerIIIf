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
        <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mb-4">List of Products</h1>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {product.map((productItem, index) => (
                <tr key={index} className="table-light">
                   <td >{productItem.title}</td>
                   <td >{productItem.price}</td>
                
                   <td className="align-middle">
                      <Link to={`/product/${productItem._id}`} className="btn btn-info mr-2">
                       Details  
                      </Link>
                      <Link to={`/product/edit/${productItem._id}`} className="btn btn-warning mr-2">
                       Edit
                     </Link>
                     <button onClick={(e) => deleteProduct(productItem._id)} className="btn btn-danger">
                      Delete
                     </button>
                   </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
        
}
export default ProductList;
