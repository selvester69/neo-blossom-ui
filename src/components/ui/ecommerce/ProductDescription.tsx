import * as React from "react"
import { cn } from "@/lib/utils"

const ProductDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
ProductDescription.displayName = "ProductDescription"

export { ProductDescription }
