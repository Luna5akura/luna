import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';

const App: React.FC = () => {
  return (
    <div>
      <nav className="bg-gray-100 p-4">
        <Link to="/" className="text-xl font-bold">
          我的博客
        </Link>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;