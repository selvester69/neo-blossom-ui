import * as React from "react"
import { cn } from "@/lib/utils"
import { CategoryCard, Category } from "./CategoryCard"

interface CategoryGridProps extends React.HTMLAttributes<HTMLDivElement> {
  categories: Category[]
}

const CategoryGrid = React.forwardRef<HTMLDivElement, CategoryGridProps>(
  ({ categories, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", className)} {...props}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    )
  }
)
CategoryGrid.displayName = "CategoryGrid"

export { CategoryGrid }
