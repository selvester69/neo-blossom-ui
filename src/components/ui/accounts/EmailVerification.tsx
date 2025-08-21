import * as React from "react"
import { Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface EmailVerificationProps extends React.HTMLAttributes<HTMLDivElement> {
  email: string
  onResend?: () => void
}

const EmailVerification = React.forwardRef<HTMLDivElement, EmailVerificationProps>(
  ({ email, onResend, className, ...props }, ref) => {
    return (
      <Alert ref={ref} className={cn("max-w-sm", className)} {...props}>
        <Mail className="h-4 w-4" />
        <AlertTitle>Verify your email</AlertTitle>
        <AlertDescription>
          <p>We've sent an email to <strong>{email}</strong>. Please click the link in the email to verify your account.</p>
          {onResend && (
            <div className="mt-4">
                <p className="text-xs text-muted-foreground">Didn't receive the email?</p>
                <Button variant="link" className="p-0 h-auto" onClick={onResend}>
                    Resend verification email
                </Button>
            </div>
          )}
        </AlertDescription>
      </Alert>
    )
  }
)
EmailVerification.displayName = "EmailVerification"

export { EmailVerification }
