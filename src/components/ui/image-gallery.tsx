import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

interface ImageGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
}

const ImageGallery = React.forwardRef<
  HTMLDivElement,
  ImageGalleryProps
>(({ className, images, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const openLightbox = (index: number) => {
    api?.scrollTo(index, true);
    setOpen(true);
  };

  return (
    <div ref={ref} className={cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", className)} {...props}>
      {images.map((src, index) => (
        <div key={index} className="aspect-square w-full" onClick={() => openLightbox(index)}>
            <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover rounded-md cursor-pointer" />
        </div>
      ))}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    {images.map((src, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1 flex items-center justify-center">
                            <img src={src} alt={`Gallery image ${index + 1}`} className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-lg" />
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="-left-12" />
                <CarouselNext className="-right-12" />
            </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  )
})
ImageGallery.displayName = "ImageGallery"

export { ImageGallery }
