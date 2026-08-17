// src/hooks/useTransitionNavigate.ts
import { useNavigate } from 'react-router-dom';
import { runViewTransition } from '@/lib/viewTransition';

export const useTransitionNavigate = () => {
  const navigate = useNavigate();

  return (to: string) => {
    runViewTransition(() => navigate(to), { flush: true });
  };
};
