import * as React from "react"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"

interface WishlistEmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  onContinueShopping?: () => void
}

const WishlistEmpty = React.forwardRef<HTMLDivElement, WishlistEmptyProps>(
  ({ onContinueShopping, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("text-center p-8", className)} {...props}>
        <div className="mx-auto bg-gray-100 rounded-full h-24 w-24 flex items-center justify-center">
          <Heart className="h-12 w-12 text-gray-400" />
        </div>
        <h3 className="mt-4 text-lg font-medium">Your wishlist is empty</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          You have no items in your wishlist. Start adding some!
        </p>
        {onContinueShopping && (
            <div className="mt-6">
                <Button onClick={onContinueShopping}>Continue Shopping</Button>
            </div>
        )}
      </div>
    )
  }
)
WishlistEmpty.displayName = "WishlistEmpty"

export { WishlistEmpty }
