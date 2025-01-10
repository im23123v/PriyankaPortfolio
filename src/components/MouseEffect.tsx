import React, { useEffect, useRef } from 'react';

export default function MouseEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let animationFrameId: number;

    const updateCursor = () => {
      // Smooth cursor movement
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

      animationFrameId = requestAnimationFrame(updateCursor);
    };

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Throttle mouse move events to prevent overloading
    let lastMoveTime = 0;
    const throttleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMoveTime > 16) { // ~60fps
        moveCursor(e);
        lastMoveTime = now;
      }
    };

    // Handle hover effects for interactive elements
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, input, textarea')) {
        cursor.classList.add('scale-[2.5]', 'mix-blend-difference');
        if (target.tagName.toLowerCase() === 'a') {
          cursor.classList.add('border-rose-400');
        }
      }
    };

    const handleLeave = () => {
      cursor.classList.remove('scale-[2.5]', 'mix-blend-difference', 'border-rose-400');
    };

    document.addEventListener('mousemove', throttleMouseMove);
    document.addEventListener('mouseover', handleHover);
    document.addEventListener('mouseout', handleLeave);

    animationFrameId = requestAnimationFrame(updateCursor);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mousemove', throttleMouseMove);
      document.removeEventListener('mouseover', handleHover);
      document.removeEventListener('mouseout', handleLeave);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 
          border border-white/30 rounded-full transition-transform duration-100
          backdrop-blur-sm"
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50
          bg-rose-400 rounded-full mix-blend-difference"
      />
    </>
  );
}
