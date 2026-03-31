// src/components/MarkdownContent.tsx
import { useEffect, useRef, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';

interface MarkdownContentProps {
  content: string;
  children?: ReactNode;
}

const terminalHeaderTemplate = document.createElement('template');
terminalHeaderTemplate.innerHTML = `
  <div class="absolute top-0 left-0 w-full h-7 bg-[#c0c0c0] border-b border-gray-600 flex items-center justify-between px-3 select-none z-10">
    <div class="flex gap-1.5 items-center">
      <div class="w-2.5 h-2.5 rounded-sm bg-gray-600 shadow-[inset_-1px_-1px_0px_#ffffff,inset_1px_1px_0px_#808080]"></div>
      <div class="w-2.5 h-2.5 rounded-sm bg-gray-600 shadow-[inset_-1px_-1px_0px_#ffffff,inset_1px_1px_0px_#808080]"></div>
      <div class="w-2.5 h-2.5 rounded-sm bg-gray-600 shadow-[inset_-1px_-1px_0px_#ffffff,inset_1px_1px_0px_#808080]"></div>
    </div>
    <div class="text-[9px] font-mono text-gray-700 uppercase tracking-wider flex items-center gap-2">
      <span class="process-id"></span>
      <span class="w-1 h-3 bg-gray-500 animate-pulse"></span>
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
    const ease = 1 - Math.pow(1 - progress, 5);
    window.scrollTo(0, startY + difference * ease);
    if (progress < 1) window.requestAnimationFrame(step);
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
    const preElements = container.querySelectorAll('pre:not([data-sys-injected])');
    preElements.forEach((pre, index) => {
      pre.setAttribute('data-sys-injected', 'true');
      pre.style.position = 'relative';
      pre.style.paddingTop = '1.75rem';
      pre.classList.add('sys-code-block');
      const headerNode = terminalHeaderTemplate.content.cloneNode(true) as DocumentFragment;
      const hexIndex = `0x${index.toString(16).toUpperCase().padStart(2, '0')}`;
      const processIdNode = headerNode.querySelector('.process-id');
      if (processIdNode) processIdNode.textContent = `PROCESS_${hexIndex}`;
      pre.appendChild(headerNode);
    });
    const aElements = container.querySelectorAll('a[href^="http"]:not(.external-cyber-link)');
    aElements.forEach(a => {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
      a.classList.add('external-cyber-link');
    });
  }, [content]);

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
  }, [content]);

  useEffect(() => {
    const handleInternalLinks = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target) {
        const href = target.getAttribute('href');
        if (href?.startsWith('#') && !href.startsWith('#/')) {
          e.preventDefault();
          const id = href.slice(1);
          const element = document.getElementById(id);
          if (element) {
            const targetY = element.getBoundingClientRect().top + window.scrollY - 80;
            smoothScrollTo(targetY, 800);
            element.animate([
              { outline: '2px solid #000000', backgroundColor: '#e0e0e0' },
              { outline: '0px solid transparent', backgroundColor: 'transparent' }
            ], { duration: 1000, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });
            const params = new URLSearchParams(location.search);
            params.set('scrollTo', id);
            navigate(`${location.pathname}?${params.toString()}`, { replace: true });
          }
        }
      }
    };
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
          const targetY = element.getBoundingClientRect().top + window.scrollY - 80;
          smoothScrollTo(targetY, 1000);
        }
      }, 300);
    }
  }, [location.search]);

  return (
    <>
      <style>{`
        .markdown-sys-container p:not(.sys-reveal-visible),
        .markdown-sys-container h1:not(.sys-reveal-visible),
        .markdown-sys-container h2:not(.sys-reveal-visible),
        .markdown-sys-container h3:not(.sys-reveal-visible),
        .markdown-sys-container h4:not(.sys-reveal-visible),
        .markdown-sys-container li:not(.sys-reveal-visible),
        .markdown-sys-container blockquote:not(.sys-reveal-visible),
        .markdown-sys-container img:not(.sys-reveal-visible) {
          opacity: 0;
          transform: translateY(10px);
          filter: blur(2px);
          transition: none;
        }
        .sys-reveal-visible {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
          will-change: opacity, transform;
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        .markdown-sys-container ::selection {
          background: #000000;
          color: #ffffff;
        }
        .markdown-sys-container {
          font-family: 'Segoe UI', 'Inter', system-ui, sans-serif;
          color: #000000;
          line-height: 1.5;
          background: #ece9d8;
        }
        .markdown-sys-container h1, 
        .markdown-sys-container h2, 
        .markdown-sys-container h3 {
          font-family: 'Courier New', monospace;
          color: #000000;
          font-weight: 700;
          margin-top: 2em;
          margin-bottom: 1em;
          border-left: 4px solid #808080;
          padding-left: 1em;
        }
        .external-cyber-link {
          color: #0000ee;
          text-decoration: underline;
        }
        .external-cyber-link:hover {
          color: #ff0000;
          text-decoration: none;
          background: #ffffaa;
        }
        .sys-code-block {
          background: #f0f0f0 !important;
          border: 1px solid #808080;
          border-radius: 0;
          overflow: hidden;
          box-shadow: inset 1px 1px 0 #ffffff, inset -1px -1px 0 #808080;
        }
        .sys-code-block code {
          font-family: 'Courier New', monospace;
          font-size: 0.85em;
        }
      `}</style>
      <motion.div 
        style={{ scaleX }} 
        className="fixed top-0 left-0 w-full h-[2px] bg-gray-700 origin-left z-[9999] pointer-events-none will-change-transform transform-gpu" 
      />
      <div className="markdown-sys-container relative w-full" ref={containerRef}>
        {children}
      </div>
    </>
  );
};