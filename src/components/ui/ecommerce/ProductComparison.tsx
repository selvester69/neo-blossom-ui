import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"
import { ProductImage } from "./ProductImage"
import { StarRating } from "./StarRating"
import { Button } from "./button"
import { Trash2 } from "lucide-react"

export interface ProductToCompare {
  id: string
  name: string
  image: string
  price: number
  rating: number
  features: { [key: string]: string }
}

interface ProductComparisonProps extends React.HTMLAttributes<HTMLDivElement> {
  products: ProductToCompare[]
  features: string[]
  onRemove: (productId: string) => void
}

const ProductComparison = React.forwardRef<HTMLDivElement, ProductComparisonProps>(
  ({ products, features, onRemove, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("w-full overflow-auto", className)} {...props}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Feature</TableHead>
              {products.map((product) => (
                <TableHead key={product.id} className="text-center">
                    <div className="flex flex-col items-center gap-2">
                        <ProductImage src={product.image} alt={product.name} ratio={1} className="w-24 h-24 rounded-md" />
                        <h4 className="font-semibold">{product.name}</h4>
                        <Button variant="ghost" size="sm" onClick={() => onRemove(product.id)}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Remove
                        </Button>
                    </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
                <TableCell className="font-medium">Price</TableCell>
                {products.map(product => (
                    <TableCell key={product.id} className="text-center font-semibold">${product.price.toFixed(2)}</TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell className="font-medium">Rating</TableCell>
                {products.map(product => (
                    <TableCell key={product.id} className="flex justify-center">
                        <StarRating rating={product.rating} />
                    </TableCell>
                ))}
            </TableRow>
            {features.map((feature) => (
              <TableRow key={feature}>
                <TableCell className="font-medium">{feature}</TableCell>
                {products.map((product) => (
                  <TableCell key={product.id} className="text-center">
                    {product.features[feature] || 'N/A'}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
)
ProductComparison.displayName = "ProductComparison"

export { ProductComparison }
