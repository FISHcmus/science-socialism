import { useEffect, useRef } from "react";

/**
 * Shared IntersectionObserver — one instance for ALL scroll-reveal elements.
 * Adds .revealed class when 20% visible. One-shot.
 */
let sharedObserver: IntersectionObserver | null = null;
let observedCount = 0;

function getSharedObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            sharedObserver?.unobserve(entry.target);
            observedCount--;
            if (observedCount <= 0) {
              sharedObserver?.disconnect();
              sharedObserver = null;
              observedCount = 0;
            }
          }
        }
      },
      { threshold: 0.2 }
    );
  }
  return sharedObserver;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getSharedObserver();
    observer.observe(el);
    observedCount++;

    return () => {
      observer.unobserve(el);
      observedCount--;
    };
  }, []);

  return ref;
}
