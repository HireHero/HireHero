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
import AppFormPage from './containers/AppFormPage';

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
         <Route 
        path = '/create'
        element={<AppFormPage />}
        />
      
      </Routes>
    </Router>
  )
  }

export default App
