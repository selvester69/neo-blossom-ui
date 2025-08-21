import * as React from 'react';
import { cn } from '@/lib/utils';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn('p-4 border-b', className)}
        {...props}
      />
    );
  }
);
Header.displayName = 'Header';

export { Header };
