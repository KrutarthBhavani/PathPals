import Home from './components/Home'
import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
function App() {

  return (
    
      <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
