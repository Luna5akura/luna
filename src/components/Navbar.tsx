// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Switch } from "@/components/ui/switch";
import { useFontToggle } from "@/context/FontToggleContext";

const Navbar: React.FC = () => {
  const { fontToggle, setFontToggle } = useFontToggle();

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (fontToggle) {
      root.classList.add('alt-font');
    } else {
      root.classList.remove('alt-font');
    }
  }, [fontToggle]);

  return (
    <nav className="bg-sky-100 shadow">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="" className="text-xl font-bold text-sky-900 hover:text-sky-600">
          Luna
        </Link>
        <div className="my-auto flex items-center justify-between">
          <Switch
            className="mr-4"
            checked={fontToggle}
            onCheckedChange={setFontToggle}
          />
          <Link to="warp" className="font-semibold text-sky-900 hover:text-sky-600 mx-4">
            Warp
          </Link>
          <Link to="show" className="font-semibold text-sky-900 hover:text-sky-600 mx-4">
            World
          </Link>
          <Link to="about" className="font-semibold text-sky-900 hover:text-sky-600 mx-4">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
