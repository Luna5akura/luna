// 在 src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">页面未找到</p>
      <Link to="/" className="text-blue-500 hover:underline">
        返回首页
      </Link>
    </div>
  );
};

export default NotFound;
