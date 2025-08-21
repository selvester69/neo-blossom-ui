import * as React from "react"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ProfileAvatar } from "./ProfileAvatar"

export interface MenuItem {
    label: string
    onClick?: () => void
    isSeparator?: boolean
}

interface UserMenuProps {
  user: {
    name: string
    email: string
    avatarSrc?: string
    avatarFallback: string
  }
  menuItems: MenuItem[]
}

export function UserMenu({ user, menuItems }: UserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none rounded-full ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <ProfileAvatar size="sm" src={user.avatarSrc} fallback={user.avatarFallback} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>
            <p className="font-medium">{user.name}</p>
            <p className="text-xs text-muted-foreground font-normal">{user.email}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuItems.map((item, index) => {
            if (item.isSeparator) {
                return <DropdownMenuSeparator key={index} />
            }
            return (
                <DropdownMenuItem key={index} onClick={item.onClick}>
                    {item.label}
                </DropdownMenuItem>
            )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
