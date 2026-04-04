// src/components/MarkdownContent.tsx
import { useEffect, useRef, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';

interface MarkdownContentProps {
  content: string;
  children?: ReactNode;
}

// 全局模板（保持 O(1) 克隆优势）
const terminalHeaderTemplate = document.createElement('template');
terminalHeaderTemplate.innerHTML = `
  <div class="terminal-header absolute top-0 left-0 w-full h-9 bg-[#02040a]/95 border-b border-[#0ea5e9]/30 flex items-center justify-between px-4 select-none backdrop-blur-md z-10 shadow-[0_2px_8px_-2px_rgba(14,165,233,0.15)]">
    <div class="flex gap-2 items-center">
      <div class="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_6px_#ef4444]"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500/90 shadow-[0_0_6px_#eab308]"></div>
      <div class="w-3 h-3 rounded-full bg-emerald-500/90 shadow-[0_0_6px_#10b981]"></div>
    </div>
    <div class="flex items-center gap-3 text-[10px] font-mono text-[#0ea5e9]/70 uppercase tracking-[1.5px]">
      <span class="process-id">PROCESS_0x00</span>
      <div class="w-px h-3 bg-[#0ea5e9]/40"></div>
      <span class="inline-flex items-center gap-1">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ea5e9] opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-[#0ea5e9]"></span>
        </span>
        LIVE
      </span>
    </div>
  </div>
`;

const smoothScrollTo = (targetY: number, duration: number = 800) => {
  const startY = window.scrollY;
  const difference = targetY - startY;
  let startTime: number | null = null;
  const step = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 5); // easeOutQuint
    window.scrollTo(0, startY + difference * ease);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

export const MarkdownContent = ({ content, children }: MarkdownContentProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 25, mass: 0.5 });

  // 代码块终端化（保持极致性能）
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const preElements = container.querySelectorAll('pre:not([data-sys-injected])');

    preElements.forEach((pre, index) => {
      pre.setAttribute('data-sys-injected', 'true');
      pre.style.position = 'relative';
      pre.style.paddingTop = '2.75rem';
      pre.classList.add('sys-code-block');

      const headerNode = terminalHeaderTemplate.content.cloneNode(true) as DocumentFragment;
      const hexIndex = `0x${index.toString(16).toUpperCase().padStart(2, '0')}`;
      const processIdNode = headerNode.querySelector('.process-id');
      if (processIdNode) processIdNode.textContent = `PROCESS_${hexIndex}`;
      pre.appendChild(headerNode);
    });

    // 外部链接
    const aElements = container.querySelectorAll('a[href^="http"]:not(.external-cyber-link)');
    aElements.forEach(a => {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
      a.classList.add('external-cyber-link');
    });
  }, [content]);

  // 段落揭示（升级为更柔和的数据流效果）
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
      { rootMargin: "0px 0px -40px 0px", threshold: 0.15 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [content]);

  // 内部链接处理（保持原有极致优化）
  useEffect(() => {
    const handleInternalLinks = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href?.startsWith('#') && !href.startsWith('#/')) {
        e.preventDefault();
        const id = href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          const targetY = element.getBoundingClientRect().top + window.scrollY - 100;
          smoothScrollTo(targetY, 800);

          // GPU 友好高亮
          element.animate([
            { filter: 'brightness(2.5)', transform: 'translateX(12px)', textShadow: '0 0 20px #22d3ee' },
            { filter: 'brightness(1)', transform: 'translateX(0)', textShadow: '0 0 0 transparent' }
          ], { duration: 1100, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });

          const params = new URLSearchParams(location.search);
          params.set('scrollTo', id);
          navigate(`${location.pathname}?${params.toString()}`, { replace: true });
        }
      }
    };
    document.addEventListener('click', handleInternalLinks, { capture: true });
    return () => document.removeEventListener('click', handleInternalLinks, { capture: true });
  }, [location, navigate]);

  // URL 参数滚动
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollToId = params.get('scrollTo');
    if (scrollToId) {
      setTimeout(() => {
        const element = document.getElementById(scrollToId);
        if (element) smoothScrollTo(element.getBoundingClientRect().top + window.scrollY - 100, 1000);
      }, 300);
    }
  }, [location.search]);

  return (
    <>
      <style>{`
        .markdown-sys-container {
          font-family: 'Inter', system-ui, sans-serif;
          color: #cbd5e1;
          line-height: 1.85;
          font-size: 1.05rem;
        }
        .markdown-sys-container h1,
        .markdown-sys-container h2,
        .markdown-sys-container h3 {
          font-family: 'JetBrains Mono', monospace;
          color: #f1f5f9;
          font-weight: 700;
          letter-spacing: -0.04em;
          position: relative;
          padding-left: 1.75rem;
        }
        .markdown-sys-container h2::before,
        .markdown-sys-container h3::before {
          content: '◉';
          position: absolute;
          left: 0;
          color: #0ea5e9;
          opacity: 0.6;
          font-size: 0.85em;
        }
        .markdown-sys-container h1::before { content: '◆'; }

        /* 代码块增强 */
        .sys-code-block {
          background: #02040a !important;
          border: 1px solid rgba(14, 165, 233, 0.25);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 
            0 10px 30px -10px rgba(0,0,0,0.9),
            inset 0 1px 0 rgba(255,255,255,0.05);
        }
        .terminal-header { 
          box-shadow: 0 1px 0 rgba(14,165,233,0.15) inset; 
        }

        /* 段落揭示 - 数据流效果 */
        .markdown-sys-container p:not(.sys-reveal-visible),
        .markdown-sys-container h1:not(.sys-reveal-visible),
        .markdown-sys-container h2:not(.sys-reveal-visible),
        .markdown-sys-container h3:not(.sys-reveal-visible),
        .markdown-sys-container h4:not(.sys-reveal-visible),
        .markdown-sys-container li:not(.sys-reveal-visible),
        .markdown-sys-container blockquote:not(.sys-reveal-visible),
        .markdown-sys-container img:not(.sys-reveal-visible) {
          opacity: 0;
          transform: translateY(24px) skewX(-3deg);
          filter: blur(4px);
          transition: none;
        }
        .sys-reveal-visible {
          opacity: 1;
          transform: translateY(0) skewX(0);
          filter: blur(0);
          will-change: opacity, transform, filter;
          transition: 
            opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.9s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.6s ease-out;
        }

        /* 选中文本 - 数据泄露感 */
        .markdown-sys-container ::selection {
          background: rgba(14, 165, 233, 0.35);
          color: #fff;
          text-shadow: 0 0 12px rgba(14, 165, 233, 0.9);
        }

        .external-cyber-link {
          color: #22d3ee;
          text-decoration: none;
          border-bottom: 1px dashed rgba(14, 165, 233, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .external-cyber-link:hover {
          border-bottom-style: solid;
          text-shadow: 0 0 12px #22d3ee;
          background: rgba(14, 165, 233, 0.08);
        }
      `}</style>

      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent origin-left z-[9999] shadow-[0_0_15px_#22d3ee] pointer-events-none will-change-transform"
      />

      <div className="markdown-sys-container relative w-full max-w-none" ref={containerRef}>
        {children}
      </div>
    </>
  );
};