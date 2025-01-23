// src/components/Sidebar.tsx
import React, {useEffect} from 'react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from "lucide-react";

interface SidebarProps {
  categories: string[];
  isExpanded: boolean;
  onExpandedChange: (expanded: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = (
  {
    categories,
    isExpanded,
    onExpandedChange
  }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('sidebarExpanded', JSON.stringify(isExpanded));
  }, [isExpanded]);

  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get('category');

  const handleCategoryClick = (category: string) => {
    if (category === 'All') {
      navigate('/');
    } else {
      navigate(`/?category=${category}`);
    }
  };

  return (
    <div
      className={`
        fixed
        transition-all duration-300 ease-in-out transform
        bg-sky-100 shadow
        overflow-hidden
        ${isExpanded
          ? 'w-[250px] h-auto p-4 rounded-lg'
          : 'w-10 h-10 p-0 rounded-lg'
        }
      `}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onExpandedChange(!isExpanded)}
        className={`
          transition-all duration-300 ease-in-out transform
          font-semibold 
          hover:bg-sky-600 
          focus:outline-none
          text-xs
          sm:text-xs
          lg:text-sm
          bg-sky-100 
          text-sky-900
          ${isExpanded
          ? 'absolute right-2 top-2 w-8 h-8'
          : 'w-full h-full rounded-lg'
        }
        `}
      >
        {isExpanded ? (
          <X className="h-4 w-4 text-sky-900" />
        ) : (
          <Menu className="h-4 w-4 text-sky-900" />
        )}
      </Button>

      <div className={`
        transition-all duration-300 ease-in-out transform
        ${isExpanded
        ? 'opacity-100 mt-8'
        : 'opacity-0 invisible h-0'
      }
      `}>
        <h2 className="font-semibold text-sky-900 mb-4
        lg:text-xl
        sm:text-base
        ">Categories</h2>
        <ul className="w-full pr-2">
          <li className="mb-2">
            <Button
              className={`w-full justify-start font-semibold hover:bg-sky-600 focus:outline-none
              text-xs
              sm:text-xs
              lg:text-sm
              ${selectedCategory === null
                ? 'bg-sky-900 text-sky-100'
                : 'bg-sky-100 text-sky-900'}`}
              onClick={() => handleCategoryClick('All')}
            >
              All
            </Button>
          </li>
          {categories.map((category) => (
            <li key={category} className="mb-2">
              <Button
                className={`w-full justify-start font-semibold hover:bg-sky-600 focus:outline-none text-left
                text-xs break-words whitespace-normal
                sm:text-xs sm:break-words sm:whitespace-normal 
                lg:text-sm lg:break-normal lg:whitespace-nowrap 
                ${selectedCategory === category
                  ? 'bg-sky-900 text-sky-100'
                  : 'bg-sky-100 text-sky-900'}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
