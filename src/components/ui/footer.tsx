import * as React from 'react';
import { cn } from '@/lib/utils';

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn('p-4 border-t', className)}
        {...props}
      />
    );
  }
);
Footer.displayName = 'Footer';

export { Footer };
