import * as React from "react"
import { cn } from "@/lib/utils"
import { ProfileAvatar } from "./ProfileAvatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

export interface User {
    id: string
    name: string
    email: string
    avatarSrc?: string
    role: 'Admin' | 'Member' | 'Guest'
}

interface UserCardProps extends React.HTMLAttributes<HTMLDivElement> {
  user: User
}

const UserCard = React.forwardRef<HTMLDivElement, UserCardProps>(
  ({ user, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center justify-between p-4 border rounded-lg", className)} {...props}>
        <div className="flex items-center gap-4">
            <ProfileAvatar size="sm" src={user.avatarSrc} fallback={user.name.charAt(0)} />
            <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{user.role}</span>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
    )
  }
)
UserCard.displayName = "UserCard"

export { UserCard }
