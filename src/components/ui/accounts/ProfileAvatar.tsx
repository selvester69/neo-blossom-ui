import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { cva, type VariantProps } from "class-variance-authority"

const profileAvatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "h-10 w-10",
        md: "h-24 w-24",
        lg: "h-32 w-32",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface ProfileAvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof profileAvatarVariants> {
    src?: string
    fallback: string
}

const ProfileAvatar = React.forwardRef<
  React.ElementRef<typeof Avatar>,
  ProfileAvatarProps
>(({ className, size, src, fallback, ...props }, ref) => {
    return (
        <Avatar ref={ref} className={cn(profileAvatarVariants({ size }), className)} {...props}>
            <AvatarImage src={src} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    )
})
ProfileAvatar.displayName = "ProfileAvatar"

export { ProfileAvatar }
