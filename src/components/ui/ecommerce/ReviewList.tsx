import * as React from "react"
import { cn } from "@/lib/utils"
import { ProductReview, Review } from "./ProductReview"

interface ReviewListProps extends React.HTMLAttributes<HTMLDivElement> {
  reviews: Review[]
}

const ReviewList = React.forwardRef<HTMLDivElement, ReviewListProps>(
  ({ reviews, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        {reviews.map((review) => (
          <ProductReview key={review.id} review={review} />
        ))}
      </div>
    )
  }
)
ReviewList.displayName = "ReviewList"

export { ReviewList }
