// src/components/TableOfContents.tsx
import React, { useEffect, useState, useRef, useCallback } from "react";
import { Network, ChevronRight, ScanLine } from "lucide-react";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

// ==========================================
// 【数据结构定义】
// ==========================================
interface TocNode {
  id: string;
  text: string;
  level: number;
  hexId: string; // 赛博风十六进制地址
  children: TocNode[];
}

interface TableOfContentsProps {
  content: string; // 监听 markdown 内容变化
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobile: boolean;
}

// ==========================================
// 【炫技点 1：乱码解密微型引擎】
// 专门为激活的目录项提供一瞬间的数据解密视觉反馈
// ==========================================
const useCyberDecrypt = (text: string, isActive: boolean) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  useEffect(() => {
    if (!isActive) {
      setDisplayText(text);
      return;
    }
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(text.split("").map((char, index) => {
        if (index < iterations) return text[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(""));
      if (iterations >= text.length) clearInterval(interval);
      iterations += text.length / 10; // 极速解密
    }, 30);
    return () => clearInterval(interval);
  },[text, isActive]);

  return displayText;
};

// ==========================================
// 【主组件：系统拓扑雷达】
// ==========================================
const TableOfContents: React.FC<TableOfContentsProps> = ({ 
  content, 
  isOpen, 
  setIsOpen,
  isMobile 
}) => {
  const [toc, setToc] = useState<TocNode[]>([]);
  const[activeId, setActiveId] = useState<string>("");
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // HUD 机械游标的物理坐标
  const cursorY = useSpring(0, { stiffness: 300, damping: 30, mass: 0.8 });
  const cursorHeight = useSpring(20, { stiffness: 300, damping: 30 });

  // ==========================================
  // 【炫技点 2：栈式 AST 抽象语法树构建】
  // 将扁平的 DOM 结构，利用 O(n) 时间复杂度构建出严格的树形结构
  // ==========================================
  useEffect(() => {
    // 等待 Markdown 渲染完毕
    const timer = setTimeout(() => {
      const headers = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
      
      const nodes: TocNode[] = [];
      const stack: TocNode[] =[];
      let globalIndex = 0;

      headers.forEach((header) => {
        // 自动注入 ID (如果 markdown parser 没有提供)
        if (!header.id) {
            header.id = `sys-node-${Math.random().toString(36).substr(2, 9)}`;
        }
        
        const level = parseInt(header.tagName[1]);
        const hexId = `0x${globalIndex.toString(16).toUpperCase().padStart(2, '0')}`;
        const node: TocNode = { id: header.id, text: header.textContent || "UNKNOWN_NODE", level, hexId, children:[] };
        globalIndex++;

        // 核心栈逻辑：寻找正确的父节点
        while (stack.length > 0 && stack[stack.length - 1].level >= level) {
          stack.pop();
        }

        if (stack.length === 0) {
          nodes.push(node);
        } else {
          stack[stack.length - 1].children.push(node);
        }
        stack.push(node);
      });

      setToc(nodes);
    }, 100); // 微小延迟确保 DOM 已经挂载
    return () => clearTimeout(timer);
  }, [content]);

  // ==========================================
  // 【炫技点 3：IntersectionObserver 硬件级阅读雷达】
  // 完全消除 scroll 事件监听器，由浏览器底层计算视口交叉率
  // ==========================================
  useEffect(() => {
    if (toc.length === 0) return;

    // 获取所有需要观测的锚点目标
    const elements = toc.flatMap(node => {
      const getIds = (n: TocNode): string[] => [n.id, ...n.children.flatMap(getIds)];
      return getIds(node);
    }).map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    // 交叉观察器配置：当标题到达屏幕顶部 20%~30% 区域时触发锁定
    const observer = new IntersectionObserver(
      (entries) => {
        // 找出当前在视口内，且相交比例最大的标题
        const visibleEntries = entries.filter(e => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // 优先锁定最靠上的节点
          visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveId(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: [0, 1] }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [toc]);

  // ==========================================
  // 【炫技点 4：HUD 机械游标坐标计算与跟踪】
  // 监听 activeId，计算对应的物理 Y 坐标驱动弹簧游标
  // ==========================================
  useEffect(() => {
    if (!activeId || !containerRef.current) return;
    const activeEl = itemRefs.current[activeId];
    if (activeEl) {
      // 获取当前激活项相对于滚动容器的精确 Y 轴坐标
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const elRect = activeEl.getBoundingClientRect();
      const relativeY = elRect.top - containerTop + containerRef.current.scrollTop;
      
      // 物理弹簧驱动
      cursorY.set(relativeY);
      cursorHeight.set(elRect.height);

      // 保证激活项始终在可视区域内 (平滑滚动面板自身)
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  },[activeId, cursorY, cursorHeight]);

  // ==========================================
  // 【炫技点 5：贝塞尔曲线原生平滑滚动接管】
  // ==========================================
  const handleScrollTo = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    // 获取准确的文档 Y 坐标，并减去一点顶部的 offset 留白
    const targetY = target.getBoundingClientRect().top + window.scrollY - 80;
    
    // 自定义平滑滚动算法 (替代原生 behavior: 'smooth')
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 800;
    let start: number | null = null;

    // 缓动函数 (easeInOutQuint)
    const ease = (t: number) => t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      window.scrollTo(0, startY + distance * ease(progress));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);

    if (isMobile) setIsOpen(false);
  }, [isMobile, setIsOpen]);

  // 渲染单一节点的递归组件
  const TocItemRender = ({ node }: { node: TocNode }) => {
    const isActive = activeId === node.id;
    const decryptedText = useCyberDecrypt(node.text, isActive);

    // 级联缩进数学公式
    const pl = node.level === 1 ? 'pl-2' : node.level === 2 ? 'pl-6' : 'pl-10';
    
    return (
      <li 
        ref={el => itemRefs.current[node.id] = el}
        className="relative py-1.5"
      >
        <div
          onClick={() => handleScrollTo(node.id)}
          className={cn(
            "group flex items-center cursor-pointer transition-colors duration-300 w-full relative z-10",
            pl,
            isActive ? "text-cyan-400" : "text-cyan-900/60 hover:text-cyan-600"
          )}
        >
          {/* 十六进制前缀 */}
          <span className={cn(
            "font-mono text-[8px] tracking-widest mr-3 transition-colors",
            isActive ? "text-cyan-300" : "text-cyan-950 group-hover:text-cyan-800"
          )}>
            [{node.hexId}]
          </span>

          {/* 节点文本 */}
          <span className={cn(
            "font-mono text-xs truncate transition-all duration-300",
            node.level === 1 && "font-bold tracking-wider uppercase text-[13px]",
            isActive && "drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] translate-x-1"
          )}>
            {decryptedText}
          </span>
          
          {/* 悬停时的扫描线指示器 */}
          <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[9px] text-cyan-800 font-mono pr-2">
            JUMP <ChevronRight className="w-3 h-3" />
          </span>
        </div>
        
        {/* 递归渲染子节点 */}
        {node.children.length > 0 && (
          <ul className="relative mt-1">
            {/* 子节点的连接电缆结构线 */}
            <div className={cn("absolute left-3 top-0 bottom-0 w-[1px] bg-cyan-950", node.level > 1 && "left-7")} />
            {node.children.map(child => <TocItemRender key={child.id} node={child} />)}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      {/* 侧边悬浮呼出按钮 (支持移动端与大屏) */}
      <button
        className={cn(
          "fixed z-40 transition-all duration-500 ease-out flex items-center justify-center border border-cyan-900/50 bg-[#050505]/80 backdrop-blur-md text-cyan-500 hover:border-cyan-400 hover:bg-cyan-950/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]",
          isMobile 
            ? "bottom-8 right-8 h-12 w-12 rounded-full shadow-[0_0_20px_rgba(0,0,0,1)]" 
            : `top-32 right-12 h-10 w-10 rounded-sm ${isOpen ? 'opacity-0 pointer-events-none translate-x-10' : 'opacity-100'}`
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Network className="h-4 w-4" />
      </button>

      {/* 拓扑雷达主面板 */}
      <div
        className={cn(
          "fixed z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border border-cyan-900/40 shadow-[0_0_40px_rgba(0,0,0,0.9)] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isMobile 
             ? "inset-x-0 bottom-0 rounded-t-xl border-b-0 h-[65vh]" 
             : "top-32 right-12 rounded-sm w-72 max-h-[70vh]"
        )}
        style={{
          transform: isOpen 
            ? "translateY(0) translateX(0)" 
            : isMobile ? "translateY(100%)" : "translateX(120%)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        {/* 面板头部 */}
        <div className="p-4 border-b border-cyan-900/30 flex justify-between items-center bg-cyan-950/10">
          <div className="flex items-center gap-2">
            <ScanLine className="w-4 h-4 text-cyan-500 animate-pulse" />
            <span className="font-mono text-xs text-cyan-500 tracking-widest uppercase font-bold">
              TOPOLOGY_RADAR
            </span>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="h-6 w-6 flex items-center justify-center rounded hover:bg-cyan-900/30 text-cyan-700 hover:text-cyan-300 transition-colors"
          >
             <ChevronRight className={cn("h-4 w-4 transition-transform", isMobile ? "rotate-90" : "")} />
          </button>
        </div>

        {/* 核心雷达列表容器 */}
        <div className="relative flex-1 overflow-hidden p-2">
           {/* 【炫技点 4：HUD 绝对锁定游标】 */}
           <motion.div 
             className="absolute left-2 w-[3px] bg-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] z-20 pointer-events-none"
             style={{ 
               y: cursorY, 
               height: cursorHeight,
               opacity: activeId ? 1 : 0 
             }}
           />

           {/* 防止游标超出区域隐藏的相对定位容器 */}
           <div 
             ref={containerRef}
             className="h-full overflow-y-auto custom-scrollbar font-mono pr-2 relative" 
           >
             <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 3px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(8, 145, 178, 0.3); border-radius: 2px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(34, 211, 238, 0.8); }
             `}</style>
             
             <ul className="space-y-1 relative pb-10">
               {toc.map(node => <TocItemRender key={node.id} node={node} />)}
             </ul>
             
             {toc.length === 0 && (
               <div className="flex flex-col items-center justify-center h-full text-cyan-900/50 font-mono text-[10px] space-y-2">
                 <ScanLine className="w-8 h-8 animate-ping opacity-20" />
                 <span>NO_ANCHORS_DETECTED</span>
               </div>
             )}
           </div>
        </div>
        
        {/* 面板底部状态条 */}
        <div className="p-2 border-t border-cyan-900/30 bg-cyan-950/20 text-[9px] font-mono text-cyan-700 flex justify-between items-center">
          <span>NODES: 0x{toc.length.toString(16).toUpperCase().padStart(2, '0')}</span>
          <div className="flex items-center gap-2">
            <span>SYNC: ACTIVE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          </div>
        </div>
      </div>

      {/* 移动端遮罩 */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default TableOfContents;