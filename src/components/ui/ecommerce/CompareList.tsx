import * as React from "react"
import { Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface CompareItemData {
  id: string
  name: string
  image?: string
}

interface CompareListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: CompareItemData[]
  onRemove: (itemId: string) => void
}

const CompareList = React.forwardRef<HTMLUListElement, CompareListProps>(
  ({ items, onRemove, className, ...props }, ref) => {
    return (
      <ul ref={ref} className={cn("space-y-2", className)} {...props}>
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between p-2 border rounded-md">
            <div className="flex items-center gap-2">
                {item.image && <img src={item.image} alt={item.name} className="w-8 h-8 rounded-sm" />}
                <span className="text-sm font-medium">{item.name}</span>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => onRemove(item.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </li>
        ))}
      </ul>
    )
  }
)
CompareList.displayName = "CompareList"

export { CompareList }
