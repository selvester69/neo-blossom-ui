import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface SortOption {
  value: string
  label: string
}

interface ProductSortProps {
  options: SortOption[]
  onSortChange: (value: string) => void
  defaultValue?: string
}

export function ProductSort({ options, onSortChange, defaultValue }: ProductSortProps) {
  return (
    <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Sort by:</span>
        <Select onValueChange={onSortChange} defaultValue={defaultValue}>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
            {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                {option.label}
                </SelectItem>
            ))}
            </SelectGroup>
        </SelectContent>
        </Select>
    </div>
  )
}
