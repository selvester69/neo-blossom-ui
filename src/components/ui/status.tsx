import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const statusVariants = cva(
  "text-sm font-medium",
  {
    variants: {
      variant: {
        default: "text-foreground",
        success: "text-success-foreground",
        warning: "text-warning-foreground",
        destructive: "text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface StatusProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof statusVariants> {}

const Status = React.forwardRef<
  HTMLParagraphElement,
  StatusProps
>(({ className, variant, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(statusVariants({ variant }), className)}
      {...props}
    />
  )
})
Status.displayName = "Status"

export { Status, statusVariants }
