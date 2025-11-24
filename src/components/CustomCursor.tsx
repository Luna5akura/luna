import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  // 使用 useRef 直接操作 DOM，不触发 React 重渲染
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // 使用 ref 记录当前的悬浮状态，避免闭包陷阱和重渲染
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // 核心优化：直接操作 DOM style，绕过 React Render Cycle
    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // 获取当前的缩放状态
      const scale = isHoveredRef.current ? 4 : 1;
      
      // 使用 translate3d 开启 GPU 加速
      // translate(-50%, -50%) 用于将光标中心对准鼠标焦点
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // 检查是否悬浮在可交互元素上
      const isLink = target.tagName === 'A' || 
                     target.tagName === 'BUTTON' || 
                     target.closest('.cursor-hover'); // 兼容你代码中的类名查找

      if (isLink && !isHoveredRef.current) {
        isHoveredRef.current = true;
        // 强制触发一次 transform 更新以应用 scale
        // 这里不能只加 class，因为 style.transform 会覆盖 class 里的 transform
        // 所以我们需要手动维护 transform 字符串
        // 既然是在 mouseover，此时鼠标位置还没变，我们暂时不更新位置，等待下一次 mousemove 
        // 或者我们添加一个 class 来控制颜色，但 scale 必须在 JS 里一起控制
        cursor.style.transition = 'transform 0.05s ease-out'; // 悬浮时加一点过渡让变大更平滑
      } else if (!isLink && isHoveredRef.current) {
        isHoveredRef.current = false;
        cursor.style.transition = 'none'; // 恢复移动时无延迟
      }
    };

    // 优化：使用 requestAnimationFrame 处理动画帧（可选，极简版直接在事件里写效率也极高）
    // 但为了极致响应速度，直接在 Listener 里写是延迟最低的。
    // 如果发现掉帧，可以包裹在 requestAnimationFrame 里。
    
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
      // 移除 style={{ left... }}，全部由 JS 接管
    />
  );
};

export default CustomCursor;