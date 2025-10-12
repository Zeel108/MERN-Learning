import React from 'react'

export const StudentList = (props) => {
  return (
    <div style={{textAlign:'center', margin:'50px', padding:'20px', marginLeft:'180px', marginRight:'180px', borderColor:'black', backgroundColor:'#E0D9D9'}} className='card'>
        <h3>Student List</h3>
        <table className='table'>
            <thead className='thead-dark'>
                <th>Id</th>
                <th>Name</th>
                <th>Standard</th>
                <th>Division</th>
                <th>Roll Number</th>
                <th>Gender</th>
                <th>Action</th>
            </thead>
            <tbody>
                {
                    props.student.map((std) => (
                        <tr key={std.id}>
                        <td>{std.id}</td>
                        <td>{std.name}</td>
                        <td>{std.std}</td>
                        <td>{std.division}</td>
                        <td>{std.roll_number}</td>
                        <td>{std.gender}</td>
                        <td><button onClick={() => {props.info(std.id)}}>info</button> </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    </div>
  )
}
