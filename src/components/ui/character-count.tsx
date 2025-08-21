import * as React from "react"
import { cn } from "@/lib/utils"

interface CharacterCountProps extends React.HTMLAttributes<HTMLDivElement> {
    count: number;
    maxLength: number;
}

const CharacterCount = React.forwardRef<
  HTMLDivElement,
  CharacterCountProps
>(({ className, count, maxLength, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {count}/{maxLength}
    </div>
  )
})
CharacterCount.displayName = "CharacterCount"

export { CharacterCount }
