import React from 'react'
import { Link } from 'react-router-dom'
import { MyButton } from '../components/MyButton'

export const NetflixMovies = () => {

  const netflixMovieTest = () => {
    alert("it calls movies...")
  }

  return (
    <div  style={{textAlign:"center"}}>
        <h1>Movies</h1>
        <MyButton class="btn-success" fun = {netflixMovieTest} name = {"Movies"}></MyButton>
        <ul>
          <li><Link to="/watch/raid2">Raid 2</Link></li>
          <li><Link to="/watch/animal">Animal</Link></li>
          <li><Link to="/watch/kantara">Kantara</Link></li>
          <li><Link to="/watch/maareesan">Maareesan</Link></li>
        </ul>
    </div>
  )
}
