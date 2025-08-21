import * as React from "react"
import { ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CartIconProps extends ButtonProps {
  count?: number
}

const CartIcon = React.forwardRef<HTMLButtonElement, CartIconProps>(
  ({ count, className, ...props }, ref) => {
    return (
      <Button ref={ref} variant="ghost" size="icon" className={cn("relative", className)} {...props}>
        <ShoppingCart className="h-6 w-6" />
        {count !== undefined && count > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-2 -right-2 h-6 w-6 rounded-full flex items-center justify-center p-0"
          >
            {count > 99 ? '99+' : count}
          </Badge>
        )}
      </Button>
    )
  }
)
CartIcon.displayName = "CartIcon"

export { CartIcon }
