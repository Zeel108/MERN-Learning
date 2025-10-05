import React from 'react'

export const MapDemo2 = () => {
  
    var users = [
        { id: 1, name:"Ram", age: 21, gender:"male"},
        { id: 2, name:"Radha", age: 23, gender:"female"},
        { id: 3, name:"Seeta", age: 19, gender:"female"},
        { id: 4, name:"Shayam", age: 20, gender:"male"},
    ]
  
  
    return (
    <div style={{textAlign: 'center'}}>
        <h1>Map Demo 2</h1>
        {
            users.map((user) =>{
                return (<h2>{user.id} - {user.name} {(user.age)}</h2>)
            })
        }

    </div>
  )
}
