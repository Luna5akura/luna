import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

interface TocItem {
  id: string;
  text: string;
  level: number;
  children?: TocItem[];
}

const TableOfContents = ({ content }: { content: string }) => {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [open, setOpen] = useState(false);
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
      setOpen(false);

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
      <ul className="pl-4">
        {items.map((item) => (
          <li key={item.id} className="mb-1">
            <div
              className="cursor-pointer hover:text-primary"
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

  // 当路由变化时，检查查询参数并滚动
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollToId = params.get('scrollTo');
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.search]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="fixed top-4 right-4">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <nav className="toc pt-4">
          {renderTocItems(toc)}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default TableOfContents;
