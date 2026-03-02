// src/hooks/useTransitionNavigate.ts
import { useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';

export const useTransitionNavigate = () => {
  const navigate = useNavigate();

  return (to: string) => {
    // 检查浏览器是否支持原生的 View Transitions API
    if (!('startViewTransition' in document)) {
      navigate(to);
      return;
    }

    // 【炫技点：强行唤醒原生跨页面过渡】
    // 强制 React 立即同步刷新 DOM，让浏览器捕获跳转前后的状态差异
    (document as any).startViewTransition(() => {
      flushSync(() => {
        navigate(to);
      });
    });
  };
};