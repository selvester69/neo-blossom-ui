import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

const arrowVariants = cva(
  "inline-flex items-center justify-center",
  {
    variants: {
        direction: {
            up: "",
            down: "",
            left: "",
            right: "",
        },
        size: {
            sm: "h-4 w-4",
            md: "h-6 w-6",
            lg: "h-8 w-8",
        }
    },
    defaultVariants: {
      direction: "right",
      size: "md",
    },
  }
)

export interface ArrowProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof arrowVariants> {}

const Arrow = React.forwardRef<
  HTMLDivElement,
  ArrowProps
>(({ className, direction, size, ...props }, ref) => {
    const Icon = {
        up: ArrowUp,
        down: ArrowDown,
        left: ArrowLeft,
        right: ArrowRight,
    }[direction || 'right'];

  return (
    <div
      ref={ref}
      className={cn(arrowVariants({ direction, size }), className)}
      {...props}
    >
        <Icon className="h-full w-full" />
    </div>
  )
})
Arrow.displayName = "Arrow"

export { Arrow, arrowVariants }
