import React from 'react'
import { useForm } from 'react-hook-form'


export const FormDemo5 = () => {

    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log("errors..",errors)

    const refcodeList = ["abcd","xyz","pvr","java"]

    const subbmitHandler = (data) => {
        console.log("data..",data)
    }

    const validationSchemas = {
        contactValidator:{
            required:{
                value:true,
                message:"Contact is required"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"Contact is not valid"
            }
        },
        inquerycodeValidator:{
            required:{
                value:true,
                message:"Inquery code is required"
            },
            validate:(params) => {
                console.log("params",params)
                return params=="royal" || "invalid inquery code"
            }
        },
        referenceValidator:{
            required:{
                value:true,
                message:"reference code is required"
            },
            validate:(params) => {
                console.log("params",params)
                return refcodeList.includes(params) || "invalid reference code"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h2>Form demo5</h2>
        <form onSubmit={handleSubmit(subbmitHandler)}>
            <div>
                <label>Contact no:</label>
                <input type='text' {...register("contactno",validationSchemas.contactValidator)}></input>
                {errors.contactno?.message}
            </div>
            <div>
                <label>Inquery Code:</label>
                <input type='text' {...register("inqcode",validationSchemas.inquerycodeValidator)}></input>
                {errors.inqcode?.message}
            </div>
            <div>
                <label>Reference code:</label>
                <input type='text' {...register("refcode",validationSchemas.referenceValidator)}></input>
                {errors.refcode?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
        
    </div>
  )
}
