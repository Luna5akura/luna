// src/App.tsx
import { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontToggleProvider } from "@/context/FontToggleContext";
import CustomCursor from "@/components/CustomCursor";
import { shouldHideCustomCursor, shouldHideSiteChrome, siteRoutes } from "@/routes/siteRoutes";

const DynamicCursor = () => {
  const location = useLocation();
  if (shouldHideCustomCursor(location.pathname)) return null;
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
  const location = useLocation();
  const hideSiteChrome = shouldHideSiteChrome(location.pathname);

  return (
    <FontToggleProvider>
      <div className="flex flex-col w-full min-h-screen overflow-x-clip bg-[#02050A]">
        {!hideSiteChrome && <Navbar />}
        
        <main className="flex-grow flex flex-col relative w-full">
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              {siteRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </Suspense>
        </main>
        
        {!hideSiteChrome && <Footer />}
      </div>

      <DynamicCursor />
    </FontToggleProvider>
  );
}

export default App;
