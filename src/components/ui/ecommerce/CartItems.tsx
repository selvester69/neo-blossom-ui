import * as React from "react"
import { cn } from "@/lib/utils"
import { CartItem, CartItemData } from "./CartItem"

interface CartItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CartItemData[]
  onQuantityChange: (itemId: string, quantity: number) => void
  onRemove: (itemId: string) => void
}

const CartItems = React.forwardRef<HTMLDivElement, CartItemsProps>(
  ({ items, onQuantityChange, onRemove, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("divide-y", className)} {...props}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onQuantityChange={(quantity) => onQuantityChange(item.id, quantity)}
            onRemove={() => onRemove(item.id)}
          />
        ))}
      </div>
    )
  }
)
CartItems.displayName = "CartItems"

export { CartItems }
