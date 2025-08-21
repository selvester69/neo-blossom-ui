import * as React from 'react';
import { cn } from '@/lib/utils';

export interface NavProps extends React.HTMLAttributes<HTMLElement> {}

const Nav = React.forwardRef<HTMLElement, NavProps>(
  ({ className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn('p-4', className)}
        {...props}
      />
    );
  }
);
Nav.displayName = 'Nav';

export { Nav };
