import { useState } from 'react'
import './App.css'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Manageusers from './components/pages/Manage users'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'

function App() {
  return (
    <>
      <Home />
      <Register />
      <Login />
      <Profile />
      <Manageusers />
    </>
  )
}

export default App
