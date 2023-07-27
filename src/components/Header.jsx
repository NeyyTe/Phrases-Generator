import React from "react";
import { NavLink } from "react-router-dom";
import './header.css'


function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/lost"> I'm Lost </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
