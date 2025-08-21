import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  lazy?: boolean;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, lazy = true, ...props }, ref) => {
    return (
      <img
        ref={ref}
        className={cn('w-full h-auto', className)}
        loading={lazy ? 'lazy' : 'eager'}
        {...props}
      />
    );
  }
);
Image.displayName = 'Image';

export { Image };
