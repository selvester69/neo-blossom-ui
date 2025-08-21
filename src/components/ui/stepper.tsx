import * as React from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
    currentStep: number;
    steps: {
        title: string;
        description?: string;
    }[];
}

const Stepper = React.forwardRef<
  HTMLDivElement,
  StepperProps
>(({ className, currentStep, steps, ...props }, ref) => {

  return (
    <div ref={ref} className={cn("flex items-center justify-between w-full", className)} {...props}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
            <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center w-32">
                    <div
                        className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all",
                        isCompleted ? "border-primary bg-primary text-primary-foreground" : "",
                        isActive ? "border-primary scale-110" : "border-muted-foreground"
                        )}
                    >
                        {isCompleted ? <Check className="h-6 w-6" /> : <span className={cn("font-bold", isActive && "text-primary")}>{index + 1}</span>}
                    </div>
                    <div className="mt-2">
                        <p className={cn("font-medium", isActive && "text-primary")}>{step.title}</p>
                        {step.description && <p className="text-sm text-muted-foreground">{step.description}</p>}
                    </div>
                </div>
                {index < steps.length - 1 && (
                    <div className={cn("flex-1 h-1 transition-all", isCompleted ? "bg-primary" : "bg-muted-foreground/50")} />
                )}
          </React.Fragment>
        )
      })}
    </div>
  )
})
Stepper.displayName = "Stepper"

export { Stepper }
