import * as React from "react"
import { Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ProductImage } from "./ProductImage"
import { QuantitySelector } from "./QuantitySelector"

export interface CartItemData {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  variant?: string
}

interface CartItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: CartItemData
  onQuantityChange: (quantity: number) => void
  onRemove: () => void
}

const CartItem = React.forwardRef<HTMLDivElement, CartItemProps>(
  ({ item, onQuantityChange, onRemove, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center gap-4 py-4", className)} {...props}>
        <ProductImage src={item.image} alt={item.name} ratio={1} className="w-24 h-24 rounded-md" />
        <div className="flex-1 grid gap-1">
          <h4 className="font-semibold">{item.name}</h4>
          {item.variant && <p className="text-sm text-muted-foreground">{item.variant}</p>}
          <div className="flex items-center justify-between">
            <QuantitySelector
              quantity={item.quantity}
              onQuantityChange={onQuantityChange}
            />
            <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onRemove}>
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>
    )
  }
)
CartItem.displayName = "CartItem"

export { CartItem }
