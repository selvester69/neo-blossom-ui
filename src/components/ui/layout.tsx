import * as React from 'react';
import { cn } from '@/lib/utils';

// Article Component
const Article = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <article ref={ref} className={cn('py-4', className)} {...props} />
  )
);
Article.displayName = 'Article';

// Aside Component
const Aside = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <aside ref={ref} className={cn('p-4', className)} {...props} />
  )
);
Aside.displayName = 'Aside';

// Wrapper Component
const Wrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('container mx-auto px-4', className)} {...props} />
  )
);
Wrapper.displayName = 'Wrapper';

// Box Component
const Box = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-4 border rounded-md', className)} {...props} />
  )
);
Box.displayName = 'Box';

// Cluster Component
const Cluster = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-wrap gap-4', className)} {...props} />
  )
);
Cluster.displayName = 'Cluster';

// Switcher Component
const Switcher = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-wrap', className)} {...props} />
  )
);
Switcher.displayName = 'Switcher';

// Cover Component
const Cover = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('relative', className)} {...props} />
  )
);
Cover.displayName = 'Cover';

// Center Component
const Center = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex justify-center items-center', className)} {...props} />
  )
);
Center.displayName = 'Center';

// Frame Component
const Frame = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('relative w-full', className)} {...props} />
  )
);
Frame.displayName = 'Frame';

// Reel Component
const Reel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex overflow-x-auto', className)} {...props} />
  )
);
Reel.displayName = 'Reel';

// Imposter Component
const Imposter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('absolute', className)} {...props} />
  )
);
Imposter.displayName = 'Imposter';

// GridArea Component
const GridArea = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { area: string }>(
  ({ className, area, ...props }, ref) => (
    <div ref={ref} className={cn(className)} style={{ gridArea: area }} {...props} />
  )
);
GridArea.displayName = 'GridArea';

// Divider Component
const Divider = React.forwardRef<HTMLHRElement, React.HTMLAttributes<HTMLHRElement>>(
  ({ className, ...props }, ref) => (
    <hr ref={ref} className={cn('border-t', className)} {...props} />
  )
);
Divider.displayName = 'Divider';

// Gap Component
const Gap = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { size: string }>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cn(className)} style={{ gap: size }} {...props} />
  )
);
Gap.displayName = 'Gap';

// Padding Component
const Padding = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { size: string }>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cn(className)} style={{ padding: size }} {...props} />
  )
);
Padding.displayName = 'Padding';

// Margin Component
const Margin = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { size: string }>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cn(className)} style={{ margin: size }} {...props} />
  )
);
Margin.displayName = 'Margin';

// Header Component
const Header = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn('p-4 border-b', className)}
        {...props}
      />
    );
  }
);
Header.displayName = 'Header';

// Footer Component
const Footer = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
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

// Main Component
const Main = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn('p-4', className)}
        {...props}
      />
    );
  }
);
Main.displayName = 'Main';

// Nav Component
const Nav = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn('p-4', className)}
        {...props}
      />
    );
  }
);
Nav.displayName = 'Nav';

// Section Component
const Section = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
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

export {
  Article,
  Aside,
  Wrapper,
  Box,
  Cluster,
  Switcher,
  Cover,
  Center,
  Frame,
  Reel,
  Imposter,
  GridArea,
  Divider,
  Gap,
  Padding,
  Margin,
  Header,
  Footer,
  Main,
  Nav,
  Section,
};
