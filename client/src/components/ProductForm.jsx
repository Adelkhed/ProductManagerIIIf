import { useEffect,useState} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductForm = (props)=>{
    const [message, setMessage]= useState('Loading...')
    const {product,setProduct}= props
    const [title, setTitle]= useState('')
    const [price, setPrice]= useState('')
    const [description, setDescription]= useState('')
    useEffect(()=>{
        axios.get('http://localhost:8000/api')
        .then(res=>setMessage(res.data.message))
        .catch(err=>console.log(err))
    },[])
    
    const onSubmitHandler = (e)=> {
        e.preventDefault()
       
        axios.post('http://localhost:8000/api/product',{title,price,description})
        .then(res =>{
            console.log(res);
            console.log(res.data);
            setProduct([...product,res.data])
        })
        .catch(err=>console.log({msg:'Posting Error',err:err}))
    }
    return (
        

      
        <div className="col-6 mx-auto mt-5">
        <h1>Add Product</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
  
          <button type="submit" className="btn btn-info mt-3">
            Create Product
          </button>
        </form>
      </div>
        
        
    )
}
export default ProductForm;