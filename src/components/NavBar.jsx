import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = (props) => {

  console.log("prop",props)
  return (
    <div>
            <div>{props.title}</div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to='/home' className="navbar-brand">Netflix</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
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

    </ul>
  </div>
</nav>
    </div>
  )
}
