import * as React from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

interface ProductSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (query: string) => void
}

const ProductSearch = React.forwardRef<HTMLInputElement, ProductSearchProps>(
  ({ className, onSearch, ...props }, ref) => {
    const [query, setQuery] = React.useState("")

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && onSearch) {
        onSearch(query)
      }
    }

    return (
      <div className={cn("relative w-full", className)}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          ref={ref}
          type="search"
          placeholder="Search products..."
          className="pl-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          {...props}
        />
      </div>
    )
  }
)
ProductSearch.displayName = "ProductSearch"

export { ProductSearch }
