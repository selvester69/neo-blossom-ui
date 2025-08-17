import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

// Container Component
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  neon?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'xl', neon = false, children, ...props }, ref) => {
    const sizeClasses = {
      sm: 'max-w-sm',
      md: 'max-w-md', 
      lg: 'max-w-lg',
      xl: 'max-w-7xl',
      full: 'max-w-full'
    };

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          sizeClasses[size],
          neon && "cyber-border neon-pulse",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";

// Row Component
interface RowProps extends HTMLAttributes<HTMLDivElement> {
  gutter?: 'none' | 'sm' | 'md' | 'lg';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}

export const Row = forwardRef<HTMLDivElement, RowProps>(
  ({ className, gutter = 'md', align = 'stretch', justify = 'start', children, ...props }, ref) => {
    const gutterClasses = {
      none: 'gap-0',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6'
    };

    const alignClasses = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch'
    };

    const justifyClasses = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly'
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-wrap w-full",
          gutterClasses[gutter],
          alignClasses[align],
          justifyClasses[justify],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Row.displayName = "Row";

// Col Component
interface ColProps extends HTMLAttributes<HTMLDivElement> {
  span?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  offset?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  order?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
}

export const Col = forwardRef<HTMLDivElement, ColProps>(
  ({ className, span, offset, order, children, ...props }, ref) => {
    const getResponsiveClasses = (
      prop: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number } | undefined,
      prefix: string
    ) => {
      if (typeof prop === 'number') {
        return `${prefix}-${prop}`;
      }
      if (typeof prop === 'object' && prop !== null) {
        return Object.entries(prop)
          .map(([breakpoint, value]) => {
            if (breakpoint === 'xs') return `${prefix}-${value}`;
            return `${breakpoint}:${prefix}-${value}`;
          })
          .join(' ');
      }
      return '';
    };

    const spanClasses = getResponsiveClasses(span, 'flex-1');
    const offsetClasses = getResponsiveClasses(offset, 'ml');
    const orderClasses = getResponsiveClasses(order, 'order');

    return (
      <div
        ref={ref}
        className={cn(
          "flex-1 min-w-0", // Base responsive flex item
          spanClasses,
          offsetClasses,
          orderClasses,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Col.displayName = "Col";

// Spacer Component
interface SpacerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  direction?: 'horizontal' | 'vertical';
  neon?: boolean;
}

export const Spacer = ({ size = 'md', direction = 'vertical', neon = false }: SpacerProps) => {
  const sizeClasses = {
    xs: direction === 'vertical' ? 'h-2' : 'w-2',
    sm: direction === 'vertical' ? 'h-4' : 'w-4',
    md: direction === 'vertical' ? 'h-6' : 'w-6',
    lg: direction === 'vertical' ? 'h-8' : 'w-8',
    xl: direction === 'vertical' ? 'h-12' : 'w-12',
    '2xl': direction === 'vertical' ? 'h-16' : 'w-16'
  };

  return (
    <div 
      className={cn(
        sizeClasses[size],
        neon && "border-t border-primary/30",
        direction === 'horizontal' && neon && "border-t-0 border-l"
      )} 
    />
  );
};

// Stack Component
interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction = 'column', spacing = 'md', align = 'stretch', justify = 'start', children, ...props }, ref) => {
    const spacingClasses = {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8'
    };

    const alignClasses = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch'
    };

    const justifyClasses = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly'
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          direction === 'row' ? 'flex-row' : 'flex-col',
          spacingClasses[spacing],
          alignClasses[align],
          justifyClasses[justify],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Stack.displayName = "Stack";