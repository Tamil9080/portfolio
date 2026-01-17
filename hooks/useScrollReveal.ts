
'use client';

import { useEffect, useRef, useState, useMemo } from 'react';

export function useScrollReveal(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const mergedOptions = useMemo<IntersectionObserverInit>(() => ({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options,
  }), [options]);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target as Element);
      }
    }, mergedOptions);

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [mergedOptions]);

  return { ref, isVisible };
}
