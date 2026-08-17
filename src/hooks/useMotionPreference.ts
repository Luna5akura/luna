import { useEffect, useState } from 'react';

const getMediaQueryMatch = (query: string) => {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia(query).matches;
};

export const useMotionPreference = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    getMediaQueryMatch('(prefers-reduced-motion: reduce)')
  );
  const [isDesktop, setIsDesktop] = useState(() =>
    getMediaQueryMatch('(min-width: 1024px)')
  );

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktopQuery = window.matchMedia('(min-width: 1024px)');

    const sync = () => {
      setPrefersReducedMotion(reducedMotionQuery.matches);
      setIsDesktop(desktopQuery.matches);
    };

    sync();
    reducedMotionQuery.addEventListener('change', sync);
    desktopQuery.addEventListener('change', sync);

    return () => {
      reducedMotionQuery.removeEventListener('change', sync);
      desktopQuery.removeEventListener('change', sync);
    };
  }, []);

  return {
    prefersReducedMotion,
    isDesktop,
    allowRichMotion: isDesktop && !prefersReducedMotion,
  };
};
