import React from 'react'
import { EmpolyeeList } from './EmpolyeeList'

export const Employee = () => {

    const employees = [
        {
            id:101,
            name:"Ram",
            salary:20999,
            age:23,
            gender:"male"
        },
        {
            id:102,
            name:"Shayam",
            salary:25999,
            age:27,
            gender:"male"
        },
        {
            id:103,
            name:"Radha",
            salary:31000,
            age:26,
            gender:"female"
        }
    ]

    return (
    <div style={{textAlign:"center"}}>
        <h1>Employee</h1>
        <EmpolyeeList employees = {employees}></EmpolyeeList>
    </div>
  )
}
