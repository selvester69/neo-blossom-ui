import * as React from "react"
import { cn } from "@/lib/utils"
import { Spinner } from "./spinner"

interface LoadingOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading: boolean;
}

const LoadingOverlay = React.forwardRef<
  HTMLDivElement,
  LoadingOverlayProps
>(({ className, isLoading, children, ...props }, ref) => {

  return (
    <div ref={ref} className={cn("relative", className)} {...props}>
      {children}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <Spinner size="lg" />
        </div>
      )}
    </div>
  )
})
LoadingOverlay.displayName = "LoadingOverlay"

export { LoadingOverlay }
