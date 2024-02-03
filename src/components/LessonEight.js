import React, { useState } from 'react'
import axios from 'axios'

function LessonEight() {
    const [products, setProducts] = useState([])
    // Create a function to fetch data
    const getAllProducts = async()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            console.log(response);
            setProducts(response.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

  return (
    <div>
      <button onClick={getAllProducts} className='btn btn-danger'>Fetch Data</button>

      {
        products.map((item)=>{
            return(
                <div>
                    <h5>{item.title}</h5>
                </div>
            )
        })
      }
    </div>
  )
}

export default LessonEight
