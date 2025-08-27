import { useEffect, useState } from 'react'
import './App.css'
import { Link, Route, Router, Routes } from 'react-router'
import UserPage from './Pages/UserPage'
import Home from './Pages/Home'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header logo='Dashboard'/>

      
      <Routes>
          <Route index element={<Home />}/>
          <Route path='user/:id' element={<UserPage/>}/>
      </Routes>
    </>
  )
}

export default App
