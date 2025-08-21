import * as React from "react"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { cn } from "@/lib/utils"

interface ProductImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  ratio?: number
}

const ProductImage = React.forwardRef<HTMLImageElement, ProductImageProps>(
  ({ src, alt, ratio = 1, className, ...props }, ref) => {
    return (
      <div className={cn("w-full", className)}>
        <AspectRatio ratio={ratio}>
          <img ref={ref} src={src} alt={alt} className="object-cover w-full h-full rounded-md" {...props} />
        </AspectRatio>
      </div>
    )
  }
)
ProductImage.displayName = "ProductImage"

export { ProductImage }
