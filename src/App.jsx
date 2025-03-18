import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Body from './Body';
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './Login';
import Profile from './Profile';

function App() {

  return (
    <>
    <BrowserRouter basename='/'>
      <Routes>
        <Route exact path="/" element={<Body />} >
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
        </Route>
      </Routes>
  
    </BrowserRouter>
    
      
    </>
  )
}

export default App
