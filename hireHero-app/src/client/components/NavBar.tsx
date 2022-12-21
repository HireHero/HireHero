
import React from 'react';

import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Navbar = () => {
  
  return (
    <nav className="nav">
      
      <Link to="/" className="site-title">
        Hire Hero
      </Link>
      <div className="menu">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/">Logout</CustomLink>
      </div>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar;
