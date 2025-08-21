import * as React from "react"
import { cn } from "@/lib/utils"

interface SettingsRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  description?: string
}

const SettingsRow = React.forwardRef<HTMLDivElement, SettingsRowProps>(
  ({ label, description, children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center justify-between p-4 border-b last:border-b-0", className)} {...props}>
        <div className="flex-1 space-y-0.5">
          <p className="text-sm font-medium">{label}</p>
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </div>
        <div>
            {children}
        </div>
      </div>
    )
  }
)
SettingsRow.displayName = "SettingsRow"

export { SettingsRow }
