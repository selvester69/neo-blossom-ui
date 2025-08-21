import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const calloutVariants = cva(
  "relative w-full rounded-lg border-l-4 p-4",
  {
    variants: {
      variant: {
        default: "border-primary bg-background text-foreground",
        destructive: "border-destructive bg-destructive/10 text-destructive",
        success: "border-success bg-success/10 text-success-foreground",
        warning: "border-warning bg-warning/10 text-warning-foreground",
        info: "border-primary bg-primary/10 text-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Callout = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof calloutVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(calloutVariants({ variant }), className)}
    {...props}
  />
))
Callout.displayName = "Callout"

const CalloutTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
CalloutTitle.displayName = "CalloutTitle"

const CalloutDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
CalloutDescription.displayName = "CalloutDescription"

export { Callout, CalloutTitle, CalloutDescription }
