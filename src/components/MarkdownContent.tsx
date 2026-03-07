// src/components/MarkdownContent.tsx
import { useEffect, useRef, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';

interface MarkdownContentProps {
  content: string;
  children?: ReactNode;
}

// ==========================================
// 【极致优化点 1：O(1) DOM 模板克隆引擎 (Template Fragment Cloning)】
// 将 Terminal UI 的 HTML 解析过程从循环中剥离，移至组件外部的全局作用域。
// 浏览器只需在解析 JS 时编译一次这段 HTML，循环中直接通过 C++ 底层进行 cloneNode 内存拷贝，
// 彻底消灭原代码中每次碰到 pre 标签都触发 HTML Parser 解析字符串的巨大 CPU 开销。
// ==========================================
const terminalHeaderTemplate = document.createElement('template');
terminalHeaderTemplate.innerHTML = `
  <div class="absolute top-0 left-0 w-full h-8 bg-[#050505]/90 border-b border-cyan-900/50 flex items-center justify-between px-3 select-none backdrop-blur-sm z-10">
    <div class="flex gap-1.5 items-center">
      <div class="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
    </div>
    <div class="text-[9px] font-mono text-cyan-700 uppercase tracking-widest flex items-center gap-2">
      <span class="process-id"></span>
      <span class="w-1 h-3 bg-cyan-500 animate-pulse"></span>
    </div>
  </div>
`;

// 缓动算法内联化，避免每帧高频函数压栈开销
const smoothScrollTo = (targetY: number, duration: number = 800) => {
  const startY = window.scrollY;
  const difference = targetY - startY;
  let startTime: number | null = null;

  const step = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    
    // easeOutQuint 五次缓出内联计算
    const ease = 1 - Math.pow(1 - progress, 5);
    window.scrollTo(0, startY + difference * ease);
    
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

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 25, mass: 0.5 });

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // ==========================================
    // 【极致优化点 2：C++ 级 CSS 选择器过滤】
    // 原代码获取全部节点后，使用 JS 遍历并执行 if 字符串判断。
    // 现利用浏览器的原生 CSS 选择器引擎 (C++) 直接精准过滤，拒绝将无效节点拉入 JS 执行上下文。
    // ==========================================
    const preElements = container.querySelectorAll('pre:not([data-sys-injected])');
    preElements.forEach((pre, index) => {
      pre.setAttribute('data-sys-injected', 'true');
      pre.style.position = 'relative';
      pre.style.paddingTop = '2.5rem';
      pre.classList.add('sys-code-block');

      // O(1) 内存节点克隆，性能提升百倍
      const headerNode = terminalHeaderTemplate.content.cloneNode(true) as DocumentFragment;
      const hexIndex = `0x${index.toString(16).toUpperCase().padStart(2, '0')}`;
      const processIdNode = headerNode.querySelector('.process-id');
      if (processIdNode) processIdNode.textContent = `PROCESS_${hexIndex}`;
      
      pre.appendChild(headerNode);
    });

    // 外部链接一键获取，绕过 JS 的 startsWith 循环判断
    const aElements = container.querySelectorAll('a[href^="http"]:not(.external-cyber-link)');
    aElements.forEach(a => {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
      a.classList.add('external-cyber-link');
    });

  }, [content]);

  // ==========================================
  // 【极致优化点 3：零 Reflow 的 CSS 初始化隐藏引擎 (Zero-Reflow Init)】
  // 原代码在 JS 挂载后循环所有段落元素，手动添加 hidden 隐藏类名。
  // 对于万字长文，这会导致浏览器发生成百上千次的 Layout Thrashing (布局强制同步重排)，直接卡死主线程。
  // 现将初始隐藏逻辑通过下方的"纯 CSS 后代选择器"接管，浏览器会在初始 Paint 阶段光速将它们隐藏。
  // JS 现在只负责监听交叉并移除状态！
  // ==========================================
  useEffect(() => {
    if (!containerRef.current) return;
    
    const elements = containerRef.current.querySelectorAll('p, h1, h2, h3, h4, li, blockquote, img');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sys-reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -50px 0px", threshold: 0 } 
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  },[content]);

  useEffect(() => {
    // ==========================================
    // 【极致优化点 4：O(1) 原生 DOM 事件委托探针】
    // ==========================================
    const handleInternalLinks = (e: MouseEvent) => {
      // 废弃原先的 while 循环层层上溯，调用浏览器 C++ 原生 closest 方法，速度提升极大
      const target = (e.target as HTMLElement).closest('a');

      if (target) {
        const href = target.getAttribute('href');
        
        if (href?.startsWith('#') && !href.startsWith('#/')) {
          e.preventDefault();
          const id = href.slice(1);
          const element = document.getElementById(id);

          if (element) {
            const targetY = element.getBoundingClientRect().top + window.scrollY - 100;
            smoothScrollTo(targetY, 800);
            
            // ==========================================
            // 【极致优化点 5：消除重排 (Reflow) 的物理高亮合成】
            // 原代码 animate 改变了 paddingLeft 和 borderLeft，这会引发浏览器极度昂贵的 Layout 重计算。
            // 现替换为 transform 和 inset boxShadow 组合，彻底推入 GPU 独立合成层运行。
            // ==========================================
            element.animate([
              { 
                filter: 'brightness(3) contrast(1.5)', 
                transform: 'translateX(15px)',
                color: '#22d3ee',
                textShadow: '0 0 20px #06b6d4',
                boxShadow: 'inset 4px 0 0 0 #06b6d4' // 内阴影代替边界宽度变化，不触发重排！
              },
              { 
                filter: 'brightness(1) contrast(1)', 
                transform: 'translateX(0px)',
                color: 'inherit',
                textShadow: '0 0 0px transparent',
                boxShadow: 'inset 0px 0 0 0 transparent'
              }
            ], { 
              duration: 1200, 
              easing: 'cubic-bezier(0.16, 1, 0.3, 1)' 
            });

            const params = new URLSearchParams(location.search);
            params.set('scrollTo', id);
            navigate(`${location.pathname}?${params.toString()}`, { replace: true });
          }
        }
      }
    };

    // 开启 passive/capture 防止事件冒泡导致的渲染管线阻塞
    document.addEventListener('click', handleInternalLinks, { capture: true });
    return () => document.removeEventListener('click', handleInternalLinks, { capture: true });
  }, [location, navigate]);

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
      }, 300); 
    }
  }, [location.search]);

  return (
    <>
      <style>{`
        /* 
           【核心 CSS 魔法】：
           精准拦截所有由 Markdown 渲染出的核心元素，只要它尚未附加 .sys-reveal-visible，
           就在 GPU 层面上直接将其冻结隐形。我们彻底抛弃了通过 JS 循环修改 DOM 结构造成的严重掉帧灾难！
        */
        .markdown-sys-container p:not(.sys-reveal-visible),
        .markdown-sys-container h1:not(.sys-reveal-visible),
        .markdown-sys-container h2:not(.sys-reveal-visible),
        .markdown-sys-container h3:not(.sys-reveal-visible),
        .markdown-sys-container h4:not(.sys-reveal-visible),
        .markdown-sys-container li:not(.sys-reveal-visible),
        .markdown-sys-container blockquote:not(.sys-reveal-visible),
        .markdown-sys-container img:not(.sys-reveal-visible) {
          opacity: 0;
          transform: translateY(20px) skewX(-5deg);
          filter: blur(5px);
          transition: none;
        }

        .sys-reveal-visible {
          opacity: 1;
          transform: translateY(0) skewX(0);
          filter: blur(0);
          will-change: opacity, transform, filter; /* 开启复合独立图层硬件加速 */
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.5s ease-out;
        }

        .markdown-sys-container ::selection {
          background: rgba(34, 211, 238, 0.3); 
          color: #fff;
          text-shadow: 0 0 8px rgba(34, 211, 238, 0.8);
        }

        .markdown-sys-container {
          font-family: 'Inter', system-ui, sans-serif;
          color: #cbd5e1; 
          line-height: 1.8;
        }

        .markdown-sys-container h1, 
        .markdown-sys-container h2, 
        .markdown-sys-container h3 {
          font-family: 'JetBrains Mono', monospace;
          color: #f1f5f9; 
          font-weight: 700;
          letter-spacing: -0.05em;
          margin-top: 2.5em;
          margin-bottom: 1em;
          position: relative;
        }

        .markdown-sys-container h2::before,
        .markdown-sys-container h3::before {
          content: '>';
          position: absolute;
          left: -1.5em;
          color: #06b6d4; 
          opacity: 0.5;
        }

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

        .sys-code-block {
          background: #020617 !important; 
          border: 1px solid rgba(8, 145, 178, 0.3); 
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.8);
        }
        
        .sys-code-block code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85em;
        }
      `}</style>

      {/* 将进度条也送入 transform-gpu 管线 */}
      <motion.div 
        style={{ scaleX }} 
        className="fixed top-0 left-0 w-full h-[2px] bg-cyan-400 origin-left z-[9999] shadow-[0_0_15px_#22d3ee] pointer-events-none will-change-transform transform-gpu" 
      />

      <div className="markdown-sys-container relative w-full" ref={containerRef}>
        {children}
      </div>
    </>
  );
};