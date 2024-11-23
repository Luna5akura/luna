
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-800">
          我的博客
        </Link>
        <div>
          <Link to="/" className="text-gray-700 hover:text-blue-600 mx-4">
            首页
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 mx-4">
            关于
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
