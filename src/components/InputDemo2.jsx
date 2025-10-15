import React, { useState } from 'react'

export const InputDemo2 = () => {

    const [name, setName] = useState("")
    const [choosedColor, setChoosedColor] = useState("black")
    const [isSubbmited, setisSubbmited] = useState(false)

    const submitHandler = () => {
        setisSubbmited(true)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Input Demo2</h1>
        <div>
            <label>Name:</label>
            <input type='text' onChange={(event)=>{setName(event.target.value)}}></input>
        </div>
        <div>
            <label>CHOOSE COLOR:</label>
            <input type='color' onChange={(event)=>{setChoosedColor(event.target.value)}}></input>
        </div>
        <div>
            <button onClick={() => {submitHandler()}}>SUBMIT</button>
        </div>
        <div>
            {
                isSubbmited && <div style={{color:choosedColor}}>
                <h1>OUTPUT</h1>
                <h1>Name: {name}</h1>

            </div>
            }
        </div>
    </div>
  )
}
