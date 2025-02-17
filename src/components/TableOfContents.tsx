import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TocItem {
  id: string;
  text: string;
  level: number;
  children?: TocItem[];
}

const TableOfContents = ({ content }: { content: string }) => {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 解析页面中的标题，生成目录项
    const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const items: TocItem[] = Array.from(headers).map((header) => ({
      id: header.id,
      text: header.textContent || '',
      level: parseInt(header.tagName[1]),
    }));

    // 生成嵌套的目录树结构
    const tocTree = generateTocTree(items);
    setToc(tocTree);
  }, [content]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);

      // 更新 URL 的查询参数
      const params = new URLSearchParams(location.search);
      params.set('scrollTo', id);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }
  };

  // 将扁平的目录列表转换为嵌套的目录树
  const generateTocTree = (items: TocItem[]): TocItem[] => {
    const tocTree: TocItem[] = [];
    const stack: TocItem[] = [];

    items.forEach((item) => {
      // 弹出栈中比当前标题级别更高或相同的标题
      while (stack.length > 0 && item.level <= stack[stack.length - 1].level) {
        stack.pop();
      }

      if (stack.length === 0) {
        // 当前标题是最高级别，添加到 tocTree
        tocTree.push(item);
        stack.push(item);
      } else {
        // 当前标题是子标题，添加到父标题的 children
        const parent = stack[stack.length - 1];
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(item);
        stack.push(item);
      }
    });

    return tocTree;
  };

  // 递归渲染目录项
  const renderTocItems = (items: TocItem[]) => {
    return (
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <div
              className={`cursor-pointer hover:bg-accent rounded-md p-2 transition-colors
                ${getLevelStyle(item.level)}`}
              onClick={() => handleClick(item.id)}
            >
              <span className="truncate">{item.text}</span>
            </div>
            {item.children && renderTocItems(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  const getLevelStyle = (level: number) => {
    switch(level) {
      case 1: return "text-lg font-bold pl-0";
      case 2: return "text-base pl-4";
      case 3: return "text-sm pl-8";
      default: return "text-xs pl-12";
    }
  };

  // 当路由变化时，检查查询参数并滚动
  useEffect(() => {
    const handleScroll = () => {
      // 这里可以添加滚动时的额外逻辑（如果需要）
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <div className={`relative transition-all duration-300 ${isOpen ? 'w-64' : 'w-auto'}`}>
        <Button
          variant="default"
          className="bg-sky-900 hover:bg-sky-600 rounded-full shadow-lg absolute right-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-4 w-4" />
        </Button>

        {isOpen && (
          <div className="ml-4 bg-background rounded-lg shadow-xl p-4 w-64 h-[70vh] flex flex-col 
            border border-gray-200 absolute right-full top-0">
            <h3 className="text-lg font-bold mb-4">目录导航</h3>
            <div className="flex-1 overflow-y-auto">
              {renderTocItems(toc)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableOfContents;
