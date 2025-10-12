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
import { Error404 } from './netflix/Error404'
import { Watch } from './netflix/Watch'
import { User } from './components/User'
import { Employee } from './components/Employee'
import { Student } from './components/Student'
import { Books } from './components/Books'
//import './App.css'

function App() {

  var title = "React"

  return (
    <div>
      <NavBar title = {title} ></NavBar>
      <Routes>
        <Route path='/home' element={<NetflixHome />}></Route>
        <Route path='/movies' element={<NetflixMovies />}></Route>
        <Route path='/shows' element={<NetflixShows />}></Route>
        <Route path='/games' element={<NetflixGames />}></Route>
        <Route path='/watch/:name' element={<Watch />}></Route>
        <Route path='/users' element={<User />}></Route>
        <Route path='/employee' element={<Employee />}></Route>
        <Route path='/student'element={<Student />}></Route>
        <Route path='/book' element={<Books />}></Route>
        <Route path='/*' element={<Error404 />}></Route>
      </Routes>

    </div>
  )
}

export default App
