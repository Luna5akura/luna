import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
        <div className="text-xl font-bold text-gray-800">我的博客</div>
      </div>
    </nav>
  );
};

export default Navbar;
