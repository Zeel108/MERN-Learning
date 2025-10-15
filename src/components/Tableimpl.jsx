import React from 'react'
import { MyTable } from '../common/MyTable'

export const Tableimpl = () => {

    const books = [
        {id:101,name:"C",price:399,ratings:9.0},
        {id:102,name:"JAVA",price:449,ratings:9.9},
        {id:103,name:"Python",price:299,ratings:9.3},
        {id:104,name:"JavaScript",price:249,ratings:8.9},
    ]

  return (
    <div style={{textAlign:"center"}}>
        <h1>Table</h1>
        <MyTable header = {Object.keys(books[0])}></MyTable>

    </div>
  )
}
