import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Child from './views/Child'
import Parent from './views/Parent'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Parent />} />
        <Route path="/child" element={<Child />} />
      </Routes>
    </Router>
  )
}

export default App