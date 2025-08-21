import * as React from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

export interface Brand {
  id: string
  name: string
  logo: string
  href: string
}

interface BrandCardProps extends React.HTMLAttributes<HTMLDivElement> {
  brand: Brand
}

const BrandCard = React.forwardRef<HTMLDivElement, BrandCardProps>(
  ({ brand, className, ...props }, ref) => {
    return (
      <Card ref={ref} className={cn("overflow-hidden", className)} {...props}>
        <a href={brand.href} className="group block">
          <div className="relative" style={{ paddingBottom: '66.66%' }}>
            <img src={brand.logo} alt={brand.name} className="absolute inset-0 object-contain w-full h-full p-4 group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="p-4 bg-muted/50">
            <h3 className="text-lg font-semibold text-center">{brand.name}</h3>
          </div>
        </a>
      </Card>
    )
  }
)
BrandCard.displayName = "BrandCard"

export { BrandCard }
