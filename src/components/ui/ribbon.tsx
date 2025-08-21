import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const ribbonVariants = cva(
  "absolute top-2 right-2 z-10 whitespace-nowrap rounded-sm px-2 py-1 text-xs font-bold text-white",
  {
    variants: {
      variant: {
        default: "bg-primary",
        new: "bg-success-foreground",
        beta: "bg-warning-foreground",
        sale: "bg-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface RibbonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ribbonVariants> {}

const Ribbon = React.forwardRef<
  HTMLDivElement,
  RibbonProps
>(({ className, variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(ribbonVariants({ variant }), className)}
      {...props}
    />
  )
})
Ribbon.displayName = "Ribbon"

export { Ribbon, ribbonVariants }
