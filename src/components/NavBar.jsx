import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {

  
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to='/home' className="navbar-brand">Netflix</Link>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to='/home' className="nav-link">Home </Link>
      </li>
      <li class="nav-item">
        <Link to='/movies' className="nav-link">Movies</Link>
      </li>
      <li class="nav-item">
        <Link to='/shows' className="nav-link">Shows</Link>
      </li>
      <li class="nav-item">
        <Link to='/games' className="nav-link">Games</Link>
      </li>
      <li class="nav-item">
        <Link to='/users' className="nav-link">Users</Link>
      </li>
      <li class="nav-item">
        <Link to='/employee' className="nav-link">Employees</Link>
      </li>
      <li class="nav-item">
        <Link to='/student' className="nav-link">Student</Link>
      </li>
      <li class="nav-item">
        <Link to='/book' className="nav-link">Book</Link>
      </li>
      
      <li class="nav-item">
        <Link to='/tableimpl' className="nav-link">Table</Link>
      </li>
      <li class="nav-item">
        <Link to='/formdemo1' className="nav-link">Form Demo</Link>
      </li>
      <li class="nav-item">
        <Link to='/formdemo2' className="nav-link">Form 2</Link>
      </li>
      <li class="nav-item">
        <Link to='/formdemo3' className="nav-link">Form 3</Link>
      </li>
      <li class="nav-item">
        <Link to='/formdemo4' className="nav-link">Form 4</Link>
      </li>
      <li class="nav-item">
        <Link to='/formdemo5' className="nav-link">Form 5</Link>
      </li>
      <li class="nav-item">
        <Link to='/apidemo1' className="nav-link">api 1</Link>
      </li>
      
      <li class="nav-item">
        <Link to='/apidemo2' className="nav-link">API 2</Link>
      </li>

      <li class="nav-item">
        <Link to='/memodemo1' className="nav-link">Memo demo 1</Link>
      </li>
      
    </ul>
  </div>
</nav>
    </div>
  )
}
