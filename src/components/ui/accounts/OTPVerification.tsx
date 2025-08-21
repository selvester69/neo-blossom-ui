import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface OTPVerificationProps extends React.HTMLAttributes<HTMLDivElement> {
  onComplete: (otp: string) => void
  numberOfDigits?: number
}

const OTPVerification = React.forwardRef<HTMLDivElement, OTPVerificationProps>(
  ({ onComplete, numberOfDigits = 6, className, ...props }, ref) => {
    const [otp, setOtp] = React.useState("")

    const handleSubmit = () => {
        if (otp.length === numberOfDigits) {
            onComplete(otp)
        }
    }

    React.useEffect(() => {
        if (otp.length === numberOfDigits) {
            onComplete(otp)
        }
    }, [otp, numberOfDigits, onComplete])

    return (
      <Card ref={ref} className={cn("w-full max-w-sm", className)} {...props}>
        <CardHeader>
          <CardTitle className="text-2xl">Two-Factor Authentication</CardTitle>
          <CardDescription>
            Enter the code from your authenticator app.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <InputOTP
              maxLength={numberOfDigits}
              value={otp}
              onChange={(value) => setOtp(value)}
            >
              <InputOTPGroup>
                {Array.from({ length: numberOfDigits }).map((_, index) => (
                  <InputOTPSlot key={index} index={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
            <p className="text-sm text-muted-foreground">Enter your one-time password.</p>
          </div>
        </CardContent>
      </Card>
    )
  }
)
OTPVerification.displayName = "OTPVerification"

export { OTPVerification }
