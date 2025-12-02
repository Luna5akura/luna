// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Skill from "@/pages/Skill";
import Lifecode from "@/pages/Lifecode";
import PostDetails from "@/pages/PostDetails";
import Warp from "@/pages/Warp";
import { FontToggleProvider } from "@/context/FontToggleContext";
import CustomCursor from "@/components/CustomCursor";



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
            <Route path="/lifecode" element={<Lifecode />} />
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