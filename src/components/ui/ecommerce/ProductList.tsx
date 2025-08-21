import * as React from "react"
import { cn } from "@/lib/utils"
import { ProductListItem } from "./ProductListItem"
import { Product } from "./ProductCard"

interface ProductListProps extends React.HTMLAttributes<HTMLDivElement> {
  products: (Product & { rating?: number })[]
}

const ProductList = React.forwardRef<HTMLDivElement, ProductListProps>(
  ({ products, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-6", className)} {...props}>
        {products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
    )
  }
)
ProductList.displayName = "ProductList"

export { ProductList }
