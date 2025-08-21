import * as React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { cn } from "@/lib/utils"

interface MasonryGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: { src: string, alt: string }[];
  columnsCountBreakPoints?: { [key: number]: number };
  gutter?: string;
}

const MasonryGallery = React.forwardRef<
  HTMLDivElement,
  MasonryGalleryProps
>(({ className, images, columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 }, gutter = "1rem", ...props }, ref) => {
  return (
    <div ref={ref} className={cn(className)} {...props}>
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
            <Masonry gutter={gutter}>
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image.src}
                        alt={image.alt}
                        style={{width: "100%", display: "block"}}
                        className="rounded-md"
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    </div>
  )
})
MasonryGallery.displayName = "MasonryGallery"

export { MasonryGallery }
