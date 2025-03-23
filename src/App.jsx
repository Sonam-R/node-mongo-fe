import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Body from './components/Body';
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './components/Login';
import Profile from './components/Profile';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {

  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename='/'>
        <Routes>
          <Route exact path="/" element={<Body />} >
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/profile" element={<Profile />} />
          </Route>
        </Routes>
    
      </BrowserRouter>
    </Provider>
      
    </>
  )
}

export default App
