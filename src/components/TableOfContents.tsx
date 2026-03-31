// src/components/TableOfContents.tsx
import React, { useEffect, useState, useRef, useCallback } from "react";
import { Network, ChevronRight, ScanLine } from "lucide-react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface TocNode {
  id: string;
  text: string;
  level: number;
  hexId: string;
  children: TocNode[];
}

interface TableOfContentsProps {
  content: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobile: boolean;
}

const CyberDecryptNode = ({ text, className }: { text: string, className?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;
    const li = el.closest('li');
    if (!li) return;
    let frameId: number;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    const handleDecrypt = () => {
      cancelAnimationFrame(frameId);
      let iterations = 0;
      const len = text.length;
      const animate = () => {
        let display = "";
        for (let i = 0; i < len; i++) {
          if (i < iterations) display += text[i];
          else display += chars[Math.floor(Math.random() * chars.length)];
        }
        el.textContent = display;
        if (iterations < len) {
          iterations += Math.max(1, len / 10);
          frameId = requestAnimationFrame(animate);
        } else {
          el.textContent = text;
        }
      };
      frameId = requestAnimationFrame(animate);
    };
    li.addEventListener('sys-decrypt-trigger', handleDecrypt);
    return () => {
      li.removeEventListener('sys-decrypt-trigger', handleDecrypt);
      cancelAnimationFrame(frameId);
    };
  }, [text]);
  return <span ref={nodeRef} className={className}>{text}</span>;
};

const TableOfContents: React.FC<TableOfContentsProps> = ({
  content,
  isOpen,
  setIsOpen,
  isMobile
}) => {
  const [toc, setToc] = useState<TocNode[]>([]);
  const activeIdRef = useRef<string>("");
  const itemRefs = useRef<Record<string, HTMLLIElement>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorY = useSpring(0, { stiffness: 300, damping: 30, mass: 0.8 });
  const cursorHeight = useSpring(20, { stiffness: 300, damping: 30 });
  const cursorOpacity = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const timer = setTimeout(() => {
      const headers = Array.from(document.querySelectorAll(".markdown-sys-container h1, .markdown-sys-container h2, .markdown-sys-container h3, .markdown-sys-container h4, .markdown-sys-container h5, .markdown-sys-container h6"));
      const nodes: TocNode[] = [];
      const stack: TocNode[] = [];
      let globalIndex = 0;
      headers.forEach((header) => {
        if (!header.id) header.id = `sys-node-${Math.random().toString(36).substr(2, 9)}`;
        const level = parseInt(header.tagName[1]);
        const hexId = `0x${globalIndex.toString(16).toUpperCase().padStart(2, '0')}`;
        const node: TocNode = { id: header.id, text: header.textContent || "UNKNOWN_NODE", level, hexId, children: [] };
        globalIndex++;
        while (stack.length > 0 && stack[stack.length - 1].level >= level) stack.pop();
        if (stack.length === 0) nodes.push(node);
        else stack[stack.length - 1].children.push(node);
        stack.push(node);
      });
      setToc(nodes);
    }, 300);
    return () => clearTimeout(timer);
  }, [content]);

  const updateActiveState = useCallback((id: string) => {
    if (activeIdRef.current === id) return;
    activeIdRef.current = id;
    const activeEl = itemRefs.current[id];
    if (activeEl && containerRef.current) {
      const relativeY = activeEl.offsetTop;
      cursorY.set(relativeY);
      cursorHeight.set(activeEl.offsetHeight);
      cursorOpacity.set(1);
      const targetScroll = relativeY - containerRef.current.offsetHeight / 2 + activeEl.offsetHeight / 2;
      containerRef.current.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
    Object.entries(itemRefs.current).forEach(([key, el]) => {
      if (!el) return;
      if (key === id) {
        el.classList.add('toc-item-active');
        el.dispatchEvent(new CustomEvent('sys-decrypt-trigger'));
      } else {
        el.classList.remove('toc-item-active');
      }
    });
  }, [cursorY, cursorHeight, cursorOpacity]);

  useEffect(() => {
    if (toc.length === 0) { cursorOpacity.set(0); return; }
    const elements = toc.flatMap(node => {
      const getIds = (n: TocNode): string[] => [n.id, ...n.children.flatMap(getIds)];
      return getIds(node);
    }).map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(e => e.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          updateActiveState(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: 0 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [toc, updateActiveState, cursorOpacity]);

  const handleScrollTo = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const targetY = target.getBoundingClientRect().top + window.scrollY - 80;
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 800;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = progress < 0.5 ? 16 * Math.pow(progress, 5) : 1 - Math.pow(-2 * progress + 2, 5) / 2;
      window.scrollTo(0, startY + distance * ease);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
    if (isMobile) setIsOpen(false);
  }, [isMobile, setIsOpen]);

  const TocItemRender = ({ node }: { node: TocNode }) => {
    const pl = node.level === 1 ? 'pl-2' : node.level === 2 ? 'pl-6' : 'pl-10';
    const levelClass = node.level === 1 ? "font-bold tracking-wide uppercase text-[13px]" : "";
    return (
      <li
        ref={el => { if (el) itemRefs.current[node.id] = el; }}
        className="relative py-1"
      >
        <div
          onClick={() => handleScrollTo(node.id)}
          className={cn(
            "toc-node-container group flex items-center cursor-pointer transition-colors duration-200 w-full relative z-10",
            pl
          )}
        >
          <span className="toc-hex font-mono text-[8px] tracking-wider mr-3 transition-colors">
            [{node.hexId}]
          </span>
          <CyberDecryptNode
            text={node.text}
            className={cn("toc-text font-mono text-xs truncate transition-all duration-200", levelClass)}
          />
          <span className="toc-jump-icon ml-auto opacity-0 transition-opacity flex items-center gap-1 text-[9px] text-gray-500 font-mono pr-2">
            JUMP <ChevronRight className="w-3 h-3" />
          </span>
        </div>
        {node.children.length > 0 && (
          <ul className="relative mt-1">
            <div className={cn("absolute left-3 top-0 bottom-0 w-[1px] bg-gray-400", node.level > 1 && "left-7")} />
            {node.children.map(child => <TocItemRender key={child.id} node={child} />)}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #c0c0c0; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #808080; border-radius: 0; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #000000; }
        .toc-node-container { color: #606060; }
        .toc-node-container:hover { color: #000000; }
        .toc-hex { color: #808080; }
        .toc-node-container:hover .toc-hex { color: #000000; }
        .toc-item-active > .toc-node-container { color: #000000; background: #e0e0e0; }
        .toc-item-active > .toc-node-container .toc-hex { color: #000000; }
        .toc-item-active > .toc-node-container .toc-text { font-weight: bold; }
        .toc-item-active > .toc-node-container .toc-jump-icon { opacity: 1; }
      `}</style>

      <button
        className={cn(
          "fixed z-40 transition-all duration-300 ease-out flex items-center justify-center border border-gray-500 bg-[#c0c0c0] text-gray-700 hover:border-gray-800 hover:bg-gray-200 will-change-transform transform-gpu",
          isMobile
            ? "bottom-6 right-6 h-10 w-10 rounded-sm shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#808080]"
            : `top-28 right-8 h-8 w-8 rounded-sm ${isOpen ? 'opacity-0 pointer-events-none translate-x-8' : 'opacity-100'}`
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Network className="h-4 w-4" />
      </button>

      <div
        className={cn(
          "fixed z-50 bg-[#ece9d8] border-2 border-gray-600 shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#808080] flex flex-col transition-all duration-300 ease-out will-change-transform transform-gpu",
          isMobile
            ? "inset-x-0 bottom-0 rounded-t-sm border-b-0 h-[60vh]"
            : "top-28 right-8 rounded-sm w-72 max-h-[70vh]"
        )}
        style={{
          transform: isOpen ? "translateY(0) translateX(0)" : isMobile ? "translateY(100%)" : "translateX(120%)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        <div className="p-3 border-b border-gray-400 flex justify-between items-center bg-[#c0c0c0]">
          <div className="flex items-center gap-2">
            <ScanLine className="w-4 h-4 text-gray-700" />
            <span className="font-mono text-xs text-gray-700 tracking-wider uppercase font-bold">
              TOPOLOGY RADAR
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="h-6 w-6 flex items-center justify-center rounded hover:bg-gray-300 text-gray-600 hover:text-black transition-colors"
          >
            <ChevronRight className={cn("h-4 w-4 transition-transform", isMobile ? "rotate-90" : "")} />
          </button>
        </div>

        <div className="relative flex-1 overflow-hidden p-2">
          <motion.div
            className="absolute left-2 w-[2px] bg-gray-700 z-20 pointer-events-none will-change-transform transform-gpu"
            style={{ y: cursorY, height: cursorHeight, opacity: cursorOpacity }}
          />
          <div
            ref={containerRef}
            className="h-full overflow-y-auto custom-scrollbar font-mono pr-2 relative"
          >
            <ul className="space-y-1 relative pb-10">
              {toc.map(node => <TocItemRender key={node.id} node={node} />)}
            </ul>
            {toc.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 font-mono text-[10px] space-y-2">
                <ScanLine className="w-8 h-8 animate-ping opacity-20" />
                <span>NO ANCHORS DETECTED</span>
              </div>
            )}
          </div>
        </div>

        <div className="p-2 border-t border-gray-400 bg-[#c0c0c0] text-[9px] font-mono text-gray-700 flex justify-between items-center">
          <span>NODES: 0x{toc.length.toString(16).toUpperCase().padStart(2, '0')}</span>
          <div className="flex items-center gap-2">
            <span>SYNC: ACTIVE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 animate-pulse" />
          </div>
        </div>
      </div>

      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default TableOfContents;