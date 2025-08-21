import * as React from 'react';
import { cn } from '@/lib/utils';

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          'flex items-center justify-between p-4 border-b',
          className
        )}
        {...props}
      >
        {children}
      </nav>
    );
  }
);
Navbar.displayName = 'Navbar';

export interface NavbarLogoProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavbarLogo = React.forwardRef<HTMLDivElement, NavbarLogoProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center', className)}
        {...props}
      />
    );
  }
);
NavbarLogo.displayName = 'NavbarLogo';

export interface NavbarLinksProps extends React.HTMLAttributes<HTMLUListElement> {}

const NavbarLinks = React.forwardRef<HTMLUListElement, NavbarLinksProps>(
  ({ className, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn('flex items-center space-x-4', className)}
        {...props}
      />
    );
  }
);
NavbarLinks.displayName = 'NavbarLinks';

export interface NavbarActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavbarActions = React.forwardRef<HTMLDivElement, NavbarActionsProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center space-x-2', className)}
        {...props}
      />
    );
  }
);
NavbarActions.displayName = 'NavbarActions';

export { Navbar, NavbarLogo, NavbarLinks, NavbarActions };
