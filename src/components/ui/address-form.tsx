import * as React from "react"
import { cn } from "@/lib/utils"
import { FormGroup } from "./form-group"
import { Label } from "./label"
import { Input } from "./input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"

type AddressFormProps = React.HTMLAttributes<HTMLDivElement>;

const AddressForm = React.forwardRef<
  HTMLDivElement,
  AddressFormProps
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("space-y-4", className)} {...props}>
        <FormGroup>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" placeholder="John Doe" />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="address1">Address Line 1</Label>
            <Input id="address1" placeholder="123 Main St" />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="address2">Address Line 2 (Optional)</Label>
            <Input id="address2" placeholder="Apt, suite, etc." />
        </FormGroup>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormGroup>
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="New York" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="NY" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="zip">ZIP Code</Label>
                <Input id="zip" placeholder="10001" />
            </FormGroup>
        </div>
        <FormGroup>
            <Label htmlFor="country">Country</Label>
            <Select>
                <SelectTrigger id="country">
                    <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="mx">Mexico</SelectItem>
                </SelectContent>
            </Select>
        </FormGroup>
    </div>
  )
})
AddressForm.displayName = "AddressForm"

export { AddressForm }
