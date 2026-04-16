// src/App.tsx
import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import { FontToggleProvider } from "@/context/FontToggleContext";
import CustomCursor from "@/components/CustomCursor";

const loadWarp = () => import("@/pages/Warp");
const loadWow = () => import("@/pages/Wow");
const loadWit = () => import("@/pages/Wit");
const loadLifecode = () => import("@/pages/Lifecode");
const loadSpark = () => import("@/pages/Spark");
const loadRandomFont = () => import("./pages/RandomFont");
const loadPostDetails = () => import("@/pages/PostDetails");

const Warp = lazy(loadWarp);
const Wow = lazy(loadWow);
const Wit = lazy(loadWit);
const Lifecode = lazy(loadLifecode);
const Spark = lazy(loadSpark);
const RandomFont = lazy(loadRandomFont);
const PostDetails = lazy(loadPostDetails);

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
  useEffect(() => {
    const warmUpRoutes = () => {
      void Promise.allSettled([
        loadWarp(),
        loadWow(),
        loadWit(),
        loadLifecode(),
        loadSpark(),
        loadRandomFont(),
        loadPostDetails(),
      ]);
    };

    if (typeof window === "undefined") return;

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(warmUpRoutes, { timeout: 1500 });
      return () => window.cancelIdleCallback?.(idleId);
    }

    const timeoutId = window.setTimeout(warmUpRoutes, 300);
    return () => window.clearTimeout(timeoutId);
  }, []);

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
