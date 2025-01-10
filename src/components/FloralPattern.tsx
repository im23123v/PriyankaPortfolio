import React from 'react';

export default function FloralPattern() {
  return (
    <div className="fixed inset-0 -z-30 overflow-hidden opacity-[0.15]">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[300px] h-[300px] animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-rose-400">
            <path d="M50 0 C20 20, 20 80, 50 100 C80 80, 80 20, 50 0" />
          </svg>
        </div>
      ))}
    </div>
  );
}