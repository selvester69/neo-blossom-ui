import * as React from "react"
import { Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface PhoneVerificationProps extends React.HTMLAttributes<HTMLDivElement> {
  phoneNumber: string
  onResend?: () => void
}

const PhoneVerification = React.forwardRef<HTMLDivElement, PhoneVerificationProps>(
  ({ phoneNumber, onResend, className, ...props }, ref) => {
    return (
      <Alert ref={ref} className={cn("max-w-sm", className)} {...props}>
        <Smartphone className="h-4 w-4" />
        <AlertTitle>Verify your phone number</AlertTitle>
        <AlertDescription>
          <p>We've sent a verification code to <strong>{phoneNumber}</strong>. Please enter it below.</p>
          {onResend && (
            <div className="mt-4">
                <p className="text-xs text-muted-foreground">Didn't receive the code?</p>
                <Button variant="link" className="p-0 h-auto" onClick={onResend}>
                    Resend verification code
                </Button>
            </div>
          )}
        </AlertDescription>
      </Alert>
    )
  }
)
PhoneVerification.displayName = "PhoneVerification"

export { PhoneVerification }
