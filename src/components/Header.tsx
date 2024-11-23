// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          我的博客
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-500">
            首页
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-500">
            关于
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-500">
            联系我们
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
