import * as React from "react"
import { cn } from "@/lib/utils"

interface ProductTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const ProductTitle = React.forwardRef<HTMLHeadingElement, ProductTitleProps>(
  ({ className, as: Component = 'h3', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("text-xl font-semibold leading-none tracking-tight", className)}
        {...props}
      />
    )
  }
)
ProductTitle.displayName = "ProductTitle"

export { ProductTitle }
