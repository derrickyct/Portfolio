import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'

import Nav from './components/Nav'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Work from './pages/Work'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/resume" element={ <Resume /> } />
          <Route path="/work" element={ <Work /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
