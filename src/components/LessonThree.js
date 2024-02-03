import React, { useEffect, useState } from 'react'

function LessonThree() {
    const [counter, setCounter] = useState(0)
    const [products, setProducts] = useState([])

    // Create a function to fetch api
    const getAllProducts = async()=>{
        const response = await fetch ('https://randomuser.me/api/?results=50')
        const data = await response.json()
        setProducts(data.results)
    }

    useEffect(()=>{
        getAllProducts()
    }, [])

  return (
    <div>
        {
            products.map((item)=>{
                return(
                    <div>
                        <img src= {item.picture.thumbnail} width={100} height={100} alt=''/>
                        <h4>{item.gender}</h4>
                    </div>
                )
            })
        }
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter + 1)}>Count</button>
    </div>
  )
}

export default LessonThree
