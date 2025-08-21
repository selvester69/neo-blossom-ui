import * as React from "react"
import { cn } from "@/lib/utils"

const FormErrorMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    />
  )
})
FormErrorMessage.displayName = "FormErrorMessage"

export { FormErrorMessage }
