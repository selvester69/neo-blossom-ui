import * as React from 'react';
import { cn } from '@/lib/utils';

export interface DescriptionListProps
  extends React.HTMLAttributes<HTMLDListElement> {}

const DescriptionList = React.forwardRef<
  HTMLDListElement,
  DescriptionListProps
>(({ className, ...props }, ref) => {
  return (
    <dl
      ref={ref}
      className={cn('grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2', className)}
      {...props}
    />
  );
});
DescriptionList.displayName = 'DescriptionList';

export interface DescriptionTermProps
  extends React.HTMLAttributes<HTMLElement> {}

const DescriptionTerm = React.forwardRef<HTMLElement, DescriptionTermProps>(
  ({ className, ...props }, ref) => {
    return (
      <dt
        ref={ref}
        className={cn('text-sm font-medium text-gray-500', className)}
        {...props}
      />
    );
  }
);
DescriptionTerm.displayName = 'DescriptionTerm';

export interface DescriptionDetailsProps
  extends React.HTMLAttributes<HTMLElement> {}

const DescriptionDetails = React.forwardRef<
  HTMLElement,
  DescriptionDetailsProps
>(({ className, ...props }, ref) => {
  return (
    <dd
      ref={ref}
      className={cn('mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0', className)}
      {...props}
    />
  );
});
DescriptionDetails.displayName = 'DescriptionDetails';

export { DescriptionList, DescriptionTerm, DescriptionDetails };
