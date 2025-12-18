import axios from 'axios'
import React from 'react'

export const ApiDemo1 = () => {

    const getUsers = async()=>{
        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log("reponse axios object",res)
        console.log("api response",res.data)
        console.log("api response message variable",res.data.message)
        console.log("api response data variable",res.data.data)
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>Api Demo1</h1>
        <button onClick={getUsers}>GET</button>

    </div>
  )
}
