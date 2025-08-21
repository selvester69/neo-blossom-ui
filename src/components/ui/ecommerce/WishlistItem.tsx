import * as React from "react"
import { Trash2, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ProductImage } from "./ProductImage"
import { ProductPrice } from "./ProductPrice"

export interface WishlistItemData {
  id: string
  name: string
  price: number
  image: string
  variant?: string
}

interface WishlistItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: WishlistItemData
  onAddToCart: () => void
  onRemove: () => void
}

const WishlistItem = React.forwardRef<HTMLDivElement, WishlistItemProps>(
  ({ item, onAddToCart, onRemove, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center gap-4 py-4", className)} {...props}>
        <ProductImage src={item.image} alt={item.name} ratio={1} className="w-24 h-24 rounded-md" />
        <div className="flex-1 grid gap-1">
          <h4 className="font-semibold">{item.name}</h4>
          {item.variant && <p className="text-sm text-muted-foreground">{item.variant}</p>}
          <ProductPrice price={item.price} />
        </div>
        <div className="flex flex-col gap-2">
          <Button size="sm" onClick={onAddToCart}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          <Button variant="ghost" size="sm" onClick={onRemove}>
            <Trash2 className="mr-2 h-4 w-4" />
            Remove
          </Button>
        </div>
      </div>
    )
  }
)
WishlistItem.displayName = "WishlistItem"

export { WishlistItem }
