// src/App.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Wit from "@/pages/Wit";
import Wow from "@/pages/Wow";
import Lifecode from "@/pages/Lifecode";
import PostDetails from "@/pages/PostDetails";
import Warp from "@/pages/Warp";
import Spark from "@/pages/Spark"; 

import { FontToggleProvider } from "@/context/FontToggleContext";
import CustomCursor from "@/components/CustomCursor";

const DynamicCursor = () => {
  const location = useLocation();
  if (location.pathname === "/skill") return null;
  return <CustomCursor />;
};

function App() {
  return (
    <FontToggleProvider>
      <div className="flex flex-col w-full min-h-screen overflow-x-clip bg-[#02050A]">
        <Navbar />
        
        <main className="flex-grow flex flex-col relative w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/warp" element={<Warp />} />
            <Route path="/wow" element={<Wow />} />
            <Route path="/wit" element={<Wit />} />
            <Route path="/lifecode" element={<Lifecode />} />
            <Route path="/spark" element={<Spark />} /> 
            
            <Route path="/posts/*" element={<PostDetails />} /> 
          </Routes>
        </main>
        
        <Footer />
      </div>

      <DynamicCursor />
    </FontToggleProvider>
  );
}

export default App;