import React from 'react'
import { MyButton } from '../common/MyButton'

export const NetflixGames = () => {
  
  const netflixGameTest = () => {
    alert("it calls games...")
  }
  
  return (
    <div  style={{textAlign:"center"}}>
        <h1>Games</h1>
        <MyButton fun = {netflixGameTest} name = {"Games"} class = "btn btn-secondary"></MyButton>
    </div>
  )
}
