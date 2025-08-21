import * as React from "react"
import { cn } from "@/lib/utils"

export interface ProfileStat {
    label: string
    value: number | string
}

interface ProfileStatsProps extends React.HTMLAttributes<HTMLDivElement> {
  stats: ProfileStat[]
}

const ProfileStats = React.forwardRef<HTMLDivElement, ProfileStatsProps>(
  ({ stats, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex gap-4", className)} {...props}>
        {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-1 text-sm">
                <span className="font-semibold">{stat.value}</span>
                <span className="text-muted-foreground">{stat.label}</span>
            </div>
        ))}
      </div>
    )
  }
)
ProfileStats.displayName = "ProfileStats"

export { ProfileStats }
