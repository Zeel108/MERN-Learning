import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  var name = "India"
  var age = 77
  var isSuperPower = true
  var user = {
    name: "Ram",
    age: 22
  }


  return (
    <div>
      <h1>Rule 1: at a time we can return only 1 tag</h1>
      <h1>Rule 2: every tag must have closing tag</h1>
      <h2>Rule / convention: whatever has been written inside return() statement, only will display to browser</h2>
      <h1>Name : {name}</h1>
      <h1>Age : {age}</h1>
      <h3>Super Power : {isSuperPower == true ? "Yes" : "No"}</h3>
      <h2>Name of user: {user.name}</h2>
      <h2>Age : {user.name}</h2>

    </div>
  )
}

export default App
