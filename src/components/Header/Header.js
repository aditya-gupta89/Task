import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>LOGO</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  // backgroundColor:isActive?"black":"",
                  color: isActive ? "white" : "",
                
                    // backgroundColor:isActive?"black":"",
                  
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks"
              style={({ isActive }) => {
                return {
                  // backgroundColor:isActive?"black":"",
                  color: isActive ? "white" : "",
                };
              }}
            >
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              exact={true}
              to="/User"
              style={({ isActive }) => {
                return {
                  // backgroundColor:isActive?"black":"",
                  color: isActive ? "white" : "",
                };
              }}
            >
              User
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
