import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route 
        path = '/'
        element={<Dashboard />}
        />
      </Routes>
    </Router>
  )
  }

export default App
