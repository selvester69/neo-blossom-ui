import * as React from "react"
import { cn } from "@/lib/utils"

interface CircularProgressProps extends React.SVGAttributes<SVGSVGElement> {
  value: number;
  size?: number;
  strokeWidth?: number;
}

const CircularProgress = React.forwardRef<
  SVGSVGElement,
  CircularProgressProps
>(({ className, value, size = 100, strokeWidth = 10, ...props }, ref) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={cn("transform -rotate-90", className)}
      {...props}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        className="text-muted"
        fill="transparent"
        stroke="currentColor"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        className="text-primary"
        fill="transparent"
        stroke="currentColor"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 0.35s' }}
      />
    </svg>
  )
})
CircularProgress.displayName = "CircularProgress"

export { CircularProgress }
