import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import { UserPlus, UserCheck } from "lucide-react"

interface FollowButtonProps extends ButtonProps {
  isFollowing: boolean
}

const FollowButton = React.forwardRef<HTMLButtonElement, FollowButtonProps>(
  ({ isFollowing, className, ...props }, ref) => {
    const [hover, setHover] = React.useState(false);

    if (isFollowing) {
        return (
            <Button
                ref={ref}
                variant="outline"
                className={cn("w-28", hover && "bg-destructive/80 border-destructive text-destructive-foreground", className)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                {...props}
            >
                {hover ? 'Unfollow' : <><UserCheck className="mr-2 h-4 w-4" /> Following</>}
            </Button>
        )
    }

    return (
      <Button ref={ref} variant="default" className={cn("w-28", className)} {...props}>
        <UserPlus className="mr-2 h-4 w-4" />
        Follow
      </Button>
    )
  }
)
FollowButton.displayName = "FollowButton"

export { FollowButton }
