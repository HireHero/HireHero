import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './App.css'
import LoginPage from './containers/LoginPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route 
        path = '/'
        element={<Dashboard />}
        />
        <Route
        path ='/login'
        element={<LoginPage />}
        />
      </Routes>
    </Router>
  )
  }

export default App
