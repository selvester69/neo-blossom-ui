import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface QuantitySelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  quantity: number
  onQuantityChange: (quantity: number) => void
  min?: number
  max?: number
}

const QuantitySelector = React.forwardRef<HTMLDivElement, QuantitySelectorProps>(
  ({ quantity, onQuantityChange, min = 1, max = 99, className, ...props }, ref) => {
    const handleDecrement = () => {
      onQuantityChange(Math.max(min, quantity - 1))
    }

    const handleIncrement = () => {
      onQuantityChange(Math.min(max, quantity + 1))
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value, 10)
      if (!isNaN(value)) {
        onQuantityChange(Math.max(min, Math.min(max, value)))
      }
    }

    return (
      <div ref={ref} className={cn("flex items-center gap-2", className)} {...props}>
        <Button variant="outline" size="icon" className="h-8 w-8" onClick={handleDecrement} disabled={quantity <= min}>
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          className="h-8 w-12 text-center"
          value={quantity}
          onChange={handleChange}
          min={min}
          max={max}
        />
        <Button variant="outline" size="icon" className="h-8 w-8" onClick={handleIncrement} disabled={quantity >= max}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    )
  }
)
QuantitySelector.displayName = "QuantitySelector"

export { QuantitySelector }
