// src/pages/Warp.tsx
import React from 'react';
import { motion } from 'framer-motion';

const portals = [
    { title: "Cameudis", url: "https://www.cameudis.com/", desc: "Murderous Utopia" },
    { title: "IceLava", url: "https://icelava.top", desc: "No Code No Life" },
    { title: "Twilight", url: "https://blog.iin0.cn/", desc: "Sound of Silence" },
    { title: "Sapium", url: "https://www.sapium.site", desc: "Thinking Space" },
];

const Warp: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 md:p-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
                {portals.map((portal, index) => (
                    <motion.a
                        key={portal.title}
                        href={portal.url}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="
                            group relative h-40 md:h-64 border border-white/10 p-6 flex flex-col justify-between
                            hover:bg-white hover:text-black transition-colors duration-500 cursor-hover overflow-hidden
                        "
                    >
                        {/* 装饰角标 */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white group-hover:border-black transition-colors"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white group-hover:border-black transition-colors"></div>

                        <div className="flex justify-between items-start">
                             <span className="font-mono text-xs opacity-50">0{index + 1}</span>
                             <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                        </div>

                        <div>
                            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">{portal.title}</h3>
                            <p className="font-mono text-xs mt-2 opacity-60 group-hover:opacity-100">{portal.desc}</p>
                        </div>
                        
                        {/* 巨大的背景文字装饰 */}
                        <span className="absolute -bottom-4 -right-4 text-9xl font-black opacity-5 select-none pointer-events-none group-hover:opacity-10 transition-opacity">
                            {portal.title[0]}
                        </span>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Warp;