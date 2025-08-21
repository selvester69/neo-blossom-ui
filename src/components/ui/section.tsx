import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('py-8', className)}
        {...props}
      />
    );
  }
);
Section.displayName = 'Section';

export { Section };
