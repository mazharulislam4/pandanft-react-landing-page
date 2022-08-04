/*
component: header menu / navbar;
imports : logo , NavMenuLink ;
style Path: /style/navbar.module.css
*/
import React, { useState } from "react";
import { AnchorOutlineBtn } from "./buttons";
import Logo from "./logo";
import NavMenuLink from "./navMenuLink";
import classes from "./style/navbar.module.css";
export default function Navbar() {
  const [navExpand, setNavExpand] = useState(false);
const navToggler = ()=> {
  if (!navExpand) {
    setNavExpand(true)
    document.querySelector('body').style.cssText = `overflow:hidden;`;
  } else {
    setNavExpand(false)
    document.querySelector('body').style.cssText = `overflow-x:hidden;`;

  }
}

  return (
    <header>
      <nav
        className={` container d-flex flex-row  align-items-center justify-content-between ${classes.navbar} py-1`}
          >
              
        <div className={`${classes.navbrand}  `}>
          <Logo />
              </div>
              {/* header menu nav links */}
        <div className={navExpand ? `${classes.nav} ${classes.active}` : `${classes.nav}`}> 
            <NavMenuLink/>     
        </div>

       <AnchorOutlineBtn to='discover' className='d-none d-lg-block' >Connect Wallet</AnchorOutlineBtn>

          {/* toggoler  */}
        <button type="button" className={`${classes.navToggler} d-lg-none   `} onClick={navToggler}  >
          {!navExpand ?  <i className="bi bi-list"></i> :   <i className="bi bi-x"></i> }
        </button>

      </nav>
    </header>
  );
}
