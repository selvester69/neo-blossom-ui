import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "inline-block",
  {
    variants: {
      variant: {
        default: "w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin",
        dots: "w-8 h-8 flex justify-around items-center [&>div]:w-2 [&>div]:h-2 [&>div]:bg-primary [&>div]:rounded-full [&>div]:animate-bounce",
        wave: "w-8 h-8 flex justify-around items-end [&>div]:w-1.5 [&>div]:h-full [&>div]:bg-primary [&>div]:animate-wave",
      },
      size: {
        sm: "w-4 h-4 [&>div]:w-1 [&>div]:h-1",
        md: "w-8 h-8 [&>div]:w-2 [&>div]:h-2",
        lg: "w-12 h-12 [&>div]:w-3 [&>div]:h-3",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

const Spinner = React.forwardRef<
  HTMLDivElement,
  SpinnerProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(spinnerVariants({ variant, size }), className)}
      {...props}
    >
      {variant === 'dots' && (
        <>
            <div style={{ animationDelay: '-0.32s' }} />
            <div style={{ animationDelay: '-0.16s' }} />
            <div />
        </>
      )}
      {variant === 'wave' && (
        <>
            <div style={{ animationDelay: '-0.3s' }} />
            <div style={{ animationDelay: '-0.2s' }} />
            <div style={{ animationDelay: '-0.1s' }} />
            <div />
        </>
      )}
    </div>
  )
})
Spinner.displayName = "Spinner"

export { Spinner, spinnerVariants }
