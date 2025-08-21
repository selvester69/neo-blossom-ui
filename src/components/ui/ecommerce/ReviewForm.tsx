import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { StarRating } from "./StarRating"

const reviewFormSchema = z.object({
  rating: z.number().min(1, { message: "Please select a rating." }),
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  body: z.string().min(10, { message: "Review must be at least 10 characters." }),
})

type ReviewFormValues = z.infer<typeof reviewFormSchema>

const defaultValues: Partial<ReviewFormValues> = {
  rating: 0,
  title: "",
  body: "",
}

interface ReviewFormProps extends React.HTMLAttributes<HTMLFormElement> {
  onSubmit: (data: ReviewFormValues) => void
}

const ReviewForm = React.forwardRef<HTMLFormElement, ReviewFormProps>(
  ({ onSubmit, className, ...props }, ref) => {
    const form = useForm<ReviewFormValues>({
      resolver: zodResolver(reviewFormSchema),
      defaultValues,
    })

    return (
      <Form {...form}>
        <form ref={ref} onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-8", className)} {...props}>
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Rating</FormLabel>
                <FormControl>
                  <StarRating rating={field.value} onRatingChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Review Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Best purchase ever!" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Review</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us more about your experience..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit Review</Button>
        </form>
      </Form>
    )
  }
)
ReviewForm.displayName = "ReviewForm"

export { ReviewForm }
