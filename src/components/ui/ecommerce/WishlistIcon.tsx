import * as React from "react"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"

interface WishlistIconProps extends ButtonProps {
  isWishlisted?: boolean
}

const WishlistIcon = React.forwardRef<HTMLButtonElement, WishlistIconProps>(
  ({ isWishlisted, className, ...props }, ref) => {
    return (
      <Button ref={ref} variant="ghost" size="icon" className={cn("relative", className)} {...props}>
        <Heart
          className={cn("h-6 w-6 transition-colors", isWishlisted && "fill-red-500 text-red-500")}
        />
      </Button>
    )
  }
)
WishlistIcon.displayName = "WishlistIcon"

export { WishlistIcon }
