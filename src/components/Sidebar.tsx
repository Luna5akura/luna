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
    <div className="fixed top-auto left-4 h-auto w-48 p-4 bg-sky-100 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-sky-900 mb-4">Categories</h2>
      <ul>
        <li className="mb-2">
          <Button
            className={`w-full justify-start font-semibold hover:bg-sky-600 focus:outline-none
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
              className={`w-full justify-start font-semibold hover:bg-sky-600 focus:outline-none
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
