import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import { Content } from './components/Content'
import Footer from './components/Footer'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { MapDemo4 } from './components/MapDemo4'
import { Route, Routes } from 'react-router-dom'
import {NetflixHome} from './netflix/NetflixHome'
import {NetflixMovies} from './netflix/NetflixMovies'
import {NetflixShows} from './netflix/NetflixShows'
import {NetflixGames} from './netflix/NetflixGames'
import { NavBar } from './components/NavBar'
//import './App.css'

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/home' element={<NetflixHome />}></Route>
        <Route path='/movies' element={<NetflixMovies />}></Route>
        <Route path='/shows' element={<NetflixShows />}></Route>
        <Route path='/games' element={<NetflixGames />}></Route>
      </Routes>

    </div>
  )
}

export default App
