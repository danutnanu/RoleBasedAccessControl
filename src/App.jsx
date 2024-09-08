import { useState } from 'react'
import './App.css'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Manageusers from './components/pages/Manage users'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'
import Navbar from './components/Navbar'
import Messages from './components/Messages'

function App() {
  return (
    <>
      <Navbar />
      <Messages />
      <Home />
      <Register />
      <Login />
      <Profile />
      <Messages />
    </>
  )
}

export default App
