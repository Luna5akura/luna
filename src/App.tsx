// src/App.tsx
import { Routes, Route, useLocation } from "react-router-dom";
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

// ==========================================
// 智能游标管理器 (Smart Cursor Manager)
// 侦测当前路由，如果进入了充满炫技的 Skill 页面，
// 则卸载普通游标，让位给 Skill 页面的 QuantumCursor 量子物理游标。
// ==========================================
const DynamicCursor = () => {
  const location = useLocation();
  if (location.pathname === "/skill") return null;
  return <CustomCursor />;
};

function App() {
  return (
    <FontToggleProvider>
      {/* 
        【神级修复点 1】：min-h-scree 修复为 min-h-screen
        【神级修复点 2】：w-screen 替换为 w-full，完美解决 15px 滚动条导致的横向溢出问题！
        【神级修复点 3】：加入 overflow-x-clip。注意是 clip 不是 hidden！
          它能像剪刀一样裁剪掉意外突出的 3D 元素，但【绝对不会】像 overflow-x-hidden 那样杀死局部的 position: sticky！
      */}
      <div className="flex flex-col w-full min-h-screen overflow-x-clip bg-[#02050A]">
        <Navbar />
        
        {/* main 作为 flex-grow 必须具备完整的宽度和相对定位，为 3D 提供稳定的计算原点 */}
        <main className="flex-grow flex flex-col relative w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/warp" element={<Warp />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/about" element={<About />} />
            <Route path="/lifecode" element={<Lifecode />} />
            <Route path="/posts/*" element={<PostDetails />} /> 
          </Routes>
        </main>
        
        <Footer />
      </div>

      {/* 使用智能游标替代固定的 CustomCursor */}
      <DynamicCursor />
    </FontToggleProvider>
  );
}

export default App;