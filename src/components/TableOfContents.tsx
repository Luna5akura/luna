import { useEffect, useState } from "react";
import { ListRestart, ChevronRight } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
  children?: TocItem[];
}

interface TableOfContentsProps {
  content: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobile: boolean;
}

const TableOfContents = ({ 
  content, 
  isOpen, 
  setIsOpen,
  isMobile 
}: TableOfContentsProps) => {
  const [toc, setToc] = useState<TocItem[]>([]);

  useEffect(() => {
    const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const items: TocItem[] = Array.from(headers).map((header) => ({
      id: header.id,
      text: header.textContent || "",
      level: parseInt(header.tagName[1]),
    }));
    setToc(generateTocTree(items));
  }, [content]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if(isMobile) setIsOpen(false);
    }
  };

  const generateTocTree = (items: TocItem[]): TocItem[] => {
    const tocTree: TocItem[] = [];
    const stack: TocItem[] = [];
    items.forEach((item) => {
      while (stack.length > 0 && item.level <= stack[stack.length - 1].level) {
        stack.pop();
      }
      if (stack.length === 0) {
        tocTree.push(item);
        stack.push(item);
      } else {
        const parent = stack[stack.length - 1];
        if (!parent.children) parent.children = [];
        parent.children.push(item);
        stack.push(item);
      }
    });
    return tocTree;
  };

  const renderTocItems = (items: TocItem[]) => {
    return (
      <ul className="space-y-1 relative border-l border-white/10 ml-2">
        {items.map((item) => (
          <li key={item.id} className="relative">
            <div
              className={`
                group flex items-center
                cursor-pointer py-1.5 pr-2
                transition-all duration-200
                text-gray-500 hover:text-white
                ${getLevelStyle(item.level)}
              `}
              onClick={() => handleClick(item.id)}
            >
              {/* 装饰性光标 */}
              <span className={`absolute -left-[1px] w-[2px] h-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity`} />
              {item.text}
            </div>
            {item.children && renderTocItems(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  const getLevelStyle = (level: number) => {
    switch (level) {
      case 1: return "text-sm font-bold pl-4 text-gray-300";
      case 2: return "text-xs font-medium pl-4";
      case 3: return "text-[10px] pl-6 opacity-80";
      default: return "text-[10px] pl-8 opacity-60";
    }
  };

  return (
    <>
      {/* Trigger Button - 悬浮球改为赛博风格 */}
      <button
        className={`
          fixed z-40 transition-all duration-500 ease-out
          flex items-center justify-center
          bg-black/80 backdrop-blur border border-white/20
          hover:border-white hover:bg-white hover:text-black
          text-white
          ${isMobile 
            ? "bottom-8 right-8 h-12 w-12 rounded-full shadow-lg" 
            : `top-32 right-12 h-10 w-10 rounded-sm ${isOpen ? 'opacity-0 pointer-events-none translate-x-10' : 'opacity-100'}`
          }
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ListRestart className="h-4 w-4" />
      </button>

      {/* Container - 侧边面板 */}
      <div
        className={`
          fixed z-50 bg-[#050505]/90 backdrop-blur-xl border border-white/10
          transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
          flex flex-col
          ${isMobile 
             ? "inset-x-0 bottom-0 rounded-t-xl border-b-0 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]" 
             : "top-32 right-12 rounded-sm w-72 max-h-[70vh] shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          }
        `}
        style={{
          transform: isOpen 
            ? "translateY(0) translateX(0)" 
            : isMobile ? "translateY(100%)" : "translateX(120%)",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
          <span className="font-mono text-xs text-cyan-500 tracking-widest uppercase">// NAVIGATION</span>
          <button 
            onClick={() => setIsOpen(false)} 
            className="h-6 w-6 flex items-center justify-center rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
             <ChevronRight className={`h-4 w-4 transition-transform ${isMobile ? "rotate-90" : ""}`} />
          </button>
        </div>

        <div className="overflow-y-auto p-4 custom-scrollbar font-mono" style={{ maxHeight: isMobile ? "60vh" : "calc(70vh - 50px)" }}>
           {renderTocItems(toc)}
        </div>
      </div>

      {/* Mobile Backdrop */}
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