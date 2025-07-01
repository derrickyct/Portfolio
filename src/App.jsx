import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Nav from './Components/Nav'
import Resume from './pages/Resume'
import Work from './pages/Work'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/home" element={ <Home /> } />
          <Route path="/resume" element={ <Resume /> } />
          <Route path="/work" element={ <Work /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
