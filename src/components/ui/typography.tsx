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

const Heading = ({ className, level, variant, animation, children, ...props }: HeadingProps) => {
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
Heading.displayName = "Heading";

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

const Text = forwardRef<HTMLParagraphElement, TextProps>(
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

const Code = forwardRef<HTMLElement, CodeProps>(
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

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
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

const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
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

const List = ({ className, variant = 'unordered', neon = false, children, ...props }: ListProps) => {
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
List.displayName = "List";

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  neon?: boolean;
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
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

// Cite Component
const Cite = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <cite ref={ref} className={cn("not-italic", className)} {...props} />
  )
);
Cite.displayName = "Cite";

// Abbr Component
const Abbr = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <abbr
      ref={ref}
      className={cn("underline decoration-dotted", className)}
      {...props}
    />
  )
);
Abbr.displayName = "Abbr";

// Mark Component
const Mark = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <mark
      ref={ref}
      className={cn("bg-yellow-300 text-yellow-800 px-1", className)}
      {...props}
    />
  )
);
Mark.displayName = "Mark";

// Highlight Component (similar to Mark, but can be used for other colors)
const Highlight = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <mark
      ref={ref}
      className={cn("bg-primary/20 text-primary px-1", className)}
      {...props}
    />
  )
);
Highlight.displayName = "Highlight";

// Strikethrough Component
const Strikethrough = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <s ref={ref} className={cn("", className)} {...props} />
  )
);
Strikethrough.displayName = "Strikethrough";

// Underline Component
const Underline = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <u ref={ref} className={cn("", className)} {...props} />
  )
);
Underline.displayName = "Underline";

// Subscript Component
const Subscript = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <sub ref={ref} className={cn("align-sub text-xs", className)} {...props} />
  )
);
Subscript.displayName = "Subscript";

// Superscript Component
const Superscript = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <sup ref={ref} className={cn("align-super text-xs", className)} {...props} />
  )
);
Superscript.displayName = "Superscript";

// KBD Component
const KBD = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <kbd
      ref={ref}
      className={cn(
        "px-2 py-1.5 text-xs font-sans bg-muted text-muted-foreground rounded-md border border-b-2",
        className
      )}
      {...props}
    />
  )
);
KBD.displayName = "KBD";

// Strong Component
const Strong = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <strong ref={ref} className={cn("font-bold", className)} {...props} />
  )
);
Strong.displayName = "Strong";

// Emphasis Component
const Emphasis = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <em ref={ref} className={cn("italic", className)} {...props} />
  )
);
Emphasis.displayName = "Emphasis";

// Small Component
const Small = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <small ref={ref} className={cn("text-sm", className)} {...props} />
  )
);
Small.displayName = "Small";

export {
  Heading,
  Text,
  Code,
  Link,
  Blockquote,
  List,
  ListItem,
  Cite,
  Abbr,
  Mark,
  Highlight,
  Strikethrough,
  Underline,
  Subscript,
  Superscript,
  KBD,
  Strong,
  Emphasis,
  Small,
};