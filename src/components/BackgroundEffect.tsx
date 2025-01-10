import React from 'react';

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-rose-100/50 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-[20%] -left-[5%] w-[400px] h-[400px] bg-pink-100/50 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-[10%] left-[20%] w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl animate-blob animation-delay-4000" />
    </div>
  );
}