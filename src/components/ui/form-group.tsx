import * as React from "react"
import { cn } from "@/lib/utils"

const FormGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("grid w-full items-center gap-1.5", className)} {...props} />
  )
})
FormGroup.displayName = "FormGroup"

export { FormGroup }
