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
          {
            token ? 
            <li>
              <Link to={'/dashboard'}>Dashboard</Link>
            </li> :
            ''
          }
            {
              token ? '' :
              <li>
            <Link to="/registration">Registration</Link>
            </li>
            } 
          
          {
          token ? <><div className="dropdown dropdown-end">
          <label tabIndex="2" className="btn btn-ghost rounded-btn"><span className="text-secondary">{token?.displayName}</span></label>
          <ul tabIndex="2" className="menu dropdown-content p-2 shadow bg-accent rounded-box w-52 mt-4">
            <li className="flex items-center"> 
            <UserIcon className="w-6 h-6 text-white p-0 m-0"></UserIcon> 
              <label  htmlFor="mymodal" className="btn btn-ghost text-white">My Profile</label>
            </li>

            <li className="flex items-center">
            <LogoutIcon className="w-6 h-6 text-white p-0 m-0"></LogoutIcon>
              <button onClick={logout} className="btn btn-ghost text-error">Logout</button>
              </li> 
          </ul>
        </div></> :
          <li>
            <Link to={'/login'}>Login</Link>
        </li>
        }
          
          
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
