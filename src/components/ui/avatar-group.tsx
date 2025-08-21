import * as React from 'react';
import { cn } from '@/lib/utils';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex -space-x-4', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AvatarGroup.displayName = 'AvatarGroup';

export { AvatarGroup };
