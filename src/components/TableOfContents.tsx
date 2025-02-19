import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

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
}

const TableOfContents = ({ content, isOpen, setIsOpen }: TableOfContentsProps) => {
  const [toc, setToc] = useState<TocItem[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 解析页面中的所有标题
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
      setIsOpen(false);
      const params = new URLSearchParams(location.search);
      params.set("scrollTo", id);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
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
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(item);
        stack.push(item);
      }
    });
    return tocTree;
  };

  const renderTocItems = (items: TocItem[]) => {
    return (
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <div
              className={`cursor-pointer hover:bg-accent rounded-md transition-colors ${getLevelStyle(
                item.level
              )} whitespace-normal break-words`}
              onClick={() => handleClick(item.id)}
            >
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
      case 1:
        return "text-lg font-bold pl-0";
      case 2:
        return "text-base pl-4";
      case 3:
        return "text-sm pl-8";
      default:
        return "text-xs pl-12";
    }
  };

  return (
    // 添加 sticky top-4 让目录在页面滚动时保持相对位置
    <div
      className="sticky top-4 flex flex-col items-start mr-8 mt-4 transition-all duration-300 ease-in-out bg-sky-900"
      style={{
        width: isOpen ? "30rem" : "3rem",
        borderRadius: isOpen ? "0.75rem" : "1.5rem",
      }}
    >
      {/* 按钮始终显示，同时添加 focus:outline-none 去除点击时的默认描边 */}
      <Button
        variant="default"
        className="flex-shrink-0 w-12 h-12 bg-sky-900 hover:bg-sky-600 rounded-full shadow-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-4 w-4 text-white" />
      </Button>

      {/* 目录内容区：外层 div 不再固定 m-4，而是根据 isOpen 动态设置外边距 */}
      <div
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? "calc(100vh - 8rem)" : "0px",
          margin: isOpen ? "1rem" : "0px",
        }}
      >
        <div
          className={`transition-all duration-300 ease-in-out ${
            isOpen ? "p-4 opacity-100" : "p-0 opacity-0"
          } bg-sky-100 rounded-md`}
        >
          <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 8rem)" }}>
            {renderTocItems(toc)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;