'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  background?: string;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, children, shimmerColor = 'rgba(255, 255, 255, 0.2)', background = '#10141A', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'group relative overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105',
          className
        )}
        style={{ background }}
        {...props}
      >
        <div
          className="absolute inset-0 translate-x-[-100%] transform bg-gradient-to-r from-transparent via-[var(--shimmer-color)] to-transparent opacity-50 transition-transform duration-[1.5s] group-hover:translate-x-[100%]"
          style={{ '--shimmer-color': shimmerColor } as React.CSSProperties}
        />
        {children}
      </button>
    );
  }
);

ShimmerButton.displayName = 'ShimmerButton';
