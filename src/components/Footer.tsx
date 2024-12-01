// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-100 shadow mt-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-center">
        <p className="text-sky-800">All original information in this website follow CC BY-SA 3.0 Unported creative commons license.</p>
      </div>
    </footer>
  );
};

export default Footer;
