import * as React from "react"
import { cn } from "@/lib/utils"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

export type Status = 'online' | 'offline' | 'away' | 'busy'

interface UserStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  status: Status
}

const statusClasses: Record<Status, string> = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
}

const statusText: Record<Status, string> = {
    online: 'Online',
    offline: 'Offline',
    away: 'Away',
    busy: 'Busy',
}

const UserStatus = React.forwardRef<HTMLDivElement, UserStatusProps>(
  ({ status, className, ...props }, ref) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div ref={ref} className={cn("relative flex h-3 w-3", className)} {...props}>
                        <span className={cn("absolute inline-flex h-full w-full rounded-full", statusClasses[status])} />
                        {status === 'online' && <span className={cn("relative inline-flex rounded-full h-3 w-3", statusClasses[status], "animate-ping")} />}
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{statusText[status]}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
  }
)
UserStatus.displayName = "UserStatus"

export { UserStatus }
