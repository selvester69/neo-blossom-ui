import * as React from "react"
import { cn } from "@/lib/utils"
import { Category } from "./CategoryCard" // Re-using the Category interface

interface CategoryListProps extends React.HTMLAttributes<HTMLUListElement> {
  categories: Pick<Category, 'id' | 'name' | 'href'>[]
}

const CategoryList = React.forwardRef<HTMLUListElement, CategoryListProps>(
  ({ categories, className, ...props }, ref) => {
    return (
      <ul ref={ref} className={cn("space-y-2", className)} {...props}>
        {categories.map((category) => (
          <li key={category.id}>
            <a
              href={category.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    )
  }
)
CategoryList.displayName = "CategoryList"

export { CategoryList }
