// src/hooks/useTransitionNavigate.ts
import { useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => void;
};

export const useTransitionNavigate = () => {
  const navigate = useNavigate();

  return (to: string) => {
    const transitionDocument = document as ViewTransitionDocument;

    // 检查浏览器是否支持原生的 View Transitions API
    if (!transitionDocument.startViewTransition) {
      navigate(to);
      return;
    }

    // 【炫技点：强行唤醒原生跨页面过渡】
    // 强制 React 立即同步刷新 DOM，让浏览器捕获跳转前后的状态差异
    transitionDocument.startViewTransition(() => {
      flushSync(() => {
        navigate(to);
      });
    });
  };
};
