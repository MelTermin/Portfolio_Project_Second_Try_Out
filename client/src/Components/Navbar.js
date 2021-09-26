import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaTimes,FaBars } from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)

  return (
    <div>

<nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            Melissa Termin
           
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
           
            <li className="nav-item">
              <Link
                exact
                to="/education"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Education
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                exact
                to="/portfolio"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Portfolio
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact 
              </Link>
            </li>
          </ul>
          
          <div className="nav-icon" onClick={handleClick}>
            {click ? <FaTimes /> :<FaBars />}
          </div>
        </div>
        
      </nav>
      
    </div>
  )
}

export default Navbar
