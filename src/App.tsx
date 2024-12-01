// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import PostDetails from '@/pages/PostDetails';

function App() {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-sky-600">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
