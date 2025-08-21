import * as React from "react"
import { Star } from "lucide-react"

import { cn } from "@/lib/utils"

interface StarRatingProps extends React.HTMLAttributes<HTMLDivElement> {
  totalStars?: number;
  rating: number;
  onRatingChange: (rating: number) => void;
}

const StarRating = React.forwardRef<
  HTMLDivElement,
  StarRatingProps
>(({ className, totalStars = 5, rating, onRatingChange, ...props }, ref) => {
  const [hoverRating, setHoverRating] = React.useState(0);

  return (
    <div ref={ref} className={cn("flex items-center gap-1", className)} {...props}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={starValue}
            className={cn(
              "h-6 w-6 cursor-pointer",
              starValue <= (hoverRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
            )}
            onClick={() => onRatingChange(starValue)}
            onMouseEnter={() => setHoverRating(starValue)}
            onMouseLeave={() => setHoverRating(0)}
          />
        );
      })}
    </div>
  )
})
StarRating.displayName = "StarRating"

export { StarRating }
