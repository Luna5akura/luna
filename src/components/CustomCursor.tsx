// src/components/CustomCursor.tsx
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// ==========================================
// 【顶级炫技点 1：线性插值平滑算法 (LERP)】
// 用于处理数值平滑过渡的核心数学公式
// ==========================================
const lerp = (start: number, end: number, amt: number) => {
  return (1 - amt) * start + amt * end;
};

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const location = useLocation(); // 监听路由变化，重置磁性状态

  useEffect(() => {
    const canvas = canvasRef.current;
    const head = headRef.current;
    const outline = outlineRef.current;
    if (!canvas || !head || !outline) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // ==========================================
    // 物理系统与屏幕尺寸初始化
    // ==========================================
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = { x: width / 2, y: height / 2 };
    const lastMouse = { x: width / 2, y: height / 2 };
    
    // 磁性瞄准框的物理属性状态
    const outlineState = { 
      x: width / 2, 
      y: height / 2, 
      width: 40, 
      height: 40, 
      radius: 50 // 50% = circle
    };

    // 逆向运动学 (Inverse Kinematics) 尾迹节点
    const trail = new Array(10).fill(0).map(() => ({ x: width / 2, y: height / 2 }));
    
    let hoverTarget: HTMLElement | null = null;
    let isHidden = false;

    // ==========================================
    // 事件监听器配置
    // ==========================================
    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // 智能嗅探全站的可点击元素与自定义磁吸目标
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // 捕捉链接、按钮或带有 .cursor-magnetic 的元素
      const closest = target.closest('a, button, input, .cursor-magnetic') as HTMLElement;
      if (closest) {
        hoverTarget = closest;
        outline.classList.add('is-locked');
      } else {
        hoverTarget = null;
        outline.classList.remove('is-locked');
      }
    };

    const onMouseLeave = () => (isHidden = true);
    const onMouseEnter = () => (isHidden = false);

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // ==========================================
    // 【顶级炫技点 2：144Hz 原生物理渲染循环 (Zero-Render)】
    // ==========================================
    let rAF: number;
    const render = () => {
      // 1. 核心光点控制 (Squash & Stretch 挤压拉伸物理)
      const velX = mouse.x - lastMouse.x;
      const velY = mouse.y - lastMouse.y;
      const speed = Math.sqrt(velX * velX + velY * velY); // 运动标量速度
      const angle = Math.atan2(velY, velX); // 运动矢量角度

      // 速度越快，拉伸越长 (scaleX)，同时变得越细 (scaleY) 保持体积守恒
      const scaleX = 1 + Math.min(speed * 0.04, 1.5);
      const scaleY = 1 - Math.min(speed * 0.015, 0.4);

      if (head) {
        head.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%) rotate(${angle}rad) scale(${scaleX}, ${scaleY})`;
        head.style.opacity = isHidden ? '0' : '1';
      }

      // 2. 瞄准框的 AABB 包围盒重塑 (Magnetic Morphing)
      let targetX = mouse.x;
      let targetY = mouse.y;
      let targetW = 40; // 默认游标大小
      let targetH = 40;
      let targetR = 50; // 默认圆角 (50% 圆形)

      if (hoverTarget) {
        // 读取目标元素的物理边界
        const rect = hoverTarget.getBoundingClientRect();
        targetX = rect.left + rect.width / 2;
        targetY = rect.top + rect.height / 2;
        targetW = rect.width + 16;  // 加上 Padding 刚好包裹
        targetH = rect.height + 16;
        targetR = 8; // 吸附时化作方形圆角瞄准框 (8px)
      }

      // 运用线性插值 (LERP) 让瞄准框平滑追逐目标尺寸与位置
      outlineState.x = lerp(outlineState.x, targetX, 0.15);
      outlineState.y = lerp(outlineState.y, targetY, 0.15);
      outlineState.width = lerp(outlineState.width, targetW, 0.15);
      outlineState.height = lerp(outlineState.height, targetH, 0.15);
      outlineState.radius = lerp(outlineState.radius, targetR, 0.15);

      if (outline) {
        outline.style.transform = `translate3d(${outlineState.x}px, ${outlineState.y}px, 0) translate(-50%, -50%)`;
        outline.style.width = `${outlineState.width}px`;
        outline.style.height = `${outlineState.height}px`;
        outline.style.borderRadius = `${outlineState.radius}${hoverTarget ? 'px' : '%'}`;
        outline.style.opacity = isHidden ? '0' : '1';
      }

      // 3. 【逆向运动学 (Inverse Kinematics) Canvas 流体尾迹】
      ctx.clearRect(0, 0, width, height);
      
      trail[0].x = mouse.x;
      trail[0].y = mouse.y;
      
      // 节点依次追逐上一个节点的位置
      for (let i = 1; i < trail.length; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.45;
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.45;
      }

      // 绘制流体曲线
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);
      for (let i = 1; i < trail.length - 1; i++) {
        // 利用贝塞尔曲线让棱角平滑
        const xc = (trail[i].x + trail[i + 1].x) / 2;
        const yc = (trail[i].y + trail[i + 1].y) / 2;
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
      }
      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);

      // 设置量子波动的发光样式
      ctx.strokeStyle = '#06b6d4'; // cyan-500
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      // 运用 globalCompositeOperation 制造流体的透叠发光效应
      ctx.globalCompositeOperation = 'screen'; 
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#06b6d4';
      
      // 鼠标静止或吸附时，隐去尾部
      if (!isHidden && !hoverTarget) {
        ctx.stroke();
      }

      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;

      rAF = requestAnimationFrame(render);
    };

    rAF = requestAnimationFrame(render);

    // ==========================================
    // 资源清理
    // ==========================================
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rAF);
    };
  },[location.pathname]); // 路由切换时强制重新绑定

  return (
    <>
      <style>{`
        /* 屏蔽全局系统鼠标，仅非触屏设备生效 */
        @media (pointer: fine) {
          body { cursor: none !important; }
          a, button, input, textarea, select { cursor: none !important; }
        }

        /* 磁性锁定框的高级赛博朋克样式 */
        .cyber-cursor-outline {
          transition: border-color 0.3s ease, background-color 0.3s ease;
        }

        .cyber-cursor-outline.is-locked {
          /* 锁定态：变为赛博红，内部充斥微弱电流感 */
          border-color: rgba(239, 68, 68, 0.8) !important;
          background-color: rgba(239, 68, 68, 0.05);
          backdrop-filter: invert(10%);
        }

        /* 生成锁定框的四角瞄准器 (Targeting Brackets) */
        .cyber-cursor-outline.is-locked::before,
        .cyber-cursor-outline.is-locked::after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          border-color: #ef4444;
          border-style: solid;
          opacity: 1;
          animation: bracket-pulse 1.5s infinite alternate;
        }

        .cyber-cursor-outline.is-locked::before {
          top: -1px; left: -1px;
          border-width: 2px 0 0 2px;
        }
        
        .cyber-cursor-outline.is-locked::after {
          bottom: -1px; right: -1px;
          border-width: 0 2px 2px 0;
        }

        @keyframes bracket-pulse {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>

      {/* 逆向运动学流体尾迹画布 */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 pointer-events-none z-[9997]" 
      />

      {/* 瞄准框包围盒 (Magnetic Outline) */}
      <div 
        ref={outlineRef} 
        className="cyber-cursor-outline fixed top-0 left-0 border border-cyan-500/50 pointer-events-none z-[9998] will-change-transform transform-gpu box-border mix-blend-screen"
        style={{ transform: 'translate(-50%, -50%)' }} 
      />

      {/* 核心驱动光子 (Squash & Stretch Head) */}
      <div 
        ref={headRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] will-change-transform transform-gpu shadow-[0_0_10px_#22d3ee] mix-blend-screen" 
        style={{ transform: 'translate(-50%, -50%)' }} 
      />
    </>
  );
};

export default CustomCursor;