import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
    alert('logged out successfully')
      .then(() => console.log('Logged out successfully'))
      .catch(error => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink className to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className to="/userProfile">
          User Profile
        </NavLink>
      </li>
      {user && (
        <>
          {' '}
          <li>
            <NavLink className to="/updateProfile">
              Update Profile
            </NavLink>
          </li>{' '}
        </>
      )}
      <li>
        <NavLink className to="/aboutUs">
          About us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start mt-8">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <a className="btn btn-ghost text-2xl lg:text-3xl -mt-2">
            {' '}
            <img
              className="w-8 lg:w-10 -mt-2 "
              src="https://i.ibb.co/SBKhwS0/logo-e9072e9cbf659e7c4c064d779973263c.jpg"
              alt=""
            />{' '}
            Ten Build
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-active">
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-active">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
