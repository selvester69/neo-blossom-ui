import * as React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

export interface ProductCardProps {
  product: Product
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ product, ...props }, ref) => {
    return (
      <Card ref={ref} {...props}>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <Badge>{product.category}</Badge>
        </CardHeader>
        <CardContent>
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
          <p>{product.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <Button>Add to Cart</Button>
        </CardFooter>
      </Card>
    )
  }
)
ProductCard.displayName = "ProductCard"

export { ProductCard }
