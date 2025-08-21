import * as React from "react"
import { Stepper } from "./stepper"
import { cn } from "@/lib/utils"

const CHECKOUT_STEPS = [
    { title: "Shipping" },
    { title: "Payment" },
    { title: "Confirmation" },
]

interface CheckoutStepsProps extends React.HTMLAttributes<HTMLDivElement> {
    currentStep: number;
}

const CheckoutSteps = React.forwardRef<
  HTMLDivElement,
  CheckoutStepsProps
>(({ className, currentStep, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("w-full", className)} {...props}>
        <Stepper steps={CHECKOUT_STEPS} currentStep={currentStep} />
    </div>
  )
})
CheckoutSteps.displayName = "CheckoutSteps"

export { CheckoutSteps }
