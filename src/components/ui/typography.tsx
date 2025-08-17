import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

// Heading Component
const headingVariants = cva(
  "font-orbitron font-bold tracking-tight scroll-m-20",
  {
    variants: {
      level: {
        1: "text-4xl lg:text-5xl xl:text-6xl leading-tight",
        2: "text-3xl lg:text-4xl xl:text-5xl leading-tight",
        3: "text-2xl lg:text-3xl xl:text-4xl leading-snug", 
        4: "text-xl lg:text-2xl xl:text-3xl leading-snug",
        5: "text-lg lg:text-xl xl:text-2xl leading-snug",
        6: "text-base lg:text-lg xl:text-xl leading-snug"
      },
      variant: {
        default: "text-foreground",
        neon: "text-primary neon-glow",
        cyber: "text-neon-cyan neon-glow",
        matrix: "text-neon-green neon-glow",
        sunset: "text-neon-orange neon-glow",
        gradient: "bg-gradient-neon bg-clip-text text-transparent"
      },
      animation: {
        none: "",
        glitch: "glitch hover:animate-glitch",
        float: "animate-float",
        pulse: "neon-pulse"
      }
    },
    defaultVariants: {
      level: 1,
      variant: "default",
      animation: "none"
    }
  }
);

interface HeadingProps 
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'level'>,
    VariantProps<typeof headingVariants> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
}

export const Heading = ({ className, level, variant, animation, children, ...props }: HeadingProps) => {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  
  return (
    <Tag
      className={cn(headingVariants({ level, variant, animation }), className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

// Text Component
const textVariants = cva(
  "font-mono leading-relaxed",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg", 
        xl: "text-xl",
        "2xl": "text-2xl"
      },
      variant: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        accent: "text-accent-foreground",
        neon: "text-primary neon-glow",
        cyber: "text-neon-cyan",
        success: "text-success",
        warning: "text-warning",
        destructive: "text-destructive"
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold"
      }
    },
    defaultVariants: {
      size: "base",
      variant: "default",
      weight: "normal"
    }
  }
);

interface TextProps 
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, variant, weight, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(textVariants({ size, variant, weight }), className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
Text.displayName = "Text";

// Code Component
interface CodeProps extends HTMLAttributes<HTMLElement> {
  variant?: 'inline' | 'block';
  neon?: boolean;
}

export const Code = forwardRef<HTMLElement, CodeProps>(
  ({ className, variant = 'inline', neon = false, children, ...props }, ref) => {
    if (variant === 'block') {
      return (
        <pre
          className={cn(
            "rounded-lg bg-muted p-4 font-mono text-sm overflow-x-auto",
            "border border-border/50",
            neon && "border-primary neon-pulse bg-background/50",
            className
          )}
          {...props}
        >
          <code>{children}</code>
        </pre>
      );
    }

    return (
      <code
        ref={ref}
        className={cn(
          "relative rounded bg-muted px-2 py-1 font-mono text-sm",
          neon && "bg-primary/10 text-primary border border-primary/30",
          className
        )}
        {...props}
      >
        {children}
      </code>
    );
  }
);
Code.displayName = "Code";

// Link Component
const linkVariants = cva(
  "font-mono inline-flex items-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default: "text-primary hover:text-primary-glow underline-offset-4 hover:underline",
        neon: "text-neon-cyan neon-glow hover:text-neon-magenta",
        cyber: "text-neon-green hover:animate-glitch",
        ghost: "text-muted-foreground hover:text-foreground",
        button: "no-underline px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary-glow shadow-primary-3d btn-3d"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

interface LinkProps 
  extends HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href?: string;
  external?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, href, external = false, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn(linkVariants({ variant }), className)}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...props}
      >
        {children}
      </a>
    );
  }
);
Link.displayName = "Link";

// Blockquote Component
interface BlockquoteProps extends HTMLAttributes<HTMLQuoteElement> {
  neon?: boolean;
  cite?: string;
}

export const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, neon = false, cite, children, ...props }, ref) => {
    return (
      <blockquote
        ref={ref}
        className={cn(
          "mt-6 border-l-4 border-border pl-6 italic font-mono",
          neon && "border-l-primary border-l-4 text-primary/80 neon-glow",
          className
        )}
        cite={cite}
        {...props}
      >
        {children}
      </blockquote>
    );
  }
);
Blockquote.displayName = "Blockquote";

// List Components
interface ListProps extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  variant?: 'unordered' | 'ordered';
  neon?: boolean;
}

export const List = ({ className, variant = 'unordered', neon = false, children, ...props }: ListProps) => {
  const Tag = variant === 'ordered' ? 'ol' : 'ul';
  
  return (
    <Tag
      className={cn(
        "font-mono space-y-2 list-inside",
        variant === 'ordered' ? "list-decimal" : "list-disc",
        neon && "text-primary/80",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  neon?: boolean;
}

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, neon = false, children, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn(
          "leading-relaxed",
          neon && "marker:text-primary",
          className
        )}
        {...props}
      >
        {children}
      </li>
    );
  }
);
ListItem.displayName = "ListItem";