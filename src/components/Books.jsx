import React, { useState } from 'react'
import { BookList } from './BookList'

export const Books = () => {

    const [books, setBooks]=useState([
        {id:101,name:"C",price:399,ratings:9.0},
        {id:102,name:"JAVA",price:449,ratings:9.9},
        {id:103,name:"Python",price:299,ratings:9.3},
        {id:104,name:"JavaScript",price:249,ratings:8.9},
    ])

    const deleteBook = (id) =>{
        const afterdeletearray = books.filter((book)=>book.id!=id)
        console.log(afterdeletearray)
        setBooks(afterdeletearray)
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>Book</h1>
        <BookList books = {books} deletebook = {deleteBook}></BookList>
    </div>
  )
}
