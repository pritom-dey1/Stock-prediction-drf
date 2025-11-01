import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
const { IsLogedIn, setIsLogedIn } = useContext(AuthContext);


  const handleLogout = () => {
   
    setIsLogedIn(false);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  };

  return (
    <nav className="bg-[#ededf2] flex justify-between items-center p-4 shadow-md">
      {/* Logo */}
      <div>
        <Link
          to="/"
          className="text-2xl font-bold text-blue-800 hover:text-blue-600 transition"
        >
          StockVision
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-3">
        {IsLogedIn ? (
        <>
          <button
            onClick={handleLogout}
            className="bg-blue-800 rounded-md px-5 py-2 text-white font-semibold hover:bg-blue-700 transition"
          >
            Logout
          </button>
          <Link className="bg-blue-800 rounded-md px-5 py-2 text-white font-semibold hover:bg-blue-700 transition" to = "/dashboard">DASHBOARD</Link>
        </>
          
          
        ) : (
          <>
            <Link
              to="/login"
              className="bg-blue-800 rounded-md px-5 py-2 text-white font-semibold hover:bg-blue-700 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-blue-800 rounded-md px-5 py-2 text-white font-semibold hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
