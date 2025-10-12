import React from 'react'
import { MyButton } from '../components/MyButton'

export const NetflixHome = () => {

  const netflixHomeTest = () => {
    alert("it calls home...")
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Netflix Home</h1>
        <MyButton fun = {netflixHomeTest} name = {"Home"} class = "btn btn-danger"></MyButton>
    </div>
  )
}
