import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number
  totalStars?: number
  size?: number
  onRatingChange?: (rating: number) => void
}

const StarRating = React.forwardRef<HTMLDivElement, StarRatingProps>(
  ({ rating, totalStars = 5, size = 20, onRatingChange, className, ...props }, ref) => {
    const [hoverRating, setHoverRating] = React.useState<number | null>(null)
    const [currentRating, setCurrentRating] = React.useState(rating)

    React.useEffect(() => {
        setCurrentRating(rating);
    }, [rating]);

    const handleMouseEnter = (index: number) => {
      if (onRatingChange) {
        setHoverRating(index + 1)
      }
    }

    const handleMouseLeave = () => {
      if (onRatingChange) {
        setHoverRating(null)
      }
    }

    const handleClick = (index: number) => {
      const newRating = index + 1
      if (onRatingChange) {
        onRatingChange(newRating)
        setCurrentRating(newRating)
      }
    }

    const displayRating = hoverRating ?? (onRatingChange ? currentRating : rating);

    return (
      <div
        ref={ref}
        className={cn("flex items-center", onRatingChange ? "cursor-pointer" : "cursor-default", className)}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {[...Array(totalStars)].map((_, i) => {
          const starValue = i + 1
          const isFull = displayRating >= starValue;
          const isHalf = displayRating > i && displayRating < starValue;

          return (
            <div
              key={i}
              className="relative"
              onMouseEnter={() => handleMouseEnter(i)}
              onClick={() => handleClick(i)}
            >
              <Star
                size={size}
                className={cn("text-gray-300", (isFull || isHalf) && "text-yellow-400")}
                fill="none"
              />
              {(isFull || isHalf) && (
                <div
                  className="absolute top-0 left-0 h-full overflow-hidden"
                  style={{ width: isFull ? '100%' : `${(displayRating % 1) * 100}%` }}
                >
                  <Star
                    size={size}
                    className="text-yellow-400"
                    fill="currentColor"
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }
)
StarRating.displayName = "StarRating"

export { StarRating }
