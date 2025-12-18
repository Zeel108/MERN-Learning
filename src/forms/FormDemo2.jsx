import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
    
    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log("error",errors)
    //const [output,setOutput] = useState({})
    const [isSubbmited,setisSubbmited] = useState(false)

    const submitHandler = (data) => {
        //setOutput(data)
        setisSubbmited(true)
        alert("form subbmited..");
        console.log(data);
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>Form Demo 2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>First name:</label>
                <input type='text' {...register("firstname",{required:{value:true,message:"name is required"}})}></input>
                {errors.firstname && errors.firstname.message}
            </div>
            <div>
                <label>last name:</label>
                <input type='text' {...register("lastname")}></input>
            </div>
            <div>
                <label>Email:</label>
                <input type='text' {...register("email")}></input>
            </div>
            <div>
                <label>Age:</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>Gender:</label>
                <input type='radio' value="Male" {...register("gender")}></input>Male
                <input type='radio' value="Female" {...register("gender")}></input>Female
            </div>
            <div>
                <label>Hobbies:</label>
                <input type='checkbox' value="Cricket" {...register("hobbies")}></input>Cricket
                <input type='checkbox' value="Football" {...register("hobbies")}></input>Football
                <input type='checkbox' value="Badminton" {...register("hobbies")}></input>Badminton
                <input type='checkbox' value="Tennis" {...register("hobbies")}></input>Tennis
                <input type='checkbox' value="chess" {...register("hobbies")}></input>Chess
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>

        {
            isSubbmited == true && <div>
                <h1>Output</h1>
                <p>First Name: {output.firstname}</p>
                <p>Last Name: {output.lastname}</p>
                <p>Email: {output.email}</p>
                <p>Age: {output.age}</p>
                <p>Gender: {output.gender}</p>
                <p>Hobbies: {output.hobbies}</p>
            </div>
        }


    </div>
  )
}
