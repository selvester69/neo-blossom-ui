import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ProductCard, Product } from "./ProductCard"

interface ProductCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  products: Product[]
}

const ProductCarousel = React.forwardRef<HTMLDivElement, ProductCarouselProps>(
  ({ title, products, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="p-1">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    )
  }
)
ProductCarousel.displayName = "ProductCarousel"

export { ProductCarousel }
