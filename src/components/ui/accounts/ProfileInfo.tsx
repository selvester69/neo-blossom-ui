import * as React from "react"
import { cn } from "@/lib/utils"
import { Briefcase, MapPin, Link as LinkIcon, Calendar } from "lucide-react"

export interface ProfileInfoItem {
    icon: React.ReactNode
    text: string
    href?: string
}

interface ProfileInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  bio?: string
  infoItems: ProfileInfoItem[]
}

const ProfileInfo = React.forwardRef<HTMLDivElement, ProfileInfoProps>(
  ({ bio, infoItems, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        {bio && <p className="text-muted-foreground">{bio}</p>}
        <ul className="space-y-2">
            {infoItems.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    {item.icon}
                    {item.href ? (
                        <a href={item.href} className="hover:underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                            {item.text}
                        </a>
                    ) : (
                        <span>{item.text}</span>
                    )}
                </li>
            ))}
        </ul>
      </div>
    )
  }
)
ProfileInfo.displayName = "ProfileInfo"

export { ProfileInfo }
