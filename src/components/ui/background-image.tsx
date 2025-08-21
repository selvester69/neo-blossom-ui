import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BackgroundImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
}

const BackgroundImage = React.forwardRef<
  HTMLDivElement,
  BackgroundImageProps
>(({ className, src, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('bg-cover bg-center', className)}
      style={{ backgroundImage: `url(${src})` }}
      {...props}
    >
      {children}
    </div>
  );
});
BackgroundImage.displayName = 'BackgroundImage';

export { BackgroundImage };
