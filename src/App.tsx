// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Skill from "@/pages/Skill";
import PostDetails from "@/pages/PostDetails";
import Warp from "@/pages/Warp";
import { FontToggleProvider } from "@/context/FontToggleContext";
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    // 监听所有可点击元素的 hover
    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).closest('.cursor-hover')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div 
      className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

function App() {
  return (
    <FontToggleProvider>
      <div className="flex flex-col w-screen min-h-scree">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/warp" element={<Warp />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts/*" element={<PostDetails />} /> {/* Updated to handle string slugs with possible nested paths (e.g., /posts/QC/QC_1) */}
          </Routes>
        </main>
        <Footer />
      </div>
      <CustomCursor />
    </FontToggleProvider>
  );
}

export default App;