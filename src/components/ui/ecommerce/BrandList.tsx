import * as React from "react"
import { cn } from "@/lib/utils"
import { Brand } from "./BrandCard" // Re-using the Brand interface

interface BrandListProps extends React.HTMLAttributes<HTMLUListElement> {
  brands: Pick<Brand, 'id' | 'name' | 'href'>[]
}

const BrandList = React.forwardRef<HTMLUListElement, BrandListProps>(
  ({ brands, className, ...props }, ref) => {
    return (
      <ul ref={ref} className={cn("space-y-2", className)} {...props}>
        {brands.map((brand) => (
          <li key={brand.id}>
            <a
              href={brand.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {brand.name}
            </a>
          </li>
        ))}
      </ul>
    )
  }
)
BrandList.displayName = "BrandList"

export { BrandList }
