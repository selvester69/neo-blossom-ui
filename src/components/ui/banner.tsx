import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "./button"

const bannerVariants = cva(
  "relative w-full p-4 text-center",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        warning: "bg-warning text-warning-foreground",
        info: "bg-primary text-primary-foreground",
        announcement: "bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
    onClose?: () => void;
}

const Banner = React.forwardRef<
  HTMLDivElement,
  BannerProps
>(({ className, variant, onClose, children, ...props }, ref) => {
  const [isClosed, setIsClosed] = React.useState(false);

  const handleClose = () => {
    setIsClosed(true);
    if (onClose) {
      onClose();
    }
  };

  if (isClosed) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(bannerVariants({ variant }), className)}
      {...props}
    >
      {children}
      {onClose && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
})
Banner.displayName = "Banner"

export { Banner, bannerVariants }
