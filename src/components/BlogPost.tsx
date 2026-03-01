import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '@/types';
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // ==========================================
  // 【炫技点 1 & 3：3D 物理引擎 & 光线追踪坐标】
  // ==========================================
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 用于计算 3D 翻转的物理值 (加入弹簧阻尼，让回弹如丝般顺滑)
  const rotateX = useSpring(useMotionValue(0), { damping: 20, stiffness: 150, mass: 0.5 });
  const rotateY = useSpring(useMotionValue(0), { damping: 20, stiffness: 150, mass: 0.5 });

  // 探照灯的透明度控制
  const spotlightOpacity = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // 计算鼠标在卡片内部的相对坐标
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    
    mouseX.set(clientX);
    mouseY.set(clientY);

    // 计算中心偏移量，控制翻转角度 (最大翻转 10 度)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((clientY - centerY) / centerY) * -10;
    const rotateYValue = ((clientX - centerX) / centerX) * 10;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseEnter = () => {
    spotlightOpacity.set(1);
  };

  const handleMouseLeave = () => {
    // 鼠标离开时，不仅关闭探照灯，还要把 3D 角度完美回弹到 0
    spotlightOpacity.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  // 动态生成基于鼠标坐标的探照灯渐变
  const backgroundSpotlight = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      rgba(236, 72, 153, 0.15),
      transparent 80%
    )
  `;

  // 动态生成追随鼠标的高光边框（极其硬核的 Mask 技巧）
  const borderSpotlight = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      rgba(236, 72, 153, 0.8),
      transparent 80%
    )
  `;

  return (
    // 外部透视容器
    <div className="group relative w-full mb-12 perspective-[1200px]">
      <Link to={`/posts/${post.contentKey}`} className="block relative">
        
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d" // 【核心】开启内部子元素的 3D 空间
          }}
          className="
            relative z-10 w-full rounded-xl
            border border-slate-800/50 bg-slate-900/20 backdrop-blur-sm
            p-6 transition-colors duration-500 overflow-hidden
            will-change-transform
          "
        >
          {/* 【炫技点 3】鼠标跟随的手电筒背景 */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
            style={{ 
              background: backgroundSpotlight,
              opacity: spotlightOpacity
            }}
          />

          {/* 【炫技点 3】流光边缘追踪：利用 mask-image 裁切出跟随鼠标的高光边框 */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-0 rounded-xl transition-opacity duration-300 border-[2px] border-transparent"
            style={{ 
              background: borderSpotlight,
              opacity: spotlightOpacity,
              WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude'
            }}
          />

          {/* 内容区：利用 translateZ 实现裸眼 3D 悬浮效果 */}
          <div className="relative z-10 flex flex-col h-full transform-gpu" style={{ transform: "translateZ(40px)" }}>
            
            <div className="flex items-baseline justify-between mb-4" style={{ transform: "translateZ(20px)" }}>
              <span className="text-xs font-mono text-pink-500/80 tracking-widest uppercase">
                {post.date}
              </span>
              <span className="text-xs font-mono text-slate-500 group-hover:text-pink-400 transition-colors">
                [ {post.author} ]
              </span>
            </div>

            {/* View Transitions API 注入 */}
            <h2 
              className="
                text-3xl md:text-4xl font-serif font-medium text-slate-200 
                group-hover:text-white transition-all duration-500 ease-out
                drop-shadow-[0_0_15px_rgba(236,72,153,0)] group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]
              "
              style={{ 
                transform: "translateZ(60px)", // 标题离屏幕最近，浮出最高
                viewTransitionName: `post-title-${post.id}` 
              }}
            >
              {post.title}
            </h2>

            <p 
              className="mt-4 text-slate-500 text-sm leading-relaxed max-w-2xl line-clamp-2 group-hover:text-slate-400 transition-colors"
              style={{ transform: "translateZ(30px)" }}
            >
              {post.excerpt}
            </p>

            {/* 【炫技点 4：弹簧微重力箭头】 */}
            <div 
              className="mt-8 flex items-center text-slate-500 group-hover:text-pink-400 transition-colors w-max"
              style={{ transform: "translateZ(50px)" }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] mr-2">
                Initialize_Read
              </span>
              <div className="relative overflow-hidden w-6 h-6 flex items-center justify-center rounded-full bg-slate-800/50 group-hover:bg-pink-500/20 transition-colors">
                 <motion.div
                   className="absolute"
                   // 极致细节：初始状态居中，Hover 时往右上角飞出，同时另一个从左下角飞入
                   initial={{ x: 0, y: 0 }}
                   whileHover={{ x: 20, y: -20 }}
                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
                 >
                    <ArrowUpRight className="w-3 h-3" />
                 </motion.div>
                 <motion.div
                   className="absolute"
                   initial={{ x: -20, y: 20 }}
                   whileHover={{ x: 0, y: 0 }}
                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
                 >
                    <ArrowUpRight className="w-3 h-3 text-pink-400" />
                 </motion.div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default BlogPost;