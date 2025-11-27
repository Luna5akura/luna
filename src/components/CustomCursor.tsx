import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  // 状态标记: 'default' | 'hover' (普通大圆) | 'scope' (准星)
  const cursorState = useRef<'default' | 'hover' | 'scope'>('default');

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // 在 JS 里我们只控制位置，缩放和形状交给 CSS 类名切换
      // 注意：准星模式下不需要 JS scale，因为 CSS 里定义了 width/height
      let scale = 1;
      if (cursorState.current === 'hover') scale = 4;
      
      // 如果是 scope 模式，保持 scale 为 1 (大小由 CSS width/height 控制)
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // 1. 检查是否是需要显示“准星”的元素
      // 这里的 .cursor-scope-hover 是我们在 Sidebar 里要加的类
      const isScopeTarget = target.closest('.cursor-scope-hover'); 

      // 2. 检查普通链接
      const isLink = target.tagName === 'A' || 
                     target.tagName === 'BUTTON' || 
                     target.closest('.cursor-hover');

      if (isScopeTarget) {
        cursorState.current = 'scope';
        cursor.classList.add('is-scope'); // 添加 CSS 类
      } else if (isLink) {
        cursorState.current = 'hover';
        cursor.classList.remove('is-scope'); // 移除准星类
      } else {
        cursorState.current = 'default';
        cursor.classList.remove('is-scope'); // 移除准星类
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="custom-cursor" 
      // 移除内联样式，全部走 CSS 类
    />
  );
};

export default CustomCursor
