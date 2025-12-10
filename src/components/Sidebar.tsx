// src/components/Sidebar.tsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useScrambleText } from '@/hooks/useScrambleText';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 50 }
  }
};

interface SidebarProps {
  categories: string[];
  isExpanded: boolean;
  onExpandedChange: (expanded: boolean) => void;
}
// 子组件：单个分类项
const CategoryItem = ({ category, isActive, index, onClick }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const hexIndex = `0x${index.toString(16).toUpperCase().padStart(2, '0')}`;
  const scrambledText = useScrambleText(category.toUpperCase(), 20);
  return (
    <motion.button
      variants={itemVariants}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative flex w-full p-1 text-sm font-mono border-l-2 transition-all duration-300 cursor-hover overflow-visible", // overflow-visible 允许光晕外溢
        "items-start justify-between",
        isActive
          ? "border-cyan-500 bg-cyan-950/30 text-cyan-400 pl-4" // 选中时增加左padding，产生位移感
          : cn("border-transparent pl-1 text-gray-500",
            "hover:text-cyan-950" )
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* 选中态：RGB 分离 Glitch 装饰 (伪元素模拟) */}
      {isActive && (
        <>
          <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-red-500 animate-pulse opacity-50 translate-x-[-2px]" />
          <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500 animate-pulse opacity-50 translate-x-[2px]" />
        </>
      )}
      {/* 背景扫描线装饰 - 保持你的原设计，很好 */}
      <div className={cn(
        "absolute inset-0 pointer-events-none transition-opacity duration-500",
        isActive || isHovered ? "opacity-100" : "opacity-0"
      )}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#06b6d410_50%,transparent_100%)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
      <div className="flex items-start gap-3 relative z-10 text-left max-w-[85%]">
        <span className={cn(
          "text-[10px] pt-0.5 shrink-0 transition-colors duration-300 font-mono",
          isActive ? "text-cyan-300" : "text-gray-700 group-hover:text-gray-500"
        )}>
          [{hexIndex}]
        </span>
        <span className={cn(
          "tracking-wider font-bold transition-all duration-300 break-words leading-tight relative",
          // 选中时增加文字发光
          isActive && "drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] text-shadow-cyan"
        )}>
          {isHovered ? scrambledText : category.toUpperCase()}
        </span>
      </div>
      {/* 添加底线效果 */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 group-hover:bg-cyan-400 group-hover:h-[2px] transition-all duration-300 ease-out" />
      {/* 前卫特效：悬停时在背景出现巨大的淡入文字或条纹 */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none whitespace-nowrap overflow-hidden">
        <span className="text-[100px] font-black italic text-white tracking-tighter translate-x-10 group-hover:translate-x-0 transition-transform duration-700">
          |||||||||| &gt;&gt;&gt;
        </span>
      </div>
    </motion.button>
  );
};
const Sidebar: React.FC<SidebarProps> = ({ categories }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get('category');
  const handleCategoryClick = (category: string) => {
    if (category === 'All') {
      navigate('/');
    } else {
      navigate(`/?category=${category}`);
    }
  };
  const categoriesWithAll = ['All', ...categories];
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col w-full"
    >
      {/* 标题区域 */}
      <div className="relative pl-1 mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-800" />
        <div className="text-[10px] uppercase text-gray-500 font-bold tracking-[0.2em] pl-3 flex items-center gap-2">
          DIRECTORY // INDEX
        </div>
      </div>
    
      {/* 列表容器 */}
      <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 scrollbar-none mask-linear-fade">
        {categoriesWithAll.map((category, index) => {
          const isActive = (category === 'All' && !selectedCategory) || selectedCategory === category;
         
          return (
            <CategoryItem
              key={category}
              index={index}
              category={category}
              isActive={isActive}
              onClick={() => handleCategoryClick(category)}
            />
          );
        })}
      </div>
     
    </motion.div>
  );
};
export default Sidebar;