
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} />
          {/* 可以添加其他路由 */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
