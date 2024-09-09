import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Manageusers from './components/pages/Manage users'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'
import Messages from './components/Messages'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Messages />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/manageusers' element={<Manageusers />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
