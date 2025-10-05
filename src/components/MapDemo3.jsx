import React, { use } from 'react'

export const MapDemo3 = () => {
  
    var users = [
        {id: 1, name:"Ram", age: 21, gender:"male"},
        {id: 2, name:"Seeta", age: 23, gender:"female"},
        {id: 3, name:"Radha", age: 19, gender:"female"},
        {id: 4, name:"Shayam", age: 17, gender:"male"},
    ]
  
    return (
    <div style={{textAlign:'center'}}>
        <h1>Map Demo 3</h1>
        <table className='table'>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
            </thead>
            <tbody>
                {
                    users.map((user) =>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>    
                        </tr>
                    })
                }
            </tbody>
        </table>

    </div>
  )
}
