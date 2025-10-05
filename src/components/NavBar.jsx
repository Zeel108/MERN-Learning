import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to='/home' class="navbar-brand">Netflix</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to='/home' class="nav-link">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to='/movies' class="nav-link">Movies</Link>
      </li>
      <li class="nav-item">
        <Link to='/shows' class="nav-link">Shows</Link>
      </li>
      <li class="nav-item">
        <Link to='/games' class="nav-link">Games</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}
