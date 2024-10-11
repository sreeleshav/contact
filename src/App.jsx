import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import Delete from './components/Delete'
import ContactCard from './components/ContactCard'
import './bootstrap.min.css'

import './App.css'

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/read" element={<Read/>} />
          <Route path="/update" element={<Update/>} />
          <Route path="/delete" element={<Delete/>} />
          <Route path="/contacts/:id" element={<ContactCard/>} />
        </Routes>
    </>
  )
}

export default App
