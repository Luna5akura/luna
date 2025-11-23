// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-white/30 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center space-y-2">
        <p className="text-slate-600 text-sm font-medium">
          Love is murderous utopia.
        </p>
        <p className="text-slate-400 text-xs">
          © {new Date().getFullYear()} Luna. CC BY-SA 3.0 Unported.
        </p>
      </div>
    </footer>
  );
};

export default Footer;