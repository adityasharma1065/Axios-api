import { data } from "autoprefixer";
import axios from "axios";
import { useState } from "react";

const App = () => {

  const [products,setproducts]=useState([])

  const getProducts=()=>{
    const api="https://fakestoreapi.com/products";
    axios.get(api).then(products=>{
      // console.log(products);
      setproducts(products.data)
      
    }).catch(err=>{
      console.log(err);
      
    })
  }
  const addProducts=()=>{
    const api="https://fakestoreapi.com/products";
    axios.post(api,{
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }).then(data=>{
      console.log(data);
      
    }).catch(err=>{
      console.log(err);
      
    })
  }
  console.log(products);
  
  return (
    <div className="px-[5%] py-[5%]">
      <button className="px-5 py-2 rounded bg-red-300" onClick={getProducts}>Call Api</button>
      <br /><br />
      <button className="px-5 py-2 rounded bg-red-300" onClick={addProducts} >Add products to Api</button>
      <hr className="my-10"/>
      <ul>
        {
        products.length > 0 ? (products.map((p)=>(

          <li className=" mb-2 p-5 bg-red-200 rounded">{p.title}</li>
        )))
        : 
        (<h1>Loading...</h1> )
        }
      </ul>
    </div>
  )
}

export default App