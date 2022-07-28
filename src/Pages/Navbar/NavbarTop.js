import { LogoutIcon, UserIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/Frame 28.png';

const NavbarTop = () => {
    const token = localStorage.getItem('token')

  const logout = () => {
    localStorage.removeItem('token');
  };



    const menuItems = (
        <>
          
            
            <li>
              <Link to={'/dashboard'}>Dashboard</Link>
            </li> 
            
          
            
             
              <li>
            <Link to="/registration">Registration</Link>
            </li>
             
          <li>
            <Link to={'/login'}>Login</Link>
        </li>
        
          
          
        </>
    )

  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
              
            </ul>
          </div>
          <Link to="/" className=""><img src={logo} alt="" /></Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
        <div class="navbar-end">
        <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        
      </div>
      
    </div>
  );
};

export default NavbarTop;
