import { useEffect, useState } from 'react'
import './App.css'
import { Link, Route, Router, Routes } from 'react-router'
import UserPage from './Pages/UserPage'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <h1>Hello World</h1>

      
      <Routes>
          <Route index element={<Home />}/>
          <Route path='user/:id' element={<UserPage/>}/>
      </Routes>
    </>
  )
}

export default App
