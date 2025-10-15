import React, { useState } from 'react'

export const InputDemo1 = () => {

    const [name, setName]=useState("")
    const [age, setAge]=useState("")
    const [email, setEmail]=useState("")

    const nameHandler = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

    const ageHandler = (event) => {
        setAge(event.target.value)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Input Demo1</h1>
        <div>
            <label>Name:</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {name}
        </div>

        <div>
            <label>Age:</label>
            <input type='text' onChange={(event)=>{ageHandler(event)}}></input>
            {age}
        </div>
        <div>
            <label>Email:</label>
            <input type='text' onChange={(event)=>{setEmail(event.target.value)}}></input>
            {email}
        </div>
    </div>
  )
}
