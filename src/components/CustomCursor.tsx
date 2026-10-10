import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hoveredType, setHoveredType] = useState<'button' | 'card' | 'link' | 'normal'>('normal');
  const [visible, setVisible] = useState(false);

  // References for exact positions and spring lerp
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Check if device is fine pointer and desktop, and not reduced motion
    const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmallScreen = window.innerWidth < 1024;

    if (hasCoarsePointer || prefersReducedMotion || isSmallScreen) {
      setEnabled(false);
      return;
    }

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!visible) setVisible(true);

      // Instantly position the small dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    // Dynamic hover detector for links, buttons, cards
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveElement = target.closest('a, button, [role="button"], input, select, textarea, .interactive-card, .magnetic-btn');
      if (interactiveElement) {
        setHovered(true);
        if (interactiveElement.classList.contains('magnetic-btn') || interactiveElement.tagName === 'BUTTON') {
          setHoveredType('button');
        } else if (interactiveElement.classList.contains('interactive-card')) {
          setHoveredType('card');
        } else {
          setHoveredType('link');
        }
      } else {
        setHovered(false);
        setHoveredType('normal');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth lerp loop for the trailing ring
    const updateRing = () => {
      // Lerp factor 0.18 for elegant, responsive trailing
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(updateRing);
    };

    animFrameId.current = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [visible]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none" aria-hidden="true">
      {/* Precision inner center dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-emerald-600 transition-opacity duration-200 ${
          visible ? 'opacity-90' : 'opacity-0'
        } ${hovered ? 'scale-0' : 'scale-100'}`}
        style={{ willChange: 'transform' }}
      />

      {/* Smooth trailing ring with hover reaction */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 rounded-full border border-emerald-600/70 transition-[width,height,margin,background-color,border-color,opacity] duration-200 ease-out ${
          visible ? 'opacity-100' : 'opacity-0'
        } ${
          hovered && hoveredType === 'button'
            ? 'w-12 h-12 -ml-6 -mt-6 bg-emerald-500/15 border-emerald-500 shadow-sm'
            : hovered && hoveredType === 'card'
            ? 'w-14 h-14 -ml-7 -mt-7 bg-teal-500/10 border-teal-500/80'
            : hovered
            ? 'w-10 h-10 -ml-5 -mt-5 bg-emerald-500/10 border-emerald-600'
            : 'w-8 h-8 -ml-4 -mt-4 bg-transparent'
        }`}
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};
