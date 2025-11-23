import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

interface SidebarProps {
  categories: string[];
  isExpanded: boolean; // 保留接口兼容，但不再控制显隐
  onExpandedChange: (expanded: boolean) => void;
}

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
    <div className="flex flex-col gap-2">
      <div className="text-[10px] uppercase text-gray-600 font-bold mb-4 tracking-widest border-b border-gray-800 pb-2">
        // FILTERS
      </div>
      
      {/* 容器：桌面端垂直，移动端横向滚动 */}
      <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-4 lg:gap-2 pb-2 lg:pb-0 scrollbar-none">
        {categoriesWithAll.map((category) => {
          const isActive = (category === 'All' && !selectedCategory) || selectedCategory === category;
          
          return (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={cn(
                "group flex items-center text-sm font-mono transition-all duration-300 whitespace-nowrap cursor-hover text-left",
                isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
              )}
            >
              {/* 激活指示器 */}
              <span className={cn(
                "inline-block mr-2 transition-all duration-300",
                isActive ? "opacity-100 text-cyan-400" : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"
              )}>
                {'>'}
              </span>
              
              <span className={cn(
                "tracking-tight transition-all duration-300",
                isActive ? "tracking-widest" : "group-hover:tracking-wider"
              )}>
                {category.toUpperCase()}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;