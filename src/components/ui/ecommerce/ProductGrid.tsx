import * as React from "react"
import { cn } from "@/lib/utils"
import { ProductCard, Product } from "./ProductCard"

interface ProductGridProps extends React.HTMLAttributes<HTMLDivElement> {
  products: Product[]
}

const ProductGrid = React.forwardRef<HTMLDivElement, ProductGridProps>(
  ({ products, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", className)} {...props}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )
  }
)
ProductGrid.displayName = "ProductGrid"

export { ProductGrid }
