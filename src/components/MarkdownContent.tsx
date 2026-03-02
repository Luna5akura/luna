// src/components/MarkdownContent.tsx
import { useEffect, useRef, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';

interface MarkdownContentProps {
  content: string;
  children?: ReactNode;
}

// ==========================================
// 【顶级炫技点 1：五次贝塞尔曲线平滑滚动算法】
// 抛弃原生生硬的 scrollIntoView，手写物理缓动函数，接管浏览器滚动轴
// ==========================================
const smoothScrollTo = (targetY: number, duration: number = 800) => {
  const startY = window.scrollY;
  const difference = targetY - startY;
  let startTime: number | null = null;

  // 五次缓出算法 (easeOutQuint)：起步极快，结尾极度丝滑
  const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

  const step = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    
    window.scrollTo(0, startY + difference * easeOutQuint(progress));
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

export const MarkdownContent = ({ content, children }: MarkdownContentProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  // 页面全局阅读进度条
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 25, mass: 0.5 });

  // ==========================================
  // 【顶级炫技点 2：DOM 外科手术级改装 (Terminal UI Injection)】
  // 与其写复杂的 Markdown 插件，不如直接在真实 DOM 阶段进行改装
  // ==========================================
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // 1. 获取所有渲染出的代码块
    const preElements = container.querySelectorAll('pre');
    preElements.forEach((pre, index) => {
      // 避免重复注入
      if (pre.getAttribute('data-sys-injected')) return;
      pre.setAttribute('data-sys-injected', 'true');

      // 强行修改代码块的内边距，为自定义 Header 腾出空间
      pre.style.position = 'relative';
      pre.style.paddingTop = '2.5rem';
      pre.classList.add('sys-code-block');

      // 创建赛博风格终端 Header
      const header = document.createElement('div');
      const hexIndex = `0x${index.toString(16).toUpperCase().padStart(2, '0')}`;
      
      header.className = 'absolute top-0 left-0 w-full h-8 bg-[#050505]/90 border-b border-cyan-900/50 flex items-center justify-between px-3 select-none backdrop-blur-sm z-10';
      header.innerHTML = `
        <div class="flex gap-1.5 items-center">
          <div class="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
        </div>
        <div class="text-[9px] font-mono text-cyan-700 uppercase tracking-widest flex items-center gap-2">
          <span>PROCESS_${hexIndex}</span>
          <span class="w-1 h-3 bg-cyan-500 animate-pulse"></span>
        </div>
      `;
      pre.appendChild(header);
    });

    // 2. 为外部链接自动添加 target="_blank" 和极客风下划线
    const aElements = container.querySelectorAll('a');
    aElements.forEach(a => {
      if (a.getAttribute('href')?.startsWith('http')) {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
        a.classList.add('external-cyber-link');
      }
    });

  }, [content]);

  // ==========================================
  // 【顶级炫技点 3：视口交汇解密引擎 (Intersection Revealer)】
  // 让长文在滚动时，各段落如同数据流一般动态恢复形变
  // ==========================================
  useEffect(() => {
    if (!containerRef.current) return;
    const elements = containerRef.current.querySelectorAll('p, h1, h2, h3, h4, li, blockquote, img');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sys-reveal-visible');
            // 暴露一次后取消观察，节省性能
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -50px 0px", threshold: 0 } // 在距离底部 50px 时触发
    );

    elements.forEach(el => {
      el.classList.add('sys-reveal-hidden');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [content]);

  // ==========================================
  // 【顶级炫技点 4：内部锚点物理拦截与目标高亮曝光】
  // ==========================================
  useEffect(() => {
    const handleInternalLinks = (e: MouseEvent) => {
      let target = e.target as HTMLElement;
      while (target && target.tagName !== 'A') {
        target = target.parentElement as HTMLElement;
      }

      if (target?.tagName === 'A') {
        const href = target.getAttribute('href');
        
        if (href?.startsWith('#') && !href.startsWith('#/')) {
          e.preventDefault();
          const id = href.slice(1);
          const element = document.getElementById(id);

          if (element) {
            // 获取准确的物理 Y 轴坐标，减去 100px 为顶部导航栏留出呼吸空间
            const targetY = element.getBoundingClientRect().top + window.scrollY - 100;
            smoothScrollTo(targetY, 800);
            
            // 【Web Animations API (WAAPI) 硬件加速曝光】
            // 脱离 CSS class 的限制，利用原生 JS 发起物理碰撞级高亮
            element.animate([
              { 
                filter: 'brightness(3) contrast(1.5)', 
                transform: 'translateX(15px)',
                color: '#22d3ee',
                textShadow: '0 0 20px #06b6d4',
                borderLeft: '4px solid #06b6d4',
                paddingLeft: '16px'
              },
              { 
                filter: 'brightness(1) contrast(1)', 
                transform: 'translateX(0px)',
                color: 'inherit',
                textShadow: '0 0 0px transparent',
                borderLeft: '0px solid transparent',
                paddingLeft: '0px'
              }
            ], { 
              duration: 1200, 
              easing: 'cubic-bezier(0.16, 1, 0.3, 1)' 
            });

            // 更新地址栏，保持状态可被分享
            const params = new URLSearchParams(location.search);
            params.set('scrollTo', id);
            navigate(`${location.pathname}?${params.toString()}`, { replace: true });
          }
        }
      }
    };

    document.addEventListener('click', handleInternalLinks, true);
    return () => document.removeEventListener('click', handleInternalLinks, true);
  }, [location, navigate]);

  // 初次加载时的带参定位
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollToId = params.get('scrollTo');
    if (scrollToId) {
      setTimeout(() => {
        const element = document.getElementById(scrollToId);
        if (element) {
          const targetY = element.getBoundingClientRect().top + window.scrollY - 100;
          smoothScrollTo(targetY, 1000);
        }
      }, 300); // 留出 DOM 渲染时间
    }
  }, [location.search]);

  return (
    <>
      <style>{`
        /* --- 动态解密曝光动画基类 --- */
        .sys-reveal-hidden {
          opacity: 0;
          transform: translateY(20px) skewX(-5deg);
          filter: blur(5px);
          transition: none;
        }

        .sys-reveal-visible {
          opacity: 1;
          transform: translateY(0) skewX(0);
          filter: blur(0);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.5s ease-out;
        }

        /* --- 极客风文本选择器 (Selection) --- */
        .markdown-sys-container ::selection {
          background: rgba(34, 211, 238, 0.3); /* text-cyan-400 */
          color: #fff;
          text-shadow: 0 0 8px rgba(34, 211, 238, 0.8);
        }

        /* --- Markdown 核心排版定制 --- */
        .markdown-sys-container {
          font-family: 'Inter', system-ui, sans-serif;
          color: #cbd5e1; /* slate-300 */
          line-height: 1.8;
        }

        .markdown-sys-container h1, 
        .markdown-sys-container h2, 
        .markdown-sys-container h3 {
          font-family: 'JetBrains Mono', monospace;
          color: #f1f5f9; /* slate-100 */
          font-weight: 700;
          letter-spacing: -0.05em;
          margin-top: 2.5em;
          margin-bottom: 1em;
          position: relative;
        }

        /* 标题前的光标装饰 */
        .markdown-sys-container h2::before,
        .markdown-sys-container h3::before {
          content: '>';
          position: absolute;
          left: -1.5em;
          color: #06b6d4; /* cyan-500 */
          opacity: 0.5;
        }

        /* 外部链接动效 */
        .external-cyber-link {
          color: #22d3ee;
          text-decoration: none;
          border-bottom: 1px dashed rgba(34, 211, 238, 0.4);
          transition: all 0.3s ease;
        }
        
        .external-cyber-link:hover {
          background: rgba(34, 211, 238, 0.1);
          border-bottom: 1px solid #22d3ee;
          text-shadow: 0 0 8px rgba(34, 211, 238, 0.6);
        }

        /* 代码块基础定制 */
        .sys-code-block {
          background: #020617 !important; /* slate-950 */
          border: 1px solid rgba(8, 145, 178, 0.3); /* cyan-700/30 */
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.8);
        }
        
        .sys-code-block code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85em;
        }
      `}</style>

      {/* 顶部固定视界的阅读全息进度条 */}
      <motion.div 
        style={{ scaleX }} 
        className="fixed top-0 left-0 w-full h-[2px] bg-cyan-400 origin-left z-[9999] shadow-[0_0_15px_#22d3ee] pointer-events-none" 
      />

      <div className="markdown-sys-container relative w-full" ref={containerRef}>
        {children}
      </div>
    </>
  );
};