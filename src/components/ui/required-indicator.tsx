import * as React from "react"
import { cn } from "@/lib/utils"

const RequiredIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn("ml-1 text-destructive", className)}
      {...props}
    >
      *
    </span>
  )
})
RequiredIndicator.displayName = "RequiredIndicator"

export { RequiredIndicator }
