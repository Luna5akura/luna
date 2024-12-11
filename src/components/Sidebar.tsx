// src/components/Sidebar.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

interface SidebarProps {
  categories: string[];
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

  return (
    <div className="fixed top-auto left-4 h-auto w-min p-4 bg-sky-100 rounded-lg shadow">
      <h2 className="font-semibold text-sky-900 mb-4
      lg:text-xl
      sm:text-base
      ">Categories</h2>
      <ul>
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
  );
};

export default Sidebar;
