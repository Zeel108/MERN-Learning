import React from 'react'

export const BookList = (props) => {
  return (
    <div style={{textAlign:"center"}}>
        <h2>Book List</h2>
        <table className='table table-light'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.books.map((book)=>{
                        return <tr>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.price}</td>
                            <td>{book.ratings}</td>
                            <td><button className='btn btn-danger' onClick={() =>{props.deletebook(book.id)}}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
