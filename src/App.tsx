// src/App.tsx
import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import { FontToggleProvider } from "@/context/FontToggleContext";
import CustomCursor from "@/components/CustomCursor";

const Warp = lazy(() => import("@/pages/Warp"));
const Wow = lazy(() => import("@/pages/Wow"));
const Wit = lazy(() => import("@/pages/Wit"));
const Lifecode = lazy(() => import("@/pages/Lifecode"));
const Spark = lazy(() => import("@/pages/Spark"));
const RandomFont = lazy(() => import("./pages/RandomFont"));
const PostDetails = lazy(() => import("@/pages/PostDetails"));

const DynamicCursor = () => {
  const location = useLocation();
  if (location.pathname === "/skill") return null;
  return <CustomCursor />;
};

const RouteLoadingFallback = () => (
  <div className="flex min-h-[50vh] w-full items-center justify-center px-6 py-16">
    <div className="border border-cyan-900/40 bg-[#04070d]/90 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-500 shadow-[0_0_30px_rgba(0,0,0,0.45)]">
      Loading sector...
    </div>
  </div>
);

function App() {
  return (
    <FontToggleProvider>
      <div className="flex flex-col w-full min-h-screen overflow-x-clip bg-[#02050A]">
        <Navbar />
        
        <main className="flex-grow flex flex-col relative w-full">
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/warp" element={<Warp />} />
              <Route path="/wow" element={<Wow />} />
              <Route path="/wit" element={<Wit />} />
              <Route path="/lifecode" element={<Lifecode />} />
              <Route path="/spark" element={<Spark />} /> 
              <Route path="/random-font" element={<RandomFont />} />
              
              <Route path="/posts/*" element={<PostDetails />} /> 
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </div>

      <DynamicCursor />
    </FontToggleProvider>
  );
}

export default App;
