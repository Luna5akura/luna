// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        © {new Date().getFullYear()} 我的博客. 保留所有权利。
      </div>
    </footer>
  );
};

export default Footer;
