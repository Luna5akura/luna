// src/pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">关于我</h1>
      <p className="text-gray-700 leading-7">
        你好，我是你的名字，这是我的个人博客。在这里我分享关于前端开发、技术心得和生活感悟。
      </p>
    </div>
  );
};

export default About;
