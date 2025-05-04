import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const linkClass = "hover:text-blue-600 transition-colors duration-300";
  const activeClass = "text-blue-600 font-semibold";
  const isLoggedIn = localStorage.getItem("AuthToken");

  const handleLogout = () => {
    localStorage.removeItem("AuthToken");
    navigate("/login");    
    window.location.reload();
  };

  return (
    <nav className="w-full bg-white shadow-lg px-6 py-4 flex items-center justify-between text-black fixed top-0 left-0 z-50">
      <h1 className="font-bold text-3xl">Caption Generator</h1>
      <div className="flex gap-6 text-lg font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${linkClass} ${activeClass}` : linkClass
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/upload"
          className={({ isActive }) =>
            isActive ? `${linkClass} ${activeClass}` : linkClass
          }
        >
          Upload
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${linkClass} ${activeClass}` : linkClass
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? `${linkClass} ${activeClass}` : linkClass
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="register flex gap-6 text-lg font-medium">
        {isLoggedIn ? (
          <>
            <span className="text-gray-600">
              {localStorage.getItem("email")}
            </span>
            <button
              onClick={handleLogout}
              className={`${linkClass} hover:text-red-600`}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? `${linkClass} ${activeClass}` : linkClass
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? `${linkClass} ${activeClass}` : linkClass
              }
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;