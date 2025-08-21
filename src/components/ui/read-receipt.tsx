import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Check, CheckCheck } from "lucide-react"

import { cn } from "@/lib/utils"

const readReceiptVariants = cva(
  "inline-flex items-center",
  {
    variants: {
      variant: {
        sent: "text-muted-foreground",
        delivered: "text-muted-foreground",
        read: "text-primary",
      },
    },
    defaultVariants: {
      variant: "sent",
    },
  }
)

export interface ReadReceiptProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof readReceiptVariants> {}

const ReadReceipt = React.forwardRef<
  HTMLDivElement,
  ReadReceiptProps
>(({ className, variant, ...props }, ref) => {
  const Icon = variant === 'sent' ? Check : CheckCheck;
  return (
    <div
      ref={ref}
      className={cn(readReceiptVariants({ variant }), className)}
      {...props}
    >
      <Icon className="h-4 w-4" />
    </div>
  )
})
ReadReceipt.displayName = "ReadReceipt"

export { ReadReceipt, readReceiptVariants }
