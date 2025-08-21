import * as React from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

export interface Category {
  id: string
  name: string
  image: string
  href: string
}

interface CategoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  category: Category
}

const CategoryCard = React.forwardRef<HTMLDivElement, CategoryCardProps>(
  ({ category, className, ...props }, ref) => {
    return (
      <Card ref={ref} className={cn("overflow-hidden", className)} {...props}>
        <a href={category.href} className="group block">
          <div className="relative" style={{ paddingBottom: '66.66%' }}>
            <img src={category.image} alt={category.name} className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-center">{category.name}</h3>
          </div>
        </a>
      </Card>
    )
  }
)
CategoryCard.displayName = "CategoryCard"

export { CategoryCard }
