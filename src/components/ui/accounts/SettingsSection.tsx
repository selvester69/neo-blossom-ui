import * as React from "react"
import { cn } from "@/lib/utils"

interface SettingsSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
}

const SettingsSection = React.forwardRef<HTMLDivElement, SettingsSectionProps>(
  ({ title, description, children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b", className)} {...props}>
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium">{title}</h3>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
        <div className="md:col-span-2">
            {children}
        </div>
      </div>
    )
  }
)
SettingsSection.displayName = "SettingsSection"

export { SettingsSection }
