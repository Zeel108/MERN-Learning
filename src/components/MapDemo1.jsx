import React from 'react'

export const MapDemo1 = () => {

    var users = ["ram", "Shayam", "amit", "sumit"]

  return (
    <div style={{textAlign:"center"}}>
        <h1>Map Demo 1</h1>
        {
            users.map((user)=>{
                return (<h2>{user}</h2>)
            })
        }
    </div>
  )
}
