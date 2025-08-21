import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from './button';

export interface FabProps extends ButtonProps {}

const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          'fixed bottom-8 right-8 h-16 w-16 rounded-full shadow-lg',
          className
        )}
        {...props}
      />
    );
  }
);
Fab.displayName = 'Fab';

export { Fab };
