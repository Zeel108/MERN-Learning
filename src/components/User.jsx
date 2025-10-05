import React from 'react'
import { UserList } from './UserList'

export const User = () => {

    var data = "User Data"
    var user = {
        id:101,
        name:"Ram",
        age:23
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Users</h1>
        <UserList data = {data} users = {user} ></UserList>
    </div>
  )
}
