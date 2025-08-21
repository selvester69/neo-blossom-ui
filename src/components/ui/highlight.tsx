import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const highlightVariants = cva(
  "p-1 rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary/20 text-primary-foreground",
        warning: "bg-warning/20 text-warning-foreground",
        destructive: "bg-destructive/20 text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface HighlightProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof highlightVariants> {}

const Highlight = React.forwardRef<
  HTMLElement,
  HighlightProps
>(({ className, variant, ...props }, ref) => {
  return (
    <mark
      ref={ref}
      className={cn(highlightVariants({ variant }), className)}
      {...props}
    />
  )
})
Highlight.displayName = "Highlight"

export { Highlight, highlightVariants }
