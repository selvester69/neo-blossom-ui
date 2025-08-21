import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card"
import { Separator } from "./separator"
import { Button } from "./button"
import { Input } from "./input"

// Main container
const OrderSummary = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card ref={ref} className={cn("w-full", className)} {...props} />
))
OrderSummary.displayName = "OrderSummary"

// Items list
const OrderItems = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-4", className)} {...props} />
))
OrderItems.displayName = "OrderItems"

// Individual item
interface OrderItemProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    price: string;
    quantity: number;
    imageSrc: string;
}
const OrderItem = ({ name, price, quantity, imageSrc, className }: OrderItemProps) => (
    <div className={cn("flex items-center gap-4", className)}>
        <img src={imageSrc} alt={name} className="w-16 h-16 object-cover rounded-md" />
        <div className="flex-1">
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">Qty: {quantity}</p>
        </div>
        <p className="font-medium">{price}</p>
    </div>
)

// Price line item (for total, tax, etc.)
interface PriceLineProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    value: string;
    isTotal?: boolean;
}
const PriceLine = ({ label, value, isTotal, className }: PriceLineProps) => (
    <div className={cn("flex justify-between", isTotal ? "font-bold text-lg" : "text-sm", className)}>
        <p>{label}</p>
        <p>{value}</p>
    </div>
)

const OrderTotal = (props: Omit<PriceLineProps, 'label' | 'isTotal'>) => <PriceLine label="Total" isTotal {...props} />
const OrderDiscount = (props: Omit<PriceLineProps, 'label'>) => <PriceLine label="Discount" {...props} className="text-success-foreground" />
const OrderTax = (props: Omit<PriceLineProps, 'label'>) => <PriceLine label="Tax" {...props} />
const OrderShipping = (props: Omit<PriceLineProps, 'label'>) => <PriceLine label="Shipping" {...props} />


// Promo code input
const PromoCode = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex w-full items-center space-x-2", className)} {...props}>
        <Input placeholder="Promo Code" />
        <Button type="submit">Apply</Button>
    </div>
))
PromoCode.displayName = "PromoCode"


export {
    OrderSummary,
    OrderItems,
    OrderItem,
    OrderTotal,
    OrderDiscount,
    OrderTax,
    OrderShipping,
    PromoCode
}
