import React, { useEffect, useRef } from 'react';

export default function ScrollGradient() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateGradient = () => {
      if (!gradientRef.current) return;
      const scrolled = window.scrollY;
      const hue = (scrolled * 0.1) % 360;
      gradientRef.current.style.setProperty('--gradient-hue', `${hue}`);
    };

    window.addEventListener('scroll', updateGradient);
    return () => window.removeEventListener('scroll', updateGradient);
  }, []);

  return (
    <div 
      ref={gradientRef}
      className="fixed inset-0 -z-20 bg-gradient-to-br opacity-30 animate-gradient-shift"
      style={{ 
        background: 'linear-gradient(45deg, hsl(var(--gradient-hue, 0), 100%, 95%), hsl(calc(var(--gradient-hue, 0) + 60), 100%, 95%))'
      }}
    />
  );
}