import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

    const {register,handleSubmit} = useForm()
    const [output,setOutput] = useState({})
    const [isSubbmited, setIsSubbmited] = useState(false)

    const submitHandler = (data) =>{
        console.log(data)
        setOutput(data)
        setIsSubbmited(true)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Form demo</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME:</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>AGE:</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>Color:</label>
                <input type='color' {...register("color")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
            
        </form>
        {
            isSubbmited == true && <div style={{color:output.color}}>
               <h1>Output</h1>
               <h2>Name = {output.name}</h2>
               <h3>Age = {output.age}</h3>
                </div>
        }
    </div>
  )
}
