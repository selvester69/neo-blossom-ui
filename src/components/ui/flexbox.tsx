import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const flexboxVariants = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      'row-reverse': 'flex-row-reverse',
      col: 'flex-col',
      'col-reverse': 'flex-col-reverse',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    wrap: {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
    },
  },
  defaultVariants: {
    direction: 'row',
    justify: 'start',
    align: 'stretch',
    wrap: 'nowrap',
  },
});

export interface FlexBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexboxVariants> {}

const FlexBox = React.forwardRef<HTMLDivElement, FlexBoxProps>(
  ({ className, direction, justify, align, wrap, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          flexboxVariants({ direction, justify, align, wrap }),
          className
        )}
        {...props}
      />
    );
  }
);
FlexBox.displayName = 'FlexBox';

export { FlexBox, flexboxVariants };
