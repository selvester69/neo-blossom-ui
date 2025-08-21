import * as React from "react"
import { cn } from "@/lib/utils"
import { Product } from "./ProductCard" // Re-using the Product interface
import { ProductImage } from "./ProductImage"
import { Button } from "@/components/ui/button"
import { StarRating } from "./StarRating" // Assuming products might have ratings

interface ProductListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product & { rating?: number }
}

const ProductListItem = React.forwardRef<HTMLDivElement, ProductListItemProps>(
  ({ product, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex gap-6 p-4 border rounded-lg", className)} {...props}>
        <ProductImage src={product.image} alt={product.name} ratio={1} className="w-48 h-48 rounded-md flex-shrink-0" />
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          {product.rating !== undefined && <StarRating rating={product.rating} className="my-2" />}
          <p className="text-sm text-muted-foreground flex-grow">{product.description}</p>
          <div className="flex items-center justify-between mt-4">
            <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
    )
  }
)
ProductListItem.displayName = "ProductListItem"

export { ProductListItem }
