import * as React from "react"
import { cn } from "@/lib/utils"
import { WishlistItem, WishlistItemData } from "./WishlistItem"

interface WishlistItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: WishlistItemData[]
  onAddToCart: (itemId: string) => void
  onRemove: (itemId: string) => void
}

const WishlistItems = React.forwardRef<HTMLDivElement, WishlistItemsProps>(
  ({ items, onAddToCart, onRemove, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("divide-y", className)} {...props}>
        {items.map((item) => (
          <WishlistItem
            key={item.id}
            item={item}
            onAddToCart={() => onAddToCart(item.id)}
            onRemove={() => onRemove(item.id)}
          />
        ))}
      </div>
    )
  }
)
WishlistItems.displayName = "WishlistItems"

export { WishlistItems }
