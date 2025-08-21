import * as React from "react"
import { Label } from "./label"
import { cn } from "@/lib/utils"

interface CheckboxGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

const CheckboxGroup = React.forwardRef<
  HTMLDivElement,
  CheckboxGroupProps
>(({ className, label, children, ...props }, ref) => {
  const labelId = React.useId();
  return (
    <div ref={ref} className={cn("space-y-2", className)} {...props} role="group" aria-labelledby={labelId}>
      <Label id={labelId}>{label}</Label>
      <div className="mt-2 space-y-2">
        {children}
      </div>
    </div>
  )
})
CheckboxGroup.displayName = "CheckboxGroup"

export { CheckboxGroup }
