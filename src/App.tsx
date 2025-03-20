// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import PostDetails from "@/pages/PostDetails";
import Warp from "@/pages/Warp";
import Show from "@/pages/Show";
import { FontToggleProvider } from "@/context/FontToggleContext";
import Magic from "./pages/Magic";

function App() {
  return (
      <FontToggleProvider>
          <div className="flex flex-col w-screen min-h-screen bg-sky-600">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/warp" element={<Warp />} />
                <Route path="/show" element={<Show />} />
                <Route path="/about" element={<About />} />
                <Route path="/posts/:id" element={<PostDetails />} />
                <Route path="/magic" element={<Magic />} />
              </Routes>
            </main>
            <Footer />
          </div>
      </FontToggleProvider>
  );
}

export default App;
