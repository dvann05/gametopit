'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>((
  { children, className, hover = true, ...props },
  ref
) => {
  return (
    <div
      ref={ref}
      className={cn(
        'card',
        hover && 'hover:shadow-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
