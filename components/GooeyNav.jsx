"use client";
import { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import './GooeyNav.css';

// Deterministic PRNG to avoid impure Math.random during render
function createPRNG(seed = 987654321) {
  let s = seed >>> 0;
  return function rand() {
    s = (Math.imul(1664525, s) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const GooeyNav = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4], // Spider-Verse colors
  initialActiveIndex = 0,
  enableScrollSpy = true,
  _scrollSpyThreshold = 0.6,
  moveTime = 350
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const textRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(() => {
    if (typeof window !== 'undefined' && Array.isArray(items)) {
      const hash = window.location.hash;
      if (hash) {
        const idx = items.findIndex(it => {
          if (!it?.href) return false;
          if (it.href.startsWith('#')) return it.href === hash;
          if (it.href.startsWith('/#')) return it.href.substring(1) === hash;
          return false;
        });
        if (idx >= 0) return idx;
      }
    }
    return initialActiveIndex;
  });
  const changeSourceRef = useRef(null);
  const rand = useRef(createPRNG(1337)).current;
  const noise = useCallback((n = 1) => n / 2 - rand() * n, [rand]);

  const getXY = useCallback((distance, pointIndex, totalPoints) => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  }, [noise]);

  const createParticle = useCallback((i, t, d, r) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(rand() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
  }, [noise, particleCount, rand, getXY, colors]);
  const makeParticles = useCallback((element) => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', `${bubbleTime}ms`);

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove('active');

      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', `${p.start[0]}px`);
        particle.style.setProperty('--start-y', `${p.start[1]}px`);
        particle.style.setProperty('--end-x', `${p.end[0]}px`);
        particle.style.setProperty('--end-y', `${p.end[1]}px`);
        particle.style.setProperty('--time', `${p.time}ms`);
        particle.style.setProperty('--scale', `${p.scale}`);
        particle.style.setProperty('--color', `var(--color-${p.color}, white)`);
        particle.style.setProperty('--rotate', `${p.rotate}deg`);

        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add('active');
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // Do nothing
          }
        }, t);
      }, 30);
    }
  }, [animationTime, timeVariance, particleCount, particleDistances, particleR, createParticle, noise]);

  const updateEffectPosition = useCallback((element) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    filterRef.current.style.setProperty('--move-time', `${moveTime}ms`);
    textRef.current.style.setProperty('--move-time', `${moveTime}ms`);
    textRef.current.innerText = element.innerText;
  }, [moveTime]);

  const handleClick = (e, index) => {
    const liEl = e.currentTarget;
    if (activeIndex === index) return;

    changeSourceRef.current = 'click';
    setActiveIndex(index);
    updateEffectPosition(liEl);

    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll('.particle');
      particles.forEach(p => filterRef.current.removeChild(p));
    }

    if (textRef.current) {
      textRef.current.classList.remove('active');

      void textRef.current.offsetWidth;
      textRef.current.classList.add('active');
    }

    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick({ currentTarget: liEl }, index);
      }
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll('li')[activeIndex];
    if (activeLi) {
      updateEffectPosition(activeLi);
      
      // Always retrigger text effect for all navigation changes
      if (textRef.current) {
        textRef.current.classList.remove('active');
        void textRef.current.offsetWidth;
        textRef.current.classList.add('active');
      }
      
      // Always trigger particles for all navigation changes (including scroll spy)
      if (filterRef.current) {
        const particles = filterRef.current.querySelectorAll('.particle');
        particles.forEach(p => filterRef.current.removeChild(p));
        makeParticles(filterRef.current);
      }
      
      changeSourceRef.current = null;
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll('li')[activeIndex];
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex, updateEffectPosition, makeParticles]);

  // Scroll spy: update activeIndex based on visible section
  useEffect(() => {
    if (!enableScrollSpy) return;
    const sectionMap = items
      .map((it, idx) => {
        let selector = null;
        if (it.href?.startsWith('#')) {
          selector = it.href;
        } else if (it.href?.startsWith('/#')) {
          selector = it.href.substring(1);
        }
        return { idx, selector };
      })
      .filter(s => !!s.selector)
      .map(s => ({ ...s, el: document.querySelector(s.selector) }));

    const validSections = sectionMap.filter(s => !!s.el);
    if (validSections.length === 0) return;

    let scrollTimeout;
    let lastActiveIdx = activeIndex;

    // Enhanced scroll detection for better responsiveness
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * _scrollSpyThreshold;
      
      let currentSection = validSections[0];
      
      for (const section of validSections) {
        const element = section.el;
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;
        
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          currentSection = section;
          break;
        }
        
        if (scrollPosition >= elementTop) {
          currentSection = section;
        }
      }
      
      if (currentSection.idx !== lastActiveIdx) {
        lastActiveIdx = currentSection.idx;
        changeSourceRef.current = 'scroll';
        setActiveIndex(currentSection.idx);
      }
    };

    // Debounce scroll handler for performance
    const debouncedScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 50);
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    
    // Run once on mount to set initial state
    handleScroll();

    const onHashChange = () => {
      const target = validSections.find(s => s.selector === window.location.hash);
      if (target && target.idx !== lastActiveIdx) {
        lastActiveIdx = target.idx;
        changeSourceRef.current = 'hash';
        setActiveIndex(target.idx);
      }
    };
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      window.removeEventListener('hashchange', onHashChange);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [items, enableScrollSpy, activeIndex, _scrollSpyThreshold]);

  return (
    <div className="gooey-nav-container" ref={containerRef}>
      <nav>
        <ul ref={navRef}>
          {items.map((item, index) => (
            <li key={index} className={activeIndex === index ? 'active' : ''}>
              <Link href={item.href} onClick={e => handleClick(e, index)} onKeyDown={e => handleKeyDown(e, index)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <span className="effect filter" ref={filterRef} />
      <span className="effect text" ref={textRef} />
    </div>
  );
};

export default GooeyNav;
