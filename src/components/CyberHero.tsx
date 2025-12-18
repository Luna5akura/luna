// src/components/CyberHero.tsx
import React from 'react';
import { motion } from 'framer-motion';

export const CyberHero: React.FC = () => {
  return (
    // 【关键修改】
    // 1. absolute -> fixed: 这里的 fixed 让它固定在窗口，不随滚动条移动
    // 2. inset-0: 占满整个屏幕
    // 3. flex items-center justify-center: 确保内部的球体始终垂直水平居中
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
      {/* 3D 容器 */}
      <div className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px] [perspective:1000px]">
        
        {/* 月球主体 */}
        <motion.div 
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: 360, rotateX: 20 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-full h-full relative"
        >
            {/* 经线 (Longitudes) */}
            {[...Array(8)].map((_, i) => (
                <div 
                    key={`long-${i}`}
                    className="absolute inset-0 border-[1px] border-cyan-500/50 rounded-full"
                    style={{ transform: `rotateY(${i * 22.5}deg)` }}
                />
            ))}
            
            {/* 纬线 (Latitudes) */}
            {[...Array(9)].map((_, i) => (
                <div 
                    key={`lat-${i}`}
                    className="absolute border-[1px] border-cyan-500/80 rounded-full"
                    style={{ 
                        top: '50%', left: '50%',
                        width: `${Math.cos((i + 1) * 0.2) * 100}%`,
                        height: `${Math.cos((i + 1) * 0.2) * 100}%`,
                        transform: `translate(-50%, -50%) rotateX(90deg) translateZ(${i * 50 - 125}px)`
                    }}
                />
            ))}

            {/* 核心光晕 */}
            <div className="absolute inset-0 bg-cyan-300/5 rounded-full blur-[80px]" />
        </motion.div>
      </div>
      
      {/* 底部遮罩 - 这个也需要固定，让它始终在屏幕底部营造淡出效果 */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  );
};

export const PerspectiveGrid: React.FC = () => {
    return (
        // 这里本来就是 fixed，保持不变
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-[#050505]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    );
};