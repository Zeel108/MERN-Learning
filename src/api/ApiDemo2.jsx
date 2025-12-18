import React, { useState } from 'react'

export const ApiDemo2 = () => {

    const [message,setMessage]=useState("")
    const [product,setProduct]=useState([])

    const getProduct = async() =>{
            const res = await axios.get("https://node5.onrender.com/product/getall")
    }



  return (
    <div style={{textAlign:"center"}}>
        <h1>Api demo 2</h1>
        <button onClick={getProduct}>Get</button>

        

    </div>
  )
}
