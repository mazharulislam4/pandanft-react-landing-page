/*
component Name: NavMenuLink ;
work: containing Navbar menu links;
style path: style/navMenuLink.module.css
*/
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './style/navMenuLink.module.css';
export default function NavMenuLink() {
  return (
    <ul className={`${classes.navbar_nav} d-flex flex-column flex-lg-row  justify-content-center align-items-center py-3 py-lg-0 `}>
          <li className={`${classes.navLink}`}>
              <NavLink to='/' >Home</NavLink>
          </li> 
          
          <li className={`${classes.navLink}`}>
          <NavLink to='/discover'>Discover</NavLink>
          </li>

          <li className={`${classes.navLink}`}>
          <NavLink to='/docs'>Docs</NavLink>
          </li>
          <li className={`${classes.navLink}`}>
              <NavLink to='/blog'>Blog</NavLink>
          </li>   
          <li className={`${classes.navLink}`}>
          <NavLink to='/about'>About</NavLink>
          </li> 
          <li className={`${classes.navLink}`}>
          <NavLink to='/contact'>Contact</NavLink>
          </li>
             
    </ul>
  )
}
