import React from 'react'

export const Content = () => {
  
    var name = "India"
  var age = 77
  var isSuperPower = true
  var user = {
    name: "Ram",
    age: 22
  }
  
  
    return (
    <div>
        <h2>Rule 1: at a time we can return only 1 tag</h2>
      <h2>Rule 2: every tag must have closing tag</h2>
      <h3>Rule / convention: whatever has been written inside return() statement, only will display to browser</h3>
      <h3>Name : {name}</h3>
      <h4>Age : {age}</h4>
      <h3>Super Power : {isSuperPower == true ? "Yes" : "No"}</h3>
      <h2>Name of user: {user.name}</h2>
      <h2>Age : {user.name}</h2>
     
    </div>
  )
}
