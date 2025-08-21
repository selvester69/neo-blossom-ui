import * as React from "react"
import { cn } from "@/lib/utils"
import { StarRating } from "./StarRating"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export interface Review {
  id: string
  author: string
  avatarUrl?: string
  rating: number
  date: string
  title: string
  body: string
}

interface ProductReviewProps extends React.HTMLAttributes<HTMLDivElement> {
  review: Review
}

const ProductReview = React.forwardRef<HTMLDivElement, ProductReviewProps>(
  ({ review, className, ...props }, ref) => {
    const authorInitials = review.author
      .split(' ')
      .map(n => n[0])
      .join('')

    return (
      <div ref={ref} className={cn("flex space-x-4 py-4 border-b", className)} {...props}>
        <Avatar>
          <AvatarImage src={review.avatarUrl} alt={review.author} />
          <AvatarFallback>{authorInitials}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold">{review.author}</h4>
            <span className="text-xs text-muted-foreground">{review.date}</span>
          </div>
          <div className="flex items-center">
            <StarRating rating={review.rating} size={16} />
          </div>
          <h5 className="font-semibold pt-2">{review.title}</h5>
          <p className="text-sm text-muted-foreground">{review.body}</p>
        </div>
      </div>
    )
  }
)
ProductReview.displayName = "ProductReview"

export { ProductReview }
