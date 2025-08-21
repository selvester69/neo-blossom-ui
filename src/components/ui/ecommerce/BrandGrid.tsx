import * as React from "react"
import { cn } from "@/lib/utils"
import { BrandCard, Brand } from "./BrandCard"

interface BrandGridProps extends React.HTMLAttributes<HTMLDivElement> {
  brands: Brand[]
}

const BrandGrid = React.forwardRef<HTMLDivElement, BrandGridProps>(
  ({ brands, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", className)} {...props}>
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    )
  }
)
BrandGrid.displayName = "BrandGrid"

export { BrandGrid }
