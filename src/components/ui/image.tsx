import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const imageVariants = cva('w-full h-auto', {
  variants: {
    variant: {
      default: '',
      rounded: 'rounded-lg',
      circular: 'rounded-full object-cover',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof imageVariants> {
  lazy?: boolean;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, variant, lazy = true, ...props }, ref) => {
    return (
      <img
        ref={ref}
        className={cn(imageVariants({ variant }), className)}
        loading={lazy ? 'lazy' : 'eager'}
        {...props}
      />
    );
  }
);
Image.displayName = 'Image';

export { Image, imageVariants };
