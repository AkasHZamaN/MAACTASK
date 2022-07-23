import { LogoutIcon, UserIcon } from "@heroicons/react/solid";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from '../../images/Frame 28.png';
import MyProfile from "../Login/MyProfile";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    // localStorage.removeItem('accessToken');
  };

  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <Link to="/" className=""><img src={logo} alt="" /></Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 text-sm">

          <li>
            <Link to={'/dashboard'}>Dashboard</Link>
        </li>

            {
          user ? <><div className="dropdown dropdown-end">
          <label tabIndex="2" className="btn btn-ghost rounded-btn"><span className="text-secondary">{user?.displayName}</span></label>
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

            <li>
            <Link to="/registration">Registration</Link>
            </li>
            
          </ul>
          
        </div>
      </div>
      <hr />
      <MyProfile key={user?.uid} user={user}></MyProfile>
    </div>
  );
};

export default Navbar;
