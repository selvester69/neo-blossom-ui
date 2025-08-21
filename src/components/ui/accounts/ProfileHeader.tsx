import * as React from "react"
import { cn } from "@/lib/utils"
import { ProfileAvatar } from "./ProfileAvatar"
import { Button } from "@/components/ui/button"

interface ProfileHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  username: string
  avatarSrc?: string
  avatarFallback: string
  actionButton?: React.ReactNode
}

const ProfileHeader = React.forwardRef<HTMLDivElement, ProfileHeaderProps>(
  ({ name, username, avatarSrc, avatarFallback, actionButton, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center gap-6", className)} {...props}>
        <ProfileAvatar size="lg" src={avatarSrc} fallback={avatarFallback} />
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-muted-foreground">@{username}</p>
        </div>
        {actionButton && <div>{actionButton}</div>}
      </div>
    )
  }
)
ProfileHeader.displayName = "ProfileHeader"

export { ProfileHeader }
