
import React from 'react';

import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Navbar = () => {
  
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        HireHero
      </Link>
      <ul>
        <CustomLink to="/pages">Pages</CustomLink>
        <CustomLink to="/">Logout</CustomLink>
       
      </ul>
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