import { flushSync } from 'react-dom';

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => void;
};

export const runViewTransition = (callback: () => void, options: { flush?: boolean } = {}) => {
  const transitionDocument = document as ViewTransitionDocument;

  if (!transitionDocument.startViewTransition) {
    callback();
    return;
  }

  transitionDocument.startViewTransition(() => {
    if (options.flush) {
      flushSync(callback);
      return;
    }

    callback();
  });
};
