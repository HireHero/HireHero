import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './containers/Home';
import './App.css'
import LoginPage from './containers/LoginPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route
        path ='/'
        element={<LoginPage />}
        />
        <Route 
        path = '/home'
        element={<Home />}
        />
      
      </Routes>
    </Router>
  )
  }

export default App
