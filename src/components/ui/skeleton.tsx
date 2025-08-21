import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const skeletonVariants = cva(
  "rounded-md",
  {
    variants: {
      variant: {
        pulse: "animate-pulse bg-muted",
        shimmer: "relative overflow-hidden bg-muted after:absolute after:inset-0 after:-translate-x-full after:animate-shimmer after:bg-gradient-to-r after:from-muted after:via-muted-foreground/10 after:to-muted",
      },
    },
    defaultVariants: {
      variant: "pulse",
    },
  }
)

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

const Skeleton = React.forwardRef<
  HTMLDivElement,
  SkeletonProps
>(({ className, variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(skeletonVariants({ variant }), className)}
      {...props}
    />
  )
})
Skeleton.displayName = "Skeleton"

export { Skeleton, skeletonVariants }
