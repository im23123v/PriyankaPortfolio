import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function Badge({
  children,
  variant = 'primary',
  className = '',
}: BadgeProps) {
  const variants = {
    primary: 'bg-primary-light text-primary',
    secondary: 'bg-gray-100 text-gray-800',
    outline: 'border border-primary text-primary',
  };

  return (
    <span className={`
      inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </span>
  );
}