// src/components/CustomCursor.tsx
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const lerp = (start: number, end: number, amt: number) => (1 - amt) * start + amt * end;

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const canvas = canvasRef.current;
    const head = headRef.current;
    const outline = outlineRef.current;
    if (!canvas || !head || !outline) return;
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = { x: width / 2, y: height / 2 };
    const lastMouse = { x: width / 2, y: height / 2 };
    const outlineState = { x: width / 2, y: height / 2, width: 32, height: 32, radius: 4 };
    const trail = new Array(6).fill(0).map(() => ({ x: width / 2, y: height / 2 }));

    let hoverTarget: HTMLElement | null = null;
    let hoverRect: DOMRect | null = null;
    let isHidden = false;

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      if (hoverTarget) hoverRect = hoverTarget.getBoundingClientRect();
    };
    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closest = target.closest('a, button, input, .cursor-magnetic') as HTMLElement;
      if (closest) {
        hoverTarget = closest;
        hoverRect = closest.getBoundingClientRect();
        outline.classList.add('is-locked');
      } else {
        hoverTarget = null;
        hoverRect = null;
        outline.classList.remove('is-locked');
      }
    };
    const onScroll = () => { if (hoverTarget) hoverRect = hoverTarget.getBoundingClientRect(); };
    const onMouseLeave = () => (isHidden = true);
    const onMouseEnter = () => {
      isHidden = false;
      trail.forEach(pt => { pt.x = mouse.x; pt.y = mouse.y; });
    };

    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let rAF: number;
    const render = () => {
      const velX = mouse.x - lastMouse.x;
      const velY = mouse.y - lastMouse.y;
      const speed = Math.sqrt(velX * velX + velY * velY);
      const angle = Math.atan2(velY, velX);
      const scaleX = 1 + Math.min(speed * 0.03, 1.2);
      const scaleY = 1 - Math.min(speed * 0.01, 0.3);

      if (head) {
        head.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%) rotate(${angle}rad) scale(${scaleX}, ${scaleY})`;
        head.style.opacity = isHidden ? '0' : '1';
      }

      let targetX = mouse.x, targetY = mouse.y, targetW = 32, targetH = 32, targetR = 4;
      if (hoverTarget && hoverRect) {
        targetX = hoverRect.left + hoverRect.width / 2;
        targetY = hoverRect.top + hoverRect.height / 2;
        targetW = hoverRect.width + 12;
        targetH = hoverRect.height + 12;
        targetR = 6;
      }

      outlineState.x = lerp(outlineState.x, targetX, 0.2);
      outlineState.y = lerp(outlineState.y, targetY, 0.2);
      outlineState.width = lerp(outlineState.width, targetW, 0.2);
      outlineState.height = lerp(outlineState.height, targetH, 0.2);
      outlineState.radius = lerp(outlineState.radius, targetR, 0.2);

      if (outline) {
        outline.style.transform = `translate3d(${outlineState.x}px, ${outlineState.y}px, 0) translate(-50%, -50%)`;
        outline.style.width = `${outlineState.width}px`;
        outline.style.height = `${outlineState.height}px`;
        outline.style.borderRadius = `${outlineState.radius}px`;
        outline.style.opacity = isHidden ? '0' : '1';
      }

      ctx.clearRect(0, 0, width, height);
      trail[0].x = mouse.x; trail[0].y = mouse.y;
      for (let i = 1; i < trail.length; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.4;
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.4;
      }

      if (!isHidden && !hoverTarget) {
        ctx.beginPath();
        ctx.moveTo(trail[0].x, trail[0].y);
        for (let i = 1; i < trail.length - 1; i++) {
          const xc = (trail[i].x + trail[i + 1].x) / 2;
          const yc = (trail[i].y + trail[i + 1].y) / 2;
          ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        }
        ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#000000';
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
      }

      lastMouse.x = mouse.x; lastMouse.y = mouse.y;
      rAF = requestAnimationFrame(render);
    };
    rAF = requestAnimationFrame(render);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('scroll', onScroll, { capture: true });
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rAF);
    };
  }, [location.pathname]);

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body, a, button, input, textarea, select { cursor: default !important; }
        }
        .cyber-cursor-outline {
          transition: border-color 0.2s ease;
          will-change: transform, width, height, border-radius;
          border: 1px solid #000000;
          background-color: rgba(0,0,0,0.05);
        }
        .cyber-cursor-outline.is-locked {
          border-color: #000000;
          background-color: rgba(0,0,0,0.1);
        }
        .cyber-cursor-outline.is-locked::before,
        .cyber-cursor-outline.is-locked::after {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          border-color: #000000;
          border-style: solid;
        }
        .cyber-cursor-outline.is-locked::before { top: -2px; left: -2px; border-width: 1px 0 0 1px; }
        .cyber-cursor-outline.is-locked::after { bottom: -2px; right: -2px; border-width: 0 1px 1px 0; }
      `}</style>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[9997]" />
      <div ref={outlineRef} className="cyber-cursor-outline fixed top-0 left-0 pointer-events-none z-[9998] transform-gpu box-border" />
      <div ref={headRef} className="fixed top-0 left-0 w-2 h-2 bg-black rounded-sm pointer-events-none z-[9999] will-change-transform transform-gpu" />
    </>
  );
};

export default CustomCursor;