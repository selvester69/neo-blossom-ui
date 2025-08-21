import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const statusIndicatorVariants = cva(
  "h-3 w-3 rounded-full",
  {
    variants: {
      variant: {
        online: "bg-green-500",
        offline: "bg-gray-400",
        typing: "bg-blue-500 animate-pulse",
      },
    },
    defaultVariants: {
      variant: "offline",
    },
  }
)

export interface StatusIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusIndicatorVariants> {}

function StatusIndicator({ className, variant, ...props }: StatusIndicatorProps) {
  return (
    <div className={cn(statusIndicatorVariants({ variant }), className)} {...props} />
  )
}

export { StatusIndicator, statusIndicatorVariants }
