import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const bubbleVariants = cva(
  "relative inline-block rounded-lg p-3",
  {
    variants: {
      variant: {
        sent: "bg-primary text-primary-foreground rounded-br-none",
        received: "bg-muted text-muted-foreground rounded-bl-none",
      },
    },
    defaultVariants: {
      variant: "received",
    },
  }
)

export interface BubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bubbleVariants> {}

const Bubble = React.forwardRef<
  HTMLDivElement,
  BubbleProps
>(({ className, variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(bubbleVariants({ variant }), className)}
      {...props}
    />
  )
})
Bubble.displayName = "Bubble"

export { Bubble, bubbleVariants }
