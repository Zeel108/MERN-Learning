import React from 'react'
import { MyButton } from '../common/MyButton'
import { InputDemo1 } from '../components/InputDemo1'
import { InputDemo2 } from '../components/InputDemo2'
import { InputDemo3 } from '../components/InputDemo3'

export const NetflixHome = () => {

  const netflixHomeTest = () => {
    alert("it calls home...")
  }

  return (
    <div style={{textAlign:"center"}}>
      <InputDemo1></InputDemo1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <InputDemo2></InputDemo2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <InputDemo3></InputDemo3>

      {/*
        <h1>Netflix Home</h1>
        <MyButton fun = {netflixHomeTest} name = {"Home"} class = "btn btn-danger"></MyButton>
        */}
    </div>
  )
}
