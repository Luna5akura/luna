// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow mt-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-center">
        <p className="text-gray-500">© 2023 我的博客. 保留所有权利。</p>
      </div>
    </footer>
  );
};

export default Footer;
