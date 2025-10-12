import React from 'react'

export const EmpolyeeList = (props) => {

    return (
    <div style={{textAlign:"center", margin:'50px', padding:'20px', marginLeft:'200px', marginRight:'200px', borderColor:'black', backgroundColor:'#F5F5F0'}} className='card'>
        <h3>Employees list</h3>
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">salary</th>
      <th scope="col">age</th>
      <th scope="col">gender</th>
    </tr>
  </thead>
  <tbody>
    
    {   props.employees.map((employee) =>(
        <tr key={employee.id}>
      <th scope="row">{employee.id}</th>
      <td>{employee.name}</td>
      <td>{employee.salary}</td>
      <td>{employee.age}</td>
      <td>{employee.gender}</td>
    </tr>
    ))
    
}
  </tbody>
</table>
    </div>
  )
}
