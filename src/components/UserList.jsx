import React from 'react'

export const UserList = (props) => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>User List</h1>
        <h3>{props.data}</h3>
        <h4>{props.users.id}</h4>
        <h4>{props.users.name}</h4>
        <h4>{props.users.age}</h4>
    </div>
  )
}
