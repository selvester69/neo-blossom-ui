import * as React from "react"
import { cn } from "@/lib/utils"
import { ProductImage } from "./ProductImage"

interface ProductGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: {
    src: string
    alt: string
  }[]
}

const ProductGallery = React.forwardRef<HTMLDivElement, ProductGalleryProps>(
  ({ images, className, ...props }, ref) => {
    const [mainImage, setMainImage] = React.useState(images[0])

    if (!images || images.length === 0) {
      return null
    }

    return (
      <div ref={ref} className={cn("grid gap-4", className)} {...props}>
        <div className="border rounded-lg overflow-hidden">
          <ProductImage
            src={mainImage.src}
            alt={mainImage.alt}
            ratio={1}
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-5 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              className={cn(
                "border rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                mainImage.src === image.src && "ring-2 ring-primary"
              )}
              onClick={() => setMainImage(image)}
            >
              <ProductImage
                src={image.src}
                alt={image.alt}
                ratio={1}
                className="w-full"
              />
            </button>
          ))}
        </div>
      </div>
    )
  }
)
ProductGallery.displayName = "ProductGallery"

export { ProductGallery }
