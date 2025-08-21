import * as React from "react"
import { cn } from "@/lib/utils"

interface ProductPriceProps extends React.HTMLAttributes<HTMLSpanElement> {
  price: number
  currency?: string
}

const ProductPrice = React.forwardRef<HTMLSpanElement, ProductPriceProps>(
  ({ price, currency = "$", className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn("text-lg font-bold", className)}
        {...props}
      >
        {currency}{price.toFixed(2)}
      </span>
    )
  }
)
ProductPrice.displayName = "ProductPrice"

export { ProductPrice }
