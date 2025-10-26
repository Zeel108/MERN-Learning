import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

    const {register,handleSubmit} = useForm()

    const submitHandler = (data) =>{
        console.log(data)
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
                <input type='submit'></input>
            </div>
            
        </form>
    </div>
  )
}
