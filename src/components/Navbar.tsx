import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black bg-opacity-90 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-red-600 text-2xl font-bold">NETFLIX</Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link to="/" className="text-gray-300 hover:text-white px-3 py-2">Home</Link>
                <Link to="/tv-shows" className="text-gray-300 hover:text-white px-3 py-2">TV Shows</Link>
                <Link to="/movies" className="text-gray-300 hover:text-white px-3 py-2">Movies</Link>
                <Link to="/new" className="text-gray-300 hover:text-white px-3 py-2">New & Popular</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-300 cursor-pointer hover:text-white" />
            <Bell className="h-5 w-5 text-gray-300 cursor-pointer hover:text-white" />
            <User className="h-5 w-5 text-gray-300 cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;