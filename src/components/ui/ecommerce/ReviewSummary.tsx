import * as React from "react"
import { cn } from "@/lib/utils"
import { StarRating } from "./StarRating"

interface ReviewSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  averageRating: number
  reviewCount: number
}

const ReviewSummary = React.forwardRef<HTMLDivElement, ReviewSummaryProps>(
  ({ averageRating, reviewCount, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center gap-2", className)} {...props}>
        <StarRating rating={averageRating} />
        <span className="text-sm text-muted-foreground">
          ({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})
        </span>
      </div>
    )
  }
)
ReviewSummary.displayName = "ReviewSummary"

export { ReviewSummary }
