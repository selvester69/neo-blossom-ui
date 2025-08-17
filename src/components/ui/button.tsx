import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-mono font-bold text-sm transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-glow shadow-primary-3d btn-3d border-2 border-primary",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80 shadow-destructive-3d btn-3d border-2 border-destructive",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground shadow-primary-3d btn-3d",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-glow shadow-secondary-3d btn-3d border-2 border-secondary",
        ghost: "hover:bg-accent hover:text-accent-foreground border-2 border-transparent hover:border-accent",
        neon: "bg-gradient-neon text-background border-2 border-neon-cyan shadow-neon neon-pulse btn-3d hover:shadow-[0_0_30px_currentColor]",
        cyber: "bg-background text-neon-green border-2 border-neon-green hover:bg-neon-green hover:text-background shadow-[4px_4px_0px_theme(colors.neon.green)] btn-3d cyber-border",
        matrix: "bg-black text-neon-green border border-neon-green hover:bg-neon-green hover:text-black font-mono text-xs tracking-wider cyber-scan",
        hero: "bg-gradient-cyber text-foreground border-2 border-neon-purple shadow-[8px_8px_0px_theme(colors.neon.purple)] hover:shadow-[12px_12px_0px_theme(colors.neon.purple)] btn-3d text-lg px-8 py-4 neon-glow",
        link: "text-primary underline-offset-4 hover:underline neon-glow hover:text-primary-glow",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-14 rounded-lg px-8 text-base",
        xl: "h-16 rounded-lg px-12 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
