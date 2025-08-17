import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-lg font-mono transition-all duration-fast file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-2 border-border bg-background text-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20",
        neon: "border-2 border-primary bg-background/50 text-foreground focus-visible:border-primary-glow focus-visible:shadow-neon focus-visible:shadow-primary/30 neon-pulse",
        cyber: "border-2 border-neon-cyan bg-background text-neon-cyan placeholder:text-neon-cyan/50 focus-visible:border-neon-magenta focus-visible:text-neon-magenta cyber-border",
        matrix: "border border-neon-green bg-black text-neon-green placeholder:text-neon-green/50 focus-visible:shadow-[0_0_10px_theme(colors.neon.green)]",
        glass: "border border-border/20 bg-background/10 backdrop-blur-sm text-foreground focus-visible:bg-background/20 focus-visible:border-primary",
        outline: "border-2 border-muted bg-transparent text-foreground focus-visible:border-primary focus-visible:bg-background/50"
      },
      size: {
        sm: "h-9 px-3 py-2 text-sm",
        default: "h-12 px-4 py-3 text-base",
        lg: "h-14 px-6 py-4 text-lg"
      },
      state: {
        default: "",
        error: "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
        success: "border-success focus-visible:border-success focus-visible:ring-success/20",
        warning: "border-warning focus-visible:border-warning focus-visible:ring-warning/20"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      state: "default"
    }
  }
)

interface InputProps 
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, state, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, size, state }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
