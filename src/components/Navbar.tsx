// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-sky-100 shadow">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-sky-950 hover:text-sky-600">
          Luna
        </Link>
        <div>
          <Link to="/" className="font-semibold text-sky-950 hover:text-sky-600 mx-4">
            Home
          </Link>
          <Link to="/about" className="font-semibold text-sky-950 hover:text-sky-600 mx-4">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
