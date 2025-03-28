import { useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface MarkdownContentProps {
  content: string;
  children?: ReactNode;
}

export const MarkdownContent = ({ children }: MarkdownContentProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleInternalLinks = (e: MouseEvent) => {
      let target = e.target as HTMLElement;

      // 向上遍历找到最接近的<a>标签
      while (target && target.tagName !== 'A') {
        target = target.parentElement as HTMLElement;
      }

      if (target?.tagName === 'A') {
        const href = target.getAttribute('href');
        
        // 只处理以 # 开头且不是路由跳转的链接
        if (href?.startsWith('#') && !href.startsWith('#/')) {
          e.preventDefault();
          const id = href.slice(1);
          const element = document.getElementById(id);

          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            
            // 更新查询参数而不是 hash
            const params = new URLSearchParams(location.search);
            params.set('scrollTo', id);
            navigate(`${location.pathname}?${params.toString()}`, { replace: true });
          }
        }
      }
    };

    // 使用捕获阶段，确保在默认行为发生前拦截事件
    document.addEventListener('click', handleInternalLinks, true);
    return () => document.removeEventListener('click', handleInternalLinks, true);
  }, [location, navigate]);

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

  return <div className="markdown-content">{children}</div>;
};
