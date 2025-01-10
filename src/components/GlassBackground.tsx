import React from 'react';

export default function GlassBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-100/30 to-purple-100/30 backdrop-blur-xl rounded-3xl" />
      <div className="relative">{children}</div>
    </div>
  );
}