import { useEffect, useState } from 'react'
import './App.css'
import { Link, Route, Router, Routes } from 'react-router'
import UserPage from './Pages/UserPage'
import Home from './Pages/Home'
import Header from './components/Header'
import Analyctics from './Pages/Analyctics'
import DashBoard from './Pages/Dashboard'
import Settings from './Pages/Settings'
import Users from './Pages/Users'
import Login from './Pages/Login'

function App() {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users`)
      .then(res => res.json())
      .then(data => {
        setUserData(data);
        localStorage.setItem('data', JSON.stringify(data))
        setLoading(false)
      })
      .catch(error => {
        console.log(error);
        setLoading(false)
      }
      )
  }, [])
  console.log(userData);
  return (
    <>

      <Routes>
        <Route index element={<Login/>} />
        <Route path='home' element={<Home />}>
          <Route index element={<Users usersData={userData} loadingState={loading}/>} />
          <Route path='analyctics' element={<Analyctics />} />
          <Route path='dashboard' element={<DashBoard />} />
          <Route path='settings' element={<Settings />} />

        </Route>
        <Route path='user/:id' element={<UserPage />} />
      </Routes>
    </>
  )
}

export default App
